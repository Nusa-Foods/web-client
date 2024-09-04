"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function SideBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                {/* Mobile menu button */}
                <div className="relative flex items-center justify-between h-16 md:hidden">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col items-center justify-between h-16 pt-10">
                    <div className="mb-10">
                        <Link href="/">
                            <img className="h-8" src="" alt="Nusa Food Logo" />
                        </Link>
                    </div>
                    {/* Desktop and Tablet Menu */}
                    <div className="hidden md:flex md:flex-col md:w-64 md:space-y-4">
                        <Link href="/" className="text-gray-900 hover:text-gray-700">Home</Link>
                        <Link href="/discover" className="text-gray-900 hover:text-gray-700">Discover</Link>
                        <Link href="/about" className="text-gray-900 hover:text-gray-700">About</Link>
                        <Link href="/contact" className="text-gray-900 hover:text-gray-700">Contact</Link>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`fixed inset-0 bg-white shadow-lg z-40 transform transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-end p-4">
                        <button
                            type="button"
                            className="text-gray-500 hover:text-gray-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col p-4 space-y-2">
                        <Link href="/" className="text-gray-900 hover:text-gray-700">Home</Link>
                        <Link href="/discover" className="text-gray-900 hover:text-gray-700">Discover</Link>
                        <Link href="/about" className="text-gray-900 hover:text-gray-700">About</Link>
                        <Link href="/contact" className="text-gray-900 hover:text-gray-700">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
