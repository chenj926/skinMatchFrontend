import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Input from '../common/Input';
import Button from '../common/Button';
import { authAPI } from '../../utils/api';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const router = useRouter();

  const validateField = async (field, value) => {
    if (!value) return `${field} is required`;
    
    if (field === 'userId') {
      if (value.length < 5) return 'User ID must be at least 5 characters';
      
      try {
        const isUnique = await authAPI.checkUserId(value);
        if (!isUnique) return 'This User ID is already taken';
      } catch (error) {
        console.error('Error checking User ID:', error);
      }
    }
    
    if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return 'Please enter a valid email address';
      
      try {
        const isUnique = await authAPI.checkEmail(value);
        if (!isUnique) return 'This email is already registered';
      } catch (error) {
        console.error('Error checking email:', error);
      }
    }
    
    if (field === 'password') {
      if (value.length < 6) return 'Password must be at least 6 characters';
    }
    
    return '';
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    
    // Clear error when typing
    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: '',
      }));
    }
  };

  const handleBlur = async (e) => {
    const { id, value } = e.target;
    
    const error = await validateField(id, value);
    setErrors((prev) => ({
      ...prev,
      [id]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate all fields
    const validationErrors = {};
    for (const [field, value] of Object.entries(formData)) {
      const error = await validateField(field, value);
      if (error) validationErrors[field] = error;
    }
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }
    
    try {
      const response = await authAPI.signup(formData);
      
      if (response === 'createUser successful') {
        setFormSubmitted(true);
        
        // Redirect to login after a short delay
        setTimeout(() => {
          router.push('/login');
        }, 3000);
      } else {
        setErrors({ form: 'Failed to create user. Please try again.' });
      }
    } catch (err) {
      setErrors({ form: err.toString() || 'An error occurred during registration' });
    } finally {
      setIsLoading(false);
    }
  };

  if (formSubmitted) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md mx-auto text-center">
        <div className="mb-4 text-5xl text-green-500">✓</div>
        <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
        <p className="mb-6 text-secondary-600">
          Your account has been successfully created. You'll be redirected to the login page shortly.
        </p>
        <Link href="/login">
          <Button variant="primary">Go to Login</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
      
      {errors.form && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">
          {errors.form}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="User ID"
          id="userId"
          type="text"
          placeholder="Choose a user ID"
          required
          value={formData.userId}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.userId}
        />
        
        <Input
          label="Email"
          id="email"
          type="email"
          placeholder="Enter your email"
          required
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
        />
        
        <Input
          label="Password"
          id="password"
          type="password"
          placeholder="Create a password"
          required
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
        />
        
        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            required
            className="h-4 w-4 text-accent rounded border-secondary-300 focus:ring-accent"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-secondary-600">
            I agree to the{' '}
            <Link href="/terms" className="text-accent hover:text-accent-dark">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-accent hover:text-accent-dark">
              Privacy Policy
            </Link>
          </label>
        </div>
        
        <Button
          type="submit"
          variant="primary"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? 'Creating Account...' : 'Sign Up'}
        </Button>
        
        <div className="text-center mt-4">
          <p className="text-sm text-secondary-600">
            Already have an account?{' '}
            <Link href="/login" className="text-accent hover:text-accent-dark font-medium">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;