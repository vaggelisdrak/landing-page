import React from 'react';
import { X, Check } from 'lucide-react';
import Tag from '@/components/Tag';

export default function Comparison() {
    const competitorPoints = [
        "Lose Funded/Evaluation Accounts: Accidental rule violations lead to account breaches.",
        "Impulsive Entries: You trade on feelings, skipping crucial confirmations.",
        "Emotional Blindness: You unknowingly repeat costly psychological mistakes.",
        "Manual Tracking: You waste time on messy spreadsheets and guesswork."
    ];

    const ourPoints = [
        "Protect Funded/Evaluation Accounts: Get alerts before breaking Prop Firm rules.",
        "Disciplined Execution: Mandatory checklists are forced before every trade.",
        "AI Analysis: AI instantly spots emotional bias in your history.",
        "Automated Insights: View progress with \"Spotify-wrapped\" weekly reports."
    ];

    return (
        <section className="py-24 overflow-x-clip">
            <div className="container">
                <div className="relative">
                    <div className="text-center mb-16">
                        <div className="flex justify-center">
                            <Tag>Benefits</Tag>
                        </div>
                        <h2 className="text-6xl font-medium mt-6">
                            Why choose TradeSentry
                        </h2>
                        <p className="text-white/50 mt-4 text-lg max-w-2xl mx-auto">
                            Real-time Big Brother that keeps you safe while you trade
                        </p>
                    </div>

                    {/* Comparison Cards */}
                    <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
                        {/* Competitor Card */}
                        <div className="rounded-3xl p-0.5 bg-gradient-to-r from-purple-400 to-pink-400">
                            <div className="rounded-3xl p-8 md:p-12 bg-neutral-950">
                                <h3 className="text-2xl md:text-3xl font-bold mb-8">
                                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Without the app</span> 😔
                                </h3>
                                <ul className="space-y-4">
                                    {competitorPoints.map((point, index) => {
                                        const [key, ...rest] = point.split(':');
                                        const description = rest.join(':');
                                        return (
                                            <li key={index} className="flex items-start gap-3">
                                                <X className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                                            <span className="text-white text-base md:text-lg">
                                                <span className="font-bold">{key}:</span>{description}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                            </div>
                        </div>

                        {/* Our Product Card */}
                        <div className="rounded-3xl p-8 md:p-12 relative border border-lime-400 bg-neutral-950">
                            <h3 className="text-2xl md:text-3xl font-bold text-lime-400 mb-8">
                                With the app 🤩
                            </h3>
                            <ul className="space-y-4">
                                {ourPoints.map((point, index) => {
                                    const [key, ...rest] = point.split(':');
                                    const description = rest.join(':');
                                    return (
                                        <li key={index} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                                            <span className="text-white text-base md:text-lg">
                                                <span className="font-bold">{key}:</span>{description}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
