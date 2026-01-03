'use client';

import Tag from "@/components/Tag";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        question: "How does Prop Trading Assistant monitor my trades?",
        answer: "Our platform connects to your trading account via API and monitors every trade in real-time. It tracks your position sizes, drawdown, daily loss, time restrictions, and all rule parameters specific to your prop firm challenge.",
    },
    {
        question: "Which prop firms are supported?",
        answer: "We support all major prop firms including FTMO, MyForexFunds, The5ers, E8 Funding, FundedNext, and many more. Our system automatically adapts to each firm's specific rules and requirements.",
    },
    {
        question: "Will I get alerts before breaking rules?",
        answer: "Yes! Our intelligent alert system warns you before you breach any rules. You'll receive notifications when approaching risk limits, daily loss thresholds, or any time-based restrictions, giving you time to adjust your positions.",
    },
    {
        question: "Is my trading data secure?",
        answer: "Absolutely. We use bank-level encryption for all data transmission and storage. Your trading credentials are never stored, and we only use read-only API access. We're fully compliant with financial data protection standards.",
    },
    {
        question: "Can I track multiple prop firm accounts?",
        answer: "Yes! You can monitor multiple prop firm accounts simultaneously. Our dashboard gives you a clear overview of all your challenges, their current status, and compliance levels in one place.",
    },
    {
        question: "How quickly are violations detected?",
        answer: "Our system monitors your trades in real-time with latency under 1 second. You'll be notified immediately when any metric approaches a violation threshold, ensuring you have maximum time to respond.",
    },
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
                    Questions? We&apos;ve got <span className="text-lime-400">answers</span>
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
                                    className={twMerge("feather feather-plus text-lime-400 flex-shrink-0 transition duration-300", 
                                        selectedIndex === index && 'rotate-45')}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                            <AnimatePresence>
                                { selectedIndex === index && (
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
