import { RecipeType } from "@/type";
import Link from "next/link";

export default function RecipeProfileCard({ recipe }: { recipe: RecipeType }) {
    // console.log("ini recipe", recipe);
    return (
        <Link
            href={`/discover/${recipe.slug}`}
            className="flex flex-col bg-white border rounded-lg shadow-md overflow-hidden h-full"
        >
            <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 bg-gray-300 overflow-hidden">
                <img
                    src={recipe.imgUrl}
                    alt="Recipe Image"
                    className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
            </div>
            <div className="flex flex-col justify-between flex-grow">
                <div className="px-4 mt-2">
                    <h1 className="text-lg font-bold sm:text-xl md:text-2xl">{recipe.title}</h1>
                    <p className="text-md text-gray-600 sm:text-lg md:text-xl">
                        {recipe.description}
                    </p>
                </div>
                <div className="p-4 mt-auto flex flex-col sm:flex-row md:flex-row lg:flex-row items-start lg:items-center">
                    <div className="flex flex-row items-center space-x-2">
                        <p className="text-md text-gray-600 mr-2">
                            {recipe.likes?.length} {recipe.likes?.length > 1 ? "likes | " : "like | "}
                        </p>
                        <p className="text-md text-gray-600 mr-2">
                            {recipe.comments?.length} {recipe.comments?.length > 1 ? "comments" : "comment"}
                        </p>
                    </div>
                    <p className="text-md text-gray-600 italic mt-0  sm:mt-0 sm:ml-auto md:mt-0 md:ml-auto lg:mt-0 lg:ml-auto">
                        posted on {recipe.createdAt.slice(0, 10)}
                    </p>
                </div>
            </div>
        </Link>
    );

}
