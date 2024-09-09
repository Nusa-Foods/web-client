"use client";

import ProfilDropdown from "@/components/ProfilDropdown";
import RecipeCard from "@/components/RecipeCard";
import { RecipeType } from "@/type";
import Link from "next/link";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function DiscoverDetailPage() {
    const [recipes, setRecipes] = useState<RecipeType[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    // Fetch recipes function
    async function fetchRecipes(reset: boolean = false) {
        try {
            setLoading(true);

            if (reset) {
                setRecipes([]);
                setPage(1);
                setHasMore(true);
            }

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/recipe?page=${
                    reset ? 1 : page
                }`,
                {
                    cache: "no-store",
                    credentials: "include",
                }
            );

            if (!res.ok) throw await res.json();

            const data: RecipeType[] = await res.json();

            if (data.length === 0) {
                setHasMore(false);
            } else {
                setRecipes((prev) => (reset ? [...data] : [...prev, ...data]));
                setPage((prev) => prev + 1);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    // Trigger the first fetch on component mount
    useEffect(() => {
        fetchRecipes();
    }, []);

    // Button click handler to refresh the recipes
    const refreshRecipes = () => {
        fetchRecipes(true); // `true` to reset the recipes and fetch the latest
    };

    return (
        <div className="min-h-flex flex-col md:flex-row justify-center bg-[#F9FAFB]">
            <div>
                <main className="flex-grow p-6">
                    <div className="flex justify-between items-center content-center mb-6">
                        <div className="flex gap-2">
                            <img
                                src="https://www.chefgpt.xyz/assets/icons/compass.webp"
                                alt="Nusa Food Discover"
                                className="w-8 h-8"
                            />
                            <h1 className="text-3xl font-bold">
                                Discover Amazing Recipes
                            </h1>
                        </div>
                        <div className="flex">
                            <Link
                                href="/create-recipe"
                                className="border border-custom-brown-1 text-custom-brown-1 px-2 py-1 rounded-md"
                            >
                                Post Recipe
                            </Link>
                            <ProfilDropdown />
                        </div>
                    </div>

                    {/* Recipe Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 justify-items-center">
                        {loading && (
                            <div className="flex text-center justify-center items-center h-screen font-bold text-lg">
                                <div>Loading ...</div>
                            </div>
                        )}

                        {!loading && (
                            <InfiniteScroll
                                dataLength={recipes.length}
                                next={fetchRecipes}
                                hasMore={hasMore}
                                loader={
                                    <>
                                        <div className="flex text-center justify-center items-center h-screen font-bold text-lg">
                                            Loading ...
                                        </div>
                                    </>
                                }
                                endMessage={
                                    <p style={{ textAlign: "center" }}>
                                        <b>End of page</b>
                                    </p>
                                }
                            >
                                <div className="grid grid-cols-1 gap-6 justify-items-center">
                                    {recipes.map((el, index) => {
                                        return (
                                            <RecipeCard
                                                key={index}
                                                recipe={el}
                                                fetchRecipes={refreshRecipes}
                                            />
                                        );
                                    })}
                                </div>
                            </InfiniteScroll>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}
