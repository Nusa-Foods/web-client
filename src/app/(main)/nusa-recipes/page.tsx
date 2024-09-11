"use client";

import BookmarksCard from "@/components/BookmarksCard";
import NusaRecipeCard from "@/components/NusaRecipeCard";
import ProfilDropdown from "@/components/ProfilDropdown";
import { RecipeType } from "@/type";
import Link from "next/link";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function NusaPage() {
    const [recipes, setRecipes] = useState<RecipeType[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [bookmarksData, setBookmarksData] = useState<RecipeType[]>([]);
    const getBookmarks = async () => {
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
        }
    };
    async function fetchRecipes() {
        try {
            setLoading(true);

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/nusa`,

                {
                    cache: "no-store",
                    credentials: "include",
                }
            );
            if (!res.ok) throw await res.json();

            const data: RecipeType[] = await res.json();
            console.log(data, "data>>>");

            if (data.length === 0) {
                setHasMore(false);
            } else {
                setRecipes((prev) => [...prev, ...data]);
                setPage(page + 1);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        console.log("useEffect Triggered");
        fetchRecipes();
    }, []);

    return (
        <div className="min-h-screen flex flex-col md:flex-row  bg-[#F9FAFB] w-full">
            <div className="w-full">
                <main className="flex flex-col">
                    {/* navbar */}
                    <div className="flex mb-6 pt-8 px-4 justify-between">
                        <div className="flex flex-row items-center gap-4">
                            <img
                                src="https://www.nicepng.com/png/full/71-718556_wonderful-indonesia-logo-logo-pesona-indonesia-png.png"
                                alt="Nusa Food Discover"
                                className="w-8 h-8"
                            />
                            <h1 className="text-3xl font-bold">
                                Resep Nusantara Pilihan
                            </h1>
                        </div>
                        <ProfilDropdown />
                    </div>

                    {/* Banner */}
                    <div className="h-48 sm:h-48 md:h-48 lg:h-64 static relative">
                        <img
                            src="banner11.jpg"
                            alt="banner"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0  flex flex-col justify-center items-center pl-8">
                            <p
                                className="text-lg text-white sm:text-sm  md:text-xl lg:text-2xl font-bold capitalize"
                                style={{
                                    textShadow:
                                        "2px 2px 4px rgba(0, 0, 0, 0.6)",
                                }}
                            >
                                Kangen Masakan Nusantara ?
                            </p>
                            <p
                                className="text-lg text-white sm:text-sm  md:text-xl lg:text-2xl font-bold capitalize"
                                style={{
                                    textShadow:
                                        "2px 2px 4px rgba(0, 0, 0, 0.6)",
                                }}
                            >
                                Nusa Resep-in aja!
                            </p>
                            <p
                                className=" w-2/3 text-sm text-white text-center sm:text-base md:text-sm lg:text-xl text-black"
                                style={{
                                    textShadow:
                                        "2px 2px 4px rgba(0, 0, 0, 0.6)",
                                }}
                            >
                                Setiap resep disiapkan dengan cermat untuk
                                memberikan rasa asli dari tradisi kuliner
                                Indonesia, memastikan Anda merasakan seluruh
                                cita rasa dan teknik memasak yang otentik.
                            </p>
                        </div>
                    </div>

                    <div className="container mx-auto px-4 mt-10">
                        <main className="flex flex-col">
                            <div className="container mx-auto px-4">
                                <main className="flex flex-col items-center">
                                    <div className="text-center mb-10 w-full">
                                        <h1 className="text-3xl font-bold mb-4">
                                            Resep Pilihan Nusantara untuk Anda
                                        </h1>
                                        <p>
                                            Telusuri resep nusantara yang telah
                                            kami validasi
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-10">
                                        {recipes.map((el, index) => {
                                            return (
                                                <BookmarksCard
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
