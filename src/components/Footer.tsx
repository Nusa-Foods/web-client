export default function Footer() {
    return (
        <>
            <div className="w-full bg-base-200 text-base-content border-t-2 mt-auto p-10 md:p-8 lg:p-12 xl:p-20">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">

                    <div className="flex-1 mb-6 md:mb-0">
                        <aside>
                            <div className="flex items-center space-x-2">
                                <img
                                    src="/mainLogo.png"
                                    alt="Nusa Food Logo"
                                    className="w-16 h-16"
                                />
                                <span className="text-2xl font-semibold text-[#1F2937]">
                                    Nusa{" "}
                                    <span className="text-[#3A2D18]">Food</span>
                                </span>
                            </div>
                            <p className="text-gray-500 mt-2">Your Cook Inspiration</p>
                        </aside>
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6 lg:space-x-10 xl:space-x-10">
                            <nav className="flex flex-col text-gray-500">
                                <p className="footer-title text-gray-700 text-lg mb-2">Services</p>
                                <p className="link link-hover mb-1">Branding</p>
                                <p className="link link-hover mb-1">Marketing</p>
                                <p className="link link-hover mb-1">Advertisement</p>
                            </nav>
                            <nav className="flex flex-col text-gray-500">
                                <p className="footer-title text-gray-700 text-lg mb-2">Company</p>
                                <p className="link link-hover mb-1">About us</p>
                                <p className="link link-hover mb-1">Contact</p>
                            </nav>
                            <nav className="flex flex-col text-gray-500">
                                <p className="footer-title text-gray-700 text-lg mb-2">Legal</p>
                                <p className="link link-hover mb-1">Terms of use</p>
                                <p className="link link-hover mb-1">Privacy policy</p>
                                <p className="link link-hover mb-1">Cookie policy</p>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
