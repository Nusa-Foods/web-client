"use client";

import showToast from "@/utils/toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateRecipe() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [bannerUrl, setBannerUrl] = useState("");

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/recipe`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title,
                        description,
                        imgUrl,
                        bannerUrl,
                    }),
                    credentials: "include",
                }
            );
            const data = await response.json();

            if (response.ok) {
                showToast({
                    message: "Success post your recipe",
                    type: "success",
                });
                router.push("/discover");
            } else {
                showToast({
                    message: data.message,
                    type: "error",
                });
            }
        } catch (err) {
            console.error("Error during create recipe:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center py-10 px-10 md:px-30">
            <div className="md:w-full lg:w-full xl:w-1/2">
                <h1 className="text-2xl font-bold mb-4">
                    Effortless Perfect Recipe from Your Personal Chef
                </h1>
                <p className="text-gray-700 mb-4">
                    Share Your Culinary Creations with Nusa-Mates
                </p>
                <p className="text-gray-700">
                    Discover the joy of sharing your favorite recipes with a
                    community of food enthusiasts. Our platform allows you to
                    easily post and showcase your unique culinary creations.
                    Whether it's a cherished family recipe or a new dish you've
                    perfected, your contributions will inspire others and bring
                    delightful new ideas to their kitchens. Join our vibrant
                    community and let your recipes shine!
                </p>
            </div>

            <div className="w-full md:w-full lg:w-full xl:w-1/2 lg:pr-8">
                <form onSubmit={handleSubmit} className="w-full min-w-3/4">
                    <div className="w-full p-6 bg-white shadow-md rounded-lg mt-10">
                        <h2 className="text-xl font-bold mb-4">
                            Input Your Best Recipe Here
                        </h2>
                        {/* Title */}
                        <div className="mb-4">
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Recipe Title"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Description */}
                        <div className="mb-4">
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Description
                            </label>
                            <input
                                type="text"
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Recipe Description"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Image URL */}
                        <div className="mb-4">
                            <label
                                htmlFor="imgUrl"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Image URL
                            </label>
                            <textarea
                                id="imgUrl"
                                value={imgUrl}
                                onChange={(e) => setImgUrl(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Image URL"
                            ></textarea>
                        </div>

                        {/* Banner URL */}
                        <div className="mb-4">
                            <label
                                htmlFor="bannerUrl"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Banner URL
                            </label>
                            <textarea
                                id="bannerUrl"
                                value={bannerUrl}
                                onChange={(e) => setBannerUrl(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Banner URL"
                            ></textarea>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-center md:justify-between mt-4">
                            <button className="px-6 py-2 font-bold bg-custom-brown-1 text-white rounded-lg hover:bg-custom-brown-2 focus:outline-none">
                                Post Your Recipe
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
