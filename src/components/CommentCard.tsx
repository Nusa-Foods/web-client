export default function CommentCard() {
    return (
        <div className="flex items-center p-2 gap-2 flex-col sm:flex-row">
            <div className="w-16 h-16 flex-shrink-0">
                <img
                    src="https://storage.googleapis.com/chef-gpt.appspot.com/recipes%2FcVoeu0HZhjZhpPAZpyWy%2FcVoeu0HZhjZhpPAZpyWy.jpg"
                    alt="Recipe 1"
                    className="w-full h-full rounded-full object-cover"
                />
            </div>
            <div className="bg-gray-100 rounded-2xl w-full p-4 flex flex-col justify-start space-y-2">
                <div className="flex items-baseline justify-start space-x-2">
                    <b className="capitalize text-sm sm:text-base md:text-lg">nama</b>
                    <p className="text-xs sm:text-sm md:text-base">10 m</p>
                </div>
                <p className="text-xs sm:text-sm md:text-base break-words">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </div>
        </div>
    );
}
