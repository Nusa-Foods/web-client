"use client"

import { RecipeType } from "@/type";
import CommentCard from "./CommentCard";
import ButtonAddBookmarks from "./ButtonAddBookmarks";
import { MouseEvent, useRef, useState } from "react";
import ButtonComment from "./ButtonComment";
import ButtonLike from "./ButtonLike";
import showToast from "@/utils/toast";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";
import { revalidatePath } from "next/cache";
import revalidate from "@/actions";
import ButtonCommentStatic from "./ButtonCommentStatic";

export default function RecipeCardDetail({
    recipeDetail,
    fetchRecipes,
}: {
    recipeDetail: RecipeType;
    fetchRecipes: () => void | Promise<void>;
}) {
    const [text, setComment] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleComment = async (event: MouseEvent<SVGSVGElement>) => {
        event.preventDefault();
        try {
            console.log(text, "commment >>>")
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/recipe/${recipeDetail.slug}/comments`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ text }),
                    cache: "no-store",
                    credentials: "include",
                }
            );
            const data = await response.json();

            if (response.ok) {
                showToast({
                    message: "Berhasil menambahkan komentar!",
                    type: "success",
                });
                setComment("");
                revalidate()

            } else {
                showToast({ message: data.message || "Gagal menambahkan komentar" });
            }


        } catch (err) {
            console.error("Error comment:", err);
        }
    };

    const handleButtonCommentClick = () => {
        console.log("disni>>> clicl")
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };



    return (
        <div className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%] !h-auto py-4 px-4">
            <div className="flex items-center justify-center p-4 w-full mb-4 h-[40%] sm:h-[50%] md:h-[50%] lg:h-[50%] xl:h-[50%] overflow-hidden">
                <img
                    src={recipeDetail.imgUrl}
                    alt={recipeDetail.title}
                    className="rounded-lg object-cover w-full overflow-hidden"
                />
            </div>

            <div className="grid grid-cols-3 p-4">
                <div className="flex justify-start gap-4">
                    <div className="flex items-center space-x-2">
                        <ButtonLike
                            slug={recipeDetail.slug}
                            fetchRecipes={fetchRecipes}
                        />
                        <p className="text-xs sm:text-sm md:text-md mr-2 sm:mr-4 md:mr-6">
                            {recipeDetail.likes.length}
                        </p>
                    </div>

                    <div className="flex items-center space-x-2">
                        <ButtonCommentStatic onClick={handleButtonCommentClick} />
                        <p className="text-xs sm:text-sm md:text-md mr-2 sm:mr-4 md:mr-6">
                            {recipeDetail.comments.length}
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
                            name ini belum aad
                        </p>
                    </div>
                </div>

                <div className="flex justify-end gap-4">
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
                                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                            />
                        </svg>
                    </div>

                    <div className="flex items-center space-x-2">
                        <ButtonAddBookmarks slug={recipeDetail.slug} />
                    </div>

                </div>
            </div>

            <div>
                <div className="p-4">
                    <h1 className="text-4xl font-bold capitalize">
                        {recipeDetail.title}
                    </h1>
                    <p className="text-gray-600">{recipeDetail.description}</p>
                </div>

                <div className="flex-col">
                    {recipeDetail.comments.map((el) => {
                        return <CommentCard comment={el} key={el._id} />
                    })}
                </div>

                {/* //write comment */}
                <div className="flex gap-3 mt-5 justify-end">
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="add comment ..."
                        required
                        value={text}
                        onChange={(e) => setComment(e.target.value)}
                        ref={inputRef}
                        className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#603F26"
                        className="size-8"
                        onClick={handleComment}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                </div>
            </div>

        </div>
    );
}
