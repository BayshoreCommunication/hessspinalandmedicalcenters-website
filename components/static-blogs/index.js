import AccidentVictimsGetCareWithoutUpfrontCosts, {
  accidentVictimsGetCareWithoutUpfrontCostsPost,
} from "./blogs/accident-victims-get-care-without-upfront-costs";
import CommonMistakesPeopleMakeWhenTreatingAccidentInjuries, {
  commonMistakesPeopleMakeWhenTreatingAccidentInjuriesPost,
} from "./blogs/common-mistakes-people-make-when-treating-accident-injuries";
import WhatFactorsAffectRecoveryTimeAfterAnInjury, {
  whatFactorsAffectRecoveryTimeAfterAnInjuryPost,
} from "./blogs/What Factors Affect Recovery Time After an Injury";
import WhyPainCanMoveToDifferentPartsOfTheBodyAfterACarAccident, {
  whyPainCanMoveToDifferentPartsOfTheBodyAfterACarAccidentPost,
} from "./blogs/why-pain-can-move-to-different-parts-of-the-body-after-a-car-accident";
import SoftTissueInjuriesDiagnosisTreatmentCarCrash, {
  softTissueInjuriesDiagnosisTreatmentCarCrashPost,
} from "./blogs/soft-tissue-injuries-diagnosis-treatment-car-crash";

export const staticBlogPosts = [
  {
    ...accidentVictimsGetCareWithoutUpfrontCostsPost,
    StaticContent: AccidentVictimsGetCareWithoutUpfrontCosts,
  },
  {
    ...commonMistakesPeopleMakeWhenTreatingAccidentInjuriesPost,
    StaticContent: CommonMistakesPeopleMakeWhenTreatingAccidentInjuries,
  },
  {
    ...whatFactorsAffectRecoveryTimeAfterAnInjuryPost,
    StaticContent: WhatFactorsAffectRecoveryTimeAfterAnInjury,
  },
  {
    ...whyPainCanMoveToDifferentPartsOfTheBodyAfterACarAccidentPost,
    StaticContent: WhyPainCanMoveToDifferentPartsOfTheBodyAfterACarAccident,
  },
  {
    ...softTissueInjuriesDiagnosisTreatmentCarCrashPost,
    StaticContent: SoftTissueInjuriesDiagnosisTreatmentCarCrash,
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
