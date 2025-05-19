import {Button} from "@/components/ui/button";
import Image from "next/image";

export function SuccessStories() {
  return (
    <section className="py-16 relative">
      <img
        src={"/images/success-bg.png"}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="container mx-auto max-w-[80rem] px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Success</h2>
            <p className="text-gray-600 mb-4">
              Our students have been accepted to Harvard, Stanford, Oxford,
              Cambridge, and other top universities around the world. With
              Crimson's support, our students are 4x more likely to gain
              admission to Ivy League and other top-tier universities.
            </p>
            <p className="text-gray-600 mb-4">
              We've helped students secure over $83 million in scholarships and
              financial aid. Our comprehensive approach to admissions consulting
              has led to thousands of success stories across the globe.
            </p>
            <p className="text-gray-600 mb-6">
              Whether you're aiming for the Ivy League, Oxbridge, or other top
              universities, Crimson can help you achieve your dreams.
            </p>
            <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full">
              READ OUR SUCCESS STORIES
            </Button>
          </div>
          <div className="md:w-1/2 relative h-80 w-full">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Crimson Education Success Stories"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
