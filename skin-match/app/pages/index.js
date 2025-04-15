import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import HowItWorks from '../components/home/HowItWorks';

export default function Home() {
  return (
    <>
      <Head>
        <title>skinMatch - Find Your Perfect Skincare Routine</title>
        <meta name="description" content="Personalized skincare product recommendations based on your unique skin type, concerns, and budget." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
        <Features />
        <HowItWorks />
      </Layout>
    </>
  );
}