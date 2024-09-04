import RecipeCard from "@/components/RecipeCard";
import SideBar from "@/components/SideBar";

export default function Discover() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Sidebar */}
            <SideBar />

            {/* Main content */}
            <main className="flex-grow p-6">
                <h1 className="text-3xl font-bold mb-6">Discover Amazing Recipes</h1>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 justify-items-center">
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                </div>
            </main>
        </div>
    );
}
