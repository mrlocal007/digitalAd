function clsx(...classes) {
    return classes.filter(Boolean).join(" ");
}

const accentClasses = {
    cyan: {
        icon: "bg-cyan-500/10 text-cyan-300",
        hover: "hover:bg-cyan-500/5",
    },

    blue: {
        icon: "bg-blue-500/10 text-blue-300",
        hover: "hover:bg-blue-500/5",
    },

    emerald: {
        icon: "bg-emerald-500/10 text-emerald-300",
        hover: "hover:bg-emerald-500/5",
    },

    violet: {
        icon: "bg-violet-500/10 text-violet-300",
        hover: "hover:bg-violet-500/5",
    },

    orange: {
        icon: "bg-orange-500/10 text-orange-300",
        hover: "hover:bg-orange-500/5",
    },

    rose: {
        icon: "bg-rose-500/10 text-rose-300",
        hover: "hover:bg-rose-500/5",
    },
};

export default function SnapshotList({
    items = [],
    columns = 2,
    accent = "cyan",
}) {
    const colors = accentClasses[accent];

    if (!items.length) return null;
    
    return (
        <div
            className={clsx(
                "grid gap-x-6 gap-y-4",
                columns === 1 && "grid-cols-1",
                columns === 2 && "grid-cols-2",
                columns === 3 && "grid-cols-3"
            )}
        >
            {items.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.title}
                        className={clsx(
                            "flex items-center gap-3 rounded-xl p-2 transition-all duration-300",
                            colors.hover
                        )}
                    >
                        <div
                            className={clsx(
                                "flex h-10 w-10 items-center justify-center rounded-xl",
                                colors.icon
                            )}
                        >
                            <Icon size={18} />
                        </div>

                        <span className="text-sm font-medium text-slate-200">
                            {item.title}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}