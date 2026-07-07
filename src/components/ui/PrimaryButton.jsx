import { ArrowRight } from "lucide-react";

export default function PrimaryButton({
    children,
    className = "",
}) {
    return (
        <button
            className={`inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-xl ${className}`}
        >
            {children}

            <ArrowRight size={18} />
        </button>
    );
}