import { RecipeType } from "@/type";
import CommentCard from "./CommentCard";

export default function NusaRecipeCardDetail({ recipe }: { recipe: RecipeType }) {
    return (
        <div className="flex-1 flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full sm:w-[90%] md:w-[90%] lg:w-[70%] xl:w-[50%] h-auto py-4 px-4">
            <div className="flex items-center justify-center p-4">
                <img
                    src="https://storage.googleapis.com/chef-gpt.appspot.com/recipes%2FcVoeu0HZhjZhpPAZpyWy%2FcVoeu0HZhjZhpPAZpyWy.jpg"
                    alt="Recipe 1"
                    className="w-full h-auto rounded-lg"
                />
            </div>

            <div className="p-4">
                <h1 className="text-4xl font-bold">{recipe.title}</h1>
                <p className="text-gray-600">
                    {recipe.description}
                </p>
            </div>


        </div>
    );
}
