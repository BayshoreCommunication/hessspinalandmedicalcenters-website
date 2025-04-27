import Image from "next/image";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const ContactUs = () => {
  return (
    <div className="container py-10 lg:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14 items-center">
        {/* Left side - Contact Form */}
        <ScrollMotionEffect effect="fade-right" duration="2000">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-stone-950 text-center md:text-left mb-4 mt-5">
              Contact Us
            </h1>
            <p className="text-gray-600 mb-8 text-center md:text-left">
              The physicians and staff at Hess Spinal and Medical Centers
              understand that being injured in an auto accident can be extremely
              stressful for you and your family.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border rounded-md p-3 w-full shadow-sm"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border rounded-md p-3 w-full shadow-sm"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded-md p-3 w-full shadow-sm"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="border rounded-md p-3 w-full shadow-sm"
                />
              </div>

              <textarea
                placeholder="Your Message"
                className="border rounded-md p-3 w-full shadow-sm h-32 resize-none"
              />

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-3 mt-4 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </ScrollMotionEffect>

        {/* Right side - Image */}
        <ScrollMotionEffect effect="fade-left" duration="2000">
          <div className="relative w-full">
            <Image
              src="/assets/homepage/examining-spine.png"
              alt="Doctors examining spine"
              width={600}
              height={500}
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </ScrollMotionEffect>
      </div>
    </div>
  );
};

export default ContactUs;
