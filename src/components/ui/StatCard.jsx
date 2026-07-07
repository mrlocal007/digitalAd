import { motion } from "framer-motion";

export default function StatCard({
    value,
    label,
}) {
    return (
        <motion.div
            whileHover={{
                y: -8,
            }}
            transition={{
                duration: 0.3,
            }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
        >
            <h3 className="text-4xl font-bold text-blue-600">
                {value}
            </h3>

            <p className="mt-3 text-slate-600">
                {label}
            </p>
        </motion.div>
    );
}