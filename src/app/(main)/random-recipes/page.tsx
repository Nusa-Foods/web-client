"use client";

import { ChangeEvent, FormEvent, KeyboardEvent, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function AiPage() {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [recipe, setRecipe] = useState<any>(null); // Update this type based on your expected response
    const [loading, setLoading] = useState<boolean>(false); // Add loading state

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when the fetch begins

        try {
            const response = await fetch("http://localhost:3000/ai/recipe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ingredients: ingredients.join(", "),
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setRecipe(data.response);
            } else {
                console.error("Failed to fetch recipe");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        } finally {
            setLoading(false); // Set loading to false after the fetch is done
        }
    };

    return (
        <div className="min-h-screen py-10 bg-[#F9FAFB]">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-5">
                    Do you have the courage to try a random recipe from us?
                </h1>

                <form onSubmit={handleSubmit}>
                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            className={`bg-custom-brown-2 text-white font-medium py-2 px-6 rounded-md hover:bg-custom-brown-1 focus:outline-none w-full sm:w-auto ${
                                loading ? "opacity-75 cursor-not-allowed" : ""
                            }`}
                            disabled={loading} // Disable button during loading
                        >
                            {loading
                                ? "Prepare your souls..." // Loading text
                                : "Generate Recipe"}
                        </button>
                    </div>
                </form>

                {/* Display Recipe */}
                {recipe && (
                    <div className="mt-8">
                        <h2 className="text-xl font-bold mb-4">
                            {recipe.title}
                        </h2>
                        <img
                            src={recipe.imgUrl}
                            alt={recipe.title}
                            className="w-full h-auto mb-4"
                        />
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">
                                Ingredients:
                            </h3>
                            <ul className="list-disc list-inside">
                                {recipe.ingredients &&
                                    recipe.ingredients.map(
                                        (
                                            [quantity, ingredient]: [
                                                string,
                                                string
                                            ],
                                            index: number
                                        ) => (
                                            <li key={index}>
                                                {quantity} {ingredient}
                                            </li>
                                        )
                                    )}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">
                                Nutrients:
                            </h3>
                            <ul className="list-disc list-inside">
                                {recipe.nutrients &&
                                    recipe.nutrients.map(
                                        (
                                            [quantity, nutrient]: [
                                                string,
                                                string
                                            ],
                                            index: number
                                        ) => (
                                            <li key={index}>
                                                {quantity} {nutrient}
                                            </li>
                                        )
                                    )}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">
                                Guide:
                            </h3>
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                className="prose prose-lg"
                            >
                                {recipe.guide}
                            </ReactMarkdown>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
