import { motion } from "framer-motion";
import {
    Camera,
    Mic2,
    Video,
    Clapperboard,
    Radio,
    MonitorPlay,
    Users,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const studioServices = [
    {
        icon: Camera,
        title: "Professional Video Production",
        description:
            "Corporate videos, promotional films, interviews, testimonials and branded campaigns produced in a professional studio environment.",
    },
    {
        icon: Mic2,
        title: "Podcast Recording",
        description:
            "Audio and video podcasts with professional microphones, lighting and multi-camera production.",
    },
    {
        icon: Video,
        title: "Social Media Reels",
        description:
            "High-quality Instagram, Facebook, LinkedIn and YouTube Shorts designed to maximize engagement.",
    },
    {
        icon: Clapperboard,
        title: "Commercial Shoots",
        description:
            "Advertisements, product launches, promotional campaigns and brand storytelling.",
    },
];

const productionFlow = [
    "Creative Strategy",
    "Script & Planning",
    "Studio Production",
    "Editing & Motion Graphics",
    "Publishing & Distribution",
];

const idealFor = [
    "News & Media Houses",
    "Corporate Businesses",
    "Educational Institutions",
    "Healthcare Organizations",
    "Government Projects",
    "Startups & Founders",
    "Personal Branding",
    "Influencers & Creators",
];

export default function Studio() {
    return (
        <>
            {/* Hero */}

            <section className="bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 pt-36 pb-24 text-white">

                <div className="mx-auto max-w-7xl px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >

                        <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">

                            MEDIA STUDIO

                        </span>

                        <h1 className="mt-8 text-5xl font-bold leading-tight md:text-6xl">

                            Where Technology
                            <span className="block text-cyan-300">
                                Meets Creative Storytelling.
                            </span>

                        </h1>

                        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">

                            Our professional media studio combines creative talent,
                            production expertise and digital technology to deliver
                            content that informs, inspires and drives business growth.

                        </p>

                    </motion.div>

                </div>

            </section>

            {/* Intro */}

            <section className="py-24">

                <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">

                    <div>

                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">

                            FULL SERVICE PRODUCTION

                        </span>

                        <h2 className="mt-5 text-4xl font-bold text-slate-900">

                            More Than Just A Studio

                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">

                            From concept development to final delivery, we provide
                            end-to-end production services supported by experienced
                            anchors, presenters, creative professionals and digital
                            strategists.

                        </p>

                    </div>

                    <div className="rounded-[32px] bg-slate-900 p-10 text-white">

                        <h3 className="text-2xl font-bold">

                            What We Can Produce

                        </h3>

                        <div className="mt-8 space-y-5">

                            {[
                                "Corporate Films",
                                "Podcast Shows",
                                "News Interviews",
                                "Training Videos",
                                "Brand Campaigns",
                                "Social Media Reels",
                                "Product Videos",
                                "Event Coverage",
                            ].map((item) => (

                                <div
                                    key={item}
                                    className="flex items-center gap-3"
                                >

                                    <CheckCircle2 className="text-cyan-400" />

                                    {item}

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>

            {/* Services */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="space-y-10">

                        {studioServices.map((service) => {

                            const Icon = service.icon;

                            return (

                                <div
                                    key={service.title}
                                    className="flex flex-col gap-6 rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm md:flex-row md:items-start"
                                >

                                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-100">

                                        <Icon className="text-cyan-700" />

                                    </div>

                                    <div>

                                        <h3 className="text-2xl font-bold">

                                            {service.title}

                                        </h3>

                                        <p className="mt-4 leading-8 text-slate-600">

                                            {service.description}

                                        </p>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </section>

            {/* Workflow */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center">

                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">

                            PRODUCTION WORKFLOW

                        </span>

                        <h2 className="mt-5 text-4xl font-bold">

                            From Concept To Screen

                        </h2>

                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-5">

                        {productionFlow.map((step, index) => (

                            <div
                                key={step}
                                className="rounded-[28px] bg-white p-8 text-center shadow-md"
                            >

                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 font-bold text-white">

                                    {index + 1}

                                </div>

                                <p className="mt-5 font-semibold">

                                    {step}

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* Perfect For */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center">

                        <Users className="mx-auto text-cyan-600" size={42} />

                        <h2 className="mt-6 text-4xl font-bold">

                            Perfect For

                        </h2>

                    </div>

                    <div className="mt-16 flex flex-wrap justify-center gap-4">

                        {idealFor.map((item) => (

                            <span
                                key={item}
                                className="rounded-full border border-slate-300 bg-white px-6 py-3 font-medium shadow-sm"
                            >

                                {item}

                            </span>

                        ))}

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="bg-slate-950 py-24 text-white">

                <div className="mx-auto max-w-4xl px-6 text-center">

                    <Radio className="mx-auto text-cyan-400" size={44} />

                    <h2 className="mt-6 text-4xl font-bold">

                        Ready To Produce Exceptional Content?

                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-300">

                        Whether you need a single promotional video or a complete
                        content production partner, our studio is ready to help.

                    </p>

                    <Link
                        to="/contact"
                        className="mt-10 inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
                    >
                        Book Studio Consultation

                        <ArrowRight size={18} />
                    </Link>

                </div>

            </section>
        </>
    );
}