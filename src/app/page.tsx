import dynamic from "next/dynamic";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";

const Comparison = dynamic(() => import("@/sections/Comparison"));
const Metrics = dynamic(() => import("@/sections/Metrics"));
const LogoTicker = dynamic(() => import("@/sections/LogoTicker"));
const VideoDemo = dynamic(() => import("@/sections/VideoDemo"));
const CardSwapSection = dynamic(() => import("@/sections/CardSwapSection"));
const Introduction = dynamic(() => import("@/sections/Introduction"));
const Integrations = dynamic(() => import("@/sections/Integrations"));
const Testimonials = dynamic(() => import("@/sections/Testimonials"));
const Faqs = dynamic(() => import("@/sections/Faqs"));
const CallToAction = dynamic(() => import("@/sections/CallToAction"));
const Footer = dynamic(() => import("@/sections/Footer"));

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Comparison />
            <Metrics />
            <LogoTicker />
            <VideoDemo />
            <section id="features">
                {/* <Features /> */}
                <br/>
                <br/>
                <br/>
                <br/>
                <CardSwapSection />
            </section>
            <Introduction />
            <section id="integrations">
                <Integrations />
            </section>
            <Testimonials />
            <section id="faqs">
                <Faqs />
            </section>
            <CallToAction />
            <Footer />
        </div>
    );
}

