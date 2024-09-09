"use client";
import { RecipeType } from "@/type";
import showToast from "@/utils/toast";
import Link from "next/link";
import { MouseEvent } from "react";

export default function NusaRecipeCard({
    recipe,
    getBookmarks,
}: {
    recipe: RecipeType;
    getBookmarks: () => void | Promise<void>;
}) {
    const handleRemoveBookmarks = async (
        event: MouseEvent<SVGSVGElement>,
        slug: string
    ) => {
        event.preventDefault();
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/bookmarks`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        slug,
                    }),
                    credentials: "include",
                }
            );
            const data = await response.json();
            if (response.ok) {
                showToast({
                    message: "Success remove from bookmarks",
                    type: "success",
                });
            } else {
                showToast({
                    message: data.message,
                    type: "error",
                });
            }
            getBookmarks();
        } catch (err) {
            console.error("Error during create recipe:", err);
        }
    };
    return (
        <div className="bg-white p-6 rounded-md shadow-md max-w-sm mx-auto w-full h-auto flex flex-col">
            <div className="flex flex-col h-full">
                <Link href="/nusa-recipes/details" className="flex-grow">
                    <img
                        src={recipe.imgUrl}
                        alt="Recipe 1"
                        className="w-full h-40 object-cover rounded-md mb-4"
                    />

                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold truncate capitalize">
                            {recipe.title}
                        </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-2 text-sm truncate">
                        {recipe.description}
                    </p>
                </Link>

                <div className="flex justify-end mt-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#603F26"
                        className="size-6 cursor-pointer"
                        onClick={(event) => handleRemoveBookmarks(event, recipe.slug)}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                    </svg>
                </div>
            </div>
        </div>

    );
}
