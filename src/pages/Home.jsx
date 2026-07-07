import Hero from "../sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Section */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center">

            <span className="inline-block rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-semibold">
              OUR EXPERTISE
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900">
              End-to-End Digital Solutions
            </h2>

            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
              We combine technology, creativity and business strategy to
              help organizations establish a powerful digital presence,
              automate operations and accelerate growth.
            </p>

          </div>

        </div>
      </section>

    </>
  );
}