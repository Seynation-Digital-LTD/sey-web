import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { ServiceDetails, ServiceDetailItem } from "../../mockdata/data";
import { MoveRight, CheckCircle2, ArrowRight, Cog } from "lucide-react";

export default async function SolutionPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params;

  const service = ServiceDetails[slug] as ServiceDetailItem;

  if (!service) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-primaryOne selection:text-white overflow-hidden">

      {/* Immersive Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          {service.isVideo ? (
            <video
              src={service.heroImage}
              autoPlay loop muted playsInline
              className="w-full h-full object-cover opacity-60"
            />
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                className="object-cover opacity-60"
              />
            </div>
          )}
          {/* Gradients to fade edges */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </div>

        <div className="container max-w-7xl mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-3xl space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primaryOne animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Premium Service</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-mina font-bold leading-tight">
              {service.title.split(' ')[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                {service.title.split(' ').slice(1).join(' ')}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light border-l-2 border-primaryOne pl-6">
              {service.description}
            </p>

            <div className="pt-8 flex flex-col sm:flex-row gap-6">
              <a href="#contact" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-primaryOne hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center gap-3">
                Start Project <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Key Benefits Grid */}
      <section className="py-24 bg-[#0A0A0A] relative border-t border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primaryOne/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h3 className="text-primaryOne font-bold uppercase tracking-widest text-sm mb-4">Why Choose Us</h3>
            <h2 className="text-4xl md:text-5xl font-mina font-bold">The Competitive Edge.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits?.map((benefit, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primaryOne/50 hover:bg-white/[0.08] transition-all group">
                <div className="text-3xl mb-6 text-primaryOne group-hover:scale-110 transition-transform origin-left">✦</div>
                <h4 className="text-xl font-bold mb-3 font-mina">{benefit.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Tools Section */}
      <section className="py-20 border-y border-white/5 bg-neutral-900/30">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="mb-12 flex items-center gap-4">
            <div className="p-3 rounded-full bg-white/5 border border-white/10">
              <Cog className="w-6 h-6 text-primaryOne" />
            </div>
            <h3 className="text-2xl font-mina font-bold">Tools & Technologies</h3>
          </div>

          <div className="flex flex-wrap gap-4">
            {service.tools?.map((tool, idx) => (
              <div key={idx} className="px-6 py-3 rounded-full bg-black border border-white/10 text-gray-300 font-bold hover:border-primaryOne hover:text-white transition-colors cursor-default">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Process & Features Split */}
      <section className="py-32 relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">

            {/* Left: Process Timeline */}
            <div className="flex-1">
              <h3 className="text-4xl font-mina font-bold mb-12">Our <span className="text-primaryOne italic">Process</span></h3>
              <div className="space-y-12">
                {service.process?.map((step, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full border border-primaryOne/50 flex items-center justify-center font-bold text-primaryOne bg-primaryOne/10 group-hover:bg-primaryOne group-hover:text-white transition-colors">
                        {step.step}
                      </div>
                      {idx !== service.process.length - 1 && (
                        <div className="w-px h-full bg-white/10 my-4 group-hover:bg-primaryOne/30 transition-colors" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h4 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors text-gray-200">{step.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Deliverables List */}
            <div className="flex-1 lg:pl-12">
              <div className="sticky top-32 p-10 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-xl">
                <h3 className="text-3xl font-mina font-bold mb-8">What We Deliver</h3>
                <ul className="space-y-6">
                  {service.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-lg text-gray-300">
                      <CheckCircle2 className="w-6 h-6 text-primaryOne shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <a href="#contact" className="group flex items-center gap-4 text-white font-bold hover:text-primaryOne transition-colors">
                    <span>Schedule a Consultation</span>
                    <MoveRight className="group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Contact Section */}
      <section id="contact" className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-mina font-bold mb-6">Start Your <span className="text-primaryOne italic">Transformation.</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Fill out the form below to book your consultation directly. Let&apos;s discuss how we can elevate your {service.title.toLowerCase()}.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ContactSection />
          </div>
        </div>
      </section>

    </main>
  );
}
