'use client';

import { motion } from "framer-motion";

export default function SearchRules() {
    return (
        <div className="mt-4 relative">
            <div className="space-y-2">
                {/* Search bar */}
                <div className="bg-white/10 rounded-lg p-2 border border-white/20">
                    <motion.div 
                        className="text-xs text-white/70"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        🔍 Search components...
                    </motion.div>
                </div>
                
                {/* Search rules/filters */}
                <div className="space-y-1">
                    {["Type: Button", "Color: Primary", "Size: Large"].map((rule, i) => (
                        <motion.div
                            key={rule}
                            className="bg-lime-400/20 text-lime-400 text-xs px-2 py-1 rounded border border-lime-400/30"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: i * 0.5,
                                duration: 0.5,
                                repeat: Infinity,
                                repeatDelay: 3,
                                repeatType: "reverse"
                            }}
                        >
                            {rule}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
