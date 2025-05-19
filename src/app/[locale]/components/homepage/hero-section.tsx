import {Button} from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      <video
        autoPlay
        preload="none"
        loop
        className="absolute object-cover min-h-full w-full hidden md:block"
      >
        <source type="video/mp4" src="/videos/home-page-header-video.mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-70"></div>

      <div className="container max-w-[80rem] mx-auto relative z-10 px-4 md:px-6 py-16 md:py-24 lg:py-32">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            The World's Leading US/UK College Admissions Consulting Company
          </h1>
          <p className="text-base md:text-lg mb-8">
            Crimson Education takes college admissions counseling to a new level
            of personalisation and success, increasing students chances of
            admission to the Ivy League, Oxbridge and other top universities by
            up to 700%.
          </p>
          <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full">
            BOOK A FREE CONSULTATION
          </Button>
        </div>
      </div>
    </section>
  );
}
