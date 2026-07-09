import BentoCard from "./BentoCard";

import {
    Users,
    Briefcase,
    ClipboardCheck,
    GraduationCap,
    Bot,
    MonitorSmartphone,
    LayoutDashboard,
    Database,
    ShoppingBag,
    HeartPulse,
} from "lucide-react";

const platforms = [
    {
        icon: Users,
        title: "CRM",
    },
    {
        icon: Briefcase,
        title: "ERP",
    },
    {
        icon: ClipboardCheck,
        title: "Attendance",
    },
    {
        icon: GraduationCap,
        title: "LMS",
    },
    {
        icon: Bot,
        title: "AI Assistant",
    },
    {
        icon: MonitorSmartphone,
        title: "Custom Apps",
    },
    {
        icon: LayoutDashboard,
        title: "Dashboards",
    },
    {
        icon: Database,
        title: "Data Platforms",
    },
    {
        icon: ShoppingBag,
        title: "eCommerce",
    },
    {
        icon: HeartPulse,
        title: "Healthcare",
    },
];

export default function PlatformsCard() {
    return (
        <BentoCard
            title="Digital Platforms"
            className="xl:col-span-4 xl:row-span-2"
        >
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