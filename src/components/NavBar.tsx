import Link from "next/link";

export default function NavBar() {
    return (
        <>
            <>
                <div>
                    <nav className="bg-white shadow-lg">
                        <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                            {/* Logo */}
                            <div className="flex items-center space-x-2">
                                <img
                                    src=""
                                    alt="Nusa Food Logo"
                                    className="w-12 h-12"
                                />
                                <span className="text-2xl font-semibold text-gray-800">Nusa Food</span>
                            </div>

                            {/* Navigation Links */}
                            <div className="space-x-6 hidden md:flex">
                                <a href="#" className="text-gray-800 nav-link">
                                    Features
                                </a>
                                <a href="#" className="text-gray-800 nav-link">
                                    Pricing
                                </a>
                                <a href="#" className="text-gray-800 nav-link">
                                    Contact
                                </a>
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="flex gap-3">
                                <Link href={"/login"}
                                    type="submit"
                                    className=" w-20 bg-white font-medium py-2 rounded-xl"
                                >
                                    Sign In
                                </Link>
                                <Link href={"/register"}
                                    type="submit"
                                    className=" w-20 bg-custom-brown-1 text-center text-white font-medium py-2 rounded-xl hover:bg-custom-brown-2 focus:outline-none focus:ring-2 focus:ring-custom-brown-4"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </nav>

                </div>
            </>

        </>
    )
}