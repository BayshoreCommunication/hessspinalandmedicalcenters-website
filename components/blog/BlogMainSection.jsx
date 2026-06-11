import Image from "next/image";
import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import GetAllPostData from "@/lib/GetAllPostData";
import {
  getBlogDescription,
  getBlogImage,
  sortBlogsByLatest,
} from "@/lib/blogHelpers";

const BlogMainSection = async ({ blogPostData: initialBlogPostData } = {}) => {
  const blogPostData = initialBlogPostData || (await GetAllPostData());

  const postDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  // Filter published posts once and store the result
  const publishedPosts = sortBlogsByLatest(
    blogPostData?.data?.filter((pub) => pub.published === true) || [],
  );

  return (
    <section className="bg-white">
      <div className="container py-10 md:py-20">
        <div>
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <h2 className="text-stone-950 !font-semibold text-3xl md:text-5xl mb-1 md:mb-12 text-center">
              Our Recent Blog Post
            </h2>
          </ScrollMotionEffect>

          {publishedPosts.length === 0 ? (
            <ScrollMotionEffect effect="fade-up" duration="3000">
              {" "}
              <div className="text-center text-primary text-lg mt-10 p-10 rounded-2xl shadow-medium ">
                Oops! No blogs found.
              </div>
            </ScrollMotionEffect>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center text-center h-full">
              {publishedPosts.map((blogs, index) => {
                const image = getBlogImage(blogs);
                const description = getBlogDescription(blogs, 150);

                return (
                  <ScrollMotionEffect
                    effect="fade-up"
                    duration="2000"
                    key={blogs?.slug || index}
                  >
                    <Link href={`/blog/${blogs?.slug}`}>
                      <div className="h-full overflow-hidden rounded-md bg-white text-left shadow-medium">
                        <div className="relative h-64 w-full overflow-hidden">
                          <Image
                            fill
                            src={image.url}
                            alt={image.altText}
                            className="object-cover transition duration-500 hover:scale-105"
                          />
                        </div>
                        <div className="px-4 pb-8 pt-4">
                          <div className="mt-1 flex items-center justify-between gap-3 text-sm text-gray-500">
                            <span>{blogs?.category || "Blog post"}</span>
                            <span>{postDate(blogs?.createdAt)}</span>
                          </div>
                          <h1 className="mt-5 line-clamp-2 text-2xl font-semibold text-black">
                            {blogs?.title}
                          </h1>
                          <p className="mt-3 line-clamp-3 text-base leading-7 text-gray-600">
                            {description}
                          </p>
                          <div className="mt-6 flex justify-start">
                            <div className="cursor-pointer rounded-full border-2 border-secondary bg-none px-4 py-2 text-lg font-normal text-secondary hover:bg-secondary hover:text-white">
                              Read More
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ScrollMotionEffect>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogMainSection;
