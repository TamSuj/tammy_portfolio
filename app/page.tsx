import Image from "next/image";
import { BubbleBadges } from "@/components/ui/bubble-badges";
import AnimatedCardStack from "@/components/ui/animate-card-animation";
import Timeline from "@/components/ui/timeline";
import SocialsContact from "@/components/ui/socials-contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f4f4] flex flex-col items-center px-4">
      {/* Hero Section - Full Viewport Height */}
      <main className="w-full max-w-5xl h-screen flex flex-col justify-center">
        {/* Hero heading */}
        <section className="space-y-6">
          <div className="text-[3.4rem] leading-[1.05] font-semibold tracking-tight text-neutral-900">
            <div className="flex flex-wrap items-center gap-4">
              <span>Hi! I'm Tammy</span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <span>Backend</span>
              <span className="inline-flex items-center justify-center h-[65px] w-[130px] rounded-[999px] overflow-hidden bg-[#ff5a1f]">
                <Image
                  src="https://images.unsplash.com/photo-1760670399462-f5e479452c27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Backend project"
                  width={140}
                  height={82}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="text-[#ff5a1f]">Developer</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <span className="text-neutral-500">based in</span>
              <span className="font-semibold">LA</span>
              <span className="inline-flex items-center justify-center h-[65px] w-[130px] rounded-[999px] overflow-hidden bg-neutral-900">
                <Image
                  src="https://images.unsplash.com/flagged/photo-1575555201693-7cd442b8023f?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="LA skyline"
                  width={140}
                  height={82}
                  className="h-full w-full object-cover"
                />
              </span>
            </div>
          </div>

          <p className="max-w-2xl text-lg text-neutral-500 mt-4">
            I build software that solves real-world problems and scales
          </p>
        </section>

        {/* CTA button */}
        <div className="mt-10">
          <button className="inline-flex items-center gap-3 rounded-full bg-neutral-900 text-white px-10 py-4 text-base font-medium shadow-[0_18px_40px_rgba(0,0,0,0.3)] hover:bg-black transition">
            Get to know me
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-neutral-900 text-sm">
              →
            </span>
          </button>
        </div>
      </main>

      {/* Experience Section */}
      <h1 className="text-neutral-900 text-center text-4xl font-bold tracking-tight sm:text-5xl pt-16">
        Experience
      </h1>
      <section className="w-full max-w-5xl py-16">
        <Timeline />
      </section>

      {/* Skills Badges Section */}
      <section className="w-full max-w-5xl pb-16">
        <BubbleBadges />
      </section>

      {/* Projects Section */}
      <h1 className="text-neutral-900 text-center text-4xl font-bold tracking-tight sm:text-5xl">
        Projects
      </h1>
      <section className="w-full max-w-5xl py-16">
        <AnimatedCardStack />
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-5xl py-16">
        <h1 className="text-neutral-900 text-center text-4xl font-bold tracking-tight sm:text-5xl mb-12">
          Contact
        </h1>
        <SocialsContact />
      </section>
    </div>
  );
}
