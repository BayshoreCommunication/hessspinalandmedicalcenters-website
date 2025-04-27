import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="container py-10 lg:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14 items-center">
        {/* Left side - Contact Form */}
        <div className="">
          <div className="flex flex-col justify-center ">
            <h1 className="text-stone-950 font-bold text-3xl md:text-5xl mt-5 text-center md:text-left mb-4">
              Contact Us
            </h1>
            <p className="text-gray-600 mb-8">
              The physicians and staff at Hess Spinal and Medical Centers
              understand that being injured in an auto accident can be extremely
              stressful for you and your family.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border rounded-md p-3 w-full shadow-small"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border rounded-md p-3 w-full shadow-small"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded-md p-3 w-full shadow-small"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="border rounded-md p-3 w-full shadow-small"
                />
              </div>

              <textarea
                placeholder="Your Message"
                className="border rounded-md p-3 w-full shadow-small h-32 resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-3 mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative">
          <Image
            src="/assets/homepage/examining-spine.png" // replace this with your correct image path
            alt="Doctors examining spine"
            width={600}
            height={500}
            className="w-full overflow-hidden rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
