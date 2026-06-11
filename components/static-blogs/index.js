import AccidentVictimsGetCareWithoutUpfrontCosts, {
  accidentVictimsGetCareWithoutUpfrontCostsPost,
} from "./blogs/accident-victims-get-care-without-upfront-costs";
import CommonMistakesPeopleMakeWhenTreatingAccidentInjuries, {
  commonMistakesPeopleMakeWhenTreatingAccidentInjuriesPost,
} from "./blogs/common-mistakes-people-make-when-treating-accident-injuries";

export const staticBlogPosts = [
  {
    ...accidentVictimsGetCareWithoutUpfrontCostsPost,
    StaticContent: AccidentVictimsGetCareWithoutUpfrontCosts,
  },
  {
    ...commonMistakesPeopleMakeWhenTreatingAccidentInjuriesPost,
    StaticContent: CommonMistakesPeopleMakeWhenTreatingAccidentInjuries,
  },
];

export function getStaticBlogPost(slug) {
  return staticBlogPosts.find((post) => post.slug === slug);
}

export function mergeStaticBlogPosts(remotePosts = []) {
  const mergedBySlug = new Map();

  staticBlogPosts.forEach((post) => {
    mergedBySlug.set(post.slug, post);
  });

  remotePosts.forEach((post) => {
    if (!mergedBySlug.has(post?.slug)) {
      mergedBySlug.set(post.slug, post);
    }
  });

  return Array.from(mergedBySlug.values());
}
