import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import SectionTitle from "../components/ui/SectionTitle";
import products from "../../data/products";

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

                    {products.map((product, index) => {

                        const Icon = product.icon;

                        return (

                            <motion.div
                                key={product.title}
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: index * 0.07,
                                }}
                                whileHover={{
                                    y: -10,
                                }}
                                className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-2xl"
                            >

                                {/* Category */}

                                <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">

                                    {product.category}

                                </span>

                                {/* Icon */}

                                <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">

                                    <Icon size={30} />

                                </div>

                                {/* Title */}

                                <h3 className="mt-8 text-2xl font-bold text-slate-900">

                                    {product.title}

                                </h3>

                                {/* Description */}

                                <p className="mt-5 leading-7 text-slate-600">

                                    {product.description}

                                </p>

                                {/* Divider */}

                                <div className="my-8 h-px bg-slate-200" />

                                {/* Footer */}

                                <div className="flex items-center justify-between">

                                    <div className="flex items-center gap-2 text-blue-600">

                                        <Sparkles size={18} />

                                        <span className="text-sm font-semibold">

                                            Customizable

                                        </span>

                                    </div>

                                    <button className="flex items-center gap-2 font-semibold text-slate-900 transition group-hover:text-blue-600">

                                        Learn More

                                        <ArrowRight
                                            size={18}
                                            className="transition group-hover:translate-x-1"
                                        />

                                    </button>

                                </div>

                            </motion.div>

                        );

                    })}

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