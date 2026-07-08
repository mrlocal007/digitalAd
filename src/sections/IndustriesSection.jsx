import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import SectionTitle from "/src/components/ui/SectionTitle";
import industries from "/src/data/industries";

export default function IndustriesSection() {
    return (
        <section className="relative overflow-hidden bg-slate-950 py-28">

            {/* Background */}

            <div className="absolute inset-0">

                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

                <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                <SectionTitle
                    badge="INDUSTRIES WE SERVE"
                    title="Technology That Adapts To Every"
                    highlight="Industry"
                    description="Every industry has unique challenges. We build scalable digital solutions tailored to your business domain, workflows and growth objectives."
                />

                <div className="mt-20 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">

                    {industries.map((industry, index) => {

                        const Icon = industry.icon;

                        return (

                            <motion.div
                                key={industry.title}
                                initial={{
                                    opacity: 0,
                                    y: 30,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: index * 0.05,
                                }}
                                whileHover={{
                                    y: -8,
                                }}
                                className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-lg transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
                            >

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">

                                    <Icon size={30} />

                                </div>

                                <h3 className="mt-7 text-2xl font-bold text-white">

                                    {industry.title}

                                </h3>

                                <p className="mt-4 leading-7 text-slate-300">

                                    {industry.description}

                                </p>

                                <button className="mt-8 flex items-center gap-2 font-semibold text-cyan-400 transition group-hover:translate-x-1">

                                    Explore Solutions

                                    <ArrowRight size={18} />

                                </button>

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}