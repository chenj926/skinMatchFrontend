import React from 'react';
import Link from 'next/link';
import Button from '../common/Button';

const steps = [
  {
    number: '01',
    title: 'Take the Skin Quiz',
    description: 'Answer a few questions about your skin type, concerns, and budget preferences.',
    color: 'bg-blue-100 text-blue-800',
  },
  {
    number: '02',
    title: 'Get Personalized Recommendations',
    description: 'Our algorithm generates a customized skincare routine with product suggestions.',
    color: 'bg-green-100 text-green-800',
  },
  {
    number: '03',
    title: 'Browse & Save Products',
    description: 'Explore your recommended products, read reviews, and save your favorites.',
    color: 'bg-purple-100 text-purple-800',
  },
  {
    number: '04',
    title: 'Start Your Skincare Journey',
    description: 'Transform your skin with the right products matched to your unique needs.',
    color: 'bg-pink-100 text-pink-800',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-secondary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            How skinMatch Works
          </h2>
          <p className="text-lg text-secondary-600">
            Finding your perfect skincare routine has never been easier.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-secondary-200 -translate-x-1/2 z-0" aria-hidden="true"></div>
            
            {/* Steps */}
            {steps.map((step, index) => (
              <div key={index} className={`relative z-10 mb-12 ${index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'} md:w-5/12`}>
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${step.color} mb-4 font-bold`}>
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-secondary-600">
                    {step.description}
                  </p>
                </div>
                
                {/* Connector for desktop */}
                <div className="hidden md:block absolute top-6 w-8 h-1 bg-secondary-200" style={{ [index % 2 === 0 ? 'right' : 'left']: '100%' }}></div>
                <div className="hidden md:block absolute top-0 w-4 h-4 rounded-full bg-accent border-4 border-white" style={{ [index % 2 === 0 ? 'right' : 'left']: 'calc(100% + 32px)', marginTop: '24px' }}></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/quiz">
              <Button variant="primary" size="lg">
                Start Your Skin Quiz
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;