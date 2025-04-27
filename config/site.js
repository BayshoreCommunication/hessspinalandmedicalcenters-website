export const SITECONFIG = {
  siteMetadata: {
    title: "",
    description: "",
  },
  siteLogo: { url: "" },
  mainNav: [
    { title: "Home", slug: "/" },
    { title: "About Us", slug: "/about" },
    { title: "Services", slug: "/services" },
    { title: "Case Studies", slug: "/case-studies" },
    { title: "Blog", slug: "/blog" },
  ],

  footer: {
    footer_logo: "",
    description: "",
    resources: [
      {
        title: "About Us",
        slug: "/about",
      },
      {
        title: "Services",
        slug: "/services", // <- Add this slug
      },
      {
        title: "Technology",
        slug: "/technology", // <- Add this slug
      },
      {
        title: "Blogs",
        slug: "/blogs", // <- Adjusted to match 'Blogs' plural
      },
      {
        title: "Contact",
        slug: "/contact",
      },
      {
        title: "Disclaimers",
        slug: "/disclaimers",
      },
      {
        title: "Privacy Policy",
        slug: "/privacy-policy",
      },
      {
        title: "Terms of Service",
        slug: "/terms-of-service",
      },
      {
        title: "Cookie Policy",
        slug: "/cookie-policy",
      },
    ],
  },
  socialLinks: [
    {
      title: "Facebook",
      url: "",
    },
    {
      title: "Twitter",
      url: "#",
    },
    {
      title: "Instagram",
      url: "#",
    },
    {
      title: "LinkedIn",
      url: "#",
    },
  ],
};
