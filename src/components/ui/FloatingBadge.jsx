import { motion } from "framer-motion";

export default function FloatingBadge({
    text,
    delay = 0,
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0.9,
            }}
            whileInView={{
                opacity: 1,
                scale: 1,
            }}
            transition={{
                delay,
                duration: 0.5,
            }}
            whileHover={{
                scale: 1.05,
            }}
            viewport={{
                once: true,
            }}
            className="rounded-full border border-white/20 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-800 shadow-xl backdrop-blur"
        >
            {text}
        </motion.div>
    );
}