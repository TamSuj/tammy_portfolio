"use client";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";

export default function AboutMe() {
  const heroRef = useRef<HTMLDivElement>(null);
  const highlights = [
    "Lead She.Codes",
    "Co-lead tech mentorship & fellowship for 80+ 👩🏻‍💻 in tech",
    "Host NASA Space Apps hackathon",
  ];
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 1.5,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 40,
      opacity: 0,
    },
  };
  const textVariants = {
    visible: (i: number) => ({
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };
  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto" ref={heroRef}>
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Right side - Content */}
          <div className="flex-1">
            <TimelineContent
              as="h1"
              animationNum={0}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="sm:text-4xl text-2xl md:text-3xl !leading-[110%] font-semibold text-neutral-900 mb-8"
            >
              I'm a {" "}
              <TimelineContent
                as="span"
                animationNum={1}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-[#ff5a1f]"
              >
                software engineer
              </TimelineContent>{" "}
              , UCLA alumni, and trilingual based in{" "}
              <TimelineContent
                as="span"
                animationNum={2}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-[#ff5a1f]"
              >
                Mountain View, CA
              </TimelineContent>{" "}
              reimagining{" "}
              <TimelineContent
                as="span"
                animationNum={3}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-[#ff5a1f]"
              >
                ads tech.
              </TimelineContent>
            </TimelineContent>

            <div className="mt-10">
              <TimelineContent
                as="p"
                animationNum={4}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="mb-4 text-sm font-medium uppercase tracking-wide text-neutral-500"
              >
                In my free time, I also —
              </TimelineContent>
              <div className="flex flex-wrap gap-2.5">
                {highlights.map((label, i) => (
                  <TimelineContent
                    key={label}
                    as="div"
                    animationNum={5 + i}
                    timelineRef={heroRef}
                    customVariants={textVariants}
                  >
                    <Badge
                      variant="outline"
                      className="gap-1.5 px-3 py-1 text-sm font-medium"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7d7d7d]" />
                      {label}
                    </Badge>
                  </TimelineContent>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
