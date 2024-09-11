"use client";

import showToast from "@/utils/toast";
import { MouseEvent } from "react";

export default function ButtonLike({
    slug,
    fetchRecipes,
}: {
    slug: string;
    fetchRecipes?: () => void | Promise<void>;
}) {
    const handleLike = async (
        event: MouseEvent<HTMLDivElement>,
        slug: string
    ) => {
        event.preventDefault();
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/recipe/${slug}/like`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                }
            );
            const data = await response.json();
            if (response.ok) {
                showToast({
                    message: "Anda menyukai resepnya!",
                    type: "success",
                });
                if (fetchRecipes) fetchRecipes();
            } else {
                showToast({
                    message: data.message,
                    type: "error",
                });
            }
        } catch (err) {
            console.error("Error during like recipe:", err);
        }
    };
    return (
        <div
            className="hover:cursor-pointer"
            onClick={(event) => handleLike(event, slug)}
        >
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
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
            </svg>
        </div>
    );
}
