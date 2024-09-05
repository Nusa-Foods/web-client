"use client";
import showToast from "@/utils/toast";
import { useCookies } from "next-client-cookies";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const router = useRouter();
    const cookies = useCookies()

    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/login`, {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email, password }),
            });
            const data = await response.json();
            console.log(data, 'data login>>>');

            if (response.ok) {
                showToast({
                    message: "Selamat datang!",
                    type: "success",
                });
                cookies.set("Authorization", "Bearer " + data.accessToken)
                router.push("/");
            } else {
                if (data.msg === "Invalid Email/Password")
                    setError("Email / Password salah");
                showToast({ message: data.message });
            }
        } catch (err) {
            console.error("Error during login:", err);
            setError("An error occurred while logging in.");
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                    <Link href="/">
                        <div className="flex items-center space-x-2 justify-center">
                            <img
                                src="/mainLogo.png"
                                alt="Nusa Food Logo"
                                className="w-12 h-12"
                            />
                            <span className="text-2xl font-semibold text-[#1F2937]">
                                Nusa{" "}
                                <span className="text-[#3A2D18]">Food</span>
                            </span>
                        </div>
                    </Link>
                    <h2 className="text-md my-5 text-center mb-6">
                        Sign in to your account
                    </h2>
                    <form action="#" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="example@email.com"
                                autoComplete="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder=""
                                autoComplete="current-password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-custom-brown-2 text-white font-medium py-2 rounded-lg hover:bg-custom-brown-1 focus:outline-none"
                        >
                            Sign In
                        </button>
                    </form>
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don't have an account?{" "}
                        <Link
                            href="/register"
                            className="text-custom-brown-1 hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
