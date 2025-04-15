import React from 'react';
import Link from 'next/link';
import Button from '../common/Button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-primary-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6">
            Find Your Perfect <span className="text-accent">Skincare</span> Routine
          </h1>
          
          <p className="text-lg md:text-xl text-secondary-700 mb-8 max-w-2xl mx-auto">
            Personalized product recommendations based on your unique skin type, concerns, and budget. Stop guessing, start glowing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz">
              <Button size="lg" variant="secondary">
                Take Skin Quiz
              </Button>
            </Link>
            
            <Link href="/products">
              <Button size="lg" variant="secondary">
                Browse Products
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 max-w-md">
              <p className="text-sm md:text-base text-secondary-600 italic">
                "skinMatch revolutionized my skincare routine. I've finally found products that work for my combination skin without breaking the bank."
              </p>
              <p className="mt-2 text-sm font-medium text-secondary-800">— Sarah, 28</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-32 h-32 bg-accent-light opacity-20 rounded-full -z-10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary-300 opacity-20 rounded-full -z-10 blur-3xl"></div>
    </div>
  );
};

export default Hero;