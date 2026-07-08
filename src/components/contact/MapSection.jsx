import {
    MapPin,
    Navigation,
} from "lucide-react";

export default function MapSection() {
    const directionsUrl =
        "https://maps.google.com/?q=Aryadahiya+Media+Network+Pvt.+Ltd.+Rohtak";

    return (
        <section className="py-24 bg-slate-50">

            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="max-w-3xl">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">

                        OUR LOCATION

                    </span>

                    <h2 className="mt-6 text-5xl font-bold text-slate-900">

                        Visit Our Office

                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600">

                        We'd be delighted to meet you in person to discuss your
                        business goals, technology roadmap, or digital
                        transformation initiatives.

                    </p>

                </div>

                {/* Map */}

                <div className="relative mt-14 overflow-hidden rounded-[36px] shadow-2xl border border-slate-200">

                    {/* Floating Card */}

                    <div className="absolute left-8 top-8 z-20 hidden max-w-sm rounded-3xl bg-white/95 p-6 shadow-xl backdrop-blur lg:block">

                        <div className="flex items-start gap-4">

                            <div className="rounded-2xl bg-blue-100 p-3">

                                <MapPin
                                    className="text-blue-700"
                                    size={26}
                                />

                            </div>

                            <div>

                                <h3 className="text-xl font-bold text-slate-900">

                                    AD Digital Solutions

                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">

                                    Aryadahiya Media Network Pvt. Ltd.

                                    <br />

                                    Old ITI, Plot No. 110

                                    <br />

                                    Jagdish Colony

                                    <br />

                                    Rohtak, Haryana 124001

                                </p>

                                <a
                                    href={directionsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg"
                                >
                                    <Navigation size={18} />

                                    Get Directions

                                </a>

                            </div>

                        </div>

                    </div>

                    {/* Google Map */}

                    <iframe
                        title="AD Digital Solutions Office"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.3231199940547!2d76.59211967551026!3d28.8887447755259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d850c9ed9adfd%3A0x34f70825a7a29127!2sAryadahiya%20Media%20Network%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1783420529122!5m2!1sen!2sin"
                        width="100%"
                        height="550"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                    />

                </div>

            </div>

        </section>
    );
}