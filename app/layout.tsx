import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontMono, fontSans } from "@/config/fonts";
import { Providers } from "./(home)/providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body className={`${fontMono.className} `}>
                <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
                    <div className="relative flex flex-col min-h-screen">
                        <Navbar />
                        <main className="flex-grow mx-auto w-full max-w-7xl pt-16 px-4 sm:px-4 lg:px-8">
                            {children}
                        </main>
                        <footer className="w-full flex items-center justify-center py-3">
                            <div className="text-center text-gray-400">
                                &copy; {new Date().getFullYear()}{" "}
                                <Link
                                    href="https://netgurusolution.co.uk"
                                    className="text-blue-500"
                                >
                                    Net Guru Solution
                                </Link>
                                . All rights reserved.
                            </div>
                        </footer>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
