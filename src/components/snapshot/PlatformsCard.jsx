import BentoCard from "./BentoCard";
import { businessSnapshot } from "/src/data/businessSnapshot";
const { platforms } = businessSnapshot;

export default function PlatformsCard() {
    return (
        <BentoCard title="Digital Platforms">
            <div className="grid grid-cols-2 gap-x-6 gap-y-5">

                {platforms.map((item) => {

                    const Icon = item.icon;

                    return (

                        <div
                            key={item.title}
                            className="
                                flex
                                items-center
                                gap-3
                                rounded-xl
                                p-2
                                transition-all
                                duration-300
                                hover:bg-white/5
                            "
                        >

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-blue-500/10
                                    text-blue-300
                                "
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
        </BentoCard>
    );
}