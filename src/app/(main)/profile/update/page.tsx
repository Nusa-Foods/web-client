import { verifyTokenJose } from "@/helpers/jwt";
import { UserType } from "@/type";
import { useCookies } from "next-client-cookies";
import { useEffect, useState } from "react";

export default function UpdateProfilePage() {
    const cookies = useCookies();
    const [user, setUser] = useState<UserType | null>(null);
    const [currentUserId, setCurrentUserId] = useState<string>("");

    const getCurrentUserId = async () => {
        const token = cookies.get("Authorization")?.split(" ")[1];
        if (token) {
            const userInfo = await verifyTokenJose(token);
            setCurrentUserId(userInfo);
        }
    };

    const getUser = async (id: string) => {
        if (!id) return;
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/user/${id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.ok) {
                const data = await response.json();
                setUser(data);
            } else {
                console.error("Failed to fetch user data");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        const fetchUserData = async () => {
            await getCurrentUserId();
        };

        fetchUserData();
    }, []);

    useEffect(() => {
        if (currentUserId) {
            getUser(currentUserId);
        }
    }, [currentUserId]);

    console.log("ini user", user);

    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-full max-w-3xl p-6 bg-white shadow-md rounded-lg">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6">Profile Settings</h1>


                    {/* profile picture */}
                    <div className="flex items-center mb-6">
                        <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mr-4">
                            <img src="/mainLogo.png" alt="Profile Picture" className="object-cover w-full h-full" />
                        </div>
                        <button className="px-4 py-2 bg-custom-brown-3 text-custom-brown-1 font-bold rounded-lg hover:bg-custom-brown-4 focus:outline-none">Change Picture</button>
                    </div>

                    {/* username */}
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <input type="text" id="username" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    {/* email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input disabled type="email" id="email" placeholder="example@email.com" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    {/* bio */}
                    <div className="mb-4">
                        <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                        <textarea id="bio" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Write something about yourself..."></textarea>
                    </div>

                    {/* buttons */}
                    <div className="flex justify-between">
                        <button className="px-6 py-2 font-bold  bg-custom-brown-1 text-white rounded-lg hover:bg-custom-brown-2 focus:outline-none">Save Changes</button>
                        <button className="px-6 py-2 font-bold bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none">Delete Account</button>
                    </div>
                </div>
            </div>

        </>

    )

}