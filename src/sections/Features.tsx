'use client';

const features = [
    {
        title: "Asset Library",
        description: "Organize your design assets with our comprehensive library system",
        size: "large"
    },
    {
        title: "Code Preview",
        description: "See your designs come to life with real-time code generation",
        size: "medium"
    },
    {
        title: "Flow Mode",
        description: "Create seamless user flows and interactions",
        size: "medium"
    },
    {
        title: "Smart Sync",
        description: "Keep your team in sync with automatic updates",
        size: "small"
    },
    {
        title: "Auto Layout",
        description: "Responsive layouts that adapt automatically",
        size: "large"
    },
    {
        title: "Fast Search",
        description: "Find anything in your project instantly",
        size: "small"
    },
];

import Tag from "@/components/Tag";
import StockChart from "@/components/StockChart";
import SearchRules from "@/components/SearchRules";
import FloatingNotifications from "@/components/FloatingNotifications";
import { motion } from "framer-motion";

export default function Features() {
    return (
        <section className="py-24 mb-24">
            <div className="container">
                <div className="text-center mb-16">
                    <div className="flex justify-center">
                        <Tag>Features</Tag>
                    </div>
                    <h2 className="text-6xl font-medium mt-6">
                        Where <span className="text-lime-400">power</span> meets simplicity
                    </h2>
                    <p className="text-white/50 mt-4 text-lg max-w-2xl mx-auto">
                        Everything you need to create amazing designs and streamline your workflow
                    </p>
                </div>
                
                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`
                                bg-gradient-to-br from-white/10 to-white/5 
                                backdrop-blur-sm border border-white/20 
                                rounded-2xl p-6 lg:p-8 
                                hover:bg-black/20 hover:border-white/30 
                                transition-all duration-300 
                                hover:-translate-y-1
                                cursor-pointer group
                                ${feature.size === 'large' 
                                    ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' 
                                    : feature.size === 'medium' 
                                    ? 'md:col-span-1 lg:col-span-2' 
                                    : 'md:col-span-1 lg:col-span-1 lg:row-span-2'
                                }
                            `}
                        >
                            <div className="h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-9 h-9 bg-lime-400 rounded-lg flex items-center justify-center transition-transform duration-300">
                                            <div className="w-6 h-6 bg-neutral-950 rounded"></div>
                                        </div>
                                        <h3 className={`font-semibold text-white group-hover:text-lime-400 transition-colors duration-300 ${
                                            feature.size === 'large' ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'
                                        }`}>
                                            {feature.title}
                                        </h3>
                                    </div>
                                    <p className={`text-white/70 group-hover:text-white/90 transition-colors duration-300 ${
                                        feature.size === 'large' ? 'text-lg' : 'text-base'
                                    }`}>
                                        {feature.description}
                                    </p>
                                </div>
                                
                                {feature.size === 'large' && (
                                    <div className="mt-6 relative">
                                        <div className="w-full h-32 bg-transparent rounded-lg border border-lime-400/30 relative overflow-hidden">
                                            {/* Asset Library Animation */}
                                            {feature.title === "Asset Library" && (
                                                <>
                                                    {/* Grid of assets */}
                                                    <div className="absolute inset-4 grid grid-cols-4 gap-2">
                                                        {Array.from({ length: 8 }).map((_, i) => (
                                                            <motion.div
                                                                key={i}
                                                                className="bg-white/20 rounded aspect-square"
                                                                initial={{ opacity: 0.5 }}
                                                                animate={{ 
                                                                    opacity: [0.5, 1, 0.5],
                                                                    scale: [1, 1.05, 1]
                                                                }}
                                                                transition={{
                                                                    duration: 2,
                                                                    delay: i * 0.2,
                                                                    repeat: Infinity,
                                                                    repeatDelay: 3
                                                                }}
                                                            />
                                                        ))}
                                                    </div>
                                                    
                                                    {/* Floating notifications */}
                                                    <FloatingNotifications />
                                                </>
                                            )}
                                            
                                            {/* Auto Layout Animation */}
                                            {feature.title === "Auto Layout" && (
                                                <StockChart />
                                            )}
                                        </div>
                                    </div>
                                )}
                                
                                {/* Fast Search Animation for small grids */}
                                {feature.title === "Fast Search" && (
                                    <SearchRules />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
