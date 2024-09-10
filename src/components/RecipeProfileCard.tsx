import { RecipeType } from "@/type";
import Link from "next/link";

export default function RecipeProfileCard({ recipe }: { recipe: RecipeType }) {
    console.log("ini recipe", recipe);
    return (
        <Link
            href={`/discover/${recipe.slug}`}
            className="flex flex-col bg-white border rounded-lg shadow-md overflow-hidden"
        >
            <div className="w-full h-48 bg-gray-300 overflow-hidden">
                <img
                    src={recipe.imgUrl}
                    alt="Recipe Image"
                    className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
            </div>
            <div className="p-4">
                <h1 className="text-lg font-bold">{recipe.title}</h1>
                <p className="text-md text-gray-600">{recipe.description}</p>
                <p className="text-md text-gray-600">{recipe.likes?.length} likes</p>
            </div>
        </Link>
    );
}
