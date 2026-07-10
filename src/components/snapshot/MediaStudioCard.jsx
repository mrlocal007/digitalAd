import BentoCard from "./BentoCard";
import SnapshotList from "./SnapshotList";

import { businessSnapshot } from "/src/data/businessSnapshot";

export default function MediaStudioCard() {
    return (
        <BentoCard title="Media Studio">
            <SnapshotList
                items={businessSnapshot.studio}
                accent="rose"
                columns={2}
            />
        </BentoCard>
    );
}