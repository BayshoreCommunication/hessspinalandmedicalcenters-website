import ContactHeroSection from "@/components/contact-us/ContactHeroSection";
import GoogleMapSection from "@/components/contact-us/GoogleMapSection";
import CallToAction from "@/components/shared/CallToAction";
import Head from "next/head";

export const metadata = {
  title: ``,
  description: ``,
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

const page = () => {
  return (
    <>
      <ContactHeroSection />
      <GoogleMapSection />
      <CallToAction />
    </>
  );
};

export default page;
