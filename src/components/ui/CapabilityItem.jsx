import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    ChevronDown,
} from "lucide-react";

export default function CapabilityItem({
    capability,
    active,
    onClick,
}) {
    const Icon = capability.icon;

    return (
        <motion.div
            layout
            onClick={onClick}
            className={`group relative cursor-pointer overflow-hidden rounded-3xl border transition-all duration-500 ${
                active
                    ? "border-blue-500 bg-white shadow-xl"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
            }`}
        >
            {/* Left Accent Line */}

            <motion.div
                animate={{
                    height: active ? "100%" : "0%",
                }}
                transition={{
                    duration: 0.35,
                }}
                className="absolute left-0 top-0 w-1 rounded-full bg-gradient-to-b from-blue-600 to-cyan-500"
            />

            <div className="p-8">

                {/* Header */}

                <div className="flex items-start justify-between gap-6">

                    <div className="flex gap-5">

                        {/* Icon */}

                        <motion.div
                            animate={{
                                rotate: active ? 6 : 0,
                                scale: active ? 1.08 : 1,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                            className={`flex h-16 w-16 items-center justify-center rounded-2xl transition-all ${
                                active
                                    ? "bg-gradient-to-br from-blue-600 to-cyan-500 text-white"
                                    : "bg-slate-100 text-slate-700"
                            }`}
                        >
                            <Icon size={30} />
                        </motion.div>

                        {/* Title */}

                        <div>

                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                                0{capability.id}
                            </span>

                            <h3
                                className={`mt-2 font-bold transition-all duration-300 ${
                                    active
                                        ? "text-3xl text-slate-900"
                                        : "text-2xl text-slate-800"
                                }`}
                            >
                                {capability.title}
                            </h3>

                        </div>

                    </div>

                    {/* Arrow */}

                    <motion.div
                        animate={{
                            rotate: active ? 180 : 0,
                        }}
                    >
                        <ChevronDown
                            size={28}
                            className={`transition ${
                                active
                                    ? "text-blue-600"
                                    : "text-slate-400"
                            }`}
                        />
                    </motion.div>

                </div>

                {/* Expandable */}

                <AnimatePresence>

                    {active && (

                        <motion.div
                            initial={{
                                opacity: 0,
                                height: 0,
                            }}
                            animate={{
                                opacity: 1,
                                height: "auto",
                            }}
                            exit={{
                                opacity: 0,
                                height: 0,
                            }}
                            transition={{
                                duration: 0.35,
                            }}
                            className="overflow-hidden"
                        >

                            {/* Description */}

                            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">

                                {capability.description}

                            </p>

                            {/* Services */}

                            <div className="mt-8 flex flex-wrap gap-3">

                                {capability.services.map((service) => (

                                    <motion.span
                                        key={service}
                                        initial={{
                                            opacity: 0,
                                            y: 10,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                                    >
                                        {service}
                                    </motion.span>

                                ))}

                            </div>

                            {/* CTA */}

                            <button className="mt-10 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3">

                                Explore Capability

                                <ArrowRight size={18} />

                            </button>

                        </motion.div>

                    )}

                </AnimatePresence>

            </div>

        </motion.div>
    );
}