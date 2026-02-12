'use client';

import Button from "@/components/Button";
import Image from "next/image";
import dashboardMainImage from "@/assets/images/dashboard_main.png";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
    // const [leftDesignScope, leftDesignAnimate] = useAnimate();
    // const [leftPointerScope, leftPointerAnimate] = useAnimate();
    // const [rightDesignScope, rightDesignAnimate] = useAnimate();
    // const [rightPointerScope, rightPointerAnimate] = useAnimate();

    // useEffect(() => {
    //     leftDesignAnimate([
    //         [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
    //         [leftDesignScope.current, { y:0, x:0 }, { duration: 0.5 }],
    //     ]);

    //     leftPointerAnimate([
    //         [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
    //         [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
    //         [leftPointerScope.current, { x: -20, y: [0, 16, 0] }, { duration: 0.5, ease: "easeInOut" }],
    //     ]);

    //     rightDesignAnimate([
    //         [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
    //         [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    //     ]);

    //     rightPointerAnimate([
    //         [rightPointerScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
    //         [rightPointerScope.current, { y: 0, x: 225 }, { duration: 0.5 }],
    //         [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5, ease: "easeInOut" }],
    //     ]);
    // }, [leftDesignAnimate, leftPointerAnimate, rightDesignAnimate, rightPointerAnimate, leftDesignScope, leftPointerScope, rightDesignScope, rightPointerScope]);

    return (
    <section className="py-24 overflow-x-clip" style={{
        cursor: `url(${cursorYouImage.src}), auto`,
    }}>
        <div className="container relative">

            {/* <motion.div ref={leftDesignScope} initial={{ opacity: 0, y: 100, x: -100 }} drag className="absolute -left-40 top-20 hidden lg:block">
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
            </motion.div> */}

            {/* <div className="flex justify-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                    ✨ Trusted by 500+ Prop Traders
                </div>
            </div> */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-2">
                Stop violating Prop Firm<br />Challenge <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Rules</span>
            </h1>
            <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                Real-time monitoring that alerts you before breaking any prop firm trading rules. Stay compliant, and focus on your strategy.
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
            <br/>
            <br/>

            {/* Dashboard Image */}
            <div className="mt-20 flex justify-center">
                <div 
                    className="relative p-1 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 max-w-5xl"
                    // style={{
                    //     boxShadow: '0 0 20px rgba(192, 132, 252, 0.5), 0 0 40px rgba(244, 114, 182, 0.3), 0 0 60px rgba(192, 132, 252, 0.2)'
                    // }}
                >
                    <Image 
                        src={dashboardMainImage} 
                        alt="Dashboard" 
                        className="rounded-lg shadow-2xl w-full"
                    />
                </div>
            </div>
        </div>
    </section>
    );
}
