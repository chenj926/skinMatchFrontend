'use client';

import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import HowItWorks from './components/home/HowItWorks';
import { loadStoredAuth } from './utils/api';

export default function Home() {
  useEffect(() => {
    // Load auth token on app startup
    loadStoredAuth();
  }, []);

  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
    </Layout>
  );
}