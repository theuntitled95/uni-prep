import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      name: "Alex",
      image: "/images/testimonials/1.png",
      university: "New York University",
      caption: "Watch Alex's journey",
    },
    {
      name: "Julia",
      image: "/images/testimonials/2.jpeg",
      university: "Yale University",
      caption: "Watch Julia's journey",
    },
    {
      name: "Sarah",
      image: "/images/testimonials/3.png",
      university: "Stanford University",
      caption: "Watch Sarah's journey",
    },
    {
      name: "Michael",
      image: "/images/testimonials/4.png",
      university: "Princeton University",
      caption: "Watch Michael's journey",
    },
  ];

  return (
    <section className="relative">
      <img
        src={"/images/testimonials-bg.svg"}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="container mx-auto max-w-[80rem]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="relative h-[533px] w-full overflow-hidden">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover transition-transform duration-300 "
                />
                <div className="absolute block top-8 left-10">
                  <p className="text-white">
                    <span className="font-bold">{testimonial.name} </span>
                    {testimonial.university}
                  </p>
                </div>
              </div>
              <div className="absolute grid items-center inset-0 bg-indigo-600/70  z-10 opacity-0 group-focus:opacity-100 group-hover:opacity-100">
                <p className="text-white font-bold text-xl text-center">
                  {testimonial.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
