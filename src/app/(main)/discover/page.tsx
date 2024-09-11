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
        console.log("masuk di fetch");
        try {
            setLoading(true);

            if (reset) {
                setRecipes([]);
                setPage(1);
                setHasMore(true);
            }

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/recipe?page=${reset ? 1 : page
                }`,
                {
                    cache: "no-store",
                    credentials: "include",
                }
            );

            if (!res.ok) throw await res.json();

            const data: RecipeType[] = await res.json();

            if (data.length === 0) {
                console.log(data.length, "data.length");
                setHasMore(false);
            } else {
                console.log(data.length, "data.length");
                setRecipes((prev) => (reset ? [...data] : [...prev, ...data]));

                console.log(page, "page before >>>");
                setPage((prevPage) => {
                    const newPage = prevPage + 1;
                    console.log(newPage, "page after update >>>");
                    return newPage;
                });
                console.log(page, "page >>>");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    // Trigger the first fetch on component mount
    useEffect(() => {
        console.log("fetch triggered");
        fetchRecipes();
    }, []);

    // Button click handler to refresh the recipes
    const refreshRecipes = () => {
        console.log("trigger");
        fetchRecipes(true); // `true` to reset the recipes and fetch the latest
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row  bg-[#F9FAFB] w-full">
            <div className="w-full">
                <main className="flex flex-col">
                    {/* navbar */}
                    <div className="flex mb-6 pt-8 px-4 justify-between">
                        <div className="flex flex-row items-center gap-4">
                            <img
                                src="https://www.chefgpt.xyz/assets/icons/compass.webp"
                                alt="Nusa Food Discover"
                                className="w-8 h-8"
                            />
                            <h1 className="text-3xl font-bold">
                                Jelajahi Resep
                            </h1>
                        </div>
                        <div className="flex">
                            <Link
                                href="/create-recipe"
                                className="border border-custom-brown-1 text-custom-brown-1 px-2 py-1 rounded-md"
                            >
                                Tulis Resep
                            </Link>
                            <ProfilDropdown />
                        </div>
                    </div>

                    {/* Banner */}
                    <div className="h-48 sm:h-48 md:h-48 lg:h-64 static relative">
                        <img
                            src="banner2.jpg"
                            alt="banner"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0  flex flex-col justify-center items-center pl-8">
                            <p className="text-lg  sm:text-sm  md:text-2xl lg:text-2xl font-bold capitalize" >
                                Lagi Pengin Makan Enak?
                            </p>
                            <p className="text-lg  sm:text-sm  md:text-2xl lg:text-2xl font-bold capitalize">
                                Cari di sini aja!
                            </p>
                            <p className="text-sm  sm:text-base md:text-lg lg:text-xl text-black">
                                Jelajahi berbagai resep yang sesuai dengan selera kamu. Cepat, mudah, dan siap diakses kapan saja!
                            </p>
                        </div>
                    </div>


                    {/* Recipe Grid */}

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
                                <p className="flex text-center justify-center items-center h-screen font-bold text-lg">
                                    <b>Akhir dari halaman</b>
                                </p>
                            }
                        >
                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 justify-items-center">
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

                </main>
            </div>
        </div>
    );
}
