import { motion } from "framer-motion";
import {
    Brain,
    Globe,
    Smartphone,
    MonitorCog,
    Camera,
    Search,
    Megaphone,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
    {
        icon: Brain,
        title: "Artificial Intelligence Solutions",
        description:
            "We build practical AI-powered solutions that automate repetitive work, improve decision-making and enhance customer experiences. From AI assistants to workflow automation, we help businesses embrace intelligent technology.",
        highlights: [
            "AI Chatbots",
            "Business Automation",
            "Workflow Intelligence",
            "Custom AI Solutions",
        ],
    },
    {
        icon: Globe,
        title: "Website & Portal Development",
        description:
            "Professional corporate websites, portals and business platforms designed for performance, SEO, GEO and long-term scalability.",
        highlights: [
            "Corporate Websites",
            "CMS",
            "Customer Portals",
            "Responsive UI",
        ],
    },
    {
        icon: Smartphone,
        title: "Mobile Applications",
        description:
            "Modern Android and iOS applications built for startups, enterprises and internal business operations.",
        highlights: [
            "Android",
            "iOS",
            "Flutter",
            "React Native",
        ],
    },
    {
        icon: MonitorCog,
        title: "Enterprise SaaS Platforms",
        description:
            "Custom software platforms that streamline operations, improve collaboration and support business growth.",
        highlights: [
            "CRM",
            "HRMS",
            "Attendance",
            "ERP",
        ],
    },
    {
        icon: Camera,
        title: "Media Production",
        description:
            "Professional studio, anchors, actors and production facilities for interviews, podcasts, corporate films and social media campaigns.",
        highlights: [
            "Studio",
            "Podcast",
            "Corporate Videos",
            "Reels",
        ],
    },
    {
        icon: Search,
        title: "SEO & GEO",
        description:
            "Optimize your digital presence for Google Search and AI-powered search platforms including ChatGPT, Gemini and Perplexity.",
        highlights: [
            "SEO",
            "GEO",
            "Technical SEO",
            "AI Visibility",
        ],
    },
    {
        icon: Megaphone,
        title: "Digital Marketing & Branding",
        description:
            "Performance marketing and brand-building strategies designed to generate measurable business growth.",
        highlights: [
            "Google Ads",
            "Meta Ads",
            "Brand Identity",
            "Lead Generation",
        ],
    },
];

const process = [
    "Business Discovery",
    "Strategy & Planning",
    "Design & Development",
    "Testing & Optimization",
    "Launch & Continuous Support",
];

export default function Services() {
    return (
        <>
            {/* Hero */}
            <section className="bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-36 lg:pb-24 text-white">
                <div className="mx-auto max-w-7xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                            OUR CAPABILITIES
                        </span>

                        <h1 className="mt-8 text-5xl font-bold md:text-6xl">
                            Technology.
                            <span className="block text-cyan-300">
                                Creativity.
                            </span>
                            Growth.
                        </h1>

                        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
                            We combine technology consulting, AI, software
                            engineering, media production and digital marketing
                            to help organisations accelerate digital
                            transformation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="space-y-16">
                        {capabilities.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className={`grid items-center gap-12 lg:grid-cols-2 ${
                                        index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                                    }`}
                                >
                                    <div>
                                        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-100">
                                            <Icon className="text-cyan-700" size={30} />
                                        </div>

                                        <h2 className="mt-6 text-3xl font-bold text-slate-900">
                                            {item.title}
                                        </h2>

                                        <p className="mt-6 text-lg leading-8 text-slate-600">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl">
                                        <h3 className="text-xl font-semibold text-slate-900">
                                            Key Deliverables
                                        </h3>

                                        <div className="mt-6 space-y-4">
                                            {item.highlights.map((point) => (
                                                <div key={point} className="flex items-center gap-3">
                                                    <CheckCircle2 className="text-cyan-600" size={20} />
                                                    <span>{point}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center">
                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                            OUR PROCESS
                        </span>

                        <h2 className="mt-5 text-4xl font-bold text-slate-900">
                            From Strategy to Success
                        </h2>
                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-5">
                        {process.map((step, index) => (
                            <div
                                key={step}
                                className="rounded-[28px] bg-white p-8 text-center shadow-md"
                            >
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 font-bold text-white">
                                    {index + 1}
                                </div>

                                <h3 className="mt-5 font-semibold">
                                    {step}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-slate-950 py-24 text-white">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-4xl font-bold">
                        Let's Build the Right Digital Solution for Your Business
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        Every business is unique. We create tailored technology,
                        media and marketing solutions aligned with your goals.
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