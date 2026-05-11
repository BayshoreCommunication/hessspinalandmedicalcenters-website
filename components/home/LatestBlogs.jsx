import Image from "next/image";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import GetAllPostData from "@/lib/GetAllPostData";
import { getBlogDescription, getBlogImage } from "@/lib/blogHelpers";

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

  const publishedPosts =
    blogPostData?.data?.filter((pub) => pub.published === true).slice(0, 3) ||
    [];

  return (
    <div className="bg-[#F1F1F1]">
      <div className="container p-6 md:p-16">
        <ScrollMotionEffect effect="fade-right" duration="2000">
          <h1 className="text-center text-3xl font-bold text-black md:text-4xl lg:text-5xl">
            Our Latest Blogs
          </h1>
        </ScrollMotionEffect>
        <ScrollMotionEffect effect="fade-left" duration="2000">
          <div className="mx-auto mt-4 2xl:w-[60%]">
            <p className="text-center text-md text-[#55545A] md:text-lg">
              {`The physicians and staff at Hess Spinal and Medical Centers understand that being injured in an auto accident can be extremely stressful for you and your family.`}
            </p>
          </div>
        </ScrollMotionEffect>

        <div className="my-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {publishedPosts.map((item, index) => {
            const image = getBlogImage(item);
            const description = getBlogDescription(item, 145);

            return (
              <div
                key={item.slug || index}
                className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-lg"
              >
                <ScrollMotionEffect effect="fade-up" duration="1000">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={image.url}
                      alt={image.altText}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </ScrollMotionEffect>
                <ScrollMotionEffect effect="fade-up" duration="2000">
                  <div className="flex flex-grow flex-col p-4">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <p className="text-xs text-gray-500">
                        {postDate(item?.createdAt)}
                      </p>
                      <p className="text-xs font-medium text-primary">
                        {item?.category || "Blog Post"}
                      </p>
                    </div>
                    <h2 className="mb-2 line-clamp-2 text-lg font-bold text-black">
                      {item.title}
                    </h2>
                    <p className="mt-2 line-clamp-3 flex-grow text-sm leading-6 text-gray-600">
                      {description}
                    </p>
                    <Link
                      href={`/blog/${item.slug}`}
                      className="mt-4 inline-block font-medium text-primary duration-500 hover:underline"
                    >
                      Read More
                    </Link>
                  </div>
                </ScrollMotionEffect>
              </div>
            );
          })}
        </div>

        <div className="mt-5 text-center transition duration-300 hover:scale-105">
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <Link
              href={"/blog"}
              className="rounded-full border-2 border-secondary bg-none px-4 py-2 text-lg font-normal text-secondary transition duration-500 hover:scale-105 hover:bg-secondary hover:text-white"
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
