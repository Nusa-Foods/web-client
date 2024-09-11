"use client";

import { RecipeType } from "@/type";
import { MouseEvent, useState } from "react";
import {
    EmailShareButton,
    FacebookShareButton,
    LineShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    LineIcon,
    LinkedinIcon,
    TelegramIcon,
    WhatsappIcon,
    XIcon,
} from "react-share";
export default function ButtonShare({ recipe }: { recipe: RecipeType }) {
    const [isShareOpen, setIsShareOpen] = useState(false); // state to control modal

    const handleShareClick = (event: MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsShareOpen(true);
    };

    const handleCloseModal = () => {
        setIsShareOpen(false);
    };

    return (
        <>
            {/* Share Modal */}
            {isShareOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-4 rounded-lg w-3/4 md:w-1/2 lg:w-1/3">
                        <div className="flex justify-between mb-4">
                            <h2 className="text-xl font-bold">
                                Share resep
                            </h2>
                            <button
                                className="text-red-600 font-bold text-lg"
                                onClick={handleCloseModal}
                            >
                                X
                            </button>
                        </div>
                        <div className="flex justify-around">
                            <FacebookShareButton
                                url={`${process.env.NEXT_PUBLIC_BASE_URL}/discover/${recipe.slug}`}
                            >
                                <div className="flex flex-col justify-center items-center gap-1">
                                    <FacebookIcon size={32} round={true} />
                                    Facebook
                                </div>
                            </FacebookShareButton>
                            <TwitterShareButton
                                title={`${recipe.title}`}
                                hashtags={[
                                    "NusantaraFood",
                                    "DeliciousRecipes",
                                    "Cooking",
                                ]}
                                related={["recipeAccount", "foodLover"]}
                                url={`${process.env.NEXT_PUBLIC_BASE_URL}/discover/${recipe.slug}`}
                            >
                                <div className="flex flex-col justify-center items-center gap-1">
                                    <XIcon size={32} round={true} />X
                                </div>
                            </TwitterShareButton>
                            <LinkedinShareButton
                                url={`${process.env.NEXT_PUBLIC_BASE_URL}/discover/${recipe.slug}`}
                            >
                                <div className="flex flex-col justify-center items-center gap-1">
                                    <LinkedinIcon size={32} round={true} />
                                    LinkedIn
                                </div>
                            </LinkedinShareButton>
                            <WhatsappShareButton
                                title={`${recipe.title}`}
                                url={`${process.env.NEXT_PUBLIC_BASE_URL}/discover/${recipe.slug}`}
                            >
                                <div className="flex flex-col justify-center items-center gap-1">
                                    <WhatsappIcon size={32} round={true} />
                                    WhatsApp
                                </div>
                            </WhatsappShareButton>
                            <TelegramShareButton
                                title={`${recipe.title}`}
                                url={`${process.env.NEXT_PUBLIC_BASE_URL}/discover/${recipe.slug}`}
                            >
                                <div className="flex flex-col justify-center items-center gap-1">
                                    <TelegramIcon size={32} round={true} />
                                    Telegram
                                </div>
                            </TelegramShareButton>
                            <EmailShareButton
                                subject="Check out this amazing Nusantara recipe!"
                                body={`Hi, I found this delicious recipe (${recipe.title}) that you might like. Link : `}
                                url={`${process.env.NEXT_PUBLIC_BASE_URL}/discover/${recipe.slug}`}
                            >
                                <div className="flex flex-col justify-center items-center gap-1">
                                    <EmailIcon size={32} round={true} />
                                    Email
                                </div>
                            </EmailShareButton>
                            <LineShareButton
                                title={`${recipe.title}`}
                                url={`${process.env.NEXT_PUBLIC_BASE_URL}/discover/${recipe.slug}`}
                            >
                                <div className="flex flex-col justify-center items-center gap-1">
                                    <LineIcon size={32} round={true} />
                                    Line
                                </div>
                            </LineShareButton>
                        </div>
                    </div>
                </div>
            )}
            <div
                className="flex items-center space-x-2"
                onClick={(event) => handleShareClick(event)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#603F26"
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 cursor-pointer"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                </svg>
            </div>
        </>
    );
}
