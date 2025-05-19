import {Metadata} from "next";
import {useTranslations} from "next-intl";
import {Footer} from "./components/footer";
import {Header} from "./components/header";
import {FinalCta} from "./components/homepage/final-cta";
import {HeroSection} from "./components/homepage/hero-section";
import {HowWeWork} from "./components/homepage/how-we-work";
import {IvyDayBanner} from "./components/homepage/ivy-day-banners";
import {SuccessStories} from "./components/homepage/our-success";
import {Reviews} from "./components/homepage/reviews";
import {ServicesOverview} from "./components/homepage/services-overview";
import {StatsSection} from "./components/homepage/stats-section";
import {Testimonials} from "./components/homepage/testimonials";

export const metadata: Metadata = {
  title: "Uni Prep",
  description: "Your pathway to success in higher education",
};

export default function Home() {
  const t = useTranslations("Homepage");

  return (
    <div className="font-[family-name:var(--font-geist-sans)] flex flex-col min-h-screen ">
      <Header />
      <main className="flex-1">
        <IvyDayBanner />
        <HeroSection />
        <StatsSection />
        <ServicesOverview />
        <HowWeWork />
        <SuccessStories />
        <Testimonials />
        <Reviews />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
