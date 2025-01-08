import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import StoryblokProvider from "@/components/StoryblokProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "StoryBlok Next.js",
    description: "StoryBlok Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StoryblokProvider>
            <html lang="en">
                <body
                    className={`${inter.className} antialiased bg-blue-50`}
                >
                    <header>
                        <nav className={"container mx-auto px-4 w-full py-8 flex justify-between"}>
                            <Link href={"/"}>Home</Link>
                            <Link href={"/tours"}>Tours</Link>
                        </nav>
                    </header>
                    {children}
                </body>
            </html>
        </StoryblokProvider>
    );
}
