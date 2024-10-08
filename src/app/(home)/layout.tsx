import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import "../globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow px-30">{children}</main>
            <Footer />
        </div>
    );
}
