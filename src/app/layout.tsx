import { ToastContainer } from "react-toastify";
import { CookiesProvider } from "next-client-cookies/server";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Say Goodbye to MealStress | Nusa Food",
    description: "Say Goodbye to MealStress by Discover NusaFoods",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <CookiesProvider>
                    <ToastContainer />
                    <main className="">{children}</main>
                </CookiesProvider>
            </body>
        </html>
    );
}
