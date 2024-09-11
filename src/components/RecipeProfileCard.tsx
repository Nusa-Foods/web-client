import { RecipeType } from "@/type";
import Link from "next/link";

export default function RecipeProfileCard({ recipe }: { recipe: RecipeType }) {
    // console.log("ini recipe", recipe);
    return (
        <Link
            href={`/discover/${recipe.slug}`}
            className="flex flex-col bg-white border rounded-lg shadow-md overflow-hidden h-full"
        >
            <div className="w-full h-48 bg-gray-300 overflow-hidden">
                <img
                    src={recipe.imgUrl}
                    alt="Recipe Image"
                    className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
            </div>
            <div className="flex flex-col justify-between flex-grow">
                <div className="px-4 mt-2">
                    <h1 className="text-lg font-bold">{recipe.title}</h1>
                    <p className="text-md text-gray-600">{recipe.description}</p>
                </div>
                <div className="p-4 mt-auto flex items-center">
                    <p className="text-md text-gray-600 mr-2">
                        {recipe.likes?.length} {recipe.likes?.length > 1 ? "likes | " : "like | "}
                    </p>
                    <p className="text-md text-gray-600 mr-2">
                        {recipe.comments?.length} {recipe.comments?.length > 1 ? "comments" : "comment"}
                    </p>
                    <p className="text-md text-gray-600 italic ml-auto">
                        posted on {recipe.createdAt.slice(0, 10)}
                    </p>
                </div>



            </div>
        </Link>
    );

}
