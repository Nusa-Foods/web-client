import RecipeCard from "@/components/RecipeCard";
import Link from "next/link";

export default function Discover() {
    return (
        <div className="min-h-flex flex-col md:flex-row justify-center">
            <div>
                <main className="flex-grow p-6">
                    <div className="flex justify-between items-center content-center mb-6">
                        <h1 className="text-3xl font-bold">
                            Discover Amazing Recipes
                        </h1>
                        <Link
                            href="/create-recipe"
                            className="border border-custom-brown-1 text-custom-brown-1 px-2 py-1 rounded-md"
                        >
                            Post Recipe
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 justify-items-center">
                        <div className="grid grid-cols-1 gap-6 justify-items-center">
                            <RecipeCard />
                            <RecipeCard />
                            <RecipeCard />
                            <RecipeCard />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
