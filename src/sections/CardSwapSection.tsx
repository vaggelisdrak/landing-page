'use client';

import CardSwap, { Card } from '@/components/CardSwap';
import Tag from "@/components/Tag";
import Image from "next/image";
import alertImage from "@/assets/images/alert_mini.png";            
import setupMainImage from "@/assets/images/setup_mini.png";
import tradingMainImage from "@/assets/images/trading_mini.png";
import dashboardMainImage from "@/assets/images/dashboard_mini.png";

export default function CardSwapSection() {
    return (
        <section className="md:py-32 md:mb-24 overflow-hidden">
            <div className="container">
                <div className="text-center mb-16">
                    <div className="flex justify-center">
                        <Tag>Features</Tag>
                    </div>
                    <h2 className="text-6xl font-medium mt-6">
                        How <span className="text-lime-400">TradeSentry</span> works
                    </h2>
                    <p className="text-white/50 mt-4 text-lg max-w-2xl mx-auto">
                        Real-time visual feedback that keeps you safe while you trade
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 order-1 lg:order-1">
                        <h3 className="text-4xl font-medium max-md:text-3xl">
                            Live trade monitoring at your fingertips
                        </h3>
                        <p className="text-white/70 text-lg">
                            Our intuitive interface provides real-time insights into your trading performance, ensuring you stay compliant with your prop firm&apos;s rules and make informed decisions to pass your challenge with confidence.  
                        </p>
                        <ul className="space-y-4 md:mr-10 pr-10">
                            <li className="flex items-start gap-3">
                                <div className="w-9 h-9 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-neutral-950 font-bold text-xl">1</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-white">Connect the plugin</h4>
                                    <p className="text-white/60">Setup the tool that monitors your trades in less than 2 min</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-9 h-9 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-neutral-950 font-bold text-xl">2</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-white">Choose Challenge</h4>
                                    <p className="text-white/60">Select your Prop Firm challenge and configure the trading rules</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-9 h-9 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-neutral-950 font-bold text-xl">3</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-white">Start trading</h4>
                                    <p className="text-white/60">Focus on your trading while we keep you safe with real-time alerts</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-9 h-9 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-neutral-950 font-bold text-xl">4</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-white">Track Progress</h4>
                                    <p className="text-white/60">View your trading performance and improvements over time</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="order-2 lg:order-2" style={{ height: '700px', minHeight: '500px', position: 'relative' }}>
                    <CardSwap
                        width="min(550px, 95vw)"
                        height="min(400px, 70vw)"
                        cardDistance={60}
                        verticalDistance={70}
                        delay={5000}
                        pauseOnHover={false}
                    >
                        <Card className="overflow-hidden border-2 border-transparent bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl shadow-[0_0_10px_rgba(192,132,252,0.2)] hover:shadow-[0_0_20px_rgba(192,132,252,0.4)] transition-shadow duration-300">
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl relative">
                                <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center z-10">
                                    <span className="text-neutral-950 font-bold text-xl">1</span>
                                </div>
                                <Image src={setupMainImage} alt="Setup" className="w-full h-full object-cover rounded-xl" />
                            </div>
                        </Card>
                        <Card className="overflow-hidden border-2 border-transparent bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl shadow-[0_0_10px_rgba(192,132,252,0.2)] hover:shadow-[0_0_20px_rgba(192,132,252,0.4)] transition-shadow duration-300">
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl relative">
                                <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center z-10">
                                    <span className="text-neutral-950 font-bold text-xl">2</span>
                                </div>
                                <Image src={tradingMainImage} alt="Trading" className="w-full h-full object-cover rounded-xl" />
                            </div>
                        </Card>
                        <Card className="overflow-hidden border-2 border-transparent bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl shadow-[0_0_10px_rgba(192,132,252,0.2)] hover:shadow-[0_0_20px_rgba(192,132,252,0.4)] transition-shadow duration-300">
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl relative">
                                <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center z-10">
                                    <span className="text-neutral-950 font-bold text-xl">3</span>
                                </div>
                                <Image src={alertImage} alt="Alert" className="w-full h-full object-cover rounded-xl" />
                            </div>
                        </Card>
                        <Card className="overflow-hidden border-2 border-transparent bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl shadow-[0_0_10px_rgba(192,132,252,0.2)] hover:shadow-[0_0_20px_rgba(192,132,252,0.4)] transition-shadow duration-300">
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl relative">
                                <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center z-10">
                                    <span className="text-neutral-950 font-bold text-xl">4</span>
                                </div>
                                <Image src={dashboardMainImage} alt="Dashboard" className="w-full h-full object-cover rounded-xl" />
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
