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
                "https://7d86-180-244-163-147.ngrok-free.app/user/register",
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
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                    <h2 className="text-2xl font-bold text-center mb-6">
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
                                placeholder=""
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                placeholder="example@email.com"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {isLoading ? "Memuat..." : "Sign Up"}
                        </button>
                    </form>
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-blue-600 hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
