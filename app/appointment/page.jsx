import Calendly from "@/components/appointment/Calendly";
// import PageHeroSection from "@/components/shared/PageHeroSection";

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
      {/* <PageHeroSection
        image={"/assets/shared/aboutpage.jpg"}
        title={"Appointment"}
        description={
          "When the unexpected happens, we help individuals and businesses collect the money they deserve for their insurance claims."
        }
      /> */}

      <Calendly />
    </>
  );
};

export default page;
