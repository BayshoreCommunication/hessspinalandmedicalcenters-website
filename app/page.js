import AboutSection from "@/components/home/AboutSection";
import CanHelpYou from "@/components/home/CanHelpYou";
import ContactUs from "@/components/home/ContactUs";
import FindOurLocation from "@/components/home/FindOurLocation";
import HeroSection from "@/components/home/HeroSection";
import LatestBlogs from "@/components/home/LatestBlogs";
import OurKeyOfferings from "@/components/home/OurKeyOfferings";
import OurTechnologies from "@/components/home/OurTechnologies";
import SpinalMedicalCenter from "@/components/home/SpinalMedicalCenter";
import SummarySection from "@/components/home/SummarySection";
import WhatPeopleSay from "@/components/home/WhatPeopleSay";
import GoogleMap from "@/components/shared/GoogleMap";
import TestimonialSlideSection from "@/components/shared/TestimonialSlider";

export const metadata = {
  title: `Property Damage Attorney in Florida | Insurance attorney in Ojus, Florida | property damage lawyer in ojus, florida | Melamed Law PLLC
| Florida Insurance Claims & Property Damage Lawyers | insurance bad faith attorney`,
  description: `Melamed Law PLLC is your trusted Property Damage Attorney in Florida, specializing in insurance claims. Whether you need an Insurance Attorney in Ojus, Florida, or a Property Damage Lawyer in Ojus, Florida, we’re here to help. Our Florida Insurance Claims & Property Damage Lawyers, including experienced loss adjuster lawyers in Florida, ensure your rights are protected.`,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <SummarySection />
      <SpinalMedicalCenter />
      <OurKeyOfferings />
      <CanHelpYou />
      {/* Abu design part */}

      {/* <FindOurLocation /> */}
      {/* <TestimonialSlideSection /> */}
      <OurTechnologies />
      <WhatPeopleSay />
      <LatestBlogs />
      <GoogleMap />
      <ContactUs />
    </main>
  );
}
