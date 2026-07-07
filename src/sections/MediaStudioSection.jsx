import { motion } from "framer-motion";
import {
    CheckCircle2,
    Camera,
    PlayCircle,
} from "lucide-react";

import PrimaryButton from "../components/ui/PrimaryButton";
import FloatingBadge from "../components/ui/FloatingBadge";
import SectionTitle from "../components/ui/SectionTitle";

import mediaStudio from "/data/mediaStudio";

export default function MediaStudioSection() {

    return (

        <section className="relative overflow-hidden bg-slate-50 py-32">

            {/* Background */}

            <div className="absolute inset-0">

                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

                <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-100/40 blur-3xl" />

            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                <SectionTitle
                    badge="MEDIA STUDIO"
                    title="Professional Content Creation"
                    highlight="Under One Roof"
                    description="Technology alone isn't enough. Modern brands need engaging visual content. Our in-house media studio helps businesses create professional videos, podcasts, photography, digital campaigns and brand stories."
                />

                <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

                    {/* LEFT */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7 }}
                        className="relative"
                    >

                        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-10 shadow-2xl min-h-[620px]">

                            {/* Camera */}

                            <div className="absolute left-10 top-10">

                                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 backdrop-blur">

                                    <Camera
                                        size={46}
                                        className="text-white"
                                    />

                                </div>

                            </div>

                            {/* Play */}

                            <div className="absolute right-10 top-10">

                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-blue-700 shadow-xl">

                                    <PlayCircle size={42} />

                                </div>

                            </div>

                            {/* Placeholder */}

                            <div className="flex h-full min-h-[520px] items-center justify-center">

                                <div className="text-center">

                                    <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-white/20 bg-white/10">

                                        <Camera
                                            size={64}
                                            className="text-white"
                                        />

                                    </div>

                                    <h3 className="mt-8 text-3xl font-bold text-white">

                                        Studio Preview

                                    </h3>

                                    <p className="mt-4 max-w-md text-slate-300">

                                        Replace this panel with your actual
                                        studio photograph, drone shot or
                                        promotional video.

                                    </p>

                                </div>

                            </div>

                            {/* Floating Badges */}

                            <div className="absolute -left-5 top-40">

                                <FloatingBadge
                                    text="🎙 Podcast Studio"
                                    delay={0.1}
                                />

                            </div>

                            <div className="absolute right-4 top-56">

                                <FloatingBadge
                                    text="🎬 Corporate Films"
                                    delay={0.2}
                                />

                            </div>

                            <div className="absolute left-16 bottom-28">

                                <FloatingBadge
                                    text="📸 Photography"
                                    delay={0.3}
                                />

                            </div>

                            <div className="absolute right-10 bottom-12">

                                <FloatingBadge
                                    text="📺 Live Streaming"
                                    delay={0.4}
                                />

                            </div>

                        </div>

                    </motion.div>

                    {/* RIGHT */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7 }}
                    >

                        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

                            CONTENT THAT BUILDS BRANDS

                        </span>

                        <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">

                            Media Production
                            <br />

                            Meets Technology

                        </h2>

                        <p className="mt-8 text-lg leading-8 text-slate-600">

                            We help businesses create impactful digital
                            content using our professional studio,
                            experienced anchors, actors, photographers,
                            editors and production specialists.

                        </p>

                        <div className="mt-10 space-y-5">

                            {mediaStudio.highlights.map((item) => {

                                const Icon = item.icon;

                                return (

                                    <div
                                        key={item.title}
                                        className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-lg"
                                    >

                                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white">

                                            <Icon size={26} />

                                        </div>

                                        <div>

                                            <h4 className="font-semibold text-slate-900">

                                                {item.title}

                                            </h4>

                                            <p className="mt-1 text-slate-600">

                                                Professional quality for
                                                commercial and corporate
                                                projects.

                                            </p>

                                        </div>

                                    </div>

                                );

                            })}

                        </div>

                        <div className="mt-12 flex flex-wrap gap-4">

                            <PrimaryButton>

                                Book Studio Visit

                            </PrimaryButton>

                            <button className="rounded-full border border-slate-300 px-8 py-4 font-semibold transition hover:bg-slate-100">

                                View Portfolio

                            </button>

                        </div>

                        <div className="mt-12 flex items-center gap-3">

                            <CheckCircle2
                                className="text-green-600"
                                size={22}
                            />

                            <span className="text-slate-700">

                                Professional equipment • Experienced team •
                                End-to-end production

                            </span>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>

    );

}