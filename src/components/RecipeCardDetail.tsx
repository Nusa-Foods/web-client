import { RecipeType } from "@/type";
import CommentCard from "./CommentCard";

export default function RecipeCardDetail({ recipeDetail }: { recipeDetail: RecipeType }) {
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
                        <p className="text-xs sm:text-sm md:text-md mr-2 sm:mr-4 md:mr-6">
                            {recipeDetail.likes.length}
                        </p>
                    </div>

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
                                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                            />
                        </svg>
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
                            name
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
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#603F26" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>
                    </div>

                </div>
            </div>

            <div className="p-4">
                <h1 className="text-4xl font-bold capitalize">{recipeDetail.title}</h1>
                <p className="text-gray-600">
                    {recipeDetail.description}
                </p>
            </div>

            <div className="flex-col">
                <CommentCard />

                {/* Pakai yang di bawah, kirim datanya ke comment card */}
                {/* {recipeDetail.comments.map((el) => {
                    return <CommentCard />
                })} */}

            </div>
        </div>
    );
}
