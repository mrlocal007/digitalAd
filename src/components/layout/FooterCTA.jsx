import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function FooterCTA() {
    return (
        <section className="relative overflow-hidden">

            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700 px-10 py-16 shadow-2xl lg:px-16"
                >

                    {/* Background Glow */}

                    <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

                    <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

                    <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">

                        <div>

                            <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100">

                                READY TO GROW?

                            </span>

                            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">

                                Let's Build Your Next
                                Digital Success Story.

                            </h2>

                            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">

                                Whether you're looking for Artificial Intelligence,
                                enterprise software, mobile applications, branding,
                                media production or digital marketing, our experts
                                are ready to help.

                            </p>

                        </div>

                        <div className="flex flex-wrap justify-start gap-5 lg:justify-end">

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition hover:-translate-y-1 hover:shadow-xl"
                            >
                                Start Your Project

                                <ArrowRight size={20} />
                            </Link>

                            <a
                                href="tel:+919817048962"
                                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
                            >
                                <Phone size={18} />

                                Call Now
                            </a>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}