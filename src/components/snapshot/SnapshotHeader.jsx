import { QrCode } from "lucide-react";

export default function SnapshotHeader() {
    return (
        <div
            className="
                flex
                flex-col
                gap-8

                lg:flex-row
                lg:items-center
                lg:justify-between
            "
        >
            <div>

                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
                    Executive Overview
                </span>

                <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
                    Business Snapshot
                </h1>

                <p className="mt-4 text-slate-400">
                    Digital Transformation • Media • AI
                </p>

            </div>

            <div
                className="
                    flex
                    h-32
                    w-32
                    items-center
                    justify-center
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                "
            >
                <QrCode
                    size={64}
                    className="text-cyan-300"
                />
            </div>

        </div>
    );
}