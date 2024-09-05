import Link from "next/link";
import mainLogo from "../../public/mainLogo.png";

export default function NavBar() {
    return (
        <div>
            <nav className="bg-white ">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img
                            src="/mainLogo.png"
                            alt="Nusa Food Logo"
                            className="w-14 h-14"
                        />
                        <span className="text-2xl font-semibold text-[#1F2937]">
                            Nusa <span className="text-[#3A2D18]">Food</span>
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-x-6 hidden md:flex text-gray-500">
                        <a href="/nusa-recipes" className="nav-link">
                            Nusa Recipes
                        </a>
                        <Link href="/discover" className="nav-link">
                            Discover
                        </Link>
                        <a href="/your-chef" className="nav-link">
                            Your Personal Chef
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex gap-3">
                        <Link
                            href={"/login"}
                            type="submit"
                            className=" w-20 bg-white font-medium py-2 rounded-md"
                        >
                            Sign In
                        </Link>
                        <Link
                            href={"/register"}
                            type="submit"
                            className=" w-20 bg-custom-brown-1 text-center text-white font-medium py-2 rounded-md hover:bg-custom-brown-2 focus:outline-none focus:ring-2 focus:ring-custom-brown-4"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
