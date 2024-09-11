import NusaRecipeCardDetail from "@/components/NusaRecipeCardDetail";
import ProfilDropdown from "@/components/ProfilDropdown";
import { RecipeType } from "@/type";

export default function NusaDetailsPage({ recipe }: { recipe: RecipeType }) {
    return (
        <div className="min-h-screen flex flex-col md:flex-row  bg-[#F9FAFB] w-full">
            <div className="w-full">
                <main className="flex flex-col">
                    {/* navbar */}
                    <div className="flex mb-6 pt-8 px-4 justify-between">
                        <div className="flex flex-row items-center gap-4">
                            <img
                                src="https://www.chefgpt.xyz/assets/icons/compass.webp"
                                alt="Nusa Food Discover"
                                className="w-8 h-8"
                            />
                            <h1 className="text-3xl font-bold">
                                Detail Resep
                            </h1>
                        </div>
                        <div className="flex">
                            <ProfilDropdown />
                        </div>
                    </div>

                    {/* Banner */}
                    <div className="relative h-25 sm:h-32 md:h-48 lg:h-64 hidden md:block">
                        <img
                            src={recipe.bannerUrl}
                            alt={recipe.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <h2
                                className="text-5xl font-bold text-white capitalize"
                                style={{
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
                                }}
                            >
                                {recipe.title}
                            </h2>
                        </div>

                    </div>

                    {/* Main content */}
                    <main className="mt-10 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 justify-items-center">
                            <NusaRecipeCardDetail recipe={recipe} />
                        </div>
                    </main>
                </main>
            </div>
        </div>
    );
}
