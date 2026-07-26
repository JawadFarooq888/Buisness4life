import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FaqPreview from "@/components/FaqPreview";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Gallery />
      <Process />
      <WhyUs />
      <Testimonials />
      <FaqPreview />
      <CTA />
    </>
  );
}
