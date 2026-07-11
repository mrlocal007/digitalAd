import BentoCard from "./BentoCard";
import { businessSnapshot } from "/src/data/businessSnapshot";

import { Workflow } from "lucide-react";
import SectionHeader from "./SectionHeader";

const { process } = businessSnapshot
export default function ProcessCard() {
    return (
        <BentoCard title="Delivery Process">
            <SectionHeader
            icon={Workflow}
            title="Delivery Process"
            accent="orange"
            />

        <div
                className="
        mt-6
        grid
        grid-cols-2
        sm:grid-cols-3
        xl:grid-cols-6
        gap-5
        "
        >
        {process.map((step, index) => {

        const Icon = step.icon;

        return (

            <div
                key={step.title}
                className="relative flex flex-col items-center"
            >

                <div
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-orange-500/10
                        text-orange-300
                        transition-all
                        duration-300
                        hover:scale-110
                    "
                >
                    <Icon size={22} />
                </div>

                <span
                    className="
                        mt-3
                        text-center
                        text-xs
                        lg:text-sm
                        font-medium
                        text-slate-300
                    "
                >
                    {step.title}
                </span>

                {index < process.length - 1 && (

                    <div
                        className="
                            hidden
                            xl:block

                            absolute
                            top-6
                            left-[72%]

                            w-full
                            h-px

                            bg-linear-to-r
                            from-orange-400/40
                            to-transparent
                        "
                    />

                )}

            </div>

        );

    })}
    </div>
    </BentoCard>
    );
}