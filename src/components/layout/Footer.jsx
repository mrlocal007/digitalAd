import { Link } from "react-router-dom";
import {
    MapPin,
    Phone,
    Mail,
    ChevronRight,
} from "lucide-react";

import SocialLinks from "../common/SocialLinks";

const quickLinks = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about" },
    { title: "Capabilities", url: "/capabilities" },
    { title: "Platforms", url: "/platforms" },
    { title: "Media Studio", url: "/media-studio" },
    { title: "Industries", url: "/industries" },
    { title: "Contact", url: "/contact" },
];

const capabilities = [
    "Artificial Intelligence",
    "Enterprise Software",
    "Web Development",
    "Mobile Applications",
    "Digital Marketing",
    "Media Production",
];

const platforms = [
    "Attendance SaaS",
    "CRM Solutions",
    "HRMS",
    "Custom ERP",
    "Business Automation",
    "AI Assistants",
];

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300">

            {/* Main Footer */}

            <div className="mx-auto max-w-7xl px-6 py-20">

                <div className="grid gap-14 lg:grid-cols-12">

                    {/* ====================================================== */}
                    {/* Company */}
                    {/* ====================================================== */}

                    <div className="lg:col-span-4">

                        <Link
                            to="/"
                            className="inline-flex items-center gap-3"
                        >

                            {/* Replace with your SVG logo */}

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-xl font-bold text-white">

                                AD

                            </div>

                            <div>

                                <h2 className="text-2xl font-bold text-white">

                                    AD Digital Solutions

                                </h2>

                                <p className="text-sm text-cyan-300">

                                    Digital Transformation &
                                    Media Solutions

                                </p>

                            </div>

                        </Link>

                        <p className="mt-8 max-w-md leading-8">

                            We help businesses accelerate growth through
                            Artificial Intelligence, enterprise software,
                            SaaS platforms, mobile applications, creative
                            media, branding and digital marketing.

                        </p>

                        <div className="mt-10">

                            <SocialLinks
                                size="sm"
                            />

                        </div>

                    </div>

                    {/* ====================================================== */}
                    {/* Quick Links */}
                    {/* ====================================================== */}

                    <div className="lg:col-span-2">

                        <h3 className="text-lg font-semibold text-white">

                            Company

                        </h3>

                        <ul className="mt-8 space-y-4">

                            {quickLinks.map((item) => (

                                <li key={item.title}>

                                    <Link
                                        to={item.url}
                                        className="group flex items-center gap-2 transition hover:text-white"
                                    >

                                        <ChevronRight
                                            size={16}
                                            className="transition group-hover:translate-x-1"
                                        />

                                        {item.title}

                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* ====================================================== */}
                    {/* Capabilities */}
                    {/* ====================================================== */}

                    <div className="lg:col-span-3">

                        <h3 className="text-lg font-semibold text-white">

                            Core Capabilities

                        </h3>

                        <ul className="mt-8 space-y-4">

                            {capabilities.map((item) => (

                                <li
                                    key={item}
                                    className="flex items-center gap-2"
                                >

                                    <ChevronRight
                                        size={16}
                                        className="text-cyan-400"
                                    />

                                    {item}

                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* ====================================================== */}
                    {/* Products */}
                    {/* ====================================================== */}

                    <div className="lg:col-span-3">

                        <h3 className="text-lg font-semibold text-white">

                            SaaS Platforms

                        </h3>

                        <ul className="mt-8 space-y-4">

                            {platforms.map((item) => (

                                <li
                                    key={item}
                                    className="flex items-center gap-2"
                                >

                                    <ChevronRight
                                        size={16}
                                        className="text-cyan-400"
                                    />

                                    {item}

                                </li>

                            ))}

                        </ul>

                    </div>

                </div>

                {/* Divider */}

                <div className="my-16 h-px bg-white/10" />

                {/* Contact Strip */}

                <div className="grid gap-8 md:grid-cols-3">

                    <a
                        href="https://maps.google.com/?q=Aryadahiya+Media+Network+Pvt.+Ltd.+Rohtak"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-500/40 hover:bg-white/10"
                    >

                        <div className="rounded-2xl bg-cyan-500/10 p-3">

                            <MapPin
                                className="text-cyan-400"
                                size={22}
                            />

                        </div>

                        <div>

                            <h4 className="font-semibold text-white">

                                Visit Our Office

                            </h4>

                            <p className="mt-2 text-sm leading-7">

                                Aryadahiya Media Network Pvt. Ltd.

                                <br />

                                Old ITI, Plot No.110

                                <br />

                                Jagdish Colony

                                <br />

                                Rohtak, Haryana 124001

                            </p>

                        </div>

                    </a>

                    <a
                        href="tel:+919817048962"
                        className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-500/40 hover:bg-white/10"
                    >

                        <div className="rounded-2xl bg-cyan-500/10 p-3">

                            <Phone
                                className="text-cyan-400"
                                size={22}
                            />

                        </div>

                        <div>

                            <h4 className="font-semibold text-white">

                                Call Us

                            </h4>

                            <p className="mt-2">

                                +91 98170 48962

                            </p>

                        </div>

                    </a>

                    <a
                        href="mailto:info@admedianetwork.in"
                        className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-500/40 hover:bg-white/10"
                    >

                        <div className="rounded-2xl bg-cyan-500/10 p-3">

                            <Mail
                                className="text-cyan-400"
                                size={22}
                            />

                        </div>

                        <div>

                            <h4 className="font-semibold text-white">

                                Email Us

                            </h4>

                            <p className="mt-2">

                                info@admedianetwork.in

                            </p>

                        </div>

                    </a>

                </div>


                {/* ====================================================== */}
                {/* Bottom Footer */}
                {/* ====================================================== */}

                <div className="mt-16 border-t border-white/10 pt-8">

                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                        {/* Copyright */}

                        <div>

                            <p className="text-sm text-slate-400">

                                © {new Date().getFullYear()} AD Digital Solutions.
                                All rights reserved.

                            </p>

                            <p className="mt-2 text-sm text-slate-500">

                                Digital Transformation & Media Solutions
                                crafted with technology and creativity in India.

                            </p>

                        </div>


                        {/* Legal */}

                        <div className="flex flex-wrap gap-6 text-sm">

                            <Link
                                to="/privacy-policy"
                                className="transition hover:text-white"
                            >

                                Privacy Policy

                            </Link>


                            <Link
                                to="/terms"
                                className="transition hover:text-white"
                            >

                                Terms & Conditions

                            </Link>


                            <Link
                                to="/contact"
                                className="transition hover:text-white"
                            >

                                Contact

                            </Link>

                        </div>

                    </div>

                </div>


            </div>


            {/* ========================================================== */}
            {/* Floating Back To Top */}
            {/* ========================================================== */}

            <button

                onClick={() =>
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    })
                }

                aria-label="Back to top"

                className="
                    fixed
                    bottom-6
                    right-6
                    z-50
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-cyan-500
                    text-slate-900
                    shadow-xl
                    transition
                    hover:-translate-y-1
                    hover:bg-cyan-400
                "

            >

                ↑

            </button>


        </footer>
    );
}