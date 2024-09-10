"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import mainLogo from "../../public/mainLogo.png";
import ProfilDropdown from "./ProfilDropdown";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [auth, setAuth] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const authCookie = document.cookie
            .split("; ")
            .find((row) => row.startsWith("Authorization="));
        if (authCookie) {
            setAuth(true);
        }
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen]);

    return (
        <div>
            <nav className="bg-white">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-10 w-full justify-between">
                        <div className="flex gap-10">
                            <div className="flex flex-row justify-center items-center">
                                <Image
                                    src={mainLogo}
                                    alt="Nusa Food Logo"
                                    className="w-14 h-14"
                                />
                                <span className="text-2xl font-semibold text-[#1F2937] flex">
                                    Nusa{" "}
                                    <span className="text-[#3A2D18]">Food</span>
                                </span>
                            </div>

                            {/* Navigation Links */}
                            <div className="hidden lg:flex space-x-6 text-gray-500 justify-between items-center w-full">
                                <Link href="/nusa-recipes" className="nav-link">
                                    Nusa Recipes
                                </Link>
                                <Link href="/discover" className="nav-link">
                                    Discover
                                </Link>
                                <Link href="/your-chef" className="nav-link">
                                    Your Personal Chef
                                </Link>
                            </div>
                        </div>
                        <ProfilDropdown />
                    </div>

                    {!auth && (
                        <div className="hidden lg:flex space-x-6 text-gray-500 justify-between items-center">
                            <Link
                                href={"/login"}
                                className="w-20 bg-white font-medium py-2 rounded-md"
                            >
                                Sign In
                            </Link>
                            <Link
                                href={"/register"}
                                className="w-20 bg-custom-brown-1 text-center text-white font-medium py-2 rounded-md hover:bg-custom-brown-2 focus:outline-none focus:ring-2 focus:ring-custom-brown-4"
                            >
                                Sign Up
                            </Link>
                        </div>
                    )}
                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-3">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-500 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden !pl-12 mt-20 fixed inset-0 bg-white p-4 flex flex-col space-y-4 border-t border-gray-200 ${
                    isMenuOpen ? "block" : "hidden"
                }`}
            >
                {!auth && (
                    <Link
                        href={"/login"}
                        className="w-20 mb-5 bg-white text-custom-brown-1 font-medium py-2 rounded-md"
                    >
                        <b>Sign In</b>
                    </Link>
                )}

                <Link href="/nusa-recipes" className="nav-link">
                    Nusa Recipes
                </Link>
                <Link href="/discover" className="nav-link">
                    Discover
                </Link>
                <Link href="/your-chef" className="nav-link">
                    Your Personal Chef
                </Link>
            </div>
        </div>
    );
}
