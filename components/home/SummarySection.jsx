import { GiWorld } from "react-icons/gi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdOutlineMedicalServices } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";

const summaryList = [
  {
    icon: <IoCalendarClearOutline className="size-10" />,
    title: "24+",
    desc: "Years Experience",
  },
  {
    icon: <MdOutlineMedicalServices className="size-10" />,
    title: "16+",
    desc: "Medical Center",
  },
  {
    icon: <GiWorld className="size-10" />,
    title: "6+",
    desc: "Counties",
  },
  {
    icon: <RiCustomerService2Line className="size-10" />,
    title: "24/7",
    desc: "Availability",
  },
];

const SummarySection = () => {
  return (
    <section className="bg-pblack">
      <div className="container  p-6 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-between gap-8">
          {summaryList?.map((el, index) => (
            <div
              className="bg-[#323232] flex items-center justify-center space-x-4 text-white px-16 py-16 rounded-lg"
              key={index}
            >
              <div className="">{el?.icon}</div>
              <div className="">
                <h1 className="text-xl font-bold text-left">{el?.title}</h1>
                <p className="text-xs text-left">{el?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
