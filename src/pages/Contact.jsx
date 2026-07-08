import { motion } from "framer-motion";
import {
    Phone,
    MessageCircle,
    Mail,
    ArrowRight,
} from "lucide-react";

import ContactForm from "/src/components/contact/ContactForm";
import OfficeInfo from "/src/components/contact/OfficeInfo";
import MapSection from "/src/components/contact/MapSection";
import SocialLinks from "/src/components/common/SocialLinks";

export default function Contact() {
    return (
        <>

            {/* ================= HERO ================= */}

            <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 py-28 text-white">

                {/* Background Glow */}

                <div className="absolute inset-0">

                    <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

                    <div className="absolute right-0 bottom-0 h-105 w-105 rounded-full bg-blue-500/20 blur-3xl" />

                </div>

                <div className="relative mx-auto max-w-7xl px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6 }}
                        className="max-w-4xl"
                    >

                        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.30em] text-cyan-300">

                            CONTACT AD DIGITAL SOLUTIONS

                        </span>

                        <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">

                            Let's Build Something

                            <span className="block text-cyan-300">

                                Exceptional Together.

                            </span>

                        </h1>

                        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">

                            Whether you're looking to launch a professional website,
                            build an enterprise SaaS platform, implement Artificial
                            Intelligence, create engaging media content or accelerate
                            your digital growth—we're ready to help.

                        </p>

                        <div className="mt-10 flex flex-wrap gap-5">

                            <a
                                href="#contact-form"
                                className="inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
                            >

                                Start Your Project

                                <ArrowRight size={20} />

                            </a>

                            <a
                                href="tel:+919817048962"
                                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10"
                            >

                                <Phone size={18} />

                                Call Now

                            </a>

                        </div>

                    </motion.div>

                </div>

            </section>

            {/* ================= FORM ================= */}

            <section
                id="contact-form"
                className="bg-slate-50 py-24"
            >

                <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-12">

                    <div className="lg:col-span-7">

                        <ContactForm />

                    </div>

                    <div className="lg:col-span-5">

                        <OfficeInfo />

                    </div>

                </div>

            </section>

            {/* ================= MAP ================= */}

            <MapSection />

            {/* ================= QUICK CONNECT ================= */}

            <section className="bg-white py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="rounded-[36px] bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-white lg:p-14">

                        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

                            <div>

                                <span className="text-sm uppercase tracking-[0.30em] text-cyan-100">

                                    READY TO TALK?

                                </span>

                                <h2 className="mt-5 text-4xl font-bold">

                                    Choose the Way That Works Best for You

                                </h2>

                                <p className="mt-5 max-w-xl text-lg leading-8 text-blue-50">

                                    Prefer a quick phone call? Want to chat on
                                    WhatsApp? Or send us an email? We're available
                                    across multiple channels.

                                </p>

                            </div>

                            <div className="space-y-5">

                                <a
                                    href="tel:+919817048962"
                                    className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 transition hover:bg-white/20"
                                >

                                    <Phone />

                                    <div>

                                        <h3 className="font-semibold">

                                            Call Us

                                        </h3>

                                        <p className="text-blue-100">

                                            +91 98170 48962

                                        </p>

                                    </div>

                                </a>

                                <a
                                    href="https://wa.me/919817048962"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 transition hover:bg-white/20"
                                >

                                    <MessageCircle />

                                    <div>

                                        <h3 className="font-semibold">

                                            WhatsApp

                                        </h3>

                                        <p className="text-blue-100">

                                            Start Chat

                                        </p>

                                    </div>

                                </a>

                                <a
                                    href="mailto:info@admedianetwork.in"
                                    className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 transition hover:bg-white/20"
                                >

                                    <Mail />

                                    <div>

                                        <h3 className="font-semibold">

                                            Email

                                        </h3>

                                        <p className="text-blue-100">

                                            info@admedianetwork.in

                                        </p>

                                    </div>

                                </a>

                            </div>

                        </div>

                        <div className="mt-12 border-t border-white/20 pt-10">

                            <SocialLinks
                                showLabel
                                size="md"
                            />

                        </div>

                    </div>

                </div>

            </section>

        </>
    );
}