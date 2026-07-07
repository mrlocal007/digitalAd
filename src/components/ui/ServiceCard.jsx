import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({
    title,
    description,
    icon: Icon,
}) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            whileHover={{
                y: -10,
            }}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-2xl"
        >
            {/* Top Accent */}

            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

            {/* Background Glow */}

            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

            <div className="relative">

                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">

                    <Icon size={30} strokeWidth={2} />

                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-slate-900">

                    {title}

                </h3>

                {/* Description */}

                <p className="mt-4 leading-7 text-slate-600">

                    {description}

                </p>

                {/* Divider */}

                <div className="my-8 h-px bg-slate-200" />

                {/* Footer */}

                <div className="flex items-center justify-between">

                    <span className="text-sm font-semibold tracking-wide uppercase text-blue-600">

                        Explore Service

                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">

                        <ArrowUpRight size={18} />

                    </div>

                </div>

            </div>
        </motion.article>
    );
}