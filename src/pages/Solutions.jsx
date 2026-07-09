import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Building2,
    Users,
    Clock3,
    Briefcase,
    GraduationCap,
    ShieldCheck,
    Cloud,
    Smartphone,
    Monitor,
    Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";

const platforms = [
    {
        icon: Users,
        title: "HRMS & Attendance Platform",
        description:
            "Employee attendance, leave management, payroll integration, geo check-in/out, reports and dashboards.",
    },
    {
        icon: Building2,
        title: "CRM & Sales Automation",
        description:
            "Lead management, customer lifecycle, quotations, follow-ups and sales analytics.",
    },
    {
        icon: Briefcase,
        title: "Custom ERP Solutions",
        description:
            "Operations, inventory, finance, procurement and workflow automation tailored to your business.",
    },
    {
        icon: GraduationCap,
        title: "Education Management",
        description:
            "Student management, admissions, attendance, online learning and parent communication.",
    },
    {
        icon: Clock3,
        title: "Appointment & Booking",
        description:
            "Scheduling, reminders, calendars, payments and customer self-service portals.",
    },
    {
        icon: ShieldCheck,
        title: "Business Compliance",
        description:
            "Document workflows, approvals, audits and compliance management systems.",
    },
];

const technologies = [
    "React",
    "Next.js",
    "Flutter",
    "React Native",
    "Node.js",
    "Python",
    "FastAPI",
    "Laravel",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Azure",
];

const deployment = [
    {
        icon: Cloud,
        title: "Cloud SaaS",
    },
    {
        icon: Monitor,
        title: "On-Premise",
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
    },
    {
        icon: Cpu,
        title: "AI Enabled",
    },
];

export default function Solutions() {
    return (
        <>
            {/* HERO */}

            <section className="bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 pt-36 pb-24 text-white">

                <div className="mx-auto max-w-7xl px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6 }}
                        className="max-w-4xl"
                    >

                        <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">

                            PLATFORMS & SAAS SOLUTIONS

                        </span>

                        <h1 className="mt-8 text-5xl font-bold md:text-6xl">

                            Custom Platforms Built
                            <span className="block text-cyan-300">
                                Around Your Business.
                            </span>

                        </h1>

                        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">

                            We build secure, scalable and intelligent SaaS
                            platforms that streamline operations, automate
                            workflows and accelerate business growth.

                        </p>

                    </motion.div>

                </div>

            </section>

            {/* FEATURED */}

            <section className="pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-36 lg:pb-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="rounded-[36px] bg-linear-to-r from-blue-700 to-cyan-600 p-10 text-white shadow-2xl lg:p-16">

                        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

                            <div>

                                <span className="text-sm uppercase tracking-[0.3em]">

                                    FEATURED PLATFORM

                                </span>

                                <h2 className="mt-5 text-4xl font-bold">

                                    Smart Workforce &
                                    Attendance Platform

                                </h2>

                                <p className="mt-6 text-lg leading-8 text-blue-50">

                                    Geo attendance, facial recognition,
                                    leave management, payroll integration,
                                    analytics, mobile apps and real-time
                                    workforce visibility.

                                </p>

                                <Link
                                    to="/contact"
                                    className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-blue-700"
                                >

                                    Request Demo

                                    <ArrowRight size={18} />

                                </Link>

                            </div>

                            <div className="rounded-[28px] bg-white/10 p-8 backdrop-blur">

                                <div className="space-y-5">

                                    {[
                                        "Geo Check-In / Check-Out",
                                        "Live Dashboard",
                                        "Attendance Reports",
                                        "Leave Management",
                                        "Payroll Ready",
                                        "Admin Portal",
                                    ].map((item) => (

                                        <div
                                            key={item}
                                            className="flex items-center gap-3"
                                        >

                                            <CheckCircle2 className="text-cyan-200" />

                                            {item}

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* PLATFORM PORTFOLIO */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center max-w-3xl mx-auto">

                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">

                            PLATFORM PORTFOLIO

                        </span>

                        <h2 className="mt-5 text-4xl font-bold">

                            Solutions That Scale With Your Business

                        </h2>

                    </div>

                    <div className="mt-16 space-y-8">

                        {platforms.map((item) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={item.title}
                                    className="flex flex-col gap-6 rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl md:flex-row md:items-center"
                                >

                                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-100">

                                        <Icon className="text-cyan-700" />

                                    </div>

                                    <div className="flex-1">

                                        <h3 className="text-2xl font-bold text-slate-900">

                                            {item.title}

                                        </h3>

                                        <p className="mt-3 leading-7 text-slate-600">

                                            {item.description}

                                        </p>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </section>

            {/* TECHNOLOGY */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid gap-14 lg:grid-cols-2">

                        <div>

                            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">

                                TECHNOLOGY STACK

                            </span>

                            <h2 className="mt-5 text-4xl font-bold">

                                Modern Technologies For Modern Businesses

                            </h2>

                            <div className="mt-10 flex flex-wrap gap-4">

                                {technologies.map((tech) => (

                                    <span
                                        key={tech}
                                        className="rounded-full bg-slate-100 px-5 py-3 font-medium"
                                    >

                                        {tech}

                                    </span>

                                ))}

                            </div>

                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">

                            {deployment.map((item) => {

                                const Icon = item.icon;

                                return (

                                    <div
                                        key={item.title}
                                        className="rounded-[28px] border bg-white p-8 shadow-sm"
                                    >

                                        <Icon className="text-cyan-600" />

                                        <h3 className="mt-6 text-xl font-bold">

                                            {item.title}

                                        </h3>

                                    </div>

                                );

                            })}

                        </div>

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="bg-slate-950 py-24 text-white">

                <div className="mx-auto max-w-4xl px-6 text-center">

                    <h2 className="text-4xl font-bold">

                        Need A Platform Built For Your Business?

                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-300">

                        We design, build and maintain enterprise-grade SaaS
                        platforms tailored to your unique business processes.

                    </p>

                    <Link
                        to="/contact"
                        className="mt-10 inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
                    >
                        Let's Talk

                        <ArrowRight size={18} />
                    </Link>

                </div>

            </section>

        </>
    );
}