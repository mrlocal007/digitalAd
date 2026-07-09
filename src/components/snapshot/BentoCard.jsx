import { motion } from "framer-motion";

export default function BentoCard({
    icon: Icon,
    title,
    children,
    className = "",
}) {
    return (
        <motion.div
            whileHover={{
                y: -6,
                transition: { duration: 0.2 },
            }}
            className={`
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-7
                transition-all
                duration-300
                hover:border-cyan-400/40
                hover:bg-white/8
                hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]
                ${className}
            `}
        >
            {/* Glow */}

            <div
                className="
                    absolute
                    -right-10
                    -top-10
                    h-32
                    w-32
                    rounded-full
                    bg-cyan-500/10
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                "
            />

            {/* Icon */}

            {Icon && (
                <div
                    className="
                        mb-6
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-cyan-400/20
                        bg-cyan-400/10
                        text-cyan-300
                    "
                >
                    <Icon size={28} />
                </div>
            )}

            {/* Title */}

            {title && (
                <h3 className="text-xl font-semibold text-white">
                    {title}
                </h3>
            )}

            {children && (
                <div className="mt-6">
                    {children}
                </div>
            )}
        </motion.div>
    );
}