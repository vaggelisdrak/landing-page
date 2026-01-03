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
    title: "Prop Trading Assistant | Real-Time Compliance Monitoring for Prop Firms",
    description: "Real-time compliance monitoring tool for prop traders. Get instant alerts for rule violations, risk limit breaches, and time restrictions. Pass your prop firm challenge with confidence.",
    keywords: [
        "prop trading",
        "proprietary trading",
        "prop firm challenge",
        "trading compliance",
        "risk management",
        "prop trading rules",
        "trading alerts",
        "FTMO challenge",
        "prop firm evaluation",
        "trading assistant",
        "real-time monitoring",
        "trading SaaS",
        "prop trader software",
        "challenge tracking",
        "rule compliance"
    ],
    authors: [{ name: "Prop Trading Assistant" }],
    creator: "Prop Trading Assistant",
    publisher: "Prop Trading Assistant",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://prop-trading-assistant.vercel.app"),
    alternates: {
        canonical: "/",
    },
    manifest: "/manifest.json",
    applicationName: "Prop Trading Assistant",
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: "Prop Trading Assistant",
    },
    openGraph: {
        title: "Prop Trading Assistant | Pass Your Prop Firm Challenge with Confidence",
        description: "Monitor your prop firm challenge in real-time. Get instant alerts before violating rules. Track daily loss, max drawdown, and trading time restrictions.",
        url: "https://prop-trading-assistant.vercel.app",
        siteName: "Prop Trading Assistant",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Prop Trading Assistant - Real-Time Compliance Monitoring",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Prop Trading Assistant | Real-Time Compliance Monitoring",
        description: "Real-time monitoring for prop traders. Get alerts before breaking challenge rules. Pass your FTMO or other prop firm challenges with confidence.",
        creator: "@proptradingapp",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: "your-google-verification-code",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Prop Trading Assistant',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web Browser',
        url: 'https://prop-trading-assistant.vercel.app',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
        description: 'Real-time compliance monitoring tool for proprietary traders. Get instant alerts for rule violations and pass your prop firm challenge with confidence.',
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '250',
        },
        featureList: [
            'Real-time rule monitoring',
            'Instant violation alerts',
            'Risk limit tracking',
            'Time-based restriction alerts',
            'Multi-prop firm support',
            'Dashboard analytics',
            'Daily loss tracking',
            'Maximum drawdown protection',
            'Trading days counter'
        ],
        screenshot: 'https://prop-trading-assistant.vercel.app/og-image.png',
    };

    return (
        
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
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
