import BentoCard from "./BentoCard";
import SnapshotList from "./SnapshotList";
import SectionHeader from "./SectionHeader";

import { Boxes } from "lucide-react";
import { businessSnapshot } from "/src/data/businessSnapshot";

export default function PlatformsCard() {

    return (

        <BentoCard>

            <SectionHeader
                icon={Boxes}
                title="Digital Platforms"
                accent="emerald"
            />

            <SnapshotList
                items={businessSnapshot.platforms}
                accent="emerald"
                variant="platforms"
            />

        </BentoCard>

    );

}