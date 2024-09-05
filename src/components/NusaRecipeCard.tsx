import Link from "next/link";

export default function NusaRecipeCard() {
    return (
        <div className="bg-white p-6 rounded-md shadow-md max-w-sm mx-auto">
            <Link href="/nusa-recipes/details">
                <img
                    src="https://storage.googleapis.com/chef-gpt.appspot.com/recipes%2FcVoeu0HZhjZhpPAZpyWy%2FcVoeu0HZhjZhpPAZpyWy.jpg"
                    alt="Recipe 1"
                    className="w-full h-40 object-cover rounded-md mb-4"
                />

                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">Banana Muffins</h3>
                </div>

                {/* description */}
                <p className="text-gray-600 mb-2 text-sm">
                    A delicious homemade banana muffin recipe perfect for
                    breakfast or a snack.
                </p>
            </Link>

            <button className="bg-custom-brown-1 text-white font-medium py-2 px-4 rounded-md text-sm hover:bg-custom-brown-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Remove from Bookmarks
            </button>
        </div>
    );
}
