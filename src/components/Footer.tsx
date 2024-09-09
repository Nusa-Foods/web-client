export default function Footer() {
    return (
        <>
            <div className="bg-base-200 text-base-content border-t-2 mt-auto p-20">
                <div className="flex justify-between p-10">
                    <div>
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
                            <p className="text-gray-500">
                                Your Cook Inspiration
                            </p>
                        </aside>
                    </div>
                    <div className="flex justify-between w-1/4">
                        <nav className="flex flex-col text-gray-500">
                            <b className="footer-title text-gray-700">
                                Services
                            </b>
                            <p className="link link-hover">Branding</p>
                            <p className="link link-hover">Design</p>
                            <p className="link link-hover">Marketing</p>
                            <p className="link link-hover">Advertisement</p>
                        </nav>
                        <nav className="flex flex-col text-gray-500">
                            <b className="footer-title text-gray-700">
                                Company
                            </b>
                            <p className="link link-hover">About us</p>
                            <p className="link link-hover">Contact</p>
                            <p className="link link-hover">Jobs</p>
                            <p className="link link-hover">Press kit</p>
                        </nav>
                        <nav className="flex flex-col text-gray-500">
                            <b className="footer-title text-gray-700">Legal</b>
                            <p className="link link-hover">Terms of use</p>
                            <p className="link link-hover">Privacy policy</p>
                            <p className="link link-hover">Cookie policy</p>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
