import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    title: "Modern Design Tool Landing Page",
    description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        
        <html lang="en">
            <body
                className={`${inter.variable} font-sans antialiased text-white`}
            >
                <div className="min-h-screen w-full bg-black relative">
                    {/* Dark White Dotted Grid Background */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            background: "#000000",
                            backgroundImage: `
                                radial-gradient(circle, rgba(255, 255, 255, 0.08) 1.5px, transparent 1.5px)
                            `,
                            backgroundSize: "30px 30px",
                            backgroundPosition: "0 0",
                        }}
                    />
                    {/* Your Content/Components */}
                    <div className="relative z-10">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
