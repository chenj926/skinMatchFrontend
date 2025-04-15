import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import SignupForm from '../components/auth/SignupForm';

export default function Signup() {
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
        <title>Sign Up - skinMatch</title>
        <meta name="description" content="Create a skinMatch account to get personalized skincare recommendations based on your unique needs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="bg-secondary-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <SignupForm />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}