function clsx(...classes) {
    return classes.filter(Boolean).join(" ");
}

const accentStyles = {
    cyan: "text-cyan-300 bg-cyan-500/10",
    blue: "text-blue-300 bg-blue-500/10",
    emerald: "text-emerald-300 bg-emerald-500/10",
    orange: "text-orange-300 bg-orange-500/10",
    violet: "text-violet-300 bg-violet-500/10",
    rose: "text-rose-300 bg-rose-500/10",
    slate: "text-slate-300 bg-slate-500/10",
};

export default function SnapshotList({
    items,
    accent = "cyan",
    variant = "default",
}) {

    const gridClass = (() => {

        switch (variant) {

            case "capabilities":
                return "grid grid-cols-2 xl:grid-cols-4 gap-3";

            case "platforms":
                return "grid grid-cols-2 lg:grid-cols-2 gap-3";

            case "industries":
                return "grid grid-cols-2 gap-3";

            default:
                return "grid grid-cols-2 gap-3";
        }

    })();

    return (

        <div className={gridClass}>

            {items.map((item) => {

                const Icon = item.icon;

                return (

                    <div
                        key={item.title}
                        className="
                        flex
                        items-center
                        gap-3

                        rounded-xl

                        border
                        border-white/10

                        bg-white/5

                        px-3
                        py-3

                        transition-all
                        duration-300

                        hover:border-white/20
                        hover:bg-white/10
                    ">
                        

                    {Icon && (

                    <div className={clsx( "flex h-9 w-9 items-center justify-center rounded-lg shrink-0",accentStyles[accent])} >
                        <Icon size={18} />
                    </div>

                    )}

                    <span
                        className="
                                text-xs
                                lg:text-sm
                                font-medium
                                leading-tight
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