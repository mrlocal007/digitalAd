import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import SectionTitle from "../components/ui/SectionTitle";
import ServiceCard from "../components/ui/ServiceCard";
import PrimaryButton from "../components/ui/PrimaryButton";

import services from "../../data/services";

export default function ServicesSection() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-28">

            {/* Background */}

            <div className="absolute inset-0">

                <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

                <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-100/40 blur-3xl" />

            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                <SectionTitle
                    badge="OUR CAPABILITIES"
                    title="Everything Your Business Needs To"
                    highlight="Grow Digitally"
                    description="From strategy and branding to AI, software engineering and media production, Modern Concepts delivers complete digital transformation services under one roof."
                />

                {/* Services */}

                <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

                    {services.map((service, index) => (

                        <motion.div
                            key={service.title}
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
                                delay: index * 0.08,
                                duration: 0.55,
                            }}
                        >

                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                            />

                        </motion.div>

                    ))}

                </div>

                {/* Bottom CTA */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        delay: 0.3,
                    }}
                    className="mt-20"
                >

                    <div className="rounded-[32px] bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 p-10 lg:p-14">

                        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

                            <div>

                                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-300">

                                    Ready to Transform?

                                </span>

                                <h3 className="mt-6 text-3xl font-bold text-white lg:text-4xl">

                                    Let's Build Something Exceptional Together

                                </h3>

                                <p className="mt-4 max-w-2xl text-lg text-slate-300">

                                    Whether you're launching a startup,
                                    modernizing your business,
                                    creating a SaaS platform,
                                    or building a powerful digital brand,
                                    our team is ready to help.

                                </p>

                            </div>

                            <PrimaryButton className="shrink-0">

                                Schedule Consultation

                            </PrimaryButton>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}