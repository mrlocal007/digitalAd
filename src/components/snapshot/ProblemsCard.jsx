import BentoCard from "./BentoCard";
import { businessSnapshot } from "/src/data/businessSnapshot";

const { problems } = businessSnapshot;

export default function ProblemsCard() {
    return (
        <BentoCard title="What We Solve">
            
            <div className="grid grid-cols-2 gap-5">

                {problems.map((item) => {

                    const Icon = item.icon;

                    return (

                        <div
                            key={item.title}
                            className="
                                group/problem
                                flex
                                flex-col
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-white/8
                                bg-white/5
                                p-5
                                text-center
                                transition-all
                                duration-300
                                hover:border-cyan-400/40
                                hover:bg-cyan-400/10
                            "
                        >

                            <div
                                className="
                                    mb-3
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-cyan-500/10
                                    text-cyan-300
                                    transition-transform
                                    duration-300
                                    group-hover/problem:scale-110
                                "
                            >
                                <Icon size={24} />
                            </div>

                            <span className="text-sm font-medium text-slate-200 leading-5">
                                {item.title}
                            </span>

                        </div>

                    );

                })}

            </div>
        </BentoCard>
    );
}