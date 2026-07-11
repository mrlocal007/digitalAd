import BentoCard from "./BentoCard";
import { businessSnapshot } from "/src/data/businessSnapshot";

export default function MediaStudioCard() {
    const { studio } = businessSnapshot;

    return (
        <BentoCard title="Media Studio">

            <div className="grid grid-cols-2 gap-3">

    {studio.map((item) => {

        const Icon = item.icon;

        return (

            <div
                key={item.title}
                className="
                    group
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5

                    p-4

                    flex
                    flex-col
                    items-center
                    justify-center

                    text-center

                    transition-all
                    duration-300

                    hover:bg-rose-500/5
                    hover:border-rose-400/40
                "
            >

                <div
                    className="
                        mb-3

                        flex
                        h-10
                        w-10

                        items-center
                        justify-center

                        rounded-xl

                        bg-rose-500/10
                        text-rose-300

                        transition-transform
                        duration-300

                        group-hover:scale-110
                    "
                >

                    <Icon size={20} />

                </div>

                <span
                    className="
                        text-xs
                        lg:text-sm

                        font-medium

                        text-slate-200

                        leading-tight
                    "
                >
                    {item.title}
                </span>

            </div>

        );

    })}

</div>

        </BentoCard>
    );
}