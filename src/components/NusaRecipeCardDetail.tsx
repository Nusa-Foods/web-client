import CommentCard from "./CommentCard";

export default function NusaRecipeCardDetail() {
    return (
        <div className="flex-1 flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full sm:w-[90%] md:w-[90%] lg:w-[70%] xl:w-[50%] h-auto py-4 px-4">
            <div className="flex items-center justify-center p-4">
                <img
                    src="https://storage.googleapis.com/chef-gpt.appspot.com/recipes%2FcVoeu0HZhjZhpPAZpyWy%2FcVoeu0HZhjZhpPAZpyWy.jpg"
                    alt="Recipe 1"
                    className="w-full h-auto rounded-lg"
                />
            </div>

            <div className="p-4">
                <h1 className="text-4xl font-bold">Banana Muffins</h1>
                <p className="text-gray-600">
                    A delicious homemade banana muffin recipe perfect for
                    breakfast or a snack.
                </p>
            </div>


        </div>
    );
}
