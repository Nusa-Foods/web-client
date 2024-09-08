"use client";
import showToast from "@/utils/toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/user/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email,
                        password,
                        username,
                    }),
                }
            );

            const data = await response.json();
            if (response.ok) {
                if (data.msg === "Email sudah terdaftar") {
                    showToast({ message: "Email sudah terdaftar" });
                    showToast({
                        message:
                            "Silakan daftar menggunakan email lain atau login dengan akun yang sudah ada",
                    });
                } else {
                    showToast({
                        message: "Berhasil membuat akun, silakan login",
                        type: "success",
                    });
                    router.push("/login");
                }
            } else {
                showToast({ message: "Gagal Register" });
                switch (data.msg) {
                    case "email Invalid email format":
                        setError("Format email kurang tepat");
                        break;
                    case "username String must contain at least 3 character(s)":
                        setError("Username minimal 3 huruf");
                        break;
                    case "password String must contain at least 7 character(s)":
                        setError("Password minimal 7 character");
                        break;

                    default:
                        setError("Gagal Register");
                        break;
                }
            }
        } catch (err) {
            console.error("Error during register:", err);
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
                        Create your account
                    </h2>
                    <form action="#" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                autoComplete="username"
                                placeholder=""
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
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
                                autoComplete="email"
                                placeholder="example@email.com"
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
                            className="w-full bg-custom-brown-2 text-white font-medium py-2 rounded-lg hover:bg-custom-brown-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {isLoading ? "Memuat..." : "Sign Up"}
                        </button>
                    </form>
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-custom-brown-1 hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
