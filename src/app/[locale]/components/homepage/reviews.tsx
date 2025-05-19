"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {Star} from "lucide-react";
import {useEffect, useRef, useState} from "react";

export function Reviews() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const reviews = [
    {
      text: "Crimson's support transformed my application. Their mentors guided me through every step, from selecting universities to crafting compelling essays. I couldn't have achieved my dream of studying at Harvard without their guidance.",
      author: "Sarah from Dubai, Class of 2023",
      rating: 5,
    },
    {
      text: "Working with Crimson Education was the best decision I made. Their personalized approach and expert guidance helped me secure admission to my dream university. The mentors were always available and provided invaluable feedback.",
      author: "Ahmed from Abu Dhabi, Class of 2022",
      rating: 5,
    },
    {
      text: "As parents, we were impressed by Crimson's comprehensive support. Their team went above and beyond to ensure our daughter had everything she needed to succeed. The investment was worth every penny when we saw her acceptance letter.",
      author: "Parent from Dubai, Class of 2024",
      rating: 5,
    },
    {
      text: "I was skeptical at first, but Crimson's approach is truly unique. My mentor from Oxford helped me develop a research project that caught the attention of admissions officers. I'm now studying at Cambridge, something I never thought possible.",
      author: "Rania from Sharjah, Class of 2023",
      rating: 5,
    },
    {
      text: "The extracurricular mentoring was exceptional. My mentor helped me develop a community service project that aligned perfectly with my academic interests. This holistic approach made my application stand out among thousands.",
      author: "Khalid from Dubai, Class of 2022",
      rating: 5,
    },
    {
      text: "My son's SAT scores improved dramatically with Crimson's tutoring. Their personalized approach identified his weak areas and targeted them effectively. The application support was equally impressive, resulting in multiple Ivy League offers.",
      author: "Parent from Abu Dhabi, Class of 2023",
      rating: 5,
    },
    {
      text: "Crimson's career mentoring helped me clarify my academic and professional goals. This clarity made my personal statements much more compelling. I'm now at Yale studying exactly what I'm passionate about.",
      author: "Layla from Dubai, Class of 2022",
      rating: 5,
    },
    {
      text: "The strategic approach to university selection was eye-opening. Instead of just applying to brand-name schools, my Crimson team helped me find programs that were perfect for my unique interests and goals. I got into my top choice!",
      author: "Omar from Ras Al Khaimah, Class of 2023",
      rating: 5,
    },
    {
      text: "Our daughter was already a strong student, but Crimson helped her elevate her application to another level. Their guidance on essay writing was particularly valuable. The results speak for themselves - she's now at Stanford.",
      author: "Parent from Dubai, Class of 2022",
      rating: 5,
    },
    {
      text: "The interview preparation was incredibly thorough. My mock interviews with Crimson mentors made me confident and well-prepared for the real thing. I received positive feedback from admissions officers about my interview performance.",
      author: "Zain from Abu Dhabi, Class of 2023",
      rating: 5,
    },
  ];

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

  // Set count when api is available
  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
  }, [api]);

  // Handle dot click
  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
      setAutoplay(false);
      resetAutoplayTimer();
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Read our student and parent reviews
        </h2>
        <p className="text-center text-gray-900">
          Crimson averages 4.75 out of 5 stars in over 120,000 reviews
        </p>

        <div className="relative mx-auto mt-8">
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
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                  <div className="h-full bg-white p-6 rounded-lg mx-2 text-center">
                    <p className="text-gray-600 mb-4 text-sm italic">
                      &quot;{review.text}&quot;
                    </p>
                    <div className="flex mb-4 items-center justify-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm font-medium">{review.author}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5" />
          </Carousel>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({length: count}).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  current === index ? "bg-red-500" : "bg-gray-300"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
