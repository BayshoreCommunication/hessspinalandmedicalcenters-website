import AboutDetails from "@/components/about-us/AboutDetails";
import GoogleMapSection from "@/components/about-us/GoogleMapSection";
import OurDoctors from "@/components/about-us/OurDoctors";
import LatedAndGretest from "@/components/home/LatedAndGretest";
import SpinalMedical from "@/components/home/SpinalMedical";
import SummarySection from "@/components/home/SummarySection";
import CallToAction from "@/components/shared/CallToAction";
import PageHeroSection from "@/components/shared/PageHeroSection";

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
      <PageHeroSection
        image={"/assets/shared/aboutpage.jpg"}
        title={"About Us"}
        link={"about us"}
      />
      <div className="mt-10 lg:mt-12">
        <AboutDetails />
      </div>
      <SummarySection />
      <OurDoctors />
      <SpinalMedical />
      <CallToAction />
    </>
  );
};

export default page;
