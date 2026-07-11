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

    rose: {
        icon: "bg-rose-500/10 text-rose-300",
        hover: "hover:bg-rose-500/5",
    },

    orange: {
        icon: "bg-orange-500/10 text-orange-300",
        hover: "hover:bg-orange-500/5",
    },
};

export default function SnapshotList({
    items,
    accent = "cyan",
}) {

    const colors = accentClasses[accent];

    /* ---------------------------------
       Auto responsive columns
    ---------------------------------- */

    const desktopCols =
        items.length <= 6
            ? "lg:grid-cols-2"
            : items.length <= 12
            ? "lg:grid-cols-3"
            : "lg:grid-cols-4";

    return (

        <div
            className={clsx(
                "grid",
                "grid-cols-2",
                desktopCols,
                "gap-3 lg:gap-4"
            )}
        >

            {items.map((item) => {

                const Icon = item.icon;

                return (

                    <div
                        key={item.title}
                        className={clsx(
                            "group flex items-center gap-3 rounded-xl p-2 transition-all duration-300",
                            colors.hover
                        )}
                    >

                        <div
                            className={clsx(
                                "flex h-9 w-9 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110",
                                colors.icon
                            )}
                        >

                            <Icon size={18} />

                        </div>

                        <span
                            className="
                                text-xs
                                lg:text-sm
                                font-medium
                                leading-snug
                                text-slate-200
                            "
                        >
                            {item.title}
                        </span>

                    </div>

                );

            })}

        </div>

    );

}