import SnapshotHeader from "../components/snapshot/SnapshotHeader";
import BentoGrid from "../components/snapshot/BentoGrid";

import ProblemsCard from "../components/snapshot/ProblemsCard";

import CapabilitiesCard from "../components/snapshot/CapabilitiesCard";
import PlatformsCard from "../components/snapshot/PlatformsCard";
import ProcessCard from "../components/snapshot/ProcessCard";
import BentoCard from "../components/snapshot/BentoCard";

import {        
    Building2,
    Clapperboard,
    Phone,
    Share2,
} from "lucide-react";

export default function BusinessSnapshot() {
    return (
        <main className="min-h-screen bg-slate-950">

            {/* Background Glow */}

            <div className="fixed inset-0 overflow-hidden pointer-events-none">

                <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

                <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[140px]" />

            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-8">

                <SnapshotHeader />

                <div className="mt-10">

                    <BentoGrid>

                        <ProblemsCard />                        

                        <CapabilitiesCard />

                        <PlatformsCard />

                        <ProcessCard />

                        <BentoCard
                            icon={Building2}
                            title="Industries"
                            className="xl:col-span-4"
                        />

                        <BentoCard
                            icon={Clapperboard}
                            title="Media Studio"
                            className="xl:col-span-3"
                        />

                        <BentoCard
                            icon={Phone}
                            title="Contact"
                            className="xl:col-span-5"
                        />

                        <BentoCard
                            icon={Share2}
                            title="Social"
                            className="xl:col-span-3"
                        />

                    </BentoGrid>

                </div>

            </div>

        </main>
    );
}