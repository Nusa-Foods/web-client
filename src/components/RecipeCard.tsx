"use client";
import { useState, useEffect, MouseEvent } from "react";
import { RecipeType, UserType } from "@/type";
import Link from "next/link";
import ButtonAddBookmarks from "./ButtonAddBookmarks";
import ButtonLike from "./ButtonLike";
import ButtonComment from "./ButtonComment";
import ButtonShare from "./ButtonShare";

export default function RecipeCard({
    recipe,
    fetchRecipes,
}: {
    recipe: RecipeType;
    fetchRecipes: () => void | Promise<void>;
}) {
    const [user, setUser] = useState<UserType>({});

    const getUser = async (authorId: string) => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/user/${authorId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const data = await response.json();
        setUser(data);
    };

    useEffect(() => {
        getUser(String(recipe.authorId));
    }, []);

    return (
        <>
            <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full sm:w-[90%] md:w-[90%] lg:w-[80%] xl:w-[80%] h-auto py-4 px-4">
                <Link href={`/discover/${recipe.slug}`}>
                    <div className="flex items-center justify-center p-4 w-full h-[600px] overflow-hidden mb-4">
                        <img
                            src={recipe.imgUrl}
                            alt={recipe.title}
                            className="rounded-lg object-cover"
                        />
                    </div>

                    <div className="grid grid-cols-3 p-4">
                        <div className="flex justify-start gap-4">
                            <div className="flex items-center space-x-2">
                                <ButtonLike
                                    slug={recipe.slug}
                                    fetchRecipes={fetchRecipes}
                                />
                                <p className="text-xs sm:text-sm md:text-md mr-2 sm:mr-4 md:mr-6">
                                    {recipe.likes.length}
                                </p>
                            </div>

                            {/* comments */}
                            <div className="flex items-center space-x-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="#603F26"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                                    />
                                </svg>

                                <p className="text-xs sm:text-sm md:text-md mr-2 sm:mr-4 md:mr-6">
                                    {recipe.comments.length}
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="flex items-center space-x-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="#603F26"
                                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                    />
                                </svg>
                                <p className="text-xs sm:text-sm md:text-md mr-2 sm:mr-4 md:mr-6">
                                    {user.username ? user.username : user.email}
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-end gap-4">
                            {/* Share button */}
                            <ButtonShare recipe={recipe} />
                            {/* Bookmarks */}
                            <ButtonAddBookmarks slug={recipe.slug} />
                        </div>
                    </div>

                    <div className="p-4">
                        <h1 className="text-4xl font-bold capitalize">
                            {recipe.title}
                        </h1>
                        <p className="text-gray-600">{recipe.description}</p>
                    </div>
                </Link>
            </div>
        </>
    );
}
