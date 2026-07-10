import SnapshotHeader from "../components/snapshot/SnapshotHeader";
import BentoGrid from "../components/snapshot/BentoGrid";

import ProblemsCard from "../components/snapshot/ProblemsCard";

import CapabilitiesCard from "../components/snapshot/CapabilitiesCard";
import PlatformsCard from "../components/snapshot/PlatformsCard";
import ProcessCard from "../components/snapshot/ProcessCard";
import ConnectCard from "/src/components/snapshot/ConnectCard";

import MediaStudioCard from "../components/snapshot/MediaStudioCard";
import IndustriesCard from "../components/snapshot/IndustriesCard";


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

                        <div className="xl:col-span-4 xl:row-span-2">
                            <ProblemsCard />
                        </div>

                        <div className="xl:col-span-8 xl:row-span-2">
                            <CapabilitiesCard />
                        </div>

                        <div className="xl:col-span-4 xl:row-span-2">
                            <PlatformsCard />
                        </div>

                        <div className="xl:col-span-5">
                            <ProcessCard />
                        </div>                        

                        <div className="xl:col-span-3 xl:row-span-2">
                            <MediaStudioCard />
                        </div>


                        <div className="xl:col-span-4 xl:row-span-2">
                            <IndustriesCard />
                        </div>

                        <div className="xl:col-span-8 xl:row-span-2">
                            <ConnectCard />
                        </div>

                    </BentoGrid>

                </div>

            </div>

        </main>
    );
}