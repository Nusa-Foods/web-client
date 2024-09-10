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
    const [currentUserId, setCurrentUserId] = useState<String>("");

    const getCurrentUserId = async () => {
        const userId = cookies.get("Authorization")?.split(" ")[1];
        const userInfo = await verifyTokenJose(userId as string);
        setCurrentUserId(userInfo);
    };
    useEffect(() => {
        getCurrentUserId();
    }, []);

    const getUser = async (authorId: string) => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/user/${params.id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const data = await response.json();
        setUser(data);
    };
    const getUserId = async () => {
        const userId = cookies.get("Authorization")?.split(" ")[1];
        const userInfo = await verifyTokenJose(userId as string);
        getUser(userInfo);
    };

    useEffect(() => {
        getUserId();
    }, []);
    console.log("ini user", user);
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

                            {/* Profile Header */}
                            <div className="max-w-3xl justify-center flex">
                                <div className="w-full bg-white rounded-lg shadow-md p-4">
                                    <div className="flex flex-col md:flex-row md:items-center p-4">
                                        {/* Profile Picture & Info */}
                                        <div className="flex items-center w-full md:w-auto">
                                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                                                <img
                                                    src={user?.imageUrl || "/cheff.svg"}
                                                    alt="Profile Picture"
                                                    className="w-full h-full object-cover"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="ml-4 text-center md:text-left">
                                                <h1 className="text-xl font-bold">{user.username}</h1>
                                                <p className="text-sm text-gray-600">{user.email}</p>
                                            </div>
                                        </div>

                                        {/* User Stats */}
                                        <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto mt-4 md:mt-0">
                                            <div className="text-center md:text-left">
                                                <span className="block text-lg font-bold">
                                                    {user.recipe ? user.recipe.length : 0}
                                                </span>
                                                <span className="text-sm text-gray-600">Recipes</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Profile Bio */}
                                    <div className="mt-4 ms-10 text-center md:text-left">
                                        <p className="text-sm text-gray-500">
                                            {user.bio || "Koki Pemula"}
                                        </p>
                                    </div>

                                    {/* Profile Edit or Chat Button */}
                                    <div className="flex items-center justify-end">
                                        {user._id === currentUserId ? (
                                            <Link href="/profile/update">
                                                <div className="mt-4 text-center">
                                                    <button className="bg-custom-brown-1 text-white py-2 px-6 rounded-lg shadow hover:bg-custom-brown-2 transition">
                                                        Edit Profile
                                                    </button>
                                                </div>
                                            </Link>
                                        ) : (
                                            <ButtonChat userId={user._id as string} />
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Recipes Section */}
                            <div className="max-w-3xl mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-2">
                                {user.recipe &&
                                    user.recipe.map((e, i) => {
                                        return <RecipeProfileCard key={i} recipe={e} />;
                                    })}
                            </div>
                        </main>
                    </div>
                </div>
            </>

        </>
    );
}
