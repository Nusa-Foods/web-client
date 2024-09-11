"use client";
import Footer from "@/components/Footer";
import showToast from "@/utils/toast";
import Link from "next/link";
export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center">
                {/* Hero Section */}
                <section className="text-black  px-10 w-full flex flex-col md:flex-row items-center">
                    <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 text-center md:text-left w-full md:w-1/2 mb-8 md:mb-0">
                        <p className="text-4sm font-bold mb-4">
                            Jelajahi NusaFood 🌟
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                            Good Bye
                        </h1>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-custom-brown-1 mb-4 sm:text-center md:text-left">
                            Stres Memasak!
                        </h1>

                        <p className="text-lg mb-8 text-gray-500">
                            Tulis, Simpan, Bagikan dan Dapatkan Resep-Resep Personal yang Menarik dengan Komunitas Memasak NusaFood
                        </p>
                        <Link
                            href="/discover"
                            className="bg-custom-brown-3 py-2 px-4 rounded-lg font-semibold text-custom-brown-1 hover:text-custom-brown-3 hover:bg-custom-brown-1"
                        >
                            Jelajahi Resep
                        </Link>
                    </div>
                    <div className="mx-auto px-6 text-center md:text-left w-full md:w-1/2">
                        <img
                            src="https://www.chefgpt.xyz/assets/images/Hero_App_Image.webp"
                            alt="Nusa Food Logo"
                            className="w-full h-auto max-w-xxl md:max-w-xxl mx-auto"
                        />
                    </div>
                </section>

                {/* Features Section */}
                <section className="text-black py-20 w-full flex flex-col items-center">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-8">
                            Fitur-Fitur NusaFood
                        </h2>

                        <div className="flex flex-col md:justify-between">
                            {/* feature 1 */}
                            <div className="text-black py-20 w-full flex flex-col md:flex-row items-center">
                                <div className="mx-auto  text-center md:text-left w-full md:w-1/2 mb-8 md:mb-0">
                                    <h1 className="text-4xl font-bold mb-4">
                                        Personal Resep Hanya Untukmu
                                    </h1>
                                    <p className="text-lg mb-8 text-gray-500">
                                        Cuma punya beberapa bahan masak saja di rumah tapi bingung mau masak apa?Ga masalah !
                                    </p>
                                    <p className="text-lg mb-8 text-gray-500">
                                        Dapatkan rekomendasi resep yang sesuai dengan bahan yang Anda miliki dan  spesial hanya untuk Anda!
                                    </p>
                                    <Link
                                        href="/your-chef"
                                        className="bg-custom-brown-3 py-2 px-4 rounded-lg font-semibold text-custom-brown-1 hover:text-custom-brown-3 hover:bg-custom-brown-1"
                                    >
                                        Coba Personal Resep
                                    </Link>
                                </div>
                                <div className="mx-auto px-6 text-center md:text-left w-full md:w-1/2">
                                    <img
                                        src="https://www.chefgpt.xyz/assets/images/Feature%20PantryChef.webp"
                                        alt="Nusa Food Logo"
                                        className="w-full h-auto max-w-xxl md:max-w-xxl mx-auto"
                                    />
                                </div>
                            </div>

                            {/* feature 2 */}
                            <div className="text-black py-20 w-full flex flex-col md:flex-row items-center">
                                <div className="mx-auto px-6 text-center md:text-left w-full md:w-1/2">
                                    <img
                                        src="https://www.chefgpt.xyz/assets/images/Feature%20PantryChef.webp"
                                        alt="Nusa Food Logo"
                                        className="w-full h-auto max-w-xxl md:max-w-xxl mx-auto"
                                    />
                                </div>
                                <div className="mx-auto  text-center md:text-left w-full md:w-1/2 mb-8 md:mb-0">
                                    <h1 className="text-4xl font-bold mb-4">
                                        Resep Masakan Nusantara
                                    </h1>
                                    <p className="text-lg mb-8 text-gray-500">
                                        Jelajahi ragam rasa masakan Nusantara dengan koleksi resep tradisional pilihan kami. Temukan hidangan ikonik dari Indonesia dan sekitarnya.
                                    </p>
                                    <p className="text-lg mb-8 text-gray-500">
                                        Setiap resep dilengkapi dengan petunjuk dan tips memasak supaya Anda bisa bikin hidangan favorit ini di rumah.
                                    </p>
                                    <Link
                                        href="/nusa-recipes"
                                        className="bg-custom-brown-3 py-2 px-4 rounded-lg font-semibold text-custom-brown-1 hover:text-custom-brown-3 hover:bg-custom-brown-1"
                                    >
                                        Jelajahi Resep Nusantara
                                    </Link>
                                </div>
                            </div>

                            {/* feature 3 */}
                            <div className="text-black py-20 w-full flex flex-col md:flex-row items-center">
                                <div className="mx-auto  text-center md:text-left w-full md:w-1/2 mb-8 md:mb-0">
                                    <h1 className="text-4xl font-bold mb-4">
                                        Komunitas yang Asik dan Supportif
                                    </h1>
                                    <p className="text-lg mb-8 text-gray-500">
                                        Bergabunglah dengan komunitas sehat yang penuh semangat dan berbagi resep, minat serta tujuan yang sama dengan Anda. Ikut ngobrol, tukar tips, dan cari saran di lingkungan yang mendukung.
                                    </p>
                                    <p className="text-lg mb-8 text-gray-500">
                                        Yuk, jadi bagian dari komunitas yang saling mendukung dan berkomitmen untuk mencapai kesehatan yang lebih baik bersama!
                                    </p>
                                    <Link
                                        href="/discover"
                                        className="bg-custom-brown-3 py-2 px-4 rounded-lg font-semibold text-custom-brown-1 hover:text-custom-brown-3 hover:bg-custom-brown-1"
                                    >
                                        Bergabung dengan Komunitas
                                    </Link>
                                </div>
                                <div className="mx-auto px-6 text-center md:text-left w-full md:w-1/2">
                                    <img
                                        src="https://www.chefgpt.xyz/assets/images/Feature%20PantryChef.webp"
                                        alt="Nusa Food Logo"
                                        className="w-full h-auto max-w-xxl md:max-w-xxl mx-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
