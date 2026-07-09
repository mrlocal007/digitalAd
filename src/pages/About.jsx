import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Cpu,
    Globe,
    MonitorSmartphone,
    Camera,
    Search,
    BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

const expertise = [
    {
        icon: Cpu,
        title: "Artificial Intelligence",
        description:
            "Practical AI solutions, automation and intelligent business workflows.",
    },
    {
        icon: Globe,
        title: "Web Platforms",
        description:
            "Fast, scalable and SEO-ready websites for ambitious businesses.",
    },
    {
        icon: MonitorSmartphone,
        title: "Mobile Applications",
        description:
            "Cross-platform mobile applications with exceptional user experience.",
    },
    {
        icon: Camera,
        title: "Media Production",
        description:
            "Professional studio, anchors, actors and branded digital content.",
    },
    {
        icon: Search,
        title: "SEO & GEO",
        description:
            "Optimize your visibility for Google and AI search engines.",
    },
    {
        icon: BarChart3,
        title: "Growth Marketing",
        description:
            "Digital campaigns focused on measurable business growth.",
    },
];

const differentiators = [
    "Technology + Media under one roof",
    "Custom software instead of one-size-fits-all solutions",
    "Professional media studio with production capabilities",
    "Business-first consulting approach",
    "Scalable SaaS products and enterprise platforms",
    "Long-term technology partnership",
];

export default function About() {
    return (
        <>
            {/* Hero */}
            <section className="bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-36 lg:pb-24 text-white">
                <div className="mx-auto max-w-7xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <span className="rounded-full bg-cyan-500/15 px-4 py-2 text-xs font-semibold tracking-[0.3em] uppercase text-cyan-300">
                            ABOUT AD DIGITAL SOLUTIONS
                        </span>

                        <h1 className="mt-8 text-5xl font-bold leading-tight md:text-6xl">
                            We Help Businesses
                            <span className="block text-cyan-300">
                                Grow Through Technology.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
                            AD Digital Solutions combines digital strategy,
                            enterprise technology, artificial intelligence,
                            creative media and business consulting to help
                            organisations modernize, automate and grow.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-24">
                <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                            WHO WE ARE
                        </span>

                        <h2 className="mt-5 text-4xl font-bold text-slate-900">
                            More Than a Digital Agency.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            We don't just create websites or run marketing
                            campaigns. We partner with businesses to solve
                            operational challenges, build digital platforms,
                            strengthen brand identity and create measurable
                            business outcomes.
                        </p>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            From startups to established enterprises, our
                            multidisciplinary team delivers integrated
                            technology, media and consulting services tailored
                            to each client's goals.
                        </p>
                    </div>

                    <div className="rounded-[32px] bg-slate-900 p-10 text-white shadow-2xl">
                        <h3 className="text-2xl font-bold">
                            Why Businesses Choose Us
                        </h3>

                        <div className="mt-8 space-y-5">
                            {differentiators.map((item) => (
                                <div key={item} className="flex gap-3">
                                    <CheckCircle2 className="mt-1 text-cyan-400" />
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise */}
            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="max-w-3xl">
                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                            OUR EXPERTISE
                        </span>

                        <h2 className="mt-5 text-4xl font-bold text-slate-900">
                            Everything Required For Digital Transformation
                        </h2>
                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {expertise.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">
                                        <Icon className="text-cyan-600" />
                                    </div>

                                    <h3 className="mt-6 text-xl font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 leading-7 text-slate-600">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-slate-950 py-24 text-white">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <h2 className="text-4xl font-bold">
                        Ready to Transform Your Business?
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        Let's discuss how technology, media and digital
                        transformation can accelerate your business growth.
                    </p>

                    <Link
                        to="/contact"
                        className="mt-10 inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
                    >
                        Start Your Project
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </>
    );
}