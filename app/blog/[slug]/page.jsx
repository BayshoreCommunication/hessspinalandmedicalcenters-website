import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import GetAllPostData from "@/lib/GetAllPostData";
import {
  getBlogDescription,
  getBlogImage,
  getBlogOpenGraphImage,
  sortBlogsByLatest,
} from "@/lib/blogHelpers";

function postDate(date) {
  if (!date) {
    return "";
  }

  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

async function getBlogDetails(slug) {
  const blogPostData = await GetAllPostData();
  const blogDetails = blogPostData?.data?.find((blogs) => blogs.slug === slug);

  return {
    blogPostData,
    blogDetails,
  };
}

export async function generateMetadata({ params }) {
  const { blogDetails } = await getBlogDetails(params.slug);

  if (!blogDetails) {
    return {
      title: "Blog not found",
      description: "No blog post available.",
    };
  }

  const description = getBlogDescription(blogDetails, 220);
  const image = getBlogImage(blogDetails);
  const canonicalUrl = blogDetails?.canonicalUrl || `/blog/${blogDetails?.slug}`;

  return {
    title: blogDetails?.seoTitle || blogDetails?.title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: blogDetails?.title,
      description,
      images: [
        {
          url: getBlogOpenGraphImage(blogDetails),
          alt: image.altText,
        },
      ],
      url: canonicalUrl,
      type: "article",
      siteName: "Hess Spinal & Medical Centers",
    },
  };
}

function RecentCasesSidebar({ posts = [], currentSlug }) {
  const recentPosts = sortBlogsByLatest(
    posts.filter((post) => post?.published === true && post?.slug !== currentSlug),
  ).slice(0, 8);

  return (
    <aside className="h-fit rounded-md border border-[#dce7ef] bg-white p-5 shadow-sm lg:sticky lg:top-28">
      <h2 className="border-b border-[#dce7ef] pb-4 text-2xl font-bold text-[#1a3a5c]">
        Recent Cases
      </h2>

      {recentPosts.length === 0 ? (
        <p className="mt-5 text-sm leading-6 text-slate-600">
          No recent cases available.
        </p>
      ) : (
        <div className="mt-5 space-y-4">
          {recentPosts.map((post) => {
            const image = getBlogImage(post);

            return (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="group grid grid-cols-[96px_1fr] gap-3 rounded-md border border-[#eef3f7] bg-white p-3 transition hover:border-[#2b7bb9] hover:shadow-sm"
              >
                <Image
                  width={160}
                  height={120}
                  src={image.url}
                  alt={image.altText}
                  className="h-20 w-24 rounded object-cover"
                />
                <div className="min-w-0">
                  <p className="line-clamp-2 text-sm font-bold leading-5 text-[#1a3a5c] group-hover:text-primary">
                    {post.title}
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    {postDate(post.createdAt)}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </aside>
  );
}

const BlogDetailsPage = async ({ params }) => {
  const { blogPostData, blogDetails } = await getBlogDetails(params.slug);

  if (!blogDetails) {
    notFound();
  }

  const image = getBlogImage(blogDetails);
  const StaticContent = blogDetails?.StaticContent;
  const imageDescriptionId = image.description
    ? `${blogDetails.slug}-image-description`
    : undefined;

  return (
    <main className="bg-[#f7fbfd] pt-20 md:pt-28">
      <section className="container py-10 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <article className="min-w-0">
            <header className="rounded-md border border-[#dce7ef] bg-white p-5 shadow-sm md:p-8">
              <h1 className="text-3xl font-bold leading-tight text-[#1a3a5c] md:text-5xl">
                {blogDetails.title}
              </h1>

              <figure className="mt-7">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-slate-100">
                  <Image
                    src={image.url}
                    alt={image.altText}
                    title={image.title}
                    aria-describedby={imageDescriptionId}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                {image.caption ? (
                  <figcaption className="mt-3 text-sm leading-6 text-slate-600">
                    {image.caption}
                  </figcaption>
                ) : null}
                {image.description ? (
                  <p id={imageDescriptionId} className="sr-only">
                    {image.description}
                  </p>
                ) : null}
              </figure>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-600">
                <span className="rounded-full bg-[#ebf5fb] px-4 py-2 text-[#1a3a5c]">
                  {blogDetails?.category || "Blog Post"}
                </span>
                <span>{postDate(blogDetails?.updatedAt || blogDetails?.createdAt)}</span>
              </div>
            </header>

            <div className="mt-8">
              {StaticContent ? (
                <StaticContent />
              ) : (
                <div className="rounded-md border border-[#dce7ef] bg-white p-5 text-[17px] leading-8 text-[#223143] shadow-sm md:p-8 [&_a]:text-primary [&_h1]:mb-4 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-[#1a3a5c] [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#1a3a5c] [&_li]:mb-2 [&_p]:mb-4 [&_ul]:ml-6 [&_ul]:list-disc">
                  {parse(blogDetails?.body || "")}
                </div>
              )}
            </div>
          </article>

          <RecentCasesSidebar
            posts={blogPostData?.data || []}
            currentSlug={blogDetails.slug}
          />
        </div>
      </section>
    </main>
  );
};

export default BlogDetailsPage;
