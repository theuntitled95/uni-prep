/* eslint-disable @next/next/no-img-element */
"use client";

import {Button} from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";

export function HowWeWork() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const steps = [
    {
      icon: "/images/carousel/step-1.svg",
      title: "Initial Consultation",
      description: "We learn about your goals and aspirations",
      content: {
        title: "01. Getting a plan and getting started",
        description: [
          "After your free consultation, our team of academic advisors will build a fully customized plan for your educational journey. We'll match you with mentors from your target universities who will guide you through every step of the process.",
          "Our comprehensive approach covers academics, extracurriculars, standardized tests, essays, interviews, and more.",
        ],
        image: "/images/carousel/step-1.png",
        imageAlt: "Initial Consultation Process",
        buttonText: "BOOK A FREE CONSULTATION",
      },
    },
    {
      icon: "/images/carousel/step-2.svg",
      title: "Team Assignment",
      description: "We match you with mentors from top universities",
      content: {
        title: "02. Building your dream team",
        description: [
          "We carefully match you with a team of mentors who graduated from your target universities and have expertise in your areas of interest. Your team typically includes an academic mentor, extracurricular mentor, and application strategist.",
          "Our mentors are graduates of Harvard, Oxford, Stanford, and other top universities who know exactly what it takes to get in.",
        ],
        image: "/images/carousel/step-2.png",
        imageAlt: "Team Assignment Process",
        buttonText: "MEET OUR MENTORS",
      },
    },
    {
      icon: "/images/carousel/step-3.svg",
      title: "Strategy Creation",
      description: "We develop a personalized roadmap to success",
      content: {
        title: "03. Creating your personalized strategy",
        description: [
          "Your team will develop a comprehensive strategy tailored to your unique strengths, interests, and target universities. This includes academic planning, extracurricular development, standardized test preparation, and application strategy.",
          "We use data-driven insights from thousands of successful applications to maximize your chances of admission.",
        ],
        image: "/images/carousel/step-3.png",
        imageAlt: "Strategy Creation Process",
        buttonText: "EXPLORE OUR APPROACH",
      },
    },
    {
      icon: "/images/carousel/step-4.svg",
      title: "Implementation",
      description: "We guide you through every step of the process",
      content: {
        title: "04. Implementing your plan",
        description: [
          "Your mentors will guide you through implementing your strategy, providing regular feedback and support. This includes essay editing, interview preparation, extracurricular development, and academic support.",
          "Our proprietary technology platform allows for seamless communication and progress tracking throughout the process.",
        ],
        image: "/images/carousel/step-4.png",
        imageAlt: "Implementation Process",
        buttonText: "SEE HOW IT WORKS",
      },
    },
    {
      icon: "/images/carousel/step-5.svg",
      title: "Results",
      description: "We celebrate your acceptances to top universities",
      content: {
        title: "05. Achieving your dreams",
        description: [
          "Our students consistently achieve outstanding results, with acceptance rates to top universities that are 4-7 times higher than the global average. We've helped students secure over $83 million in scholarships.",
          "After acceptance, we continue to support you with pre-university preparation and beyond.",
        ],
        image: "/images/carousel/step-5.png",
        imageAlt: "Results and Celebrations",
        buttonText: "READ SUCCESS STORIES",
      },
    },
  ];

  // Handle step button click
  const handleStepClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
      setAutoplay(false);
      resetAutoplayTimer();
    }
  };

  // Reset autoplay timer
  const resetAutoplayTimer = () => {
    if (autoplayTimerRef.current) {
      clearTimeout(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  };

  // Set up autoplay
  useEffect(() => {
    if (!api || !autoplay) return;

    const startAutoplay = () => {
      resetAutoplayTimer();
      autoplayTimerRef.current = setTimeout(() => {
        api.scrollNext();
      }, 5000);
    };

    startAutoplay();

    return () => resetAutoplayTimer();
  }, [api, current, autoplay]);

  // Update current slide when carousel changes
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section className="relative py-16 text-white">
      <img
        src={"/images/how-we-work-bg.png"}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          How We Work
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12">
          Our college counseling model sees our students receive individualized
          support in every aspect of their US/UK (or EU) application(s) — from
          university selection strategy, test prep and personal statement/essay
          support, to extracurricular mentoring and interview practice.
          Here&apos;s how we work!
        </p>

        {/* Step navigation buttons */}
        <div className="flex flex-wrap justify-center items-center mb-12 max-w-fit mx-auto text-gray-900 divide-x">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => handleStepClick(index)}
              className={`flex flex-col items-center text-center w-30 h-30 md:w-36 md:h-36 transition-all duration-300 bg-white`}
            >
              <div
                className={`relative mt-4 w-16 h-16 flex items-center justify-center ${
                  current === index ? "grayscale-0" : "grayscale-100"
                }`}
              >
                <Image
                  src={step.icon || "/placeholder.svg"}
                  alt={step.title}
                  width={40}
                  height={40}
                />
              </div>
              <h3
                className={`font-bold text-sm mb-1 ${
                  current === index ? "text-red-500" : ""
                }`}
              >
                {step.title}
              </h3>
              {/* <p className="text-xs">{step.description}</p> */}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative  mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <CarouselContent>
              {steps.map((step, index) => (
                <CarouselItem key={index}>
                  <div className="rounded-lg shadow-lg p-8">
                    <div className="flex flex-col gap-8 items-center">
                      <div className="md:w-1/2 relative h-64 w-full">
                        <Image
                          src={step.content.image || "/placeholder.svg"}
                          alt={step.content.imageAlt}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="md:w-1/2 text-center">
                        <h3 className="text-xl font-bold mb-4">
                          {step.content.title}
                        </h3>
                        {step.content.description.map((paragraph, idx) => (
                          <p key={idx} className="mb-4">
                            {paragraph}
                          </p>
                        ))}
                        <Button className="bg-red-500 hover:bg-red-600 text-white mt-2">
                          {step.content.buttonText}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12" /> */}
          </Carousel>

          {/* Indicators */}
          {/* <div className="flex justify-center mt-8 space-x-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleStepClick(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  current === index ? "bg-red-500" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
