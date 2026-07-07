import { motion } from "framer-motion";

export default function FeatureCard({
    icon: Icon,
    title,
    description,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.35 }}
            className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all"
        >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                <Icon size={30} />
            </div>

            <h3 className="mt-7 text-2xl font-bold text-slate-900">
                {title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
                {description}
            </p>
        </motion.div>
    );
}