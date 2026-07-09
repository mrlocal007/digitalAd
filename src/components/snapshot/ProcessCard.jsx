import BentoCard from "./BentoCard";
import { process } from "/src/data/businessSnapshot";

export default function ProcessCard() {
    return (
        <BentoCard title="Delivery Process">
            <div className="mt-8 flex items-center justify-between overflow-x-auto pb-2">

                {process.map((step, index) => {

                    const Icon = step.icon;

                    return (

                        <div
                            key={step.title}
                            className="flex items-center"
                        >

                            <div className="flex flex-col items-center min-w-[72px]">

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
                                    "
                                >
                                    <Icon size={22} />
                                </div>

                                <span className="mt-3 text-xs font-medium text-slate-300 text-center">
                                    {step.title}
                                </span>

                            </div>

                            {index < process.length - 1 && (

                                <ArrowRight
                                    size={18}
                                    className="mx-4 text-slate-500"
                                />

                            )}

                        </div>

                    );

                })}

            </div>
        </BentoCard>
    );
}