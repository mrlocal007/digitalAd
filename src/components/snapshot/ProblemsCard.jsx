import BentoCard from "./BentoCard";
import SnapshotList from "./SnapshotList";
import SectionHeader from "./SectionHeader";

import { Target } from "lucide-react";
import { businessSnapshot } from "/src/data/businessSnapshot";

const { problems } = businessSnapshot;

export default function ProblemsCard() {
    return (
        <BentoCard>

            <SectionHeader
            icon={Target}
            title="Problems We Solve"
            accent="cyan"
            />

            <SnapshotList
                items={businessSnapshot.problems}
                accent="cyan"
                variant="default"
            />

        </BentoCard>
    );
}