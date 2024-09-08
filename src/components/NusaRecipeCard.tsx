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
        event: MouseEvent<HTMLDivElement>,
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
        <div className="bg-white p-6 rounded-md shadow-md max-w-sm mx-auto">
            <div className="flex flex-col h-full justify-between">
                <Link href="/nusa-recipes/details">
                    <img
                        src={recipe.imgUrl}
                        alt="Recipe 1"
                        className="w-full h-40 object-cover rounded-md mb-4"
                    />

                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold">
                            {recipe.title}
                        </h3>
                    </div>

                    {/* description */}
                    <p className="text-gray-600 mb-2 text-sm">
                        {recipe.description}
                    </p>
                </Link>

                <div
                    onClick={(event) =>
                        handleRemoveBookmarks(event, recipe.slug)
                    }
                    className="text-center hover:cursor-pointer bg-custom-brown-1 text-white font-medium py-2 px-4 rounded-md text-sm hover:bg-custom-brown-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Remove from Bookmarks
                </div>
            </div>
        </div>
    );
}
