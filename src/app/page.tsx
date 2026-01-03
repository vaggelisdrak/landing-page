import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Introduction from "@/sections/Introduction";
import Integrations from "@/sections/Integrations";
import Faqs from "@/sections/Faqs";
import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";
import Features from "@/sections/Features";
import CardSwapSection from "@/sections/CardSwapSection";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <LogoTicker />
            <Introduction />
            <section id="features">
                <Features />
            </section>
            <CardSwapSection />
            <section id="integrations">
                <Integrations />
            </section>
            <section id="faqs">
                <Faqs />
            </section>
            <CallToAction />
            <Footer />
        </div>
    );
}
