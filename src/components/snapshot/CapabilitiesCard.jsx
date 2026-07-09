import BentoCard from "./BentoCard";

import {
    Globe,
    Smartphone,
    Bot,
    Cloud,
    Workflow,
    Palette,
    BarChart3,
    ShieldCheck,
    Search,
    BriefcaseBusiness,
} from "lucide-react";

const capabilities = [
    {
        icon: Globe,
        title: "Web Apps",
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
    },
    {
        icon: Bot,
        title: "AI Solutions",
    },
    {
        icon: Cloud,
        title: "Cloud Platforms",
    },
    {
        icon: Workflow,
        title: "Automation",
    },
    {
        icon: Palette,
        title: "UI / UX",
    },
    {
        icon: BarChart3,
        title: "Analytics",
    },
    {
        icon: ShieldCheck,
        title: "Cyber Security",
    },
    {
        icon: Search,
        title: "SEO / GEO",
    },
    {
        icon: BriefcaseBusiness,
        title: "Consulting",
    },
];

export default function CapabilitiesCard() {
    return (
        <BentoCard
            title="Core Capabilities"
            className="xl:col-span-8 xl:row-span-2"
        >
            <div className="grid grid-cols-2 gap-x-6 gap-y-5">

                {capabilities.map((item) => {

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
                                    bg-cyan-500/10
                                    text-cyan-300
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