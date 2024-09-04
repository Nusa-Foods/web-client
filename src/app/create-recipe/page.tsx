export default function CreateRecipe() {
    return (
        <>
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">Upload Recipe</h1>

                {/* titile */}
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input type="text" id="title" placeholder="Recipe Title" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                {/* description */}
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <input type="text" id="description" placeholder="Recipe Description" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                {/* image url */}
                <div className="mb-4">
                    <label htmlFor="imgUrl" className="block text-sm font-medium text-gray-700 mb-1">Image Url</label>
                    <textarea id="imgUrl" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Image Url"></textarea>
                </div>

                {/* banner url */}
                <div className="mb-4">
                    <label htmlFor="bannerUrl" className="block text-sm font-medium text-gray-700 mb-1">Banner Url</label>
                    <textarea id="bannerUrl" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Banner Url"></textarea>
                </div>

                {/* buttons */}
                <div className="flex justify-between">
                    <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none">Upload Recipe</button>
                </div>
            </div>

        </>
    )
}