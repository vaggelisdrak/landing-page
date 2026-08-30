import type { Metadata } from "next";
import Link from "next/link";
import logoImage from "@/assets/images/logo.svg";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Privacy Policy | Prop Trading Assistant",
    description: "Privacy Policy for Prop Trading Assistant — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen py-16">
            <div className="container max-w-3xl">
                {/* Back to home */}
                <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-pink-400 text-sm transition-colors duration-200 mb-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                    Back to home
                </Link>

                <div className="bg-neutral-900/60 border border-white/10 rounded-3xl p-10 backdrop-blur-sm">
                    {/* Header */}
                    <div className="mb-10 pb-8 border-b border-white/10">
                        <Image src={logoImage} alt="Logo" className="mb-6 h-8 w-auto" />
                        <h1 className="text-4xl font-semibold mb-2">Privacy Policy</h1>
                        <p className="text-white/40 text-sm">Last updated: August 30, 2026</p>
                    </div>

                    <div className="prose prose-invert prose-sm max-w-none space-y-8 text-white/70 leading-relaxed">

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
                            <p>
                                Welcome to Prop Trading Assistant (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
                            <p>We may collect the following types of information:</p>
                            <ul className="list-disc pl-6 mt-3 space-y-2">
                                <li><strong className="text-white/90">Account Information:</strong> Name, email address, and password when you create an account.</li>
                                <li><strong className="text-white/90">Trading Data:</strong> Trade history, position sizes, and performance metrics provided by our EA plugin. We only receive read-only data — we never have access to execute trades on your behalf.</li>
                                <li><strong className="text-white/90">Usage Data:</strong> Pages visited, features used, and interaction logs to improve our service.</li>
                                <li><strong className="text-white/90">Device Information:</strong> Browser type, IP address, and operating system for security and analytics purposes.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
                            <p>We use the information we collect to:</p>
                            <ul className="list-disc pl-6 mt-3 space-y-2">
                                <li>Provide, operate, and maintain our platform and services.</li>
                                <li>Monitor your trading activity against your configured rules and send you alerts.</li>
                                <li>Improve, personalize, and expand our services.</li>
                                <li>Communicate with you, including sending service-related notices and updates.</li>
                                <li>Detect and prevent fraud, abuse, or security incidents.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">4. Data Security</h2>
                            <p>
                                We implement industry-standard security measures to protect your data. Your trading credentials are <strong className="text-white/90">never stored</strong> on our servers. Our EA plugin communicates with our platform using read-only data streams over encrypted connections. We are fully compliant with the terms of service of supported prop firms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">5. Data Sharing</h2>
                            <p>
                                We do not sell, trade, or otherwise transfer your personal information to third parties. We may share anonymized, aggregated data for analytics purposes. We may disclose your information if required by law or to protect our rights.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">6. Data Retention</h2>
                            <p>
                                We retain your personal data for as long as your account is active or as needed to provide services. You may request deletion of your account and associated data at any time by contacting us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
                            <p>Depending on your location, you may have the right to:</p>
                            <ul className="list-disc pl-6 mt-3 space-y-2">
                                <li>Access the personal data we hold about you.</li>
                                <li>Request correction of inaccurate data.</li>
                                <li>Request deletion of your data.</li>
                                <li>Object to or restrict processing of your data.</li>
                                <li>Data portability.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">8. Cookies</h2>
                            <p>
                                We use essential cookies to keep you logged in and to maintain your preferences. We may also use analytics cookies to understand how the platform is used. You can control cookies through your browser settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">9. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:{" "}
                                <a href="mailto:v.drakontaeidis@gmail.com" className="text-pink-400 hover:text-pink-300 transition-colors">
                                    v.drakontaeidis@gmail.com
                                </a>
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </main>
    );
}
