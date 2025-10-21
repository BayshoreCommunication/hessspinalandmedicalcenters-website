import Image from "next/image";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import parse from "html-react-parser";
import GetAllPostData from "@/lib/GetAllPostData";

const LatestBlogs = async () => {
  const blogPostData = await GetAllPostData();

  const postDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  // Filter published posts once and store the result, limit to 3 for homepage
  const publishedPosts =
    blogPostData?.data?.filter((pub) => pub.published === true).slice(0, 3) ||
    [];

  return (
    <div className="bg-[#F1F1F1]">
      <div className="container p-6 md:p-16">
        <ScrollMotionEffect effect="fade-right" duration="2000">
          <h1 className="font-bold text-3xl  md:text-4xl lg:text-5xl text-black text-center">
            Our Latest Blogs
          </h1>
        </ScrollMotionEffect>
        <ScrollMotionEffect effect="fade-left" duration="2000">
          <div className="2xl:w-[60%] mx-auto mt-4">
            <p className="text-md md:text-lg text-[#55545A] text-center">
              {`The physicians and staff at Hess Spinal and Medical Centers understand that being injured in an auto accident can be extremely stressful for you and your family.`}
            </p>
          </div>
        </ScrollMotionEffect>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {publishedPosts.map((item, index) => (
            <div
              key={item.slug}
              className="rounded-lg overflow-hidden bg-white shadow-lg h-full flex flex-col"
            >
              <ScrollMotionEffect effect="fade-up" duration="1000">
                <div className="w-full h-60 relative overflow-hidden">
                  <Image
                    src={item?.featuredImage?.image?.url}
                    alt={item?.featuredImage?.altText || "Blog post image"}
                    fill
                    style={{ objectFit: "cover" }}
                    className="hover:scale-105 transition-transform duration-500 rounded-2xl"
                  />
                </div>
              </ScrollMotionEffect>
              <ScrollMotionEffect effect="fade-up" duration="2000">
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-gray-500">
                      {postDate(item?.createdAt)}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {item?.category || "Blog Post"}
                    </p>
                  </div>
                  <h2 className="text-lg font-bold text-black mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-3 flex-grow">
                    {parse(
                      item?.body?.replace(/<[^>]*>/g, "").substring(0, 120) +
                        "..."
                    )}
                  </p>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="inline-block mt-4 text-primary font-medium hover:underline duration-500"
                  >
                    Read More →
                  </Link>
                </div>
              </ScrollMotionEffect>
            </div>
          ))}
        </div>

        <div className="mt-5 text-center hover:scale-105  transition duration-300">
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <Link
              href={"/blog"}
              className="text-secondary font-normal text-lg bg-none px-4 py-2 rounded-full hover:bg-secondary hover:text-white border-2 border-secondary duration-500 hover:scale-105  transition "
            >
              View All Blogs
            </Link>
          </ScrollMotionEffect>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
