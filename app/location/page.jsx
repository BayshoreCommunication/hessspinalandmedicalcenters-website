import Locations from "@/components/Locations/Locations";
import PageHeroSection from "@/components/shared/PageHeroSection";
import React from "react";

const page = () => {
  return (
    <div>
      <PageHeroSection image={""} title={"Location"} link={"Location"} />
      <Locations />
    </div>
  );
};

export default page;
