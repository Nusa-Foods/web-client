"use client";

import { ChangeEvent, FormEvent, KeyboardEvent, useState } from "react";

export default function aiPage() {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

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

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(ingredients, 'ingredients>>>')
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
            </div>
        </div>
    );
}
