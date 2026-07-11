import BentoCard from "./BentoCard";
import SnapshotList from "./SnapshotList";

import { businessSnapshot } from "/src/data/businessSnapshot";

import { Building2 } from "lucide-react";
import SectionHeader from "./SectionHeader";



export default function IndustriesCard() {
    return (
        <BentoCard title="Industries">
            <SectionHeader

            icon={Building2}

            title="Industries"

            accent="violet"
            />
            
            <SnapshotList
            items={businessSnapshot.industries}
            accent="violet"
            variant="industries"
            />
        </BentoCard>
    );
}