'use client';

import React, { useState, useEffect } from 'react';
import { X, Check, Eye } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Tag from '@/components/Tag';

import setupImg from '@/assets/images/carousel-setup.png';
import tradingImg from '@/assets/images/carousel-trading.png';
import aiAssistantImg from '@/assets/images/carousel-ai-assistant.png';
import analyticsSummaryImg from '@/assets/images/carousel-analytics-summary.png';
import financesImg from '@/assets/images/carousel-finances.png';

interface PreviewModal {
    title: string;
    image: StaticImageData;
    isWide?: boolean;
}

export default function Comparison() {
    const [selectedImage, setSelectedImage] = useState<PreviewModal | null>(null);

    const competitorPoints = [
        "Lose Funded/Evaluation Accounts: Accidental rule violations lead to account breaches.",
        "Impulsive Entries: You trade on feelings, skipping crucial confirmations and ignoring your personal trading rules.",
        "Emotional Blindness: You unknowingly repeat the same costly psychological mistakes.",
        "Manual Tracking: You waste time on messy spreadsheets and guesswork having no idea what you are doing wrong.",
        "Finances nightmare: You have no idea how much you're spending on challenges and how much you actually earn from payouts."
    ];

    const ourPoints = [
        "Protect Funded/Evaluation Accounts: Get real-time alerts before breaking any Prop Firm rules.",
        "Disciplined Execution: Add your own rules or use the preset ones and get alerted if you break them.",
        "AI Analysis: AI assistant helps you understand your behavior and improve your trading.",
        "Automated Insights: View progress for each account and detailed analytics for all of them.",
        "Financial Overview: Finally know exactly how much you spend and earn, for all your accounts."
    ];

    const ourPointImages: { image: StaticImageData; isWide?: boolean }[] = [
        { image: setupImg },
        { image: tradingImg },
        { image: aiAssistantImg },
        { image: analyticsSummaryImg, isWide: true },
        { image: financesImg }
    ];

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        if (selectedImage) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

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
                            <div className="rounded-3xl p-8 md:p-12 bg-neutral-950 h-full">
                                <h3 className="text-2xl md:text-3xl font-bold mb-8">
                                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Without the app</span>
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
                        <div className="rounded-3xl p-8 md:p-12 relative border border-pink-400 bg-neutral-950">
                            <h3 className="text-2xl md:text-3xl font-bold text-pink-400 mb-8">
                                With the app
                            </h3>
                            <ul className="space-y-4">
                                {ourPoints.map((point, index) => {
                                    const [key, ...rest] = point.split(':');
                                    const description = rest.join(':');
                                    const item = ourPointImages[index];
                                    return (
                                        <li key={index} className="flex items-start justify-between gap-3 group">
                                            <div className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                                                <span className="text-white text-base md:text-lg">
                                                    <span className="font-bold">{key}:</span>{description}
                                                </span>
                                            </div>
                                            {item?.image && (
                                                <button
                                                    onClick={() => setSelectedImage({ title: key, image: item.image, isWide: item.isWide })}
                                                    className="p-1.5 rounded-lg text-white/40 hover:text-pink-400 hover:bg-white/10 transition-all duration-200 flex-shrink-0 mt-0.5"
                                                    title={`Preview ${key}`}
                                                    aria-label={`Preview ${key}`}
                                                >
                                                    <Eye className="w-5 h-5 transition-transform group-hover:scale-110" />
                                                </button>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Image Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className={`relative w-full bg-neutral-900 border border-pink-400/40 rounded-2xl p-3 sm:p-5 shadow-2xl shadow-pink-500/15 max-h-[96vh] flex flex-col ${selectedImage.isWide ? 'max-w-7xl' : 'max-w-6xl'
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                            <h4 className="text-lg md:text-xl font-bold text-pink-400 flex items-center gap-2">
                                <Eye className="w-5 h-5" />
                                {selectedImage.title}
                                {selectedImage.isWide && (
                                    <span className="text-xs font-normal text-white/50 bg-white/10 px-2 py-0.5 rounded-full ml-2">
                                        Zoomed view • Scroll to explore
                                    </span>
                                )}
                            </h4>
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="p-1.5 text-white/60 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className={`relative rounded-xl bg-neutral-950 flex-1 max-h-[85vh] p-2 ${selectedImage.isWide ? 'overflow-auto' : 'overflow-hidden flex justify-center items-center'
                            }`}>
                            <Image
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                className={selectedImage.isWide
                                    ? "min-w-[900px] md:min-w-[1150px] w-full h-auto max-w-none rounded-lg"
                                    : "w-full h-auto max-h-[85vh] object-contain rounded-lg"
                                }
                                priority
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
