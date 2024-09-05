"use client";

import { ChangeEvent, FormEvent, KeyboardEvent, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function AiPage() {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    const [mealType, setMealType] = useState<string>("");
    const [skillLevel, setSkillLevel] = useState<string>("");
    const [recipe, setRecipe] = useState<any>(null); // Update this type based on your expected response

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && inputValue) {
            setIngredients([...ingredients, inputValue]);
            setInputValue("");
        }
    };

    const removeIngredient = (ingredientToRemove: string) => {
        setIngredients(
            ingredients.filter(
                (ingredient) => ingredient !== ingredientToRemove
            )
        );
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleMealChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setMealType(e.target.value);
    };

    const handleSkillChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSkillLevel(e.target.value);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await fetch("http://localhost:3000/ai/recipe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ingredients: ingredients.join(", "),
                mealType,
                skillLevel,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            setRecipe(data.response);
        } else {
            // Handle error response here
            console.error("Failed to fetch recipe");
        }
    };

    return (
        <div className="min-h-screen py-10">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-5">
                    Effortless Recipes from What You Have!
                </h1>

                <form onSubmit={handleSubmit}>
                    {/* Input 1: Ingredients */}
                    <div className="mb-6">
                        <label
                            htmlFor="ingredients"
                            className="block text-lg font-medium text-gray-700 mb-2"
                        >
                            What ingredients do you have?
                        </label>
                        <div className="w-full px-4 py-2 border rounded-md focus-within:ring-2 focus-within:ring-indigo-500">
                            {ingredients.map((ingredient, index) => (
                                <span
                                    key={index}
                                    className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2"
                                >
                                    {ingredient}
                                    <button
                                        type="button"
                                        className="ml-2 text-indigo-500 hover:text-indigo-700"
                                        onClick={() =>
                                            removeIngredient(ingredient)
                                        }
                                    >
                                        &times;
                                    </button>
                                </span>
                            ))}
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                placeholder="Type an ingredient and press enter"
                                className="w-full p-2 outline-none border-none focus:outline-none focus:border-none"
                            />
                        </div>
                    </div>

                    {/* Input 2: Meal Type */}
                    <div className="mb-6">
                        <label
                            htmlFor="meal"
                            className="block text-lg font-medium text-gray-700 mb-2"
                        >
                            What meal do you want to cook?
                        </label>
                        <select
                            id="meal"
                            value={mealType}
                            onChange={handleMealChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option disabled value="">
                                Select your meal type
                            </option>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                            <option value="snack">Snack</option>
                            <option value="dessert">Dessert</option>
                        </select>
                    </div>

                    {/* Input 3: Cooking Skill */}
                    <div className="mb-6">
                        <label
                            htmlFor="chef"
                            className="block text-lg font-medium text-gray-700 mb-2"
                        >
                            Are you a good chef?
                        </label>
                        <select
                            id="chef"
                            value={skillLevel}
                            onChange={handleSkillChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option disabled value="">
                                Select your skill level
                            </option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="expert">Expert</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button className="bg-custom-brown-2 text-white font-medium py-2 px-6 rounded-md hover:bg-custom-brown-1 focus:outline-none w-full sm:w-auto">
                            Generate Recipe
                        </button>
                    </div>
                </form>

                {/* Display Recipe */}
                {recipe && (
                    <div className="mt-8">
                        <h2 className="text-xl font-bold mb-4">
                            {recipe.name}
                        </h2>
                        <img
                            src={recipe.imgUrl}
                            alt={recipe.name}
                            className="w-full h-auto mb-4"
                        />
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">
                                Ingredients:
                            </h3>
                            <ul className="list-disc list-inside">
                                {recipe.ingredients.map(
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
