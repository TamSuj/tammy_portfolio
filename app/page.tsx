  "use client";

  import { useRef } from "react";
  import { motion } from "framer-motion";
  import Image from "next/image";
  import { BubbleBadges } from "@/components/ui/bubble-badges";
  import AnimatedCardStack from "@/components/ui/animate-card-animation";
  import Timeline from "@/components/ui/timeline";
  import SocialsContact from "@/components/ui/socials-contact";
  import { ExpandableSkillTags } from "@/components/ui/expandable-skill-tags";
  import { ImageTrail } from "@/components/ui/image-trail";
  import { ZoomParallax } from "@/components/ui/zoom-parallax";
  import { cn } from "@/lib/utils";
  import anime from "./assets/anime.png";
  import flower from "./assets/flower.jpg";
  import lajolla from "./assets/lajolla.png";
  import beach from "./assets/beach.jpeg";
  import li from "./assets/li.png";
  import camera from "./assets/camera.jpg";
  import skin from "./assets/skin.jpg";
  import bangkok from "./assets/bangkok.jpg"; 
  import escalator from "./assets/escalator.jpg";
  import tammyli from "./assets/tammyli.jpg";
  import sky from "./assets/sky.jpg";
  import DC from "./assets/DC.jpg";
  import museum from "./assets/museum.jpg";
  import sunset from "./assets/sunset.jpeg";
  import darksky from "./assets/darksky.jpeg";
  import AboutMe from "@/components/ui/about-me";

  export default function Home() {
    const pageRef = useRef<HTMLDivElement>(null);

    const trailImages = [
      "https://images.unsplash.com/photo-1626060490950-fabf0d72ca8a?q=80&w=2204&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://conferences.ucla.edu/wp-content/uploads/2021/01/uclalogo.png",
      "https://media.licdn.com/dms/image/v2/D562DAQHk7UiUT8ie-w/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1680495968503?e=1766916000&v=beta&t=qyd6ZYQuaSExV3NXUR4eQfNoj_N_9L7DOC9HufWJ-8Y",
      "https://media.licdn.com/dms/image/v2/C562DAQED75g3YJSrJQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1679406326115?e=1766916000&v=beta&t=z9a7Ky05z2QNddFTUugmXJfGK0AsFhhZTDxH_EP-SCM",
      "https://media.licdn.com/dms/image/v2/D562DAQE_LYX9YTxqFg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1680495912428?e=1766916000&v=beta&t=g3w7m7ae-GEYANOlUSQTc6rahsfDtpv-6CoKKXG33Gg",
      "https://tamsuj.github.io/my-website/image/arduino.jpg",
      anime,
      flower,
      lajolla,
      beach,
      li,
      camera,
      sky,
    ];

    return (
      <div ref={pageRef} className="min-h-screen bg-[#f4f4f4] flex flex-col items-center px-4 relative">
        {/* Image Trail Background - Full Viewport */}
        <div className="fixed inset-0 w-full h-screen pointer-events-none z-0">
          <ImageTrail containerRef={pageRef}>
            {trailImages.map((url, index) => {
              const imageSrc = typeof url === 'string' ? url : url.src;
              return (
                <div
                  key={index}
                  className="flex relative overflow-hidden w-20 h-20 rounded-lg"
                >
                  <img
                    src={imageSrc}
                    alt=""
                    className="object-cover absolute inset-0"
                  />
                </div>
              );
            })}
          </ImageTrail>
        </div>
        {/* Hero Section - Full Viewport Height */}
        <main className="w-full max-w-5xl h-screen flex flex-col justify-center items-center relative z-10">
          {/* Hover pill - top of landing page, does not affect centering */}
          <p className="hidden lg:inline-flex items-center justify-center px-6 py-2 text-base rounded-full border border-neutral-300 bg-white shadow-sm absolute top-6 left-1/2 -translate-x-1/2">
            <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
              Hover around to see magic! ✨
            </span>
          </p>

          {/* Hero heading */}
          <motion.section
            className="space-y-6 text-center relative z-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              staggerChildren: 0.12,
            }}
          >
            <motion.div
              className="text-[3.5rem] sm:text-[5.5rem] leading-[1.05] font-semibold tracking-tight text-neutral-900"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex flex-wrap items-center justify-center gap-4">
                <span className="text-neutral-500">Hi!</span>
                <span>I'm Tammy</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <span>Backend</span>
                <span className="inline-flex items-center justify-center h-[60px] w-[80px] rounded-[999px] overflow-hidden bg-[#ff5a1f] sm:h-[70px] w-[100px]">
                  <Image
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Backend project"
                    width={100}
                    height={70}
                    className="h-full w-full object-cover"
                  />
                </span>
                <span className="text-[#ff5a1f]">Developer</span>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <span className="text-neutral-500">based in</span>
                <span className="font-semibold">SF Bay Area</span>
                <span className="inline-flex items-center justify-center h-[60px] w-[80px] rounded-[999px] overflow-hidden bg-neutral-900 sm:h-[70px] w-[100px]">
                  <Image
                    src="https://images.unsplash.com/photo-1729536233990-5dd65ab81e42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="UCLA"
                    width={100}
                    height={70}
                    className="h-full w-full object-cover"
                  />
                </span>
              </div>
            </motion.div>

            <motion.p
              className="max-w-2xl text-lg text-neutral-500 mt-4 mx-auto"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              I build software that solves real-world problems and scales
            </motion.p>
          </motion.section>

          {/* CTA button */}
          <div className="mt-10 relative z-10">
            <a
              href="https://drive.google.com/file/d/1uDi80tpm_sqYjCK5LkGD4OiUo5130ZQd/view?usp=sharing"
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
        <h1 className="text-neutral-900 text-center text-4xl font-bold tracking-tight sm:text-5xl py-16 relative z-10">
          Experience
        </h1>
        <section className="w-full max-w-5xl relative z-10">
          <Timeline />
        </section>

        {/* Skills Badges Section */}
        <h1 className="text-neutral-900 text-center text-4xl font-bold tracking-tight sm:text-5xl py-16 relative z-10">
          Skills
        </h1>
        <section className="w-full max-w-7xl px-4 pb-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left Column - BubbleBadges (narrower) with scroll animation */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="mb-4 text-lg font-semibold text-neutral-900 text-center">
                Area of Expertise
              </h3>
              <BubbleBadges />
            </motion.div>
            
            {/* Right Column - Skill tags with staggered scroll animation */}
            <div className="lg:col-span-3 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
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
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
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
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <ExpandableSkillTags
                  title="Developer Tools"
                  skills={[
                    "Git",
                    "AWS",
                    "Azure",
                    "mySQL",
                    "DBeaver",
                    "Postman",
                  ]}
                  initialCount={10}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <h1 className="text-neutral-900 text-center text-4xl font-bold tracking-tight sm:text-5xl pt-16 relative z-10">
          Projects
        </h1>
        <section className="w-full max-w-5xl pb-12 relative z-10">
          <AnimatedCardStack />
        </section>
        
        {/* About me Section */}
        <h1 className="text-neutral-900 text-center text-4xl font-bold tracking-tight sm:text-5xl pt-16 relative z-10">
          About Me
        </h1>
        <section className="w-full max-w-5xl pb-12 relative z-10">
          <AboutMe /> 
        </section>

        {/* Hobbies Section */}
        <h1 className="text-neutral-900 text-center text-4xl font-bold tracking-tight sm:text-5xl pt-16 relative z-10">
          Photography
        </h1>
        <section className="w-full relative z-10">
          <ZoomParallax
            images={[
              {
                src: skin,
                alt: "Portrait",
              },
              {
                src: bangkok,
                alt: "Bangkok",
              },
              {
                src: DC,
                alt: "DC",
              },
              {
                src: escalator,
                alt: "Escalator",
              },
              {
                src: sunset,
                alt: "Sunset",
              },
              {
                src: museum,
                alt: "Museum",
              },
              
              {
                src: darksky,
                alt: "Dark Sky",
              },
            ]}
          />
        </section>

        {/* Contact Section */}
        <section className="w-full max-w-5xl pb-15 relative z-10">
          <h1 className="text-neutral-900 text-center text-4xl font-bold tracking-tight py-16 sm:text-5xl">
            Contact
          </h1>
          <SocialsContact />
        </section>
      </div>
    );
  }
