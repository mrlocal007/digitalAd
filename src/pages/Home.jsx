import Hero from "../sections/Hero";
import ServicesSection from "../sections/ServicesSection";
import WhyModernConcepts from "../sections/WhyModernConcepts";
import DigitalProductsSection from "../sections/DigitalProductsSection";
import IndustriesSection from "../sections/IndustriesSection";
import MediaStudioSection from "../sections/MediaStudioSection";

export default function Home() {
    return (
        <>
            <Hero />

            <ServicesSection />

            <WhyModernConcepts />

            <DigitalProductsSection />

            <IndustriesSection />

            <MediaStudioSection />
        </>
    );
}