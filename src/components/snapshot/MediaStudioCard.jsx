import BentoCard from "./BentoCard";
import { businessSnapshot } from "/src/data/businessSnapshot";

import { Clapperboard } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function MediaStudioCard() {
    const { studio } = businessSnapshot;

    return (
        <BentoCard>

    <SectionHeader
        icon={Clapperboard}
        title="Media Studio"
        accent="rose"
    />

    <div className="grid grid-cols-2 gap-3">

        {businessSnapshot.studio.map((item) => {

            const Icon = item.icon;

            return (

                <div
                    key={item.title}
                    className="
                        flex
                        flex-col
                        items-center
                        justify-center

                        rounded-xl

                        border
                        border-white/10

                        bg-white/5

                        p-4

                        transition-all
                        duration-300

                        hover:bg-white/10
                    "
                >

                    <Icon
                        size={20}
                        className="mb-2 text-rose-300"
                    />

                    <span className="text-center text-xs font-medium text-slate-200 leading-tight">
                        {item.title}
                    </span>

                </div>

            );

        })}

    </div>

</BentoCard>
    );
}