import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Navigation,
    MessageCircle,
} from "lucide-react";

export default function OfficeInfo() {
    const address =
        "Aryadahiya Media Network Pvt. Ltd., Old ITI, Plot No. 110, Jagdish Colony, Rohtak, Haryana 124001";

    const phone = "+91 98170 48962";

    const email = "info@admedianetwork.in";

    const directionsUrl =
        "https://maps.google.com/?q=Aryadahiya+Media+Network+Pvt.+Ltd.+Rohtak";

    const whatsappUrl =
        "https://wa.me/919817048962";

    return (
        <aside className="sticky top-28 overflow-hidden rounded-[36px] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-8 text-white shadow-2xl">

            {/* Glow */}

            <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="relative">

                {/* Badge */}

                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">

                    Contact Information

                </span>

                {/* Heading */}

                <h2 className="mt-6 text-4xl font-bold leading-tight">

                    AD Digital Solutions

                </h2>

                <p className="mt-3 text-lg leading-8 text-slate-300">

                    Digital Transformation &
                    <br />

                    Media Solutions

                </p>

                {/* Address */}

                <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">

                    <div className="flex items-start gap-4">

                        <div className="rounded-2xl bg-cyan-500/15 p-3">

                            <MapPin
                                className="text-cyan-300"
                                size={24}
                            />

                        </div>

                        <div>

                            <h3 className="font-semibold">

                                Visit Our Office

                            </h3>

                            <p className="mt-2 leading-7 text-slate-300">

                                {address}

                            </p>

                            <a
                                href={directionsUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-5 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 font-semibold text-slate-900 transition hover:scale-105"
                            >

                                <Navigation size={18} />

                                Get Directions

                            </a>

                        </div>

                    </div>

                </div>

                {/* Contact */}

                <div className="mt-8 space-y-6">

                    <div className="flex items-center gap-4">

                        <div className="rounded-2xl bg-white/10 p-3">

                            <Phone size={22} />

                        </div>

                        <div>

                            <p className="text-sm text-slate-400">

                                Call Us

                            </p>

                            <a
                                href="tel:+919817048962"
                                className="font-semibold hover:text-cyan-300"
                            >

                                {phone}

                            </a>

                        </div>

                    </div>

                    <div className="flex items-center gap-4">

                        <div className="rounded-2xl bg-white/10 p-3">

                            <Mail size={22} />

                        </div>

                        <div>

                            <p className="text-sm text-slate-400">

                                Email

                            </p>

                            <a
                                href="mailto:info@admedianetwork.in"
                                className="font-semibold hover:text-cyan-300"
                            >

                                {email}

                            </a>

                        </div>

                    </div>

                    <div className="flex items-center gap-4">

                        <div className="rounded-2xl bg-white/10 p-3">

                            <MessageCircle size={22} />

                        </div>

                        <div>

                            <p className="text-sm text-slate-400">

                                WhatsApp

                            </p>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="font-semibold hover:text-cyan-300"
                            >

                                Chat Instantly

                            </a>

                        </div>

                    </div>

                    <div className="flex items-center gap-4">

                        <div className="rounded-2xl bg-white/10 p-3">

                            <Clock size={22} />

                        </div>

                        <div>

                            <p className="text-sm text-slate-400">

                                Business Hours

                            </p>

                            <p className="font-semibold">

                                Monday – Saturday

                            </p>

                            <p className="text-slate-300">

                                9:30 AM – 6:30 PM

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </aside>
    );
}