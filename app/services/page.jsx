import LatedAndGretest from "@/components/home/LatedAndGretest";
import Services from "@/components/practice-area/Services";
import AreasPractice from "@/components/practice-area/Services";
import CallToAction from "@/components/shared/CallToAction";
import PageHeroSection from "@/components/shared/PageHeroSection";
import Head from "next/head";
import React from "react";

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
    <div>
      <PageHeroSection
        image={"/assets/shared/aboutpage.jpg"}
        title={"Services"}
        link={"services"}
      />
      <Services />
      <CallToAction />
    </div>
  );
};

export default page;
