import GetAllPostData from "@/lib/GetAllPostData";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import CardMotion from "../motion/CardMotion";

const LatestBlogsData = [
  {
    featuredImage: "/images/blog1.jpg",
    altText: "Doctor showing spine model to a patient",
    title: "Understanding Spinal Injuries After Car Accidents",
    slug: "understanding-spinal-injuries",
    createdAt: "2025-04-10T09:00:00Z",
    shortDescription:
      "Learn how spinal injuries occur after accidents and what treatments are available to ensure a full recovery.",
  },
  {
    featuredImage: "/images/blog2.jpg",
    altText: "Therapist assisting a patient during recovery",
    title: "Top 5 Recovery Tips After a Major Accident",
    slug: "top-recovery-tips",
    createdAt: "2025-04-15T11:30:00Z",
    shortDescription:
      "Follow these expert tips to speed up your healing process and regain strength after a serious injury.",
  },
  {
    featuredImage: "/images/blog3.jpg",
    altText: "Advanced spinal treatment technology",
    title: "How Technology is Changing Spinal Care",
    slug: "technology-in-spinal-care",
    createdAt: "2025-04-20T15:45:00Z",
    shortDescription:
      "Discover how innovations in technology are revolutionizing the way spinal injuries are treated today.",
  },
];

const LatestBlogs = async () => {
  const blogPostData = await GetAllPostData();

  const postDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const renderBlogPosts = () => {
    return blogPostData?.data
      ?.filter((pub, index) => pub.published && index < 3)
      ?.map((blog, index) => (
        <Link href={`/blog/${blog.slug}`} key={index}>
          <div>
            <div className="p-0 rounded-2xl">
              <Image
                shadow="none"
                width="100%"
                className="w-full object-cover h-[300px]"
                src={blog.featuredImage?.image?.url}
                alt={blog.featuredImage?.altText}
              />
            </div>
            <div className="text-small block text-left">
              <p className="text-default-500 block">
                {postDate(blog.createdAt)}
              </p>
              <h2 className="text-default-500 text-lg font-bold line-clamp-2 mt-2">
                {blog.title}
              </h2>
              <div className="flex justify-center md:justify-start mx-auto items-center  my-4">
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-secondary font-normal text-lg bg-none px-4 py-1 rounded-full hover:bg-secondary hover:text-white border-2 border-secondary duration-500 "
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </Link>
      ));
  };

  return (
    <div className="bg-[#F1F1F1]">
      <div className="container py-10 lg:py-14">
        <div className="">
          <CardMotion
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1.1 },
            }}
            initial={{ opacity: 0, y: 100 }}
          >
            <div className=" text-center">
              <h2
                className={`text-stone-950 font-bold text-3xl md:text-5xl mt-5 mb-4 text-center `}
              >
                Our Recent Blogs
              </h2>
              <hp className="text-stone-950 font-normal text-md">
                Professionally handling Property Damage Claims, we’re committed
                to protecting both your space and your peace of mind in times of
                need.
              </hp>
            </div>
          </CardMotion>

          <CardMotion
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1.1 },
            }}
            initial={{ opacity: 0, y: 100 }}
          >
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-3 mt-0 md:mt-12">
              {renderBlogPosts()}
            </div>
          </CardMotion>
          <CardMotion
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1.1 },
            }}
            initial={{ opacity: 0, y: 100 }}
          >
            <div className="flex justify-center  mt-12  ">
              <Link
                href={"/blog"}
                className="text-white lg:px-10 font-normal text-lg bg-primary px-4 py-2 rounded-full hover:bg-transparent hover:text-primary duration-500 border-2 border-secondary  "
              >
                Discover More Blogs
              </Link>
            </div>
          </CardMotion>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
