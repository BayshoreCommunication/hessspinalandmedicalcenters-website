import Locations from "@/components/Locations/Locations";
import PageHeroSection from "@/components/shared/PageHeroSection";
import React from "react";

export const metadata = {
  title: "Locations | Hess Spinal & Medical Centers",
  description: "Find a Hess Spinal & Medical Centers location near you. We have 18 convenient locations across West Central Florida.",
  alternates: {
    canonical: "/location",
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
      <PageHeroSection image={""} title={"Location"} link={"Location"} />
      <Locations />
    </div>
  );
};

export default page;
