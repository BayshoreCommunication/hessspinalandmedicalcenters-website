export const FALLBACK_BLOG_IMAGE = "/assets/homepage/blog-1.jpg";

export function stripHtml(value = "") {
  return value.replace(/<\/?[^>]+(>|$)/g, "").replace(/\s+/g, " ").trim();
}

export function truncateText(value = "", limit = 150) {
  if (value.length <= limit) {
    return value;
  }

  return `${value.slice(0, limit).trim()}...`;
}

export function getBlogImage(blog) {
  const imageUrl =
    blog?.image?.url ||
    blog?.featuredImage?.image?.url ||
    blog?.featuredImage?.url ||
    blog?.openGraphImage ||
    FALLBACK_BLOG_IMAGE;

  const altText =
    blog?.image?.altText ||
    blog?.featuredImage?.altText ||
    blog?.title ||
    "Blog post image";

  return {
    url: imageUrl,
    altText,
  };
}

export function getBlogDescription(blog, limit = 150) {
  const description =
    blog?.shortDescription ||
    blog?.seoDescription ||
    blog?.description ||
    stripHtml(blog?.body || "");

  return truncateText(description, limit);
}

export function getBlogOpenGraphImage(blog) {
  return blog?.openGraphImage || getBlogImage(blog).url;
}
