'use client';

import Tag from "@/components/Tag";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        question: "How does Prop Trading Assistant monitor my trades?",
        answer: "Our platform connects to your trading account via the EA (plugin) and monitors every trade in real-time. It tracks your position sizes, drawdown, daily loss, time restrictions, and all rule parameters specific to your prop firm challenge.",
    },
    {
        question: "Do I necessarily need the plugin?",
        answer: "Yes, (for now) you need to install our EA plugin on your MT5. We are currently working on a solution without any plugin installation.",
    },
    {
        question: "Which prop firms are supported?",
        answer: "We currently support FTMO, their 2-step, 1-step challenges as well as funded accounts. Many more prop firms are coming soon...",
    },
    {
        question: "Will I get alerts before breaking rules?",
        answer: "Yes! Our intelligent alert system warns you before you breach any rules. You'll receive notifications when approaching risk limits, daily loss thresholds, time-based restrictions, or any of your own rules, giving you time to adjust your positions.",
    },
    {
        question: "Can I add my own custom rules?",
        answer: "Yes! You can add your own custom rules to the platform and we'll monitor them for you. This includes rules about position sizing, min planned RR, max risk per trade, max consecutive losses, max open positions and more.",
    },
    {
        question: "Is my trading data secure?",
        answer: "Absolutely. Your trading credentials are never stored, and we only use read-only data from the EA plugin. We are fully compliant with the prop firms' terms of service.",
    },
    {
        question: "Can I track multiple prop firm accounts?",
        answer: "Yes! You can monitor multiple prop firm accounts simultaneously. Our dashboard gives you a clear overview of all your challenges, their current status, and compliance levels in one place.",
    },
    {
        question: "Will I only receive warning alerts or can the system close my trades automatically?",
        answer: "Currently the system only sends you warning alerts, but we are working on an optional feature that will allow you to automatically close your trades in critical scenarios, based on the rules you set. (We will never close your trades automatically without your permission)",
    },
    // {
    //     question: "How quickly are violations detected?",
    //     answer: "Our system monitors your trades in real-time with latency under 1 second. You'll be notified immediately when any metric approaches a violation threshold, ensuring you have maximum time to respond.",
    // },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>FAQs</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    Questions? We&apos;ve got <span className="text-pink-400">answers</span>
                </h2>
                <div className="mt-12 flex flex-col gap-6">
                    {faqs.map((faq, index) => (
                        <div key={faq.question} className="bg-neutral-900 rounded-2xl border border-white/10 p-6">
                            <div
                                onClick={() => setSelectedIndex(index)}
                                className="flex justify-between items-center">
                                <h3 className="font-medium">{faq.question}</h3>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={twMerge("feather feather-plus text-pink-400 flex-shrink-0 transition duration-300",
                                        selectedIndex === index && 'rotate-45')}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                            <AnimatePresence>
                                {selectedIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, marginTop: 0 }}
                                        animate={{ height: "auto", marginTop: 24 }}
                                        exit={{ height: 0, marginTop: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-white/50">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
