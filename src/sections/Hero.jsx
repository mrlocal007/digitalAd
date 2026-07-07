import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  CheckCircle2,
  Globe,
  Smartphone,
  MonitorSmartphone,
  BrainCircuit,
} from "lucide-react";

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "50+", label: "Experts" },
  { value: "20+", label: "SaaS Products" },
  { value: "100%", label: "Custom Solutions" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">

              Digital Transformation & Media Solutions

            </span>

            <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-tight">

              Building

              <span className="text-blue-400"> Digital </span>

              Experiences

              <br />

              That Grow

              <span className="text-cyan-400"> Businesses</span>

            </h1>

            <p className="mt-8 max-w-2xl text-lg text-slate-300 leading-8">

              We empower startups, enterprises and organizations through
              intelligent technology, AI solutions, digital branding,
              mobile applications, business automation, media production,
              marketing and scalable SaaS platforms.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <button className="rounded-full bg-blue-600 hover:bg-blue-700 px-7 py-4 font-semibold flex items-center gap-3 transition">

                Start Your Project

                <ArrowRight size={20} />

              </button>

              <button className="rounded-full border border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 px-7 py-4 font-semibold flex items-center gap-3 transition">

                <PlayCircle size={20} />

                Watch Company Profile

              </button>

            </div>

            <div className="mt-12 grid grid-cols-2 gap-5">

              {stats.map((item) => (

                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6"
                >

                  <h2 className="text-3xl font-bold">

                    {item.value}

                  </h2>

                  <p className="mt-2 text-slate-300">

                    {item.label}

                  </p>

                </div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: .95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .9 }}
            className="relative"
          >

            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

              <div className="grid gap-6">

                <Card
                  icon={<BrainCircuit />}
                  title="Artificial Intelligence"
                  text="AI Chatbots, Voice Assistants & Business Automation"
                />

                <Card
                  icon={<MonitorSmartphone />}
                  title="Business Software"
                  text="ERP, CRM, HRMS & Enterprise Platforms"
                />

                <Card
                  icon={<Smartphone />}
                  title="Mobile Applications"
                  text="Android • iOS • Cross Platform Solutions"
                />

                <Card
                  icon={<Globe />}
                  title="Digital Presence"
                  text="Corporate Websites, Branding, SEO & GEO"
                />

              </div>

            </div>

            <div className="absolute -bottom-10 -left-8 rounded-2xl border border-white/10 bg-blue-600 p-5 shadow-2xl">

              <div className="flex items-center gap-4">

                <CheckCircle2 size={28} />

                <div>

                  <h3 className="font-bold">

                    Complete Business Solutions

                  </h3>

                  <p className="text-sm text-blue-100">

                    Strategy • Technology • Media

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

function Card({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5 hover:bg-slate-800/50 transition">

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600">

          {icon}

        </div>

        <div>

          <h3 className="font-semibold text-lg">

            {title}

          </h3>

          <p className="mt-1 text-sm text-slate-300">

            {text}

          </p>

        </div>

      </div>

    </div>
  );
}