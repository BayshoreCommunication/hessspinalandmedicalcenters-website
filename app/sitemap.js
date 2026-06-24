import GetAllPostData from "@/lib/GetAllPostData";

export default async function sitemap() {
  const baseUrl = "https://www.hessspinalandmedicalcenters.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/appointment",
    "/blog",
    "/contact",
    "/cookie-policy",
    "/disclaimers",
    "/location",
    "/privacy-policy",
    "/services",
    "/terms-of-service",
    "/testimonials",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic blog routes
  let blogRoutes = [];
  try {
    const blogPostData = await GetAllPostData();
    const posts = blogPostData?.data || [];
    blogRoutes = posts
      .filter((post) => post.published && post.slug)
      .map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt || post.createdAt || new Date()),
        changeFrequency: "weekly",
        priority: 0.6,
      }));
  } catch (error) {
    console.error("Error generating sitemap for blogs:", error);
  }

  return [...staticRoutes, ...blogRoutes];
}
