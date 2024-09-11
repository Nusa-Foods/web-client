import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import "../globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const metadata: Metadata = {
    title: "Selamat Tinggal Stres Memasak!  | NusaFood",
    description: "Tulis, Simpan, Bagikan dan Dapatkan Resep-Resep Menarik dengan Komunitas Memasak Seluruh Dunia di NusaFoods",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <GoogleOAuthProvider
                clientId={process.env.GOOGLE_CLIENT_ID as string}
            >
                <main className="flex-grow px-30">{children}</main>
            </GoogleOAuthProvider>
        </div>
    );
}
