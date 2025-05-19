import {Button} from "@/components/ui/button";
import Image from "next/image";

export function IvyDayBanner() {
  return (
    <section className="bg-[#1a1a2e] text-white py-4 relative overflow-hidden">
      <picture>
        <Image
          src="/banner/banner-bg.png"
          alt="Ivy Day Hero Background"
          fill
          style={{objectFit: "cover"}}
        />
      </picture>
      <div className="container w-[80%] mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">
              Class of 2029 Ivy Day Results Are In!
            </h2>
            <p className="text-sm md:text-base">
              Harvard, Yale, Princeton, Columbia. Our students are getting in —
              and we're tracking it live. See the offers as they land.
            </p>
          </div>
          <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full whitespace-nowrap">
            EXPLORE OUR RESULTS
          </Button>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-yellow-500/20 to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-yellow-500/20 to-transparent"></div>
      </div>
    </section>
  );
}
