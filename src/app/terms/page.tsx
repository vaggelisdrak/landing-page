import type { Metadata } from "next";
import Link from "next/link";
import logoImage from "@/assets/images/logo.svg";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Terms & Conditions | Prop Trading Assistant",
    description: "Terms and Conditions for using the Prop Trading Assistant platform.",
};

export default function TermsPage() {
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
                        <h1 className="text-4xl font-semibold mb-2">Terms &amp; Conditions</h1>
                        <p className="text-white/40 text-sm">Last updated: August 30, 2026</p>
                    </div>

                    <div className="prose prose-invert prose-sm max-w-none space-y-8 text-white/70 leading-relaxed">

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
                            <p>
                                By accessing or using Prop Trading Assistant (&quot;the Service&quot;), you agree to be bound by these Terms &amp; Conditions. If you do not agree to these terms, please do not use the Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">2. Description of Service</h2>
                            <p>
                                Prop Trading Assistant is a software-as-a-service platform that helps prop traders monitor their trading activity against prop firm rules and custom personal rules. The Service provides real-time alerts, dashboards, and compliance tracking tools. It is not a financial advisory service and does not execute trades.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">3. No Financial Advice</h2>
                            <p>
                                The Service is a monitoring and alerting tool only. Nothing in the Service constitutes financial, investment, or trading advice. You are solely responsible for all trading decisions you make. We expressly disclaim any liability for trading losses, challenge failures, or account violations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">4. EA Plugin &amp; Data Access</h2>
                            <p>
                                Our platform requires the installation of an Expert Advisor (EA) plugin on your MetaTrader 5 (MT5) terminal. By installing the plugin, you authorize it to send read-only trading data (positions, equity, account metrics) to our servers for monitoring purposes. We do not have the ability to place, modify, or close trades through the plugin without your explicit configuration and consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">5. Prop Firm Compliance</h2>
                            <p>
                                You are solely responsible for ensuring your use of the Service complies with the terms and conditions of your prop firm. We do not guarantee that use of our platform is permitted by any specific prop firm. Always verify with your prop firm before using third-party monitoring tools.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">6. Account Responsibilities</h2>
                            <p>You are responsible for:</p>
                            <ul className="list-disc pl-6 mt-3 space-y-2">
                                <li>Maintaining the confidentiality of your account credentials.</li>
                                <li>All activity that occurs under your account.</li>
                                <li>Ensuring your use of the Service does not violate any applicable laws or regulations.</li>
                                <li>Providing accurate information during registration.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">7. Availability &amp; Uptime</h2>
                            <p>
                                We strive to maintain high availability of the Service but do not guarantee uninterrupted access. The Service may be temporarily unavailable due to maintenance, upgrades, or factors beyond our control. We are not liable for any losses resulting from service downtime.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">8. Limitation of Liability</h2>
                            <p>
                                To the maximum extent permitted by law, Prop Trading Assistant shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, trading capital, or prop firm challenge fees, arising from your use of or inability to use the Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">9. Modifications to the Service</h2>
                            <p>
                                We reserve the right to modify, suspend, or discontinue any part of the Service at any time. We will provide reasonable notice of significant changes where possible. Continued use of the Service after changes constitutes acceptance of the updated terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">10. Governing Law</h2>
                            <p>
                                These Terms shall be governed by and construed in accordance with applicable law. Any disputes arising from these Terms shall be resolved through good-faith negotiation or, if necessary, through the appropriate legal channels.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">11. Contact</h2>
                            <p>
                                For questions about these Terms &amp; Conditions, please contact us at:{" "}
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
