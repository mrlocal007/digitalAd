import BentoCard from "./BentoCard";

import { businessSnapshot } from "/src/data/businessSnapshot";

import {
    MapPin,
    Phone,
    Mail,
    Globe,
    QrCode,
} from "lucide-react";

export default function ConnectCard() {

    const { contact, social } = businessSnapshot;

    return (

        <BentoCard title="Connect With Us">

            <div className="grid md:grid-cols-2 gap-8 h-full">

                {/* Left */}

                <div className="space-y-5">

                    <div>

                        <h3 className="text-lg font-semibold text-white">
                            {contact.company}
                        </h3>

                        <p className="text-sm text-slate-400 mt-1">
                            {contact.tagline}
                        </p>

                    </div>

                    <div className="space-y-3">

                        <div className="flex gap-3">

                            <MapPin
                                size={18}
                                className="text-cyan-400 mt-1 shrink-0"
                            />

                            <div className="text-sm text-slate-300 leading-6">

                                {contact.address.map(line => (

                                    <div key={line}>{line}</div>

                                ))}

                            </div>

                        </div>

                        <div className="flex items-center gap-3">

                            <Phone
                                size={18}
                                className="text-cyan-400"
                            />

                            <span className="text-sm text-slate-300">
                                {contact.phone}
                            </span>

                        </div>

                        <div className="flex items-center gap-3">

                            <Mail
                                size={18}
                                className="text-cyan-400"
                            />

                            <span className="text-sm text-slate-300">
                                {contact.email}
                            </span>

                        </div>

                        <div className="flex items-center gap-3">

                            <Globe
                                size={18}
                                className="text-cyan-400"
                            />

                            <span className="text-sm text-slate-300">
                                {contact.website}
                            </span>

                        </div>

                    </div>

                </div>

                {/* Right */}

                <div className="flex flex-col justify-between">

                    <div>

                        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">

                            Connect

                        </h4>

                        <div className="flex flex-wrap gap-3">

                            {social.map((item) => {

                                const Icon = item.icon;

                                return (

                                    <a
                                        key={item.title}
                                        href={item.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-white/5
                                            text-slate-300
                                            transition
                                            hover:bg-cyan-500
                                            hover:text-white
                                        "
                                    >

                                        <Icon size={18} />

                                    </a>

                                );

                            })}

                        </div>

                    </div>

                    {/* QR Placeholder */}

                    <div className="mt-8 flex items-center gap-5">

                        <div
                            className="
                                h-24
                                w-24
                                rounded-xl
                                border
                                border-dashed
                                border-slate-600
                                flex
                                items-center
                                justify-center
                            "
                        >

                            <QrCode
                                size={34}
                                className="text-slate-500"
                            />

                        </div>

                        <div>

                            <div className="text-sm font-semibold text-white">

                                Scan to Connect

                            </div>

                            <div className="text-sm text-slate-400 mt-1">

                                Website • Portfolio • Contact

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </BentoCard>

    );

}