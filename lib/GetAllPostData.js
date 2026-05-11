import { mergeStaticBlogPosts } from "@/components/static-blogs";

export default async function GetAllPostData() {
  try {
    const bloData = await fetch(
      "https://backend-hessspinalandmedicalcenters.vercel.app/site/blog",
      {
        next: { revalidate: 200 },
      },
    );

    if (!bloData.ok) {
      throw new Error("Blog request failed");
    }

    const blogPostData = await bloData.json();

    return {
      ...blogPostData,
      data: mergeStaticBlogPosts(blogPostData?.data || []),
    };
  } catch (error) {
    return {
      data: mergeStaticBlogPosts([]),
    };
  }
}
