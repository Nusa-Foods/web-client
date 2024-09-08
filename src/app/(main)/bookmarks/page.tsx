"use client";
import NusaRecipeCard from "@/components/NusaRecipeCard";
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
        <div className="min-h-screen bg-[#F9FAFB] p-5">
            <div className="container mx-auto px-4">
                <main className="flex flex-col items-center">
                    <div className="text-center mb-10 w-3/4">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
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
        </div>
    );
}
