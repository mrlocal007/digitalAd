import BentoCard from "./BentoCard";
import SnapshotList from "./SnapshotList";
import SectionHeader from "./SectionHeader";

import { Cpu } from "lucide-react";
import { businessSnapshot } from "../../data/businessSnapshot";

export default function CapabilitiesCard() {
    return (
        <BentoCard>

    <SectionHeader
        icon={Cpu}
        title="Core Capabilities"
        accent="blue"
    />

    <SnapshotList
    items={businessSnapshot.capabilities}
    accent="blue"
    variant="capabilities"
    />

</BentoCard>
    );
}