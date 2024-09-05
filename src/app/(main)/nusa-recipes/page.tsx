import NusaRecipeCard from "@/components/NusaRecipeCard";
import Link from "next/link";

export default function NusaPage() {
    return (
        <div className="min-h-screen py-10">
            <div className="container mx-auto px-4">
                <main className="flex flex-col items-center">
                    <div className="text-center mb-10 w-3/4">
                        <h1 className="text-3xl font-bold mb-4">
                            Curated Flavors of Nusantara Recipes
                        </h1>

                        <p>
                            Each recipe is carefully curated to offer a true taste of Indonesia's culinary traditions, ensuring that you experience the full flavors and techniques. Whether you're a seasoned cook or a curious foodie, Nusa Recipes brings the heart of Nusantara to your kitchen.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                        <NusaRecipeCard />
                        <NusaRecipeCard />
                        <NusaRecipeCard />
                        <NusaRecipeCard />
                        <NusaRecipeCard />
                        <NusaRecipeCard />
                        <NusaRecipeCard />
                        <NusaRecipeCard />
                    </div>
                </main>
            </div>
        </div>
    );
}
