'use client';

import Tag from "@/components/Tag";
import ftmoIcon from "@/assets/images/ftmo_logo.png";
import Image from "next/image";
import { useRef, useState, Fragment } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type FtmoCardProps = {
    title: string;
    subtitle: string;
    badge: string;
    badgeColor: string;
    glowColor: string;
    accentColor: string;
    stats: { label: string; value: string }[];
};

function FtmoCard({
    title,
    subtitle,
    badge,
    badgeColor,
    glowColor,
    accentColor,
    stats,
}: FtmoCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 20 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
    const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    }

    function handleMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovered(false);
    }

    return (
        <div style={{ perspective: "1000px" }}>
            <div className="relative">
                {/* Glow aura */}
                <motion.div
                    className="absolute inset-0 rounded-3xl blur-2xl"
                    animate={{
                        opacity: isHovered ? 0.7 : 0.25,
                        scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ background: glowColor }}
                />

                {/* 3D card */}
                <motion.div
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                    className="relative cursor-pointer"
                >
                    {/* Card body */}
                    <div
                        className="relative rounded-3xl p-6 overflow-hidden border border-white/10"
                        style={{
                            background: "rgb(23,23,23)",
                            boxShadow: "0 25px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04) inset",
                        }}
                    >
                        {/* Glare overlay */}
                        <motion.div
                            className="pointer-events-none absolute inset-0 rounded-3xl"
                            animate={{ opacity: isHovered ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                background: useTransform(
                                    [glareX, glareY],
                                    ([x, y]) =>
                                        `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.10) 0%, transparent 65%)`
                                ),
                            }}
                        />

                        {/* Top edge highlight */}
                        <div
                            className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-3xl"
                            style={{
                                background: `linear-gradient(90deg, transparent, ${accentColor}80, transparent)`,
                            }}
                        />

                        {/* Left edge accent */}
                        <div
                            className="pointer-events-none absolute inset-y-0 left-0 w-px rounded-l-3xl"
                            style={{
                                background: `linear-gradient(180deg, transparent, ${accentColor}40, transparent)`,
                            }}
                        />

                        {/* Logo + badge row */}
                        <motion.div
                            className="flex items-center justify-between mb-5"
                            style={{ transform: "translateZ(25px)" }}
                            animate={{ y: isHovered ? -2 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div
                                className="flex items-center justify-center size-11 rounded-xl"
                                style={{
                                    background: `linear-gradient(135deg, ${accentColor}25 0%, ${accentColor}12 100%)`,
                                    boxShadow: `0 0 0 1px ${accentColor}35 inset`,
                                }}
                            >
                                <Image
                                    src={ftmoIcon}
                                    alt="FTMO logo"
                                    className="size-7 object-contain drop-shadow-lg"
                                />
                            </div>
                            <span
                                className="text-xs font-semibold px-2.5 py-1 rounded-full tracking-wide"
                                style={{
                                    background: `${badgeColor}22`,
                                    border: `1px solid ${badgeColor}50`,
                                    color: badgeColor,
                                }}
                            >
                                {badge}
                            </span>
                        </motion.div>

                        {/* Title + subtitle */}
                        <motion.div
                            style={{ transform: "translateZ(20px)" }}
                            className="mb-4"
                        >
                            <h3 className="text-lg font-bold tracking-wide text-white mb-1">{title}</h3>
                            <p className="text-white/40 text-xs leading-relaxed">{subtitle}</p>
                        </motion.div>

                        {/* Divider */}
                        <div
                            className="h-px w-full mb-4"
                            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }}
                        />

                        {/* Stats grid */}
                        <motion.div
                            style={{ transform: "translateZ(15px)" }}
                            className="grid grid-cols-2 gap-2.5"
                        >
                            {stats.map((s) => (
                                <div
                                    key={s.label}
                                    className="rounded-xl p-2.5"
                                    style={{
                                        background: `${accentColor}0d`,
                                        border: `1px solid ${accentColor}1a`,
                                    }}
                                >
                                    <p className="text-white/35 text-xs mb-0.5">{s.label}</p>
                                    <p
                                        className="text-sm font-semibold"
                                        style={{ color: accentColor }}
                                    >
                                        {s.value}
                                    </p>
                                </div>
                            ))}
                        </motion.div>

                        {/* Supported pill */}
                        <motion.div
                            style={{ transform: "translateZ(18px)" }}
                            className="mt-4 flex items-center justify-center"
                        >
                            <span
                                className="text-xs font-medium"
                                style={{ color: `${accentColor}b3` }}
                            >
                                ✓ Fully Supported
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

const FTMO_CARDS: FtmoCardProps[] = [
    // ── 1-Step Challenge ──────────────────────────────────────────────
    {
        title: "1-Step Challenge",
        subtitle: "Single-phase evaluation. Pass once, get funded.",
        badge: "1-Step",
        badgeColor: "rgb(251,113,133)",
        glowColor: "radial-gradient(ellipse at center, rgba(251,113,133,0.45) 0%, rgba(244,63,94,0.2) 60%, transparent 100%)",
        accentColor: "rgb(251,113,133)",
        stats: [
            { label: "Profit Target", value: "10%" },
            { label: "Max Daily Loss", value: "3%" },
            { label: "Max Trailing Loss", value: "10%" },
            { label: "Best Day Cap", value: "50%" },
        ],
    },
    // ── 1-Step Funded ─────────────────────────────────────────────────
    {
        title: "1-Step Funded",
        subtitle: "Funded rules after passing the 1-Step challenge.",
        badge: "Funded",
        badgeColor: "rgb(167,139,250)",
        glowColor: "radial-gradient(ellipse at center, rgba(167,139,250,0.45) 0%, rgba(139,92,246,0.2) 60%, transparent 100%)",
        accentColor: "rgb(167,139,250)",
        stats: [
            { label: "Max Daily Loss", value: "3%" },
            { label: "Max Trailing Loss", value: "10%" },
            { label: "Best Day Cap", value: "50%" },
            { label: "Overnight / News", value: "✗ / ✗" },
        ],
    },
    // ── 2-Step Phase 1 (Challenge) ────────────────────────────────────
    {
        title: "2-Step Phase 1",
        subtitle: "First phase of the standard two-step evaluation.",
        badge: "Challenge",
        badgeColor: "rgb(244,114,182)",
        glowColor: "radial-gradient(ellipse at center, rgba(244,114,182,0.45) 0%, rgba(236,72,153,0.2) 60%, transparent 100%)",
        accentColor: "rgb(244,114,182)",
        stats: [
            { label: "Profit Target", value: "10%" },
            { label: "Max Daily Loss", value: "5%" },
            { label: "Max Loss", value: "10%" },
            { label: "Min Trading Days", value: "4" },
        ],
    },
    // ── 2-Step Phase 2 (Verification) ────────────────────────────────
    {
        title: "2-Step Phase 2",
        subtitle: "Second verification phase before going live.",
        badge: "Verification",
        badgeColor: "rgb(232,121,249)",
        glowColor: "radial-gradient(ellipse at center, rgba(232,121,249,0.4) 0%, rgba(217,70,239,0.2) 60%, transparent 100%)",
        accentColor: "rgb(232,121,249)",
        stats: [
            { label: "Profit Target", value: "5%" },
            { label: "Max Daily Loss", value: "5%" },
            { label: "Max Loss", value: "10%" },
            { label: "Min Trading Days", value: "4" },
        ],
    },
    // ── 2-Step Funded ─────────────────────────────────────────────────
    {
        title: "2-Step Funded",
        subtitle: "Live funded account after passing both evaluation phases.",
        badge: "Funded",
        badgeColor: "rgb(192,132,252)",
        glowColor: "radial-gradient(ellipse at center, rgba(192,132,252,0.45) 0%, rgba(168,85,247,0.2) 60%, transparent 100%)",
        accentColor: "rgb(192,132,252)",
        stats: [
            { label: "Max Daily Loss", value: "5%" },
            { label: "Max Loss", value: "10%" },
            { label: "Overnight", value: "✗" },
            { label: "News Trading", value: "✗" },
        ],
    },
];

function ScrollingColumn({ cards, reverse = false }: { cards: FtmoCardProps[]; reverse?: boolean }) {
    return (
        <div
            className="flex flex-col gap-4 pb-4"
            style={{
                animation: `${reverse ? "scroll-down" : "scroll-up"} 90s linear infinite`,
            }}
        >
            {Array.from({ length: 2 }).map((_, i) => (
                <Fragment key={i}>
                    {cards.map((card) => (
                        <FtmoCard key={`${card.title}-${i}`} {...card} />
                    ))}
                </Fragment>
            ))}
        </div>
    );
}

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div>
                        <Tag>Integrations</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                            One simple integration
                        </h2>
                        <p className="text-white/50 mt-4 text-lg">
                            We currently support the FTMO prop trading firm and their entire suite of products — 1-Step, 2-Step and Funded accounts for any trading style standard/swing and for any currency. Many more prop firms are coming soon...
                        </p>
                    </div>

                    {/* Animated scrolling columns */}
                    <div
                        className="h-[600px] lg:h-[700px] overflow-hidden grid grid-cols-2 gap-4 mt-8 lg:mt-0"
                        style={{
                            maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
                            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
                        }}
                    >
                        <ScrollingColumn cards={FTMO_CARDS} />
                        <ScrollingColumn cards={[...FTMO_CARDS].reverse()} reverse />
                    </div>
                </div>
            </div>
        </section>
    );
}
