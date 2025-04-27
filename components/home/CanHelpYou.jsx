import Link from "next/link";
import { BsHospital } from "react-icons/bs";
import { TbStretching2 } from "react-icons/tb";

const treatments = [
  {
    id: 1,
    icon: <BsHospital className="size-10" />,
    title: "Chiropractic Manipulation",
    description:
      "We focus on auto accident care and treatment options that will help ease your pain and deal with life after an auto accident.",
  },
  {
    id: 2,
    icon: <BsHospital className="size-10" />,
    title: "Digital Radiography",
    description:
      "Our physicians will diagnose and evaluate your injury or condition to determine the type of treatment that is most appropriate.",
    backgroundImage: "/path/to/background-image.jpg",
  },
  {
    id: 3,
    icon: <BsHospital className="size-10" />,
    title: "Individual Treatment Plans",
    description:
      "Trauma associated with auto injuries can take days or weeks to manifest, that's why it's important to get treatment ASAP!",
  },
  {
    id: 4,
    icon: <TbStretching2 className="size-10" />,
    title: "Injury Rehabilitation",
    description:
      "Our exercise and stretching routines will build flexibility and strength, so you can fully restore your maximum range of motion and independence.",
  },
  {
    id: 5,
    icon: <TbStretching2 className="size-10" />,
    title: "Physical Therapy",
    description:
      "Hydrotherapy uses the combination of water, heat and massage to provide a comforting and relaxing experience, relieving pain.",
  },
  {
    id: 6,
    icon: <TbStretching2 className="size-10" />,
    title: "Constant neck and back pain?",
    description:
      "Chiropractic adjustments relieve pressure on the nerves and muscles, and treat the underlying spinal or whiplash injury.",
  },
];

const CanHelpYou = () => {
  return (
    <section className="bg-pwhite">
      <div className="container  p-6 md:p-16">
        <h1 className="font-bold text-4xl md:text-5xl text-black text-center">
          How We Can Help You
        </h1>
        <div className="w-[50%] mx-auto mt-4">
          <p className="text-md md:text-lg text-[#55545A] text-center  flex justify-center">
            {`The physicians and staff at Hess Spinal and Medical Centers understand that being injured in an auto accident can be extremely stressful for you and your family.`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {treatments.map((item) => (
            <div
              key={item.id}
              className={`relative flex flex-col justify-between bg-white border border-dashed border-gray-300 rounded-xl p-6 transition duration-300 hover:shadow-md ${
                item.highlighted ? "bg-primary/90 text-white" : ""
              }`}
              style={{
                backgroundImage: item.highlighted
                  ? `url(${item.backgroundImage})`
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="">{item?.icon}</div>
                <div>
                  <h3 className={`font-bold text-lg `}>{item.title}</h3>
                  <p className={`mt-2 text-sm `}>{item.description}</p>
                </div>
              </div>

              <button
                className={`mt-6 w-fit px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white
                transition`}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:justify-start">
          <Link
            href={"/about"}
            className="text-white font-normal text-lg bg-secondary px-8 py-3 rounded-full hover:bg-orange-400"
          >
            Discover More Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CanHelpYou;
