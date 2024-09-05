"use client"

import RecipeCard from "@/components/RecipeCard";
import { RecipeType } from "@/type";
import Link from "next/link";
import { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';


export default function DiscoverDetailPage() {
    const [recipes, setRecipes] = useState<RecipeType[]>([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    async function fetchRecipes() {
        try {
            setLoading(true)
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/recipe?page=${page}`, {
                cache: 'no-store'
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
        fetchRecipes()
    }, [])


    return (
        <div className="min-h-flex flex-col md:flex-row justify-center bg-[#F9FAFB]">
            <div>
                <main className="flex-grow p-6">
                    <div className="flex justify-between items-center content-center mb-6">
                        <h1 className="text-3xl font-bold">
                            Discover Amazing Recipes
                        </h1>
                        <Link
                            href="/create-recipe"
                            className="border border-custom-brown-1 text-custom-brown-1 px-2 py-1 rounded-md"
                        >
                            Post Recipe
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 justify-items-center">
                        {loading &&
                            <div className="flex text-center justify-center items-center h-screen font-bold text-lg">
                                <div>
                                    Loading 123
                                </div>
                            </div>
                        }

                        {!loading &&
                            <InfiniteScroll
                                dataLength={recipes.length}
                                next={fetchRecipes}
                                hasMore={hasMore}
                                loader={<>
                                    <div className="flex text-center justify-center items-center h-screen font-bold text-lg">
                                        <div>
                                            Loading loader
                                        </div>
                                    </div>
                                </>}
                                endMessage={
                                    <p style={{ textAlign: 'center' }}>
                                        <b>End of page</b>
                                    </p>
                                }
                            >
                                <div className="grid grid-cols-1 gap-6 justify-items-center">
                                    {recipes.map((el, index) => {
                                        return <RecipeCard key={index} recipe={el} />
                                    })}
                                </div>
                            </InfiniteScroll>
                        }

                    </div>
                </main>
            </div>
        </div>
    );
}
