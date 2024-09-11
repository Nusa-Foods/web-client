"use client";

import showToast from "@/utils/toast";
import { MouseEvent } from "react";

export default function ButtonAddBookmarks({ slug }: { slug: string }) {
    const handleBookmarks = async (
        event: MouseEvent<HTMLDivElement>,
        slug: string
    ) => {
        event.preventDefault();
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/bookmarks`,
                {
                    method: "POST",
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
                    message: "Berhasil Menambahkan ke Resep Saya",
                    type: "success",
                });
            } else {
                showToast({
                    message: data.message,
                    type: "error",
                });
            }
        } catch (err) {
            console.error("Error during create recipe:", err);
        }
    };
    return (
        <div
            className="hover:cursor-pointer"
            onClick={(event) => handleBookmarks(event, slug)}
        >
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
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
            </svg>
        </div>
    );
}
