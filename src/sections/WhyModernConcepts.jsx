import SectionTitle from "../components/ui/SectionTitle";
import FeatureCard from "../components/ui/FeatureCard";

import whyChooseUs from "../../data/whyChooseUs";

export default function WhyModernConcepts() {
    return (
        <section className="bg-white py-28">

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <SectionTitle
                    badge="OUR PROMISE"
                    title="Why"
                    highlight="Modern Concepts"
                    description="We are more than a software development company. We combine technology, AI, branding, media production and business consulting to become your long-term digital transformation partner."
                />

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {whyChooseUs.map((item) => (

                        <FeatureCard
                            key={item.title}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />

                    ))}

                </div>

            </div>

        </section>
    );
}