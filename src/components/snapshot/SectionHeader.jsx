function clsx(...classes) {
    return classes.filter(Boolean).join(" ");
}

const accentStyles = {
    cyan: "bg-cyan-400",
    blue: "bg-blue-400",
    emerald: "bg-emerald-400",
    orange: "bg-orange-400",
    violet: "bg-violet-400",
    rose: "bg-rose-400",
    slate: "bg-slate-400",
};

export default function SectionHeader({
    icon: Icon,
    title,
    accent = "cyan",
}) {
    return (
        <div className="mb-4">

            <div className="flex items-center gap-3">

                {Icon && (

                    <div
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center

                            rounded-xl

                            border
                            border-white/10

                            bg-white/5

                            shrink-0
                        "
                    >
                        <Icon size={18} className="text-white" />
                    </div>

                )}

                <div className="flex-1">

                    <h3
                        className="
                            text-lg
                            font-semibold
                            tracking-tight
                            text-white
                        "
                    >
                        {title}
                    </h3>

                    <div
                        className={clsx(
                            "mt-2 h-0.75 w-18 rounded-full",
                            accentStyles[accent]
                        )}
                    />

                </div>

            </div>

        </div>
    );
}