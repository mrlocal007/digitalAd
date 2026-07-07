import { motion } from "framer-motion";
import {
    ArrowRight,
    Sparkles,
    CheckCircle2,
} from "lucide-react";

export default function ProductCard({
    title,
    category,
    description,
    icon: Icon,
}) {
    return (
        <motion.article
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
                amount: 0.2,
            }}
            transition={{
                duration: 0.5,
            }}
            whileHover={{
                y: -10,
            }}
            className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-2xl"
        >
            {/* Animated Gradient */}

            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

            {/* Glow */}

            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

            <div className="relative p-8">

                {/* Category */}

                <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">

                    {category}

                </span>

                {/* Icon */}

                <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">

                    <Icon size={30} />

                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-slate-900">

                    {title}

                </h3>

                {/* Description */}

                <p className="mt-5 leading-7 text-slate-600">

                    {description}

                </p>

                {/* Feature */}

                <div className="mt-8 flex items-center gap-3 rounded-2xl bg-slate-50 p-4">

                    <CheckCircle2
                        size={20}
                        className="text-blue-600"
                    />

                    <span className="text-sm text-slate-600">

                        Customizable according to your business workflow

                    </span>

                </div>

                {/* Footer */}

                <div className="mt-8 flex items-center justify-between">

                    <div className="flex items-center gap-2 text-blue-600">

                        <Sparkles size={18} />

                        <span className="text-sm font-semibold">

                            Enterprise Ready

                        </span>

                    </div>

                    <button className="flex items-center gap-2 font-semibold text-slate-900 transition-all group-hover:text-blue-600">

                        Learn More

                        <ArrowRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />

                    </button>

                </div>

            </div>

        </motion.article>
    );
}