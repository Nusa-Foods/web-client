"use client";
import showToast from "@/utils/toast";
export default function Home() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <button
                className="border-blue-500 p-5"
                onClick={() => {
                    showToast({ message: "hello guys", type: "success" });
                }}
            >
                Click Me
            </button>
        </div>
    );
}
