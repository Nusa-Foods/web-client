import Link from "next/link";

export default function RegisterPage() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                    <h2 className="text-2xl font-bold text-center mb-6">
                        Create your account
                    </h2>
                    <form action="#">
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
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="ImgUrl"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Image Url
                            </label>
                            <input
                                type="text"
                                id="ImgUrl"
                                placeholder=""
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="bio"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Bio
                            </label>
                            <textarea
                                id="bio"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder=""
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Sign Up
                        </button>
                    </form>
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-600 hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}