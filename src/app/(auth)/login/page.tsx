"use client";
import showToast from "@/utils/toast";
import { useCookies } from "next-client-cookies";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
    GoogleLogin,
    useGoogleOneTapLogin,
    CredentialResponse,
} from "@react-oauth/google";
import { GoogleLoginResponseType } from "@/type";

export default function LoginPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();
    const cookies = useCookies();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/user/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                }
            );
            const data = await response.json();

            if (response.ok) {
                showToast({
                    message: "Selamat datang!",
                    type: "success",
                });
                cookies.set("Authorization", "Bearer " + data.accessToken);
                router.push("/discover");
            } else {
                setError(
                    data.msg === "Invalid Email/Password"
                        ? "Email / Password salah"
                        : data.message
                );
                showToast({ message: data.message || "Gagal Masuk" });
            }
        } catch (err) {
            console.error("Error during login:", err);
            setError("An error occurred while logging in.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleCredentialResponse = async (
        credentialResponse: CredentialResponse
    ) => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/user/googleLogin`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        googleToken: credentialResponse.credential,
                    }),
                }
            );

            if (response.ok) {
                const data: GoogleLoginResponseType = await response.json();
                showToast({
                    message: "Selamat datang!",
                    type: "success",
                });
                cookies.set("Authorization", "Bearer " + data.accessToken);
                router.push("/discover");
            } else {
                showToast({ message: "Gagal Masuk" });
            }
        } catch (err) {
            console.error("Error during Google login:", err);
            setError("An error occurred while logging in.");
        } finally {
            setIsLoading(false);
        }
    };

    useGoogleOneTapLogin({
        onSuccess: handleCredentialResponse,
        onError: () => {
            showToast({ message: "Gagal Masuk" });
        },
    });

    return (
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
                            Nusa <span className="text-[#3A2D18]">Food</span>
                        </span>
                    </div>
                </Link>
                <h2 className="text-md my-5 text-center mb-6">
                    Masuk dengan Akun Anda
                </h2>

                {/* Google Login */}
                <div className="flex justify-center items-center w-full flex-1 mb-6">
                    <GoogleLogin
                        size="large"
                        theme="outline"
                        onSuccess={handleCredentialResponse}
                        onError={() => {
                            showToast({ message: "Gagal Masuk" });
                        }}
                    />
                </div>

                <h2 className="text-md  text-gray-500 mb-4 text-center">
                    atau masuk menggunakan email
                </h2>

                <form onSubmit={handleSubmit}>
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
                            autoComplete="current-password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-custom-brown-2 text-white font-medium py-2 rounded-lg hover:bg-custom-brown-1 focus:outline-none"
                        disabled={isLoading}
                    >
                        {isLoading ? "Loading..." : "Masuk"}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Belum punya akun?{" "}
                    <Link
                        href="/register"
                        className="text-custom-brown-1 hover:underline"
                    >
                        Daftar
                    </Link>
                </p>
            </div>
        </div>
    );
}
