/* eslint-disable @next/next/no-img-element */
import {Button} from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="relative py-16  text-white">
      <img
        src={"/images/featured-bg.svg"}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="container mx-auto max-w-[80rem] px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Get into your dream university.
          <br />
          Speak with an advisor today.
        </h2>
        <Button className="bg-white text-red-500 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-medium mt-6">
          BOOK A FREE CONSULTATION
        </Button>
      </div>
    </section>
  );
}
