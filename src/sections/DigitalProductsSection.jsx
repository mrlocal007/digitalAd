import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import SectionTitle from "../components/ui/SectionTitle";
import products from "../../data/products";
import ProductCard from "../components/ui/ProductCard";

export default function DigitalProductsSection() {
    return (
        <section className="relative overflow-hidden bg-white py-28">

            {/* Background Decoration */}

            <div className="absolute inset-0">

                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl" />

                <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-100/30 blur-3xl" />

            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                <SectionTitle
                    badge="DIGITAL PRODUCTS"
                    title="Powerful SaaS Platforms"
                    highlight="Built For Growth"
                    description="Modern, scalable and secure software products designed to simplify operations, improve productivity and accelerate business growth."
                />

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {products.map((product) => (

        <ProductCard
            key={product.title}
            title={product.title}
            category={product.category}
            description={product.description}
            icon={product.icon}
        />

    ))}

                </div>

                {/* Bottom CTA */}

                <div className="mt-24 rounded-[36px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-12 text-center text-white">

                    <h3 className="text-3xl font-bold lg:text-4xl">

                        Need a Custom SaaS Platform?

                    </h3>

                    <p className="mx-auto mt-5 max-w-3xl text-lg text-blue-100">

                        Every business is unique. We design and develop
                        custom enterprise software tailored to your
                        workflows, customers and future growth.

                    </p>

                    <button className="mt-10 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105">

                        Discuss Your Product

                    </button>

                </div>

            </div>

        </section>
    );
}