import Image from "next/image";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const services = [
  {
    id: 1,
    icon: "/assets/homepage/image.png",
    title: "Multi-Disciplinary Care",
    description:
      "Offers digital X-rays, physical therapy, chiropractic care, trigger point injections, and medical evaluations at each location.",
  },
  {
    id: 2,
    icon: "/assets/homepage/image-1.png",
    title: "Care without Upfront Costs",
    description:
      "Assistance with auto insurance claims, covered under PIP benefits in Florida with no upfront costs.",
  },
  {
    id: 3,
    icon: "/assets/homepage/image-2.png",
    title: "Convenient & Compassionate Service",
    description:
      "Same-day appointments and walk-ins with 18 locations across West Central Florida.",
  },
  {
    id: 4,
    icon: "/assets/homepage/image-3.png",
    title: "Appointment Rides",
    description: "Transportation services for medical appointments.",
  },
  {
    id: 5,
    icon: "/assets/homepage/image-4.png",
    title: "24/7 Personal Help",
    description:
      "Operators available 24/7/365, with extended office hours for convenience.",
  },
  {
    id: 6,
    icon: "/assets/homepage/image-5.png",
    title: "Same-Day Appointments",
    description: "Prompt scheduling for those in pain or needing urgent care.",
  },
];

const OurKeyOfferings = () => {
  return (
    <section className="bg-pwhite">
      <div className="container  p-6 md:p-16">
        <ScrollMotionEffect effect="fade-right" duration="2000">
          <h1 className="font-bold text-4xl md:text-5xl text-black text-center">
            Our Key Offerings
          </h1>
        </ScrollMotionEffect>

        <ScrollMotionEffect effect="fade-left" duration="2000">
          <div className="w-full md:w-[50%] mx-auto mt-4">
            <p className="text-md md:text-lg text-[#55545A] text-center  flex justify-center">
              {`The physicians and staff at Hess Spinal and Medical Centers understand that being injured in an auto accident can be extremely stressful for you and your family.`}
            </p>
          </div>
        </ScrollMotionEffect>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {services.map((service, index) => (
            <ScrollMotionEffect effect="fade-up" duration="2000" key={index}>
              <div
                key={service.id}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm"
              >
                <Image
                  width={500}
                  height={500}
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="font-bold text-lg">{service.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {service.description}
                  </p>
                </div>
              </div>
            </ScrollMotionEffect>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurKeyOfferings;
