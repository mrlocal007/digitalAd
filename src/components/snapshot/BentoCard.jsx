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
        y: -3,
        transition: {
            duration: .25,
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

        bg-white/4

        backdrop-blur-xl

        p-5

        transition-all
        duration-300

        hover:border-white/20

        ${className}
    `}
>

    {children}

</motion.div>

);
}