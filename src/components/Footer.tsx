export default function Footer() {
    return (
        <>
            <div className="bg-base-200 text-base-content border-t-2 mt-auto p-20">
                <div className="flex justify-between p-10">
                    <div>
                        <aside>
                            <div className="flex items-center space-x-2">
                                <img
                                    src="/mainLogo.svg"
                                    alt="Nusa Food Logo"
                                    className="w-12 h-12"
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
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </nav>
                        <nav className="flex flex-col text-gray-500">
                            <b className="footer-title text-gray-700">
                                Company
                            </b>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </nav>
                        <nav className="flex flex-col text-gray-500">
                            <b className="footer-title text-gray-700">Legal</b>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
