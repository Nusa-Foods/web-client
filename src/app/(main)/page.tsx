"use client";
import Footer from "@/components/Footer";
import showToast from "@/utils/toast";
export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center">
                {/* Hero Section */}
                <section className="text-black  px-10 w-full flex flex-col md:flex-row items-center">
                    <div className="mx-auto px-20 text-center md:text-left w-full md:w-1/2 mb-8 md:mb-0">
                        <p className="text-4sm font-bold mb-4">
                            Discover NusaFoods 🌟
                        </p>
                        <h1 className="text-7xl font-bold mb-4">
                            Say Goodbye to
                        </h1>
                        <h1 className="text-8xl font-bold text-custom-brown-1 mb-4">
                            Mealtime Stress!
                        </h1>
                        <p className="text-lg mb-8 text-gray-500">
                            Elevate your dining experience with personalized
                            meal suggestions, easy-to-follow recipes, and a
                            variety of culinary delights. Join our community of
                            satisfied food enthusiasts and enjoy over 500,000
                            meals served!
                        </p>
                        <a
                            href="#"
                            className="bg-custom-brown-3 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200"
                        >
                            Get Started
                        </a>
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
                            Our Features
                        </h2>

                        <div className="flex flex-col md:justify-between">
                            {/* feature 1 */}
                            <div className="text-black py-20 w-full flex flex-col md:flex-row items-center">
                                <div className="mx-auto  text-center md:text-left w-full md:w-1/2 mb-8 md:mb-0">
                                    <h1 className="text-4xl font-bold mb-4">
                                        Personalized Recipes
                                    </h1>
                                    <p className="text-lg mb-8 text-gray-500">
                                        Receive tailored recipe recommendations
                                        that match your unique dietary needs and
                                        personal preferences. Whether you want
                                        to explore new cuisines, our system
                                        curates a selection of recipes just for
                                        you.
                                    </p>
                                    <p className="text-lg mb-8 text-gray-500">
                                        Enjoy recipes with precise nutritional
                                        information, ingredient substitutions,
                                        and step-by-step instructions designed
                                        to make your cooking experience both
                                        enjoyable and health-conscious.
                                    </p>
                                    <a
                                        href="#"
                                        className="bg-custom-brown-3 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200"
                                    >
                                        Get Started
                                    </a>
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
                                        Recipes Nusantara Food
                                    </h1>
                                    <p className="text-lg mb-8 text-gray-500">
                                        Explore the vibrant flavors of Nusantara
                                        cuisine with our curated selection of
                                        traditional recipes. Our collection
                                        features iconic dishes from Indonesia
                                        and its neighboring regions. Each recipe
                                        is accompanied by detailed instructions
                                        and cooking tips to help you recreate
                                        these beloved dishes at home.
                                    </p>
                                    <p className="text-lg mb-8 text-gray-500">
                                        Discover new favorites and experience
                                        the rich cultural tapestry through every
                                        delicious bit
                                    </p>
                                    <a
                                        href="#"
                                        className="bg-custom-brown-3 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200"
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>

                            {/* feature 3 */}
                            <div className="text-black py-20 w-full flex flex-col md:flex-row items-center">
                                <div className="mx-auto  text-center md:text-left w-full md:w-1/2 mb-8 md:mb-0">
                                    <h1 className="text-4xl font-bold mb-4">
                                        Community Support
                                    </h1>
                                    <p className="text-lg mb-8 text-gray-500">
                                        Connect with a vibrant community of
                                        health enthusiasts who share your
                                        interests and goals. Engage in
                                        discussions, exchange tips, and seek
                                        advice in a supportive environment.
                                    </p>
                                    <p className="text-lg mb-8 text-gray-500">
                                        Join us and be part of a supportive
                                        community dedicated to achieving better
                                        health together.
                                    </p>
                                    <a
                                        href="#"
                                        className="bg-custom-brown-3 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200"
                                    >
                                        Get Started
                                    </a>
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
