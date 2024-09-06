export default function RecipeProfileCard() {
    return (
        <div className="flex flex-col bg-white border rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-48 bg-gray-300">
                <img
                    src="https://sweetsimplevegan.com/wp-content/uploads/2021/03/filipino-Banana-Cue-sweet-simple-vegan.jpg"
                    alt="Recipe Image"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="p-1">
                <h1 className="text-lg font-bold">Fried Banana</h1>
            </div>
        </div>
    )
}
