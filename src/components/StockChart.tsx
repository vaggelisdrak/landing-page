'use client';

import { motion } from "framer-motion";

export default function StockChart() {
    return (
        <div className="absolute inset-4 flex flex-col justify-between">
            {/* Forex pair and price */}
            <div className="flex justify-between items-start text-xs">
                <span className="text-lime-400 font-medium">EUR/USD</span>
                <motion.span 
                    className="text-white font-mono"
                    animate={{ color: ["#ffffff", "#84cc16", "#ffffff"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    1.0847
                </motion.span>
            </div>
            
            {/* Stock chart */}
            <div className="flex-1 flex items-end justify-between px-1 pb-2">
                {Array.from({ length: 12 }).map((_, i) => {
                    const height = Math.random() * 60 + 20;
                    const isGreen = Math.random() > 0.5;
                    return (
                        <motion.div
                            key={i}
                            className="flex flex-col items-center gap-1"
                            initial={{ height: 0 }}
                            animate={{ height }}
                            transition={{
                                duration: 0.8,
                                delay: i * 0.1,
                                repeat: Infinity,
                                repeatDelay: 4,
                                repeatType: "reverse"
                            }}
                        >
                            {/* Candlestick body */}
                            <motion.div
                                className={`w-2 ${isGreen ? 'bg-lime-400' : 'bg-red-400'} rounded-sm`}
                                style={{ height: height * 0.6 }}
                                animate={{
                                    backgroundColor: isGreen 
                                        ? ["#84cc16", "#65a30d", "#84cc16"]
                                        : ["#f87171", "#dc2626", "#f87171"]
                                }}
                                transition={{
                                    duration: 2,
                                    delay: i * 0.1,
                                    repeat: Infinity
                                }}
                            />
                            {/* Candlestick wick */}
                            <div 
                                className="w-0.5 bg-white/50"
                                style={{ height: height * 0.4 }}
                            />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
