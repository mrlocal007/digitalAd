import { motion } from "framer-motion";

export default function FormTextarea({
    label,
    name,
    value,
    onChange,
    rows = 6,
    error,
    required = false,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
        >
            <label
                htmlFor={name}
                className="mb-2 block text-sm font-semibold text-slate-700"
            >
                {label}
                {required && (
                    <span className="ml-1 text-red-500">*</span>
                )}
            </label>

            <textarea
                id={name}
                name={name}
                rows={rows}
                value={value}
                onChange={onChange}
                className={`w-full resize-none rounded-2xl border bg-white px-5 py-4 outline-none transition-all duration-300
                ${
                    error
                        ? "border-red-400 ring-4 ring-red-100"
                        : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                }`}
            />

            <div className="mt-2 h-5">
                {error && (
                    <p className="text-sm text-red-500">
                        {error}
                    </p>
                )}
            </div>
        </motion.div>
    );
}