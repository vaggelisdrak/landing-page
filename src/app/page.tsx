import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Comparison from "@/sections/Comparison";
import Metrics from "@/sections/Metrics";
import LogoTicker from "@/sections/LogoTicker";
import VideoDemo from "@/sections/VideoDemo";
import Introduction from "@/sections/Introduction";
import Integrations from "@/sections/Integrations";
import Faqs from "@/sections/Faqs";
import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";
import Features from "@/sections/Features";
import CardSwapSection from "@/sections/CardSwapSection";
import Testimonials from "@/sections/Testimonials";

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
