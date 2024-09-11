"use client";
import { RecipeType } from "@/type";
import showToast from "@/utils/toast";
import Link from "next/link";
import { MouseEvent } from "react";

export default function BookmarksCard({
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
                <Link
                    href={`/nusa-recipes/${recipe.slug}`}
                    className="flex-grow"
                >
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
            </div>
        </div>
    );
}
