import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import "../globals.css";
import SideBar from "@/components/SideBar";

export const metadata: Metadata = {
    title: "Say Goodbye to MealStress | Nusa Food",
    description: "Say Goodbye to MealStress by Discover NusaFoods",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const specificRoute = "/resume"; // exclude specific router
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen">
                <ToastContainer />
                <div className="min-h-screen flex flex-col md:flex-row">
                    {/* Sidebar */}

                    <SideBar />

                    {/* Main content */}
                    <main className="flex-grow h-screen overflow-scroll">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
