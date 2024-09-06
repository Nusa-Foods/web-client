"use client"

import NusaRecipeCard from "@/components/NusaRecipeCard";
import { RecipeType } from "@/type";
import Link from "next/link";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function NusaPage() {
    const [recipes, setRecipes] = useState<RecipeType[]>([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    async function fetchRecipes() {
        try {
            setLoading(true)

            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/recipe/nusafood?page=${page}`, {
                cache: 'no-store',
                credentials: 'include'
            });
            if (!res.ok) throw await res.json()

            const data: RecipeType[] = await res.json()
            console.log(data, 'data>>>')

            if (data.length === 0) {
                setHasMore(false);
            } else {
                setRecipes((prev) => [...prev, ...data]);
                setPage(page + 1);
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        console.log('useEffect Triggered')
        fetchRecipes()
    }, [])


    return (
        <div className="min-h-screen py-5 bg-[#F9FAFB]">
            <div className="container mx-auto px-4">
                <main className="flex flex-col items-center">
                    <div className="text-center mb-10 w-3/4">
                        <h1 className="text-3xl font-bold mb-4">
                            Curated Flavors of Nusantara Recipes
                        </h1>

                        <p>
                            Each recipe is carefully curated to offer a true
                            taste of Indonesia's culinary traditions, ensuring
                            that you experience the full flavors and techniques.
                            Whether you're a seasoned cook or a curious foodie,
                            Nusa Recipes brings the heart of Nusantara to your
                            kitchen.
                        </p>
                    </div>
                    <div className="">
                        {loading &&
                            <div className="flex text-center justify-center items-center h-screen font-bold text-lg">
                                <div>
                                    Loading ...
                                </div>
                            </div>
                        }

                        {!loading &&
                            <InfiniteScroll
                                dataLength={recipes.length}
                                next={fetchRecipes}
                                hasMore={hasMore}
                                loader={<>
                                    <div className="flex justify-center items-center h-screen font-bold text-lg">
                                        Loading loader
                                    </div>
                                </>}
                                endMessage={
                                    <div className="flex justify-center items-center h-screen font-bold text-lg">
                                        <b>End of page</b>
                                    </div>
                                }
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                                    <div className="grid grid-cols-1 gap-6 justify-items-center">
                                        {recipes.map((el, index) => {
                                            return < NusaRecipeCard key={index} recipe={el} />
                                        })}
                                    </div>
                                </div>
                            </InfiniteScroll>
                        }

                    </div>
                </main>
            </div>
        </div>
    );
}
