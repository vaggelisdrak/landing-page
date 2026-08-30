'use client';

import Tag from "@/components/Tag";
// import figmaIcon from "@/assets/images/figma-logo.svg";
// import notionIcon from "@/assets/images/notion-logo.svg";
// import slackIcon from "@/assets/images/slack-logo.svg";
// import relumeIcon from "@/assets/images/relume-logo.svg";
// import framerIcon from "@/assets/images/framer-logo.svg";
// import githubIcon from "@/assets/images/github-logo.svg";
import ftmoIcon from "@/assets/images/ftmo_logo.png";
// import IntegrationColumn from "@/components/IntegrationColumn";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// const integrations = [
//     { name: "Figma", icon: figmaIcon, description: "Figma is a collaborative interface design tool." },
//     { name: "Notion", icon: notionIcon, description: "Notion is an all-in-one workspace for notes and docs." },
//     { name: "Slack", icon: slackIcon, description: "Slack is a powerful team communication platform." },
//     { name: "Relume", icon: relumeIcon, description: "Relume is a no-code website builder and design system." },
//     { name: "Framer", icon: framerIcon, description: "Framer is a professional website prototyping tool." },
//     { name: "GitHub", icon: githubIcon, description: "GitHub is the leading platform for code collaboration." },
//     { name: "FTMO", icon: ftmoIcon, description: "FTMO is the leading prop trading platform in the world." },
// ];

// export type IntegrationsType = typeof integrations;

function FtmoCard() {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 20 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
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
        <div
            className="flex justify-center mt-8 lg:mt-0"
            style={{ perspective: "1000px" }}
        >
            {/* Glow aura */}
            <div className="relative">
                <motion.div
                    className="absolute inset-0 rounded-3xl blur-2xl"
                    animate={{
                        opacity: isHovered ? 0.7 : 0.3,
                        scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                        background: "radial-gradient(ellipse at center, rgba(244,114,182,0.5) 0%, rgba(168,85,247,0.3) 60%, transparent 100%)",
                    }}
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
                    className="relative w-72 cursor-pointer"
                >
                    {/* Card body */}
                    <div
                        className="relative rounded-3xl p-8 overflow-hidden border border-white/15"
                        style={{
                            background: "linear-gradient(135deg, rgba(30,30,40,0.95) 0%, rgba(15,15,25,0.98) 100%)",
                            boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05) inset",
                        }}
                    >
                        {/* Dynamic glare overlay */}
                        <motion.div
                            className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300"
                            animate={{ opacity: isHovered ? 1 : 0 }}
                            style={{
                                background: useTransform(
                                    [glareX, glareY],
                                    ([x, y]) =>
                                        `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.12) 0%, transparent 65%)`
                                ),
                            }}
                        />

                        {/* Top edge highlight */}
                        <div
                            className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-3xl"
                            style={{
                                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
                            }}
                        />

                        {/* Logo container with floating effect */}
                        <motion.div
                            className="flex justify-center"
                            style={{ transform: "translateZ(30px)" }}
                            animate={{ y: isHovered ? -4 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div
                                className="relative flex items-center justify-center size-28 rounded-2xl"
                                style={{
                                    background: "linear-gradient(135deg, rgba(244,114,182,0.15) 0%, rgba(168,85,247,0.1) 100%)",
                                    boxShadow: "0 0 0 1px rgba(244,114,182,0.2) inset",
                                }}
                            >
                                <Image
                                    src={ftmoIcon}
                                    alt="FTMO logo"
                                    className="size-20 object-contain drop-shadow-lg"
                                />
                            </div>
                        </motion.div>

                        {/* Text content */}
                        <motion.div
                            style={{ transform: "translateZ(20px)" }}
                            className="mt-6 text-center"
                        >
                            <div className="flex items-center justify-center gap-2 mb-1">
                                <h3 className="text-2xl font-semibold tracking-wide">FTMO</h3>
                                {/* Verified badge */}
                                <span
                                    className="text-xs font-medium px-2 py-0.5 rounded-full"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(244,114,182,0.2), rgba(168,85,247,0.2))",
                                        border: "1px solid rgba(244,114,182,0.35)",
                                        color: "rgb(244,114,182)",
                                    }}
                                >
                                    ✓ Live
                                </span>
                            </div>
                            <p className="text-white/45 text-sm leading-relaxed">
                                The leading prop trading platform in the world.
                            </p>
                        </motion.div>


                    </div>
                </motion.div>
            </div>
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
                        {/* <h2 className="text-6xl font-medium mt-6">
                            Works with <span className="text-pink-400">all major</span> platforms
                        </h2> */}
                        <h2 className="text-6xl font-medium mt-6">
                            One simple integration
                        </h2>
                        {/* <p className="text-white/50 mt-4 text-lg">
                            Seamlessly integrates with MetaTrader, cTrader, and all major prop firm platforms to monitor your trading in real-time.
                        </p> */}
                        <p className="text-white/50 mt-4 text-lg">
                            We currently support the FTMO prop trading firm and their entire suite of products (2-step, 1-step and funded accounts) for any currency. But many more prop firms are coming soon...
                        </p>
                    </div>
                    <div>
                        {/* === ANIMATED COLUMN (commented out — only 1 integration) ===
                        <div
                            className="h-[400px] lg:h-[800px] overflow-hidden grid md:grid-cols-2 gap-4 mt-8 lg:mt-0"
                            style={{
                                maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
                            }}
                        >
                            <IntegrationColumn integrations={integrations} />
                            <IntegrationColumn integrations={integrations.slice().reverse()} className="hidden md:flex" reverse />
                        </div>
                        === END ANIMATED COLUMN === */}

                        <FtmoCard />
                    </div>
                </div>
                <br />
            </div>
        </section>
    )
}
