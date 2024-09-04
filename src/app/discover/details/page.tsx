import RecipeCardDetail from "@/components/RecipeCardDetail";
import SideBar from "@/components/SideBar";

export default function Discover() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Sidebar */}
            <SideBar />

            <div>
                {/* Banner */}
                <div className="relative h-25 sm:h-32 md:h-48 lg:h-64">
                    <img
                        src="https://storage.googleapis.com/chef-gpt.appspot.com/recipes%2FcVoeu0HZhjZhpPAZpyWy%2FcVoeu0HZhjZhpPAZpyWy.jpg"
                        alt="Recipe 1"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-left p-4">
                        <h2 className="text-8xl font-bold text-white">Banana Muffins</h2>
                    </div>
                </div>


                {/* Main content */}
                <main className="flex-grow p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 justify-items-center">
                        <RecipeCardDetail />
                    </div>
                </main>
            </div>
        </div>
    );
}
