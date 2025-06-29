"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function NotFound() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Ball colors from your brand palette
    const colors = ['#4F9CF9', '#FFE492', '#043873', '#A7CEFC', '#3D82EA'];
    const ballCount = 15;
    const container = containerRef.current;
    const balls = [];
    
    if (!container) return;
    
    // Create and append balls
    for (let i = 0; i < ballCount; i++) {
      const ball = document.createElement('div');
      
      // Random properties
      const size = Math.floor(Math.random() * 80) + 20; // 20-100px
      const color = colors[Math.floor(Math.random() * colors.length)];
      const left = Math.floor(Math.random() * 90) + 5; // 5-95%
      const animDuration = (Math.random() * 8) + 3; // 3-11s
      const animDelay = Math.random() * 2; // 0-2s
      const opacity = (Math.random() * 0.6) + 0.2; // 0.2-0.8
      
      // Apply styles
      ball.style.position = 'absolute';
      ball.style.width = `${size}px`;
      ball.style.height = `${size}px`;
      ball.style.backgroundColor = color;
      ball.style.borderRadius = '50%';
      ball.style.left = `${left}%`;
      ball.style.bottom = '-100px';
      ball.style.opacity = opacity;
      ball.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.1)';
      
      // Apply animation
      ball.style.animation = `bounce ${animDuration}s ease-in-out ${animDelay}s infinite`;
      
      // Add to container and track for cleanup
      container.appendChild(ball);
      balls.push(ball);
    }
    
    // Add keyframes to document
    const style = document.createElement('style');
    style.textContent = `
      @keyframes bounce {
        0%, 100% {
          bottom: -100px;
          animation-timing-function: ease-out;
        }
        50% {
          bottom: 100vh;
          animation-timing-function: ease-in;
        }
      }
    `;
    document.head.appendChild(style);
    
    // Cleanup function
    return () => {
      balls.forEach(ball => ball.remove());
      style.remove();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white px-4">
      {/* Animation container */}
      <div 
        ref={containerRef}
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ filter: 'blur(1px)' }}
      />
      
      {/* Content */}
      <div className="z-10 max-w-2xl text-center">
        <h1 className="text-8xl font-bold text-[#043873] mb-6">404</h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#4F9CF9] mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for seems to have floated away like one of our bouncing balls.
        </p>
        <Link href="/">
          <button className="bg-[#4F9CF9] hover:bg-blue-600 text-white text-lg font-medium px-8 py-4 rounded-lg
            transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}