"use client";
import { UserType } from "@/type";
import { useState, useEffect, useRef } from "react";
import { useCookies } from "next-client-cookies";
import { verifyTokenJose } from "@/helpers/jwt";
import { logout } from "@/actions";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProfilDropdown() {
    const [open, setOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [user, setUser] = useState<UserType>();
    const cookies = useCookies();
    const router = useRouter();
    useEffect(() => {
        const getUser = async (authorId: string) => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/user/${authorId}`,
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
        getUserId();
    }, []);
    // Close the dropdown if clicked outside

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }

        // Bind the event listener when the dropdown is open
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);
    const handleLogout = () => {
        logout();
        router.push("/login");
    };
    if (cookies.get("Authorization"))
        return (
            <div className="flex justify-center items-center h-[35px]">
                <div
                    ref={dropdownRef}
                    className="w-20 flex justify-center items-center"
                >
                    <div
                        onClick={() => setOpen(!open)}
                        className={`flex justify-end border-b-4 border-transparent py-3 ${open
                            ? "border-indigo-700 transform transition duration-300"
                            : ""
                            }`}
                    >
                        <div className="flex justify-center items-center space-x-3 cursor-pointer">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <img
                                    src={
                                        user?.imageUrl
                                            ? user.imageUrl
                                            : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>'
                                    }
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {open && (
                            <div className="absolute w-60 px-5 py-3 bg-white rounded-lg shadow border mt-[55px] z-50">
                                <ul className="space-y-3">
                                    <li className="font-medium">
                                        <div className="font-semibold text-gray-900 text-lg">
                                            <div className="cursor-pointer">
                                                {user?.username}
                                            </div>
                                        </div>
                                    </li>
                                    <li className="font-medium">
                                        <Link
                                            href={`/profile/${user?._id}`}
                                            className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                                        >
                                            <div className="mr-3">
                                                <svg
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    stroke="#603F26"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                    />
                                                </svg>
                                            </div>
                                            Account
                                        </Link>
                                    </li>
                                    <li className="font-medium">
                                        <Link
                                            href="/profile/update"
                                            className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                                        >
                                            <div className="mr-3">
                                                <svg
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    stroke="#603F26"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                </svg>
                                            </div>
                                            Setting
                                        </Link>
                                    </li>
                                    <hr className="" />
                                    <li className="font-medium">
                                        <div onClick={handleLogout}>
                                            <p
                                                className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600"
                                            >
                                                <div className="mr-3 text-red-600">
                                                    <svg
                                                        className="w-6 h-6"
                                                        fill="none"
                                                        stroke="#C7253E"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                        />
                                                    </svg>
                                                </div>
                                                Logout
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        );
}
