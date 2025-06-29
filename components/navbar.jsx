"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <div className="flex w-full items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[220px] py-4">
                <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5">
                        <div className="relative">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/5d87cf8d030e49dc8ac1f19983169590/814115b65a50450e41f0a8ad8327b6ce1d796d19?placeholderIfAbsent=true"
                                className="aspect-[1.28] object-contain w-[37px] shrink-0 animate-spin"
                                alt="Whitepace logo"
                                style={{ animationDuration: '3s' }}
                            />
                        </div>
                        <div className="text-[#4F9CF9] text-xl sm:text-2xl lg:text-[28px] font-bold whitespace-nowrap">
                            whitepace
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
                        <div className="flex items-center gap-6 xl:gap-8 text-[#4F9CF9] text-base xl:text-lg font-medium">
                            <Link
                                href="/products"
                                className="flex items-center gap-2.5 cursor-pointer hover:opacity-80 transition-opacity"
                            >
                                <span>Products</span>
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/5d87cf8d030e49dc8ac1f19983169590/f156a7be33fc9e3d5009052d8081bf8a53a3e906?placeholderIfAbsent=true"
                                    className="w-[9px] h-2"
                                    alt="dropdown"
                                />
                            </Link>

                            <Link
                                href="/solutions"
                                className="flex items-center gap-2.5 cursor-pointer hover:opacity-80 transition-opacity"
                            >
                                <span>Solutions</span>
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/5d87cf8d030e49dc8ac1f19983169590/f156a7be33fc9e3d5009052d8081bf8a53a3e906?placeholderIfAbsent=true"
                                    className="w-[9px] h-2"
                                    alt="dropdown"
                                />
                            </Link>

                            <Link
                                href="/resources"
                                className="flex items-center gap-2.5 cursor-pointer hover:opacity-80 transition-opacity"
                            >
                                <span>Resources</span>
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/5d87cf8d030e49dc8ac1f19983169590/f156a7be33fc9e3d5009052d8081bf8a53a3e906?placeholderIfAbsent=true"
                                    className="w-[9px] h-2"
                                    alt="dropdown"
                                />
                            </Link>

                            <Link
                                href="/pricing"
                                className="flex items-center gap-2.5 cursor-pointer hover:opacity-80 transition-opacity"
                            >
                                <span>Pricing</span>
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/5d87cf8d030e49dc8ac1f19983169590/f156a7be33fc9e3d5009052d8081bf8a53a3e906?placeholderIfAbsent=true"
                                    className="w-[9px] h-2"
                                    alt="dropdown"
                                />
                            </Link>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex items-center gap-4 xl:gap-6">
                            <Link href="/login">
                                <button className="bg-[#FFE492] text-[#043873] px-6 xl:px-10 py-3 xl:py-[19px] rounded-lg font-medium text-sm xl:text-lg hover:opacity-90 transition-opacity whitespace-nowrap">
                                    Login
                                </button>
                            </Link>
                            <button className="bg-[#4F9CF9] text-white px-4 xl:px-6 py-3 xl:py-[19px] rounded-lg font-medium text-sm xl:text-lg hover:bg-blue-600 transition-colors whitespace-nowrap">
                                Try Whitepace free
                            </button>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden flex flex-col gap-1 p-2"
                        aria-label="Toggle menu"
                        onClick={toggleMenu}
                    >
                        <div className={`w-6 h-0.5 bg-[#4F9CF9] transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-[#4F9CF9] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-[#4F9CF9] transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white/95 backdrop-blur-sm border-b border-gray-100 px-4 sm:px-8 py-4 animate-fadeIn">
                    <nav className="flex flex-col gap-4">
                        <Link
                            href="/products"
                            className="flex items-center justify-between py-3 border-b border-gray-100 text-[#4F9CF9]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span>Products</span>
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/5d87cf8d030e49dc8ac1f19983169590/f156a7be33fc9e3d5009052d8081bf8a53a3e906?placeholderIfAbsent=true"
                                className="w-[9px] h-2"
                                alt="dropdown"
                            />
                        </Link>

                        <Link
                            href="/solutions"
                            className="flex items-center justify-between py-3 border-b border-gray-100 text-[#4F9CF9]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span>Solutions</span>
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/5d87cf8d030e49dc8ac1f19983169590/f156a7be33fc9e3d5009052d8081bf8a53a3e906?placeholderIfAbsent=true"
                                className="w-[9px] h-2"
                                alt="dropdown"
                            />
                        </Link>

                        <Link
                            href="/resources"
                            className="flex items-center justify-between py-3 border-b border-gray-100 text-[#4F9CF9]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span>Resources</span>
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/5d87cf8d030e49dc8ac1f19983169590/f156a7be33fc9e3d5009052d8081bf8a53a3e906?placeholderIfAbsent=true"
                                className="w-[9px] h-2"
                                alt="dropdown"
                            />
                        </Link>

                        <Link
                            href="/pricing"
                            className="flex items-center justify-between py-3 border-b border-gray-100 text-[#4F9CF9]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span>Pricing</span>
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/5d87cf8d030e49dc8ac1f19983169590/f156a7be33fc9e3d5009052d8081bf8a53a3e906?placeholderIfAbsent=true"
                                className="w-[9px] h-2"
                                alt="dropdown"
                            />
                        </Link>

                        {/* Mobile CTA Buttons */}
                        <div className="flex flex-col gap-3 mt-2">
                            <Link href="/login" className="w-full" onClick={() => setIsMenuOpen(false)}>
                                <button className="bg-[#FFE492] text-[#043873] py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity w-full">
                                    Login
                                </button>
                            </Link>
                            <button className="bg-[#4F9CF9] text-white py-3 rounded-lg font-medium text-sm hover:bg-blue-600 transition-colors">
                                Try Whitepace free
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}