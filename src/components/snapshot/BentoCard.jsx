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
            y: -4,
            transition: {
            duration: 0.25,
            },
        }}
        className={`
            group

            h-full

            flex
            flex-col

            rounded-3xl

            border
            border-white/10

            bg-white/5

            backdrop-blur-xl

            p-5
            lg:p-6
            xl:p-7

            transition-all
            duration-300

            hover:border-cyan-400/40

            hover:shadow-[0_20px_60px_rgba(0,0,0,.25)]

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
                <h3
                    className="
                    text-lg
                    lg:text-xl

                    font-semibold

                    tracking-tight

                  text-white

                    mb-6
                    "
                    >
                    
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