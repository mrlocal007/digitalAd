import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowUpRight,
    Sparkles,
    CheckCircle2,
} from "lucide-react";

import SectionTitle from "../components/ui/SectionTitle";
import CapabilityItem from "../components/ui/CapabilityItem";

import capabilities from "/data/capabilities";

export default function CapabilitiesSection() {
    const [activeId, setActiveId] = useState(1);

    const activeCapability =
        capabilities.find((item) => item.id === activeId) || capabilities[0];

    const ActiveIcon = activeCapability.icon;

    return (
        <section className="relative overflow-hidden bg-white py-32">

            {/* Background */}

            <div className="absolute inset-0">

                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

                <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-100/40 blur-3xl" />

            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                <SectionTitle
                    badge="OUR CAPABILITIES"
                    title="One Partner."
                    highlight="Every Digital Solution."
                    description="From AI and enterprise software to creative media and digital growth, we provide every capability needed to transform modern businesses."
                />

                <div className="mt-20 grid gap-16 lg:grid-cols-12">

                    {/* LEFT */}

                    <div className="lg:col-span-7 space-y-5">

                        {capabilities.map((item) => (

                            <CapabilityItem
                                key={item.id}
                                capability={item}
                                active={activeId === item.id}
                                onClick={() => setActiveId(item.id)}
                            />

                        ))}

                    </div>

                    {/* RIGHT */}

                    <div className="lg:col-span-5">

                        <div className="sticky top-28">

                            <AnimatePresence mode="wait">

                                <motion.div
                                    key={activeCapability.id}
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -30,
                                    }}
                                    transition={{
                                        duration: 0.35,
                                    }}
                                    className="overflow-hidden rounded-[36px] bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-700 p-10 text-white shadow-2xl"
                                >

                                    {/* Top */}

                                    <div className="flex items-center justify-between">

                                        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 backdrop-blur">

                                            <ActiveIcon size={42} />

                                        </div>

                                        <Sparkles
                                            size={28}
                                            className="text-cyan-300"
                                        />

                                    </div>

                                    {/* Heading */}

                                    <h3 className="mt-10 text-4xl font-bold leading-tight">

                                        {activeCapability.title}

                                    </h3>

                                    <p className="mt-6 leading-8 text-slate-200">

                                        {activeCapability.description}

                                    </p>

                                    {/* Services */}

                                    <div className="mt-10 space-y-4">

                                        {activeCapability.services.map((service) => (

                                            <div
                                                key={service}
                                                className="flex items-center gap-3"
                                            >
                                                <CheckCircle2
                                                    size={18}
                                                    className="text-cyan-300"
                                                />

                                                <span>

                                                    {service}

                                                </span>

                                            </div>

                                        ))}

                                    </div>

                                    {/* Divider */}

                                    <div className="my-10 h-px bg-white/10" />

                                    {/* Bottom */}

                                    <div className="flex items-center justify-between">

                                        <div>

                                            <p className="text-sm uppercase tracking-widest text-cyan-200">

                                                Enterprise Ready

                                            </p>

                                            <h4 className="mt-2 text-xl font-semibold">

                                                Tailored for Your Business

                                            </h4>

                                        </div>

                                        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-blue-700 transition hover:scale-110">

                                            <ArrowUpRight size={22} />

                                        </button>

                                    </div>

                                </motion.div>

                            </AnimatePresence>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}