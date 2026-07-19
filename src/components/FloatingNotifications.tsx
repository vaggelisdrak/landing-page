'use client';

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

const notifications = [
    {
        id: 1,
        sender: "Risk Manager",
        message: "Did you forget about the daily loss limit? Where is your stop loss?",
        time: "now",
        accent: "bg-pink-400",
    },
    {
        id: 2,
        sender: "Discipline Bot",
        message: "Three revenge trades in a row. Bold strategy...",
        time: "10s",
        accent: "bg-purple-400",
    },
    {
        id: 3,
        sender: "Wake-up Call",
        message: "Let me guess, you just broke the news rule...",
        time: "5s",
        accent: "bg-pink-400",
    },
    {
        id: 4,
        sender: "Discipline Bot",
        message: "Come on, you messed up the trailing loss rule again?",
        time: "30s",
        accent: "bg-rose-400",
    },
    {
        id: 5,
        sender: "Prop firm Manager",
        message: "Thank you for your failed trades aka donations to our firm.",
        time: "1m",
        accent: "bg-pink-500",
    },
    {
        id: 6,
        sender: "Your Bank Account",
        message: "You just spent $500 to another account. Are you sure you want to continue trading?",
        time: "1m",
        accent: "bg-pink-500",
    },
    {
        id: 7,
        sender: "Wake-up Call",
        message: "Nice job ignoring the rules again. You just blew up the account.",
        time: "1m",
        accent: "bg-purple-500",
    },
];

type FloatingNotificationsProps = {
    className?: string;
};

export default function FloatingNotifications({ className = "" }: FloatingNotificationsProps) {
    const [activeNotifications, setActiveNotifications] = useState<typeof notifications>([]);

    const dismissNotification = (id: number) => {
        setActiveNotifications((prev) => prev.filter((notification) => notification.id !== id));
    };

    useEffect(() => {
        const pickRandomBatch = (excludeIds: number[] = []) => {
            const pool = notifications.filter((notification) => !excludeIds.includes(notification.id));
            const source = pool.length >= 1 ? pool : notifications;
            const shuffled = [...source].sort(() => Math.random() - 0.5);
            const count = Math.floor(Math.random() * 2) + 1;

            return shuffled.slice(0, Math.min(count, shuffled.length));
        };

        const showNextBatch = () => {
            setActiveNotifications((current) => {
                const excludeIds = current.map((item) => item.id);
                return pickRandomBatch(excludeIds);
            });
        };

        // Initial load
        showNextBatch();

        let refreshTimeoutId: number | undefined;

        const intervalId = window.setInterval(() => {
            // Let existing cards animate out before showing the next random set.
            setActiveNotifications([]);
            refreshTimeoutId = window.setTimeout(() => {
                showNextBatch();
            }, 500);
        }, 10000);

        return () => {
            window.clearInterval(intervalId);
            if (refreshTimeoutId) {
                window.clearTimeout(refreshTimeoutId);
            }
        };
    }, []);

    return (
        <div className={`pointer-events-none flex flex-col items-end ${className}`}>
            <AnimatePresence>
                {activeNotifications.map((notification, index) => (
                    <motion.div
                        key={notification.id}
                        className="pointer-events-auto mb-3 w-full rounded-lg border border-white/10 bg-zinc-950/95 px-4 py-3 text-zinc-100 shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur"
                        initial={{ opacity: 0, x: 80, y: -8, scale: 0.96 }}
                        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 60, y: -8, scale: 0.96 }}
                        transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                    >
                        <div className="flex items-start gap-3">
                            <div className={`mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full ${notification.accent}`} />
                            <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-2">
                                    <p className="text-sm font-semibold leading-none tracking-tight">{notification.sender}</p>
                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            aria-label="Close notification"
                                            className="inline-flex h-5 w-5 items-center justify-center rounded text-zinc-400 transition hover:bg-white/10 hover:text-zinc-200"
                                            onClick={() => dismissNotification(notification.id)}
                                        >
                                            <X className="h-3.5 w-3.5" />
                                        </button>
                                    </div>
                                </div>
                                <p className="mt-1 text-sm leading-relaxed text-zinc-300">{notification.message}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
