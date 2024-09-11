"use client";

import ProfilDropdown from "@/components/ProfilDropdown";
import { ChangeEvent, FormEvent, KeyboardEvent, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function AiPage() {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    const [recipe, setRecipe] = useState<any>(null);

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && inputValue) {
            e.preventDefault(); // Prevent form submission
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
        console.log(ingredients, 'ingeedients>>')
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        console.log('triggereddd>>>')
        e.preventDefault();

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
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row  bg-[#F9FAFB] w-full">
            <div className="w-full">
                <main className="flex flex-col">
                    {/* navbar */}
                    <div className="flex mb-6 pt-8 px-4 justify-between">
                        <div className="flex flex-row items-center gap-4">
                            <img
                                src="https://www.chefgpt.xyz/assets/icons/cook_default.webp"
                                alt="Nusa Food Discover"
                                className="w-8 h-8"
                            />
                            <h1 className="text-3xl font-bold">
                                Your Personal Recipe
                            </h1>
                        </div>
                        <ProfilDropdown />
                    </div>

                    {/* Banner */}
                    <div className="h-48 sm:h-48 md:h-48 lg:h-64 static relative">
                        <img
                            src="banner14.jpg"
                            alt="banner"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0  flex flex-col justify-center items-center pl-4 pr-4">
                            <p className="text-lg text-white sm:text-sm  md:text-xl lg:text-2xl font-bold capitalize"
                                style={{
                                    textShadow: '4px 4px 4px rgba(0, 0, 0, 0.6)'
                                }}>
                                Cuma punya telur dan bayam?
                            </p>
                            <p className="text-lg text-white sm:text-sm  md:text-xl lg:text-2xl font-bold capitalize"
                                style={{
                                    textShadow: '4px 4px 4px rgba(0, 0, 0, 0.6)',
                                }}>
                                Ga Masalah!
                            </p>
                            <p className=" w-4/5 text-sm text-white text-center sm:text-base md:text-sm lg:text-xl text-black"
                                style={{
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'
                                }}>
                                Tidak perlu keluar rumah untuk temukan hidangan baru yang bisa langsung kamu buat. Memasak jadi lebih mudah dan menyenangkan dengan bahan yang kamu punya!
                            </p>
                        </div>
                    </div>

                    <div className="container mx-auto px-4 mt-10">
                        <main className="flex flex-col">

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

                        </main>
                    </div>
                </main>
            </div>
        </div>
    );
}
