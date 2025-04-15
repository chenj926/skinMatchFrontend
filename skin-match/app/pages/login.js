import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import LoginForm from '../components/auth/LoginForm';

export default function Login() {
  const router = useRouter();
  
  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('auth_token');
    if (token) {
      router.push('/');
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>Login - skinMatch</title>
        <meta name="description" content="Login to your skinMatch account to access your personalized skincare recommendations." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="bg-secondary-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <LoginForm />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}