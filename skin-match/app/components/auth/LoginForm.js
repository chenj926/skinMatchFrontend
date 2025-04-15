'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Input from '../common/Input';
import Button from '../common/Button';
import { authAPI } from '../../utils/api';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await authAPI.login(formData);
      
      if (response === 'Login successful') {
        // Store userId in localStorage for future use
        localStorage.setItem('userId', formData.userId);
        
        // Redirect to home or dashboard
        router.push('/');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError(err.toString() || 'An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Login to skinMatch</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="User ID"
          id="userId"
          type="text"
          placeholder="Enter your user ID"
          required
          value={formData.userId}
          onChange={handleChange}
        />
        
        <Input
          label="Password"
          id="password"
          type="password"
          placeholder="Enter your password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-accent rounded border-secondary-300 focus:ring-accent"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-secondary-600">
              Remember me
            </label>
          </div>
          
          <div className="text-sm">
            <Link 
              href="/forgot-password" 
              className="text-accent hover:text-accent-dark"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
        
        <Button
          type="submit"
          variant="primary"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
        
        <div className="text-center mt-4">
          <p className="text-sm text-secondary-600">
            Don't have an account?{' '}
            <Link href="/signup" className="text-accent hover:text-accent-dark font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;