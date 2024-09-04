import RecipeCard from "@/components/RecipeCard";
import SideBar from "@/components/SideBar";

export default function Discover() {
    return (
        <main className="flex-grow p-6">
            <h1 className="text-3xl font-bold mb-6">
                Discover Amazing Recipes
            </h1>

            <div className="grid grid-cols-1 gap-6 justify-items-center">
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
            </div>
        </main>
    );
}
