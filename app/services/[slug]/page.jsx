import React from "react";
import parse from "html-react-parser";
import { Link } from "@nextui-org/react";
import SectionLayout from "@/components/shared/SectionLayout";
import Head from "next/head";
import { notFound } from "next/navigation";
import PracticeAreaSidebarCard from "@/components/practice-area/PracticeAreaSidebarCard";
import { servicesData, areaspracticeData } from "@/config/data";

import CallToAction from "@/components/shared/CallToAction";
import PageHeroSectionforBlog from "@/components/shared/PageHeroSectionforBlog";
import PageHeroSection from "@/components/shared/PageHeroSection";

const css = `
  h1{
    font-size: 40px;
    font-weight: 900;
    padding-top: 10px;
  }
  h2{
    padding-top: 10px;
    font-size: 26px;
    font-weight: 700;
  }
  p{
    padding-top: 2px;
    padding-bottom: 2px;
  }
  ul{
    list-style-type: disc;
    margin-left: 30px;
    
  }
  li{
    padding-top: 5px;
    padding-bottom: 5px;
  }
  br{
    padding-top: 1px;
    padding-bottom: 1px;
}
nav{
  padding-top: 12px;
}

`;

// export async function generateMetadata({ params }) {
//   const metaData = servicesData?.filter(
//     (service) => service.slug === params.slug
//   );
//   return {
//     title: metaData[0].sortTitle,
//     description: metaData[0].shortDescription,
//     openGraph: {
//       title: metaData[0].sortTitle,
//       description: metaData[0].shortDescription,
//       images: [metaData[0].url],
//       url: ``,
//       type: "article",
//       site_name: "Melamed Law",
//     },
//   };
// }

const page = async ({ params }) => {
  // const servicesDetails = servicesData?.filter(
  //   (service) => service.slug === params.slug
  // );

  // if (!servicesDetails || servicesDetails.length === 0) {
  //   notFound();
  // }
  // console.log("services", areaspracticeData);
  return (
    <>
      {/* <Head>
        <title>{servicesDetails[0]?.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
      </Head> */}

      <style>{css}</style>
      <PageHeroSection
        image={"/assets/shared/aboutpage.jpg"}
        title={"Services Name"}
        link={"Service Details"}
      />
      {/* <PageHeroSectionforBlog
        image={servicesDetails[0]?.url}
        title={servicesDetails[0]?.title}
        description={
          "When the unexpected happens, we help individuals and businesses collect the money they deserve for their insurance claims."
        }
        calanderOff={true}
      /> */}

      <section className="bg-white">
        <div className="container py-10 md:py-20">
          {/* {servicesDetails?.map((services, index) => (
            <div key={index} className="">
              <div className="mt-5 text-base">
                {parse(services?.description)}
              </div>
            </div>
          ))} */}

          <div>
            <div className="md:flex md:space-x-6">
              <div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Hurricanes can seriously impact properties across Florida,
                  leaving homeowners, business owners, and tenants needing quick
                  support. When wind, flood, or structural damage occurs,
                  getting legal help ensures you receive fair compensation.
                  However, Florida’s hurricane damage laws limit your time to
                  file a claim—typically to just one year after the hurricane.
                  This tight deadline makes it essential to act quickly and seek
                  legal guidance to protect your rights and secure fair
                  compensation.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Who Needs Legal Help After Hurricane Damage
                </h2>
                <ul className="list-disc list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
                  <li>
                    <span className="font-medium text-gray-900 pr-1">
                      Homeowners with unsettled insurance claims:
                    </span>
                    If your insurance claim is denied, underpaid, or delayed,
                    legal support can help you fight for a fair resolution.
                  </li>
                  <li>
                    <span className="font-medium text-gray-900 pr-1">
                      Business owners facing severe losses:
                    </span>
                    Hurricanes can cause massive damage to properties and
                    disrupt business operations. Legal help can assist in
                    securing the funds necessary to rebuild and recover.
                  </li>
                  <li>
                    <span className="font-medium text-gray-900 pr-1">
                      Tenants displaced by damage:
                    </span>
                    If you’re a tenant displaced due to hurricane damage, you
                    might have the right to demand repairs or compensation under
                    Florida tenant laws.
                  </li>
                  <li>
                    <span className="font-medium text-gray-900 pr-1">
                      Property owners with complex damage:
                    </span>
                    Structural, flood, and mold damage often require detailed
                    assessment. Legal help ensures you’re fairly compensated for
                    all types of damage.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  What Challenges You Might Face
                </h2>
                <ul className="list-disc list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
                  <li>
                    Insurance companies often deny or delay claims, which means
                    you might wait longer for the funds needed to start your
                    recovery. Handling these setbacks without legal guidance can
                    make the process frustrating.
                  </li>
                  <li>
                    Insurance companies frequently offer settlements that don’t
                    fully cover your repair costs. Without an attorney,
                    negotiating a fair settlement to cover your expenses can be
                    tough, and you might end up paying out of pocket.
                  </li>
                  <li>
                    Documenting extensive damage, such as structural issues or
                    mold, requires careful organization and expert evidence.
                    Gathering this evidence on your own can feel challenging,
                    especially when it comes to proving the damage to insurance
                    companies
                  </li>
                  <li>
                    With hurricane damage, you may need to file multiple claims
                    for wind, flood, and mold damage. Handling these claims and
                    understanding coverage gaps can be confusing without legal
                    expertise, which may reduce the amount of compensation you
                    receive.
                  </li>
                  <li>
                    Under Florida's laws, you have limited time to report
                    hurricane-related damages. If you miss the deadline, you may
                    lose your right to compensation. An attorney can help you
                    stay on top of these deadlines, which is necessary for
                    receiving recovery funds on time.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  How Melamed Law Stands By Your Rights
                </h2>
                <ul className="list-disc list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
                  <li>
                    We engage directly with insurance companies, addressing
                    claim denials and delays. Our team pushes for timely
                    processing and holds insurance companies accountable at
                    every step, ensuring that Florida laws work to your
                    advantage in securing protection.
                  </li>
                  <li>
                    We closely review each settlement offer, negotiating for
                    fair compensation that covers essential repairs and recovery
                    expenses.
                  </li>
                  <li>
                    Partnering with specialists, we develop thorough damage
                    assessments. This strong evidence supports your claim,
                    enhancing your chances of full compensation.
                  </li>
                  <li>
                    Our team manages all paperwork, tracks claim progress, and
                    resolves any coverage gaps, ensuring you receive fair
                    compensation.
                  </li>
                  <li>
                    We make sure to file all claims on time, safeguarding your
                    right to compensation under Florida’s strict legal
                    deadlines.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default page;
