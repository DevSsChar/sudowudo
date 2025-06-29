import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#043873] w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[220px] pt-12 sm:pt-16 md:pt-20 lg:pt-28 xl:pt-[140px] pb-8">
      <div className="relative max-w-7xl mx-auto">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 lg:mb-[100px]">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/5d87cf8d030e49dc8ac1f19983169590/cbd44316b7f387540e3acf3a0cede27e13806b65?placeholderIfAbsent=true"
                className="w-[37px] h-auto"
                alt="Whitepace logo"
              />
              <div className="text-white text-xl sm:text-2xl lg:text-[28px] font-bold">
                whitepace
              </div>
            </div>
            <p className="text-[#F7F7EE] text-base sm:text-lg font-normal leading-relaxed max-w-sm">
              whitepace was created for the new ways we live and work. We make
              a better workspace around the world
            </p>
          </div>

          {/* Product Links */}
          <nav className="text-white">
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-[#FFE492] text-sm sm:text-base hover:opacity-80 transition-opacity"
                >
                  Overview
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm sm:text-base hover:opacity-80 transition-opacity"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm sm:text-base hover:opacity-80 transition-opacity"
                >
                  Customer stories
                </a>
              </li>
            </ul>
          </nav>

          {/* Resources Links */}
          <nav className="text-white">
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-sm sm:text-base hover:opacity-80 transition-opacity"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm sm:text-base hover:opacity-80 transition-opacity"
                >
                  Guides &amp; tutorials
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm sm:text-base hover:opacity-80 transition-opacity"
                >
                  Help center
                </a>
              </li>
            </ul>
          </nav>

          {/* Company Links */}
          <nav className="text-white">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-sm sm:text-base hover:opacity-80 transition-opacity"
                >
                  About us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm sm:text-base hover:opacity-80 transition-opacity"
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm sm:text-base hover:opacity-80 transition-opacity"
                >
                  Media kit
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Call to Action Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          <div className="sm:col-span-2 lg:col-span-2 text-white">
            <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold mb-6">
              Try It Today
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-6 max-w-sm">
              Get started for free. Add your whole team as your needs grow.
            </p>
            <button className="bg-[#4F9CF9] text-white text-sm sm:text-base font-medium px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg hover:bg-blue-600 transition-colors w-full sm:w-auto">
              Start today
            </button>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-[#2E4E73] pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Left Links */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 text-white text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <span>English</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/5d87cf8d030e49dc8ac1f19983169590/943ab3f91135f896921083145a3e3a8c4221b373?placeholderIfAbsent=true"
                  className="w-3 h-1.5"
                  alt="dropdown"
                />
              </div>
              <a href="#" className="hover:opacity-80 transition-opacity">
                Terms &amp; privacy
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                Security
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                Status
              </a>
              <div>©2021 Whitepace LLC.</div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 sm:gap-8">
              {/* Facebook */}
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C16 3.58 12.42 0 8 0S0 3.58 0 8C0 12 2.93 15.29 6.75 15.92V10.31H4.72V8H6.75V6.24C6.75 4.23 7.94 3.13 9.77 3.13C10.65 3.13 11.56 3.28 11.56 3.28V5.25H10.56C9.57 5.25 9.25 5.87 9.25 6.51V8H11.47L11.11 10.31H9.25V15.92C13.07 15.29 16 12 16 8Z" fill="white"/>
                </svg>
              </a>
              
              {/* Twitter */}
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 3.04C15.42 3.3 14.79 3.48 14.14 3.57C14.8 3.16 15.31 2.52 15.55 1.77C14.92 2.15 14.21 2.42 13.47 2.56C12.88 1.92 12.02 1.54 11.08 1.54C9.27 1.54 7.8 3.01 7.8 4.82C7.8 5.08 7.83 5.33 7.88 5.57C5.15 5.44 2.73 4.13 1.11 2.13C0.83 2.6 0.67 3.16 0.67 3.76C0.67 4.9 1.25 5.9 2.13 6.48C1.59 6.46 1.08 6.32 0.64 6.09V6.13C0.64 7.72 1.78 9.04 3.27 9.34C3 9.41 2.72 9.45 2.43 9.45C2.22 9.45 2.02 9.43 1.82 9.39C2.23 10.69 3.45 11.64 4.9 11.67C3.78 12.55 2.36 13.07 0.82 13.07C0.55 13.07 0.27 13.06 0 13.02C1.45 13.95 3.18 14.54 5.04 14.54C11.07 14.54 14.37 9.5 14.37 5.2C14.37 5.06 14.37 4.92 14.36 4.78C15 4.32 15.56 3.73 16 3.04Z" fill="white"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.82 0H1.18C0.53 0 0 0.53 0 1.18V14.82C0 15.47 0.53 16 1.18 16H14.82C15.47 16 16 15.47 16 14.82V1.18C16 0.53 15.47 0 14.82 0ZM4.74 13.62H2.37V5.99H4.74V13.62ZM3.56 4.95C2.8 4.95 2.19 4.34 2.19 3.58C2.19 2.82 2.8 2.21 3.56 2.21C4.32 2.21 4.93 2.82 4.93 3.58C4.93 4.34 4.32 4.95 3.56 4.95ZM13.63 13.62H11.26V9.93C11.26 9.05 11.24 7.91 9.99 7.91C8.72 7.91 8.53 8.86 8.53 9.86V13.62H6.16V5.99H8.43V7.04H8.46C8.77 6.46 9.54 5.85 10.7 5.85C13.1 5.85 13.63 7.44 13.63 9.52V13.62Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}