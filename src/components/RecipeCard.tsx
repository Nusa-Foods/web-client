import Link from "next/link";

export default function RecipeCard() {
    return (
        <>
            <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full sm:w-[90%] md:w-[90%] lg:w-[70%] xl:w-[50%] h-auto py-4 px-4">
                <Link href="/discover/details">
                    <div className="flex items-center justify-center p-4">
                        <img
                            src="https://storage.googleapis.com/chef-gpt.appspot.com/recipes%2FcVoeu0HZhjZhpPAZpyWy%2FcVoeu0HZhjZhpPAZpyWy.jpg"
                            alt="Recipe 1"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="pl-4 pr-4 flex items-center justify-between">
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
                                0 like
                            </p>
                        </div>

                        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
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
                                0 comment
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
                                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                                />
                            </svg>
                            <p className="text-xs sm:text-sm md:text-md mr-2 sm:mr-4 md:mr-6">
                                0 share
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
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                />
                            </svg>
                            <p className="text-xs sm:text-sm md:text-md mr-2 sm:mr-4 md:mr-6">
                                name
                            </p>
                        </div>
                    </div>
                    <div className="p-4">
                        <h1 className="text-4xl font-bold">Banana Muffins</h1>
                        <p className="text-gray-600">
                            A delicious homemade banana muffin recipe perfect
                            for breakfast or a snack.
                        </p>
                    </div>
                </Link>
                <div className="flex justify-center">
                    <Link
                        href="/bookmarks"
                        className="bg-custom-brown-1 text-white font-medium w-1/2 py-2 px-4 rounded-md text-sm hover:bg-custom-brown-2 focus:outline-none focus:ring-2 focus:ring-custom-brown-2 text-center hover:cursor-pointer"
                    >
                        Save Recipe
                    </Link>
                </div>
            </div>
        </>
    );
}
