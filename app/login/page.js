"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md mobile:max-w-[90%] tablet:max-w-[70%] laptop:max-w-md tv:max-w-lg">
        <div className="bg-white rounded-2xl shadow-lg p-6 mobile:p-8 tablet:p-10">
          {/* Logo and heading */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#4F9CF9] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold text-[#212529]">Whitepace</span>
            </div>
          </div>
          
          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-2xl mobile:text-xl tablet:text-2xl tv:text-3xl font-semibold text-[#212529] mb-2">
              Log in to your account
            </h1>
            <p className="text-gray-600 text-base tv:text-lg">
              Welcome back to Whitepace
            </p>
          </div>
          
          {/* Social login buttons with gradient effects */}
          <div className="space-y-4 mb-6">
            {/* Google login button */}
            <button 
              className="inline-flex items-center justify-center gap-3 px-6 py-4 w-full
                bg-gradient-to-r from-red-500 to-orange-500 
                hover:from-red-600 hover:to-orange-600
                rounded-lg text-white font-bold text-base shadow-md
                transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#ffffff"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#ffffff"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#ffffff"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#ffffff"/>
              </svg>
              <span>Continue with Google</span>
            </button>
            
            {/* GitHub login button */}
            <button 
              className="inline-flex items-center justify-center gap-3 px-6 py-4 w-full
                bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 
                hover:from-black hover:via-gray-800 hover:to-gray-700
                rounded-lg text-white font-bold text-base shadow-md
                transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>Continue with GitHub</span>
            </button>
          </div>
          
          {/* Or divider
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">or</span>
            </div>
          </div> */}
          
          {/* Login form */}
          {/* <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2 w-full">
              <label htmlFor="email" className="block text-sm font-medium text-[#212529]">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-[#212529] 
                  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] 
                  focus:border-transparent transition-colors duration-200"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="space-y-2 w-full">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-[#212529]">
                  Password
                </label>
                <button type="button" className="text-sm font-medium text-[#4F9CF9] hover:text-blue-600">
                  Forgot password?
                </button>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-[#212529] 
                  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] 
                  focus:border-transparent transition-colors duration-200"
                placeholder="Enter your password"
              />
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-4 w-full
                  bg-gradient-to-r from-[#4F9CF9] via-blue-500 to-blue-600 
                  hover:from-blue-600 hover:via-[#4F9CF9] hover:to-blue-500
                  text-white font-bold text-base rounded-lg shadow-md
                  transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                  focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] focus:ring-offset-2"
              >
                Log in
              </button>
            </div>
          </form> */}
          
          {/* Sign up link */}
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm tv:text-base">
              Don't have an account?{' '}
              <Link 
                href="/login" 
                className="text-[#4F9CF9] hover:text-blue-600 font-bold transition-colors duration-200"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}