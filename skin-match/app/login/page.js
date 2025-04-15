'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../components/layout/Layout';
import LoginForm from '../components/auth/LoginForm';

export default function Login() {
  const router = useRouter();
  
  useEffect(() => {
    // Check if user is already logged in
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth_token');
      if (token) {
        router.push('/');
      }
    }
  }, [router]);

  return (
    <Layout>
      <div className="bg-secondary-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <LoginForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}