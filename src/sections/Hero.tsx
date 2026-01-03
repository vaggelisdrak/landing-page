'use client';

import Button from "@/components/Button";
import Image from "next/image";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y:0, x:0 }, { duration: 0.5 }],
        ]);

        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [leftPointerScope.current, { x: -20, y: [0, 16, 0] }, { duration: 0.5, ease: "easeInOut" }],
        ]);

        rightDesignAnimate([
            [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
            [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        rightPointerAnimate([
            [rightPointerScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
            [rightPointerScope.current, { y: 0, x: 225 }, { duration: 0.5 }],
            [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5, ease: "easeInOut" }],
        ]);
    }, [leftDesignAnimate, leftPointerAnimate, rightDesignAnimate, rightPointerAnimate, leftDesignScope, leftPointerScope, rightDesignScope, rightPointerScope]);

    return (
    <section className="py-24 overflow-x-clip" style={{
        cursor: `url(${cursorYouImage.src}), auto`,
    }}>
        <div className="container relative">

            <motion.div ref={leftDesignScope} initial={{ opacity: 0, y: 100, x: -100 }} drag className="absolute -left-40 top-20 hidden lg:block">
                <Image src={designExample1Image} alt="Design Example 1" draggable='false' />
            </motion.div>
            <motion.div ref={leftPointerScope} initial={{ opacity: 0, y: 100, x: -200 }} className="absolute left-56 top-96 hidden lg:block">
                <Pointer name="Ray"/>
            </motion.div>

            <motion.div ref={rightDesignScope} initial={{ opacity: 0, y: 100, x: 100 }} drag className="absolute -right-72 -top-24 hidden lg:block">
                <Image src={designExample2Image} alt="Design Example 2" draggable='false'/>
            </motion.div>
            <motion.div ref={rightPointerScope} initial={{ opacity: 0, y: 100, x: 325 }} className="absolute right-80 -top-4 hidden lg:block">
                <Pointer name="Bryan" color="red"/>
            </motion.div>

            <div className="flex justify-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                    ✨ Trusted by 500+ Prop Traders
                </div>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                Pass Your Prop Firm Challenge with Confidence
            </h1>
            <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                Real-time compliance monitoring that alerts you before breaking any rules. 
                Stay compliant with risk limits, daily loss restrictions, and any trading time rules.
            </p>
            <form 
                className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto focus-within:border-white/40 focus-within:shadow-lg transition-all duration-300"
                onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href = 'https://prop-trading-assistant.vercel.app/sign-up';
                }}
            >
                <input 
                    type="text" 
                    placeholder="Join now =>" 
                    className="bg-transparent px-4 flex-1 min-w-0 outline-none focus:placeholder-white/70"
                />
                <Button type="submit" variant="primary" className="whitespace-nowrap px-4" size="sm">
                    Sign up
                </Button>
            </form>
        </div>
    </section>
    );
}
