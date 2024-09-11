"use client";

import ProfilDropdown from "@/components/ProfilDropdown";
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
        <div className="min-h-screen flex flex-col md:flex-row  bg-[#F9FAFB] w-full">
            <div className="w-full">
                <main className="flex flex-col">
                    {/* navbar */}
                    <div className="flex mb-6 pt-8 px-4 justify-between">
                        <div className="flex flex-row items-center gap-4">
                            <img
                                src="https://atlas-content-cdn.pixelsquid.com/stock-images/dice-B5mdRR0-600.jpg"
                                alt="Nusa Food Random"
                                className="w-8 h-8"
                            />
                            <h1 className="text-3xl font-bold">
                                Random Resep
                            </h1>
                        </div>
                        <ProfilDropdown />
                    </div>

                    {/* Banner */}
                    <div className="h-48 sm:h-48 md:h-48 lg:h-64 static relative">
                        <img
                            src="banner13.jpg"
                            alt="banner"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0  flex flex-col justify-center items-center pl-4 pr-4">
                            <p className="text-lg text-white sm:text-sm  md:text-xl lg:text-2xl font-bold capitalize"
                                style={{
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
                                }}>
                                Lagi Bingung Mau Masak Apa ?
                            </p>
                            <p className="text-lg text-white sm:text-sm  md:text-xl lg:text-2xl font-bold capitalize"
                                style={{
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
                                }}>
                                Sini Nusa Food kasih resep surprise untukmu!
                            </p>
                            <p className=" w-2/3 text-sm text-white text-center sm:text-base md:text-sm lg:text-xl text-black"
                                style={{
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
                                }}>
                                Mudah ditemukan dan siap diolah—dari hidangan favorit hingga kreasi baru. Semua resep dalam genggamanmu, siap memuaskan selera makanmu!
                            </p>
                        </div>
                    </div>


                    <div className="container mx-auto px-4">
                        <main className="flex flex-col">

                            <div className="container mt-10 mx-auto px-4 lg:px-8 max-w-4xl">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-5 text-center">
                                    Berani Coba Resep Random dari NusaFood?
                                </h1>

                                <form onSubmit={handleSubmit}>
                                    {/* Submit Button */}
                                    <div className="text-center">
                                        <button
                                            className={`bg-custom-brown-2 text-white font-medium py-2 px-6 rounded-md hover:bg-custom-brown-1 focus:outline-none w-full sm:w-auto ${loading ? "opacity-75 cursor-not-allowed" : ""
                                                }`}
                                            disabled={loading} // Disable button during loading
                                        >
                                            {loading
                                                ? "Persiapkan Dirimu..." // Loading text
                                                : "Buat Resep"}
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
                                                Bahan Masak:
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
                                                Nutrisi:
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
                                                Cara Memasak:
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
