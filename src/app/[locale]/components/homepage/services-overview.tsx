import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function ServicesOverview() {
  const services = [
    {
      title: "US, UK and EU College Admissions Consulting",
      description:
        "Our college admissions consultants help students gain admission to the world's best universities, including the Ivy League, Oxbridge, and other top schools.",
      image: "/images/services/uk-us-eu-admissions.png",
      link: "/services/us-uk-eu",
    },
    {
      title: "Graduate School Admissions",
      description:
        "Our graduate school admissions consultants help students gain admission to top MBA, law, medical, and other graduate programs worldwide.",
      image: "/images/services/graduate-admissions.webp",
      link: "/services/graduate-school",
    },
    {
      title: "Online Tutoring: AP, SAT, ACT, IB, and more",
      description:
        "Receive one-on-one tutoring from graduates of Harvard, Stanford, Oxford and other top universities to excel in your academics and standardized tests.",
      image: "/images/services/online.jpeg",
      link: "/services/online-tutoring",
    },
    {
      title: "Extracurricular & Leadership",
      description:
        "Our extracurricular mentors help students develop impressive profiles through research, competitions, community service, and leadership opportunities.",
      image: "/images/services/sports.jpeg",
      link: "/services/extracurricular",
    },
    {
      title: "Career Mentoring",
      description:
        "Our career mentors help students explore potential career paths, secure internships, and develop the skills needed for future success.",
      image: "/images/services/junior-programs.jpeg",
      link: "/services/career-mentoring",
    },
    {
      title: "Med School Admissions",
      description:
        "Our medical school admissions consultants help students navigate the complex process of applying to medical schools in the US, UK, and around the world.",
      image: "/images/services/med-school.jpeg",
      link: "/services/med-school",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-[80rem] px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Our Services
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          At Crimson, we believe every student deserves personalized support in
          their education journey. Our services cover all aspects of university
          admissions and academic excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link href={service.link} key={index} className="group">
              <div key={index} className="bg-white overflow-hidden text-center">
                <div className="relative h-50">
                  <div className="absolute inset-0 bg-black block z-10 opacity-0 group-focus:opacity-30 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-2 ">
                  <h3 className="font-bold text-lg mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>
                  <Button
                    variant="link"
                    className="text-red-500 p-0 h-auto font-medium"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
