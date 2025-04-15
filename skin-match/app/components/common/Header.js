'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    // Check if user is logged in
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth_token');
      setIsLoggedIn(!!token);
    }
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    setIsLoggedIn(false);
    window.location.href = '/';
  };
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-accent">skin<span className="text-secondary-900">Match</span></span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`text-secondary-600 hover:text-accent ${pathname === '/' ? 'text-accent font-medium' : ''}`}>
              Home
            </Link>
            <Link href="/products" className={`text-secondary-600 hover:text-accent ${pathname === '/products' ? 'text-accent font-medium' : ''}`}>
              Products
            </Link>
            <Link href="/quiz" className={`text-secondary-600 hover:text-accent ${pathname === '/quiz' ? 'text-accent font-medium' : ''}`}>
              Skin Quiz
            </Link>
            <Link href="/about" className={`text-secondary-600 hover:text-accent ${pathname === '/about' ? 'text-accent font-medium' : ''}`}>
              About
            </Link>
          </nav>
          
          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link href="/profile">
                  <Button variant="secondary" size="sm">
                    My Profile
                  </Button>
                </Link>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="secondary" size="sm">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button variant="primary" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-secondary-400 hover:text-secondary-500 hover:bg-secondary-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-secondary-200">
            <div className="space-y-1">
              <Link href="/" className={`block px-3 py-2 rounded-md ${pathname === '/' ? 'bg-secondary-100 text-accent' : 'text-secondary-600 hover:bg-secondary-50 hover:text-accent'}`}>
                Home
              </Link>
              <Link href="/products" className={`block px-3 py-2 rounded-md ${pathname === '/products' ? 'bg-secondary-100 text-accent' : 'text-secondary-600 hover:bg-secondary-50 hover:text-accent'}`}>
                Products
              </Link>
              <Link href="/quiz" className={`block px-3 py-2 rounded-md ${pathname === '/quiz' ? 'bg-secondary-100 text-accent' : 'text-secondary-600 hover:bg-secondary-50 hover:text-accent'}`}>
                Skin Quiz
              </Link>
              <Link href="/about" className={`block px-3 py-2 rounded-md ${pathname === '/about' ? 'bg-secondary-100 text-accent' : 'text-secondary-600 hover:bg-secondary-50 hover:text-accent'}`}>
                About
              </Link>
            </div>
            <div className="mt-4 pt-4 border-t border-secondary-200 flex flex-col space-y-3">
              {isLoggedIn ? (
                <>
                  <Link href="/profile" className="block w-full">
                    <Button variant="secondary" className="w-full">
                      My Profile
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login" className="block w-full">
                    <Button variant="secondary" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup" className="block w-full">
                    <Button variant="secondary" className="w-full">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;