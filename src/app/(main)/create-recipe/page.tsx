export default function CreateRecipe() {
    return (
        <div className="min-h-screen flex flex-col md:flex-col justify-center items-center px-4 md:px-30 bg-[#F9FAFB]">
            <div className="md:w-1/2 lg:pr-8">
                <h1 className="text-2xl font-bold mb-4">
                    Effortless Perfect Recipe from Your Personal Chef
                </h1>
                <p className="text-gray-700 mb-4">
                    Share Your Culinary Creations to Nusa-Mates
                </p>
                <p className="text-gray-700">
                    Discover the joy of sharing your favorite recipes with a
                    community of food enthusiasts. Our platform allows you to
                    easily post and showcase your unique culinary creations.
                    Whether it's a cherished family recipe or a new dish you've
                    perfected, your contributions will inspire others and bring
                    delightful new ideas to their kitchens. Join our vibrant
                    community and let your recipes shine!
                </p>
            </div>

            <div className="md:w-full lg:pr-8">
                <form className="md:w-full">
                    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
                        <h1 className="text-xl font-bold mb-4">
                            {" "}
                            Input your best recipe here
                        </h1>
                        {/* Title */}
                        <div className="mb-4">
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                placeholder="Recipe Title"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Description */}
                        <div className="mb-4">
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Description
                            </label>
                            <input
                                type="text"
                                id="description"
                                placeholder="Recipe Description"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Image URL */}
                        <div className="mb-4">
                            <label
                                htmlFor="imgUrl"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Image URL
                            </label>
                            <textarea
                                id="imgUrl"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Image URL"
                            ></textarea>
                        </div>

                        {/* Banner URL */}
                        <div className="mb-4">
                            <label
                                htmlFor="bannerUrl"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Banner URL
                            </label>
                            <textarea
                                id="bannerUrl"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Banner URL"
                            ></textarea>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-center md:justify-between">
                            <button className="px-6 py-2 font-bold bg-custom-brown-1 text-white rounded-lg hover:bg-green-600 focus:outline-none">
                                Post Your Recipe
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
