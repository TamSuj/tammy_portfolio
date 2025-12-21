import Image from "next/image";
import { BubbleBadges } from "@/components/ui/bubble-badges";
import AnimatedCardStack from "@/components/ui/animate-card-animation";
import Timeline from "@/components/ui/timeline";
import SocialsContact from "@/components/ui/socials-contact";
import { ExpandableSkillTags } from "@/components/ui/expandable-skill-tags";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f4f4] flex flex-col items-center px-4">
      {/* Hero Section - Full Viewport Height */}
      <main className="w-full max-w-5xl h-screen flex flex-col justify-center items-center">
        {/* Hero heading */}
        <section className="space-y-6 text-center">
          <div className="text-[4.5rem] sm:text-[5.5rem] leading-[1.05] font-semibold tracking-tight text-neutral-900">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span>Hi! I'm Tammy</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <span>Backend</span>
              <span className="inline-flex items-center justify-center h-[70px] w-[100px] rounded-[999px] overflow-hidden bg-[#ff5a1f]">
                <Image
                  src="https://images.unsplash.com/photo-1760670399462-f5e479452c27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Backend project"
                  width={100}
                  height={70}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="text-[#ff5a1f]">Developer</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
              <span className="text-neutral-500">based in</span>
              <span className="font-semibold">LA</span>
              <span className="inline-flex items-center justify-center h-[70px] w-[100px] rounded-[999px] overflow-hidden bg-neutral-900">
                <Image
                  src="https://images.unsplash.com/photo-1729536233990-5dd65ab81e42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="UCLA"
                  width={100}
                  height={70}
                  className="h-full w-full object-cover"
                />
              </span>
            </div>
          </div>

          <p className="max-w-2xl text-lg text-neutral-500 mt-4 mx-auto">
            I build software that solves real-world problems and scales
          </p>
        </section>

        {/* CTA button */}
        <div className="mt-10">
          <a
            href="https://drive.google.com/file/d/1-PZFZPKrTwmU9tnuwDUZCo0qDDH1i6ii/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-neutral-900 text-white px-10 py-4 text-base font-medium shadow-[0_18px_40px_rgba(0,0,0,0.3)] hover:bg-black transition"
          >
            View Resume
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline-flex"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
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
      <h1 className="text-neutral-900 text-center text-4xl font-bold tracking-tight sm:text-5xl py-16">
        Skills
      </h1>
      <section className="w-full max-w-7xl pb-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column - BubbleBadges (narrower) */}
          <div className="lg:col-span-2">
          <h3 className="mb-4 text-lg font-semibold text-neutral-900 text-center">Area of Expertise</h3>
            <BubbleBadges />
          </div>
          
          {/* Right Column - Skill tag */}
          <div className="lg:col-span-3">
            <ExpandableSkillTags
              title="Programming Languages"
              skills={[
                "Java",
                "Python",
                "C++",
                "JavaScript",
                "Go",
                "Scala",
                "SQL",
                "TypeScript",
                "ASP.Net",
                "HTML/CSS",
                "YAML",
                "Shell",
              ]}
              initialCount={10}
            />
            <ExpandableSkillTags
              title="Frameworks/Libraries"
              skills={[
                "React",
                "Node.js",
                "Hadoop",
                "GraphQL",
                "Apache Kafka",
                "Apache Flink",
                "REST APIs",
                "Tailwind",
                "Scikit-learn",
                "Sphinx",
                "Agile",
                "PyTorch",
                "Playwright",
                "PyTest",
                "pandas",
                "NumPy",
                "Matplotlib",
                "Seaborn",
                "Biopython",
              ]}
              initialCount={10}
            />
            <ExpandableSkillTags
              title="Developer Tools"
              skills={[
                "Git",
                "AWS",
                "Azure",
                "mySQL",
                "DBeaver",
                "Postman",
                "CI/CD",
              ]}
              initialCount={10}
            />
          </div>
        </div>
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
