import { motion } from "framer-motion";

export default function SectionTitle({
    badge,
    title,
    highlight,
    description,
    center = true,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`${center ? "text-center" : ""} max-w-3xl ${
                center ? "mx-auto" : ""
            }`}
        >
            {badge && (
                <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                    {badge}
                </span>
            )}

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                {title}

                {highlight && (
                    <>
                        {" "}
                        <span className="text-blue-600">{highlight}</span>
                    </>
                )}
            </h2>

            {description && (
                <p className="mt-6 text-lg leading-8 text-slate-600">
                    {description}
                </p>
            )}
        </motion.div>
    );
}