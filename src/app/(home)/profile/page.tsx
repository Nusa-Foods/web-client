import RecipeProfileCard from "@/components/RecipeProfileCard"
import Link from "next/link"

export default function ProfilePage() {
    return (
        <>
            <div className="min-h-screen p-4">
                {/* Profile Header */}
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-4">
                    <div className="flex flex-col md:flex-row md:items-center p-4">
                        {/* User Info (Profile Picture and Username) */}
                        <div className="flex items-center w-full md:w-auto md:flex-1">
                            {/* Profile Picture */}
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                                <img
                                    src="/mainLogo.png"
                                    alt="Profile Picture"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* User Info */}
                            <div className="ml-4 text-center md:text-left">
                                <h1 className="text-xl font-bold">Username</h1>
                                <p className="text-sm text-gray-600">@userhandle</p>
                            </div>
                        </div>

                        {/* User Stats */}
                        <div className="flex flex-col md:flex-row md:items-center md:mr-5 w-full md:w-auto">
                            <div className="text-center md:text-left">
                                <span className="block text-lg font-bold">150</span>
                                <span className="text-sm text-gray-600">Recipes</span>
                            </div>
                        </div>
                    </div>



                    {/* Profile Bio */}
                    <div className="mt-4 text-center md:text-left">
                        <p className="text-sm">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                        </p>
                    </div>
                    {/* Edit Profile Button */}
                    <Link href={"/profile/update"}>
                        <div className="max-w-3xl mx-auto mt-4 text-center">
                            <button className="bg-custom-brown-1 text-white py-2 px-6 rounded-lg shadow hover:bg-custom-brown-2">
                                Edit Profile
                            </button>
                        </div>
                    </Link>
                </div>

                {/* Recipes */}
                <div className="max-w-3xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-2">
                    <RecipeProfileCard />
                    <RecipeProfileCard />
                    <RecipeProfileCard />
                    <RecipeProfileCard />
                    <RecipeProfileCard />
                </div>
            </div>

        </>
    )
}