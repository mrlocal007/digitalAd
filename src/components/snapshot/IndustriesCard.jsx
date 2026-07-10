import BentoCard from "./BentoCard";
import SnapshotList from "./SnapshotList";

import { businessSnapshot } from "/src/data/businessSnapshot";



export default function IndustriesCard() {
    return (
        <BentoCard title="Industries">
            <SnapshotList
                items={businessSnapshot.industries}
                accent="violet"
                columns={2}
            />
        </BentoCard>
    );
}