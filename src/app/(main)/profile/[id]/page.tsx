"use client";
import RecipeProfileCard from "@/components/RecipeProfileCard";
import { RecipeType, UserType } from "@/type";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCookies } from "next-client-cookies";
import { verifyTokenJose } from "@/helpers/jwt";
import ButtonChat from "@/components/ButtonChat";
import ProfilDropdown from "@/components/ProfilDropdown";


export default function ProfilePage({ params }: { params: { id: string } }) {
    const cookies = useCookies();
    const [user, setUser] = useState<UserType>({});
    const [currentUserId, setCurrentUserId] = useState<string>("");
    const [recipes, setRecipes] = useState<RecipeType[]>([]);


    const getCurrentUserId = async () => {
        const token = cookies.get("Authorization")?.split(" ")[1];
        if (token) {
            const userInfo = await verifyTokenJose(token);
            setCurrentUserId(userInfo);
            console.log(currentUserId, 'currentUserId>>')
        }
    };

    const getUser = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/user/${params.id}`,
                {
                    headers: { "Content-Type": "application/json" },
                }
            );
            if (response.ok) {
                const data = await response.json();
                setUser(data);
                console.log("user>>>", data);
            } else {
                console.error("Failed to fetch user data.");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };


    const getRecipesById = async () => {
        console.log(params.id, '>>> di getrecipes by id')
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/recipe/byId/${params.id}`,
                {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    cache: "no-store",
                    credentials: "include",
                }
            );
            if (response.ok) {
                const data = await response.json();
                setRecipes(data);
                console.log(" recipes>>>", data);
            } else {
                console.error("Failed to fetch recipes.");
            }
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };

    useEffect(() => {
        getCurrentUserId();
    }, [cookies]);

    useEffect(() => {
        getUser();
        getRecipesById();
    }, [params.id]);


    return (
        <>
            <>
                <div className="min-h-screen py-5 bg-[#F9FAFB]">
                    <div className="container mx-auto px-4">
                        <main className="flex flex-col">
                            {/* Header */}
                            <div className="flex mb-6 justify-between">
                                <div className="flex flex-row items-center gap-4">
                                    <img
                                        src="https://www.chefgpt.xyz/assets/icons/settings.webp"
                                        alt="Setting"
                                        className="w-8 h-8"
                                    />
                                    <h1 className="text-3xl font-bold">Profile</h1>
                                </div>
                                <div className="flex">
                                    <ProfilDropdown />
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-center w-full px-4">
                                {/* Profile Header */}
                                <div className="xl:w-full w-full flex justify-center">
                                    <div className="w-full bg-white rounded-lg shadow-md">
                                        {/* Profile Edit or Chat Button */}
                                        <div className="flex items-center justify-end px-4 py-2">
                                            {user._id === currentUserId ? (
                                                <Link href="/profile/update">
                                                    <div className="mt-2 text-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#603F26" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                        </svg>
                                                    </div>
                                                </Link>
                                            ) : <div className="mt-8 text-center"></div>}
                                        </div>

                                        <div className="flex flex-col md:flex-row items-center p-4">
                                            {/* Profile Picture & Info */}
                                            <div className="flex flex-col items-center md:flex-row w-full md:w-auto">
                                                <div className="ml-4 w-24 h-24 md:w-32 md:h-32  xl:w-32 xl:h-32 rounded-full overflow-hidden">
                                                    <img
                                                        src={user?.imageUrl || "/blank-profpic.png"}
                                                        alt="Profile Picture"
                                                        className="w-auto  h-full object-cover"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="w-3/4 flex flex-col ml-0 md:ml-4 mt-4 md:mt-0 text-center md:text-left">
                                                    <h1 className="text-xl font-bold">{user.username}</h1>
                                                    <p className="text-md text-gray-500 mt-2">
                                                        {user.bio || "Koki Pemula"}
                                                    </p>

                                                    {/* User Stats */}
                                                    <div className="flex flex-row justify-center md:justify-start mt-4">
                                                        <p className="text-sm text-gray-600 mr-2">{user.email} |</p>
                                                        <p className="text-sm text-gray-600">
                                                            {user.recipe ? user.recipe.length : 0} {user.recipe?.length && user.recipe.length > 0 ? "recipes" : "recipe"}
                                                        </p>
                                                    </div>

                                                    {/* Chat Button */}
                                                    {user._id !== currentUserId && (
                                                        <div className="mt-4">
                                                            <ButtonChat userId={user._id as string} />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Recipes Section */}
                                <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 w-full">
                                    {recipes &&
                                        recipes.map((e, i) => {
                                            return <RecipeProfileCard key={i} recipe={e} />;
                                        })}
                                </div>
                            </div>

                        </main>
                    </div>
                </div>
            </>

        </>
    );
}
