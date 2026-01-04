'use client';

import CardSwap, { Card } from '@/components/CardSwap';
import Tag from "@/components/Tag";

export default function CardSwapSection() {
    return (
        <section className="md:py-32 md:mb-24 overflow-hidden">
            <div className="container">
                <div className="text-center mb-16">
                    <div className="flex justify-center">
                        <Tag>Interactive Experience</Tag>
                    </div>
                    <h2 className="text-6xl font-medium mt-6">
                        Your <span className="text-lime-400">rules</span> in motion
                    </h2>
                    <p className="text-white/50 mt-4 text-lg max-w-2xl mx-auto">
                        Real-time visual feedback that keeps you safe while you trade
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 order-1 lg:order-1">
                        <h3 className="text-4xl font-medium max-md:text-3xl">
                            Live rule monitoring at your fingertips
                        </h3>
                        <p className="text-white/70 text-lg">
                            Watch as our intelligent system tracks your trading metrics in real-time, providing instant visual alerts before you breach critical prop firm rules.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-9 h-9 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <div className="w-6 h-6 bg-neutral-950 rounded"></div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-white">Instant Alerts</h4>
                                    <p className="text-white/60">Get notified before you breach any rule, not after</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-9 h-9 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <div className="w-6 h-6 bg-neutral-950 rounded"></div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-white">Visual Tracking</h4>
                                    <p className="text-white/60">Beautiful, clear metrics that make sense at a glance</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-9 h-9 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <div className="w-6 h-6 bg-neutral-950 rounded"></div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-white">Stay Protected</h4>
                                    <p className="text-white/60">Focus on trading while we keep you safe</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-9 h-9 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <div className="w-6 h-6 bg-neutral-950 rounded"></div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-white">Stay Protected</h4>
                                    <p className="text-white/60">Focus on trading while we keep you safe</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="order-2 lg:order-2" style={{ height: '700px', minHeight: '500px', position: 'relative' }}>
                    <CardSwap
                        width="min(500px, 90vw)"
                        height="min(400px, 60vw)"
                        cardDistance={60}
                        verticalDistance={70}
                        delay={5000}
                        pauseOnHover={false}
                    >
                        <Card className="overflow-hidden">
                            <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl">
                                <div className="w-16 h-16 bg-lime-400 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(163,230,53,0.6),0_0_60px_rgba(163,230,53,0.3)] hover:shadow-[0_0_40px_rgba(163,230,53,0.8),0_0_80px_rgba(163,230,53,0.4)] transition-shadow duration-300">
                                    <div className="w-10 h-10 bg-neutral-950 rounded-lg"></div>
                                </div>
                                <h3 className="text-3xl font-semibold text-white mb-4">Daily Loss Alert</h3>
                                <p className="text-white/70 text-center text-lg">Monitor your daily drawdown in real-time</p>
                            </div>
                        </Card>
                        <Card className="overflow-hidden">
                            <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl">
                                <div className="w-16 h-16 bg-lime-400 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(163,230,53,0.6),0_0_60px_rgba(163,230,53,0.3)] hover:shadow-[0_0_40px_rgba(163,230,53,0.8),0_0_80px_rgba(163,230,53,0.4)] transition-shadow duration-300">
                                    <div className="w-10 h-10 bg-neutral-950 rounded-lg"></div>
                                </div>
                                <h3 className="text-3xl font-semibold text-white mb-4">Max Loss Protection</h3>
                                <p className="text-white/70 text-center text-lg">Never exceed your maximum loss limit</p>
                            </div>
                        </Card>
                        <Card className="overflow-hidden">
                            <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl">
                                <div className="w-16 h-16 bg-lime-400 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(163,230,53,0.6),0_0_60px_rgba(163,230,53,0.3)] hover:shadow-[0_0_40px_rgba(163,230,53,0.8),0_0_80px_rgba(163,230,53,0.4)] transition-shadow duration-300">
                                    <div className="w-10 h-10 bg-neutral-950 rounded-lg"></div>
                                </div>
                                <h3 className="text-3xl font-semibold text-white mb-4">Trading Days Tracker</h3>
                                <p className="text-white/70 text-center text-lg">Track your progress toward passing</p>
                            </div>
                        </Card>
                        <Card className="overflow-hidden">
                            <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl">
                                <div className="w-16 h-16 bg-lime-400 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(163,230,53,0.6),0_0_60px_rgba(163,230,53,0.3)] hover:shadow-[0_0_40px_rgba(163,230,53,0.8),0_0_80px_rgba(163,230,53,0.4)] transition-shadow duration-300">
                                    <div className="w-10 h-10 bg-neutral-950 rounded-lg"></div>
                                </div>
                                <h3 className="text-3xl font-semibold text-white mb-4">Trading Days Tracker</h3>
                                <p className="text-white/70 text-center text-lg">Track your progress toward passing</p>
                            </div>
                        </Card>
                    </CardSwap>
                </div>
                </div>
            </div>
            <br />
        </section>
    );
}
