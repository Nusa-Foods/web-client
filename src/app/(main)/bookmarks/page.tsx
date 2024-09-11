"use client";
import NusaRecipeCard from "@/components/NusaRecipeCard";
import ProfilDropdown from "@/components/ProfilDropdown";
import { RecipeType } from "@/type";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Bookmarks() {
    const [bookmarksData, setBookmarksData] = useState<RecipeType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getBookmarks = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/bookmarks`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                }
            );
            const data = await response.json();
            console.log(data[0].bookmarkedRecipes);
            if (response.ok) {
                setBookmarksData(data[0].bookmarkedRecipes);
            } else {
                console.log(data.message);
            }
        } catch (err) {
            console.error("Error during fetching bookmarks:", err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getBookmarks();
    }, []);

    return (
        <div className="min-h-screen flex flex-col md:flex-row  bg-[#F9FAFB] w-full">
            <div className="w-full">
                <main className="flex flex-col">
                    {/* navbar */}
                    <div className="flex mb-6 pt-8 px-4 justify-between">
                        <div className="flex flex-row items-center gap-4">
                            <img
                                src="https://www.chefgpt.xyz/assets/icons/bookmark_tabs.webp"
                                alt="Nusa Food Discover"
                                className="w-8 h-8"
                            />
                            <h1 className="text-3xl font-bold">
                                Resep Saya
                            </h1>
                        </div>
                        <ProfilDropdown />
                    </div>

                    {/* Banner */}
                    <div className="h-48 sm:h-48 md:h-48 lg:h-64 relative">
                        <img
                            src="banner7.jpg"
                            alt="banner"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                            style={{ zIndex: 10 }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center pl-4 pr-4">
                            <p className="text-lg text-white sm:text-sm md:text-xl lg:text-2xl font-bold capitalize"
                                style={{
                                    textShadow: '4px 4px 4px rgba(0, 0, 0, 0.6)',
                                    zIndex: 10
                                }}>
                                Mau masak tapi suka lupa resepnya ?
                            </p>
                            <p className="text-lg text-white sm:text-sm md:text-xl lg:text-2xl font-bold capitalize"
                                style={{
                                    textShadow: '4px 4px 4px rgba(0, 0, 0, 0.6)',
                                    zIndex: 10
                                }}>
                                Simpan aja!
                            </p>
                            <p className="w-4/5 text-sm text-white text-center sm:text-base md:text-sm lg:text-xl text-black"
                                style={{
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
                                    zIndex: 10
                                }}>
                                Simpan catatan masakmu dengan mudah dan aman di Nusa Food.
                            </p>
                        </div>
                    </div>


                    <div className="container mx-auto px-4 mt-10">
                        <main className="flex flex-col">

                            <div className="container mx-auto px-4">
                                <main className="flex flex-col items-center">
                                    <div className="text-center mb-10 w-full">
                                        <h1 className="text-3xl font-bold mb-4">
                                            Your Recipes Bookmark
                                        </h1>
                                        <p>Keep track of your favorite recipes here.</p>
                                    </div>
                                    {bookmarksData.length == 0 && (
                                        <p className="text-center w-full">
                                            You dont have any bookmarked recipe, explore our
                                            recipe on{" "}
                                            <Link href="/discover" className="text-blue-400">
                                                discover
                                            </Link>
                                        </p>
                                    )}
                                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-10">
                                        {bookmarksData.map((el, index) => {
                                            return (
                                                <NusaRecipeCard
                                                    recipe={el}
                                                    key={index}
                                                    getBookmarks={getBookmarks}
                                                />
                                            );
                                        })}
                                    </div>
                                </main>
                            </div>
                        </main>
                    </div>
                </main>
            </div>
        </div>
    );
}
