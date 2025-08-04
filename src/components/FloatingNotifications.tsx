'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const notifications = [
    { id: 1, text: "New icon added", icon: "🎨" },
    { id: 2, text: "Image optimized", icon: "📸" },
    { id: 3, text: "Asset synced", icon: "⚡" },
    { id: 4, text: "Font uploaded", icon: "📝" },
];

export default function FloatingNotifications() {
    const [activeNotifications, setActiveNotifications] = useState<typeof notifications>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
            const newNotification = { ...randomNotification, id: Date.now() };
            
            setActiveNotifications(prev => [...prev, newNotification]);
            
            setTimeout(() => {
                setActiveNotifications(prev => prev.filter(n => n.id !== newNotification.id));
            }, 3000);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {activeNotifications.map((notification) => (
                <motion.div
                    key={notification.id}
                    className="absolute bg-lime-400 text-neutral-950 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg"
                    initial={{ 
                        opacity: 0, 
                        scale: 0.5,
                        x: Math.random() * 100 + 20,
                        y: Math.random() * 60 + 20
                    }}
                    animate={{ 
                        opacity: [0, 1, 1, 0], 
                        scale: [0.5, 1, 1, 0.8],
                        y: -20
                    }}
                    exit={{ 
                        opacity: 0, 
                        scale: 0.5,
                        y: -40
                    }}
                    transition={{ 
                        duration: 3,
                        ease: "easeOut"
                    }}
                >
                    <span>{notification.icon}</span>
                    <span>{notification.text}</span>
                </motion.div>
            ))}
        </AnimatePresence>
    );
}
