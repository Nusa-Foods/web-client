"use server"
import ProfilDropdown from "@/components/ProfilDropdown";
import RecipeCardDetail from "@/components/RecipeCardDetail";
import { RecipeType } from "@/type";
import { cookies } from "next/headers";

import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const slug = params.slug
    const cookie = cookies().get("Authorization");
    const recipe: RecipeType = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/recipe/${params.slug}`,
        {
            cache: "no-store",
            credentials: "include",
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
                "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
                "Accept-Encoding": "gzip, deflate, br, zstd",

                Origin: "http://localhost:3001, sec-fetch-site : same-site, sec-fetch-mode: cors, sec-fetch-dest: empty",

                Referer:
                    "http://localhost:3001/,accept-encoding: gzip, deflate, br, zstd, accept-language: en-GB,en-US;q=0.9,en;q=0.8",

                Cookie: `${cookie?.name}=${cookie?.value}`,
            },
        }
    ).then((res) => res.json())

    return {
        title: "NusaFood - " + recipe.title,
        description: recipe.description,
        openGraph: {
            images: recipe.imgUrl
        },
    }
}

export default async function RecipeDetailPage({
    params,
}: {
    params: { slug: string };
}) {
    // console.log({ params }, 'params on product slug page>>>>')
    const cookie = cookies().get("Authorization");
    // console.log(cookie, 'cookie di slug>>')

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/recipe/${params.slug}`,
        {
            cache: "no-store",
            credentials: "include",
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
                "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
                "Accept-Encoding": "gzip, deflate, br, zstd",

                Origin: "http://localhost:3001, sec-fetch-site : same-site, sec-fetch-mode: cors, sec-fetch-dest: empty",

                Referer:
                    "http://localhost:3001/,accept-encoding: gzip, deflate, br, zstd, accept-language: en-GB,en-US;q=0.9,en;q=0.8",

                Cookie: `${cookie?.name}=${cookie?.value}`,
            },
        }
    );
    const recipe: RecipeType = await res.json();
    // console.log(recipe, 'page detail >>>')

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
                                Detail Resep
                            </h1>
                        </div>
                        <div className="flex">
                            <ProfilDropdown />
                        </div>
                    </div>

                    {/* Banner */}
                    <div className="relative h-25 sm:h-32 md:h-48 lg:h-64 hidden md:block">
                        <img
                            src={recipe.bannerUrl}
                            alt={recipe.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <h2
                                className="text-5xl font-bold text-white capitalize"
                                style={{
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
                                }}
                            >
                                {recipe.title}
                            </h2>
                        </div>

                    </div>

                    {/* Main content */}
                    <main className="mt-10 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 justify-items-center">
                            <RecipeCardDetail recipeDetail={recipe} />
                        </div>
                    </main>
                </main>
            </div>
        </div>
    );
}
