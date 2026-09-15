import Link from "next/link";

export const BLOG_IMAGE = {
  url: "/assets/static-blogs/why-range-of-motion-testing-matters-after-a-florida-car-accident.webp",
  altText:
    "Physical therapist helping a patient with range of motion testing at Hess Spinal and Medical Centers.",
  title: "Why Range of Motion Testing Matters After a Florida Car Accident",
  description:
    "Discover why range of motion testing matters after a Florida car accident with Hess Spinal and Medical Centers. Learn how assessments help identify hidden injuries, track recovery progress, and support your medical claim.",
  caption:
    "Learn how range of motion testing helps identify hidden injuries and track recovery progress after a car accident.",
};

export const whyRangeOfMotionTestingMattersAfterAFloridaCarAccidentPost = {
  slug: "why-range-of-motion-testing-matters-after-a-florida-car-accident",
  title: "Why Range of Motion Testing Matters After a Florida Car Accident",
  category: "Chiropractic Care",
  published: true,
  createdAt: "2026-09-15T00:00:00.000Z",
  updatedAt: "2026-09-15T00:00:00.000Z",
  image: BLOG_IMAGE,
  featuredImage: {
    altText: BLOG_IMAGE.altText,
    title: BLOG_IMAGE.title,
    description: BLOG_IMAGE.description,
    caption: BLOG_IMAGE.caption,
    image: {
      url: BLOG_IMAGE.url,
    },
  },
  openGraphImage: BLOG_IMAGE.url,
  canonicalUrl:
    "https://www.hessspinalandmedicalcenters.com/blog/why-range-of-motion-testing-matters-after-a-florida-car-accident",
  seoTitle: "How Range of Motion Tests Unlock Florida PIP Funds",
  seoDescription:
    "Range of motion exams provide objective proof of joint damage for Florida PIP claims. Learn the simple testing mistake that drains your insurance payout.",
  shortDescription:
    "The range of motion testing is a test to determine joint movement restriction caused by pain, stiffness, or swelling. It can be performed in Florida after a car accident to document a restricted range of motion.",
  body: `<p>The range of motion testing is a test to determine joint movement restriction caused by pain, stiffness, or swelling. It can be performed in Florida after a car accident to document a restricted range of motion. The range is measured in degrees and is used to show the amount of movement before discomfort, resistance, or pressure.</p>`,
};

const externalLinks = {
  merckManual:
    "https://www.merckmanuals.com/home/bone-joint-and-muscle-disorders/diagnosis-of-musculoskeletal-disorders/medical-history-and-physical-examination-in-musculoskeletal-disorders",
  floridaStatute:
    "https://www.grahamsyfert.com/florida-statutes/section-627-736.html",
  houseBill837:
    "https://www.hklaw.com/en/insights/publications/2023/03/florida-enacts-major-tort-reform-and-bad-faith-insurance-claim",
  pmcStudy: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5543694/",
  bcmjGuide:
    "https://bcmj.org/icbc/tips-performing-physical-examination-neck-whiplash-associated-disorders",
};

const keyPoints = [
  "Measured in degrees with a goniometer, not guessed from how you describe the pain",
  "Required to establish a baseline before insurers will fund ongoing treatment",
  "Repeated at intervals to prove recovery is happening, or that it has stalled",
  "Tied directly to Florida's 14-day PIP treatment window under Fla. Stat. § 627.736",
];

const topStats = [
  {
    value: "40%+",
    label: "of Florida crashes each year result in reported injury",
    source: "FLHSMV data",
  },
  {
    value: "14",
    label: "days to seek treatment or forfeit PIP benefits entirely",
    source: "Fla. Stat. § 627.736",
  },
  {
    value: "15–40%",
    label: "of crash victims develop chronic neck pain, per JAAOS",
    source: "JAAOS",
  },
];

const sampleRanges = [
  { joint: "Cervical Rotation", measured: "47° of 80°", percentage: 58.75 },
  { joint: "Cervical Flexion", measured: "31° of 60°", percentage: 51.67 },
  { joint: "Shoulder Abduction", measured: "96° of 180°", percentage: 53.33 },
  { joint: "Lumbar Flexion", measured: "28° of 60°", percentage: 46.67 },
];

const beforeItems = [
  "Pain reported verbally, no baseline number",
  "“Soreness” logged with no degree measurement",
  "Insurer sees a subjective complaint",
  "Harder to prove aggravation later",
];

const afterItems = [
  "Cervical rotation measured in degrees, both sides",
  "Baseline set day one, re-tested every visit",
  "Insurer sees a quantified functional deficit",
  "Improvement or plateau is provable on paper",
];

const recoveryTrajectory = [
  { week: "Week 1", percentage: 58 },
  { week: "Week 3", percentage: 71 },
  { week: "Week 6", percentage: 84 },
  { week: "Week 10", percentage: 93 },
  { week: "Week 14", percentage: 99 },
];

const recoveryStats = [
  {
    value: "94%",
    label: "of serious crashes trace back to human error, per NHTSA",
    source: "NHTSA",
  },
  {
    value: "$10K",
    label: "max PIP medical benefit, contingent on EMC certification",
    source: "Fla. Stat. § 627.736",
  },
  {
    value: "2 yrs",
    label: "statute of limitations for injury claims under HB 837",
    source: "Florida HB 837",
  },
];

const countyData = [
  {
    county: "Hillsborough",
    collisionType: "Rear-end, highway merge",
    whyMatters:
      "High I-275/I-4 volume means repeat low-speed impacts and cumulative cervical strain",
  },
  {
    county: "Pinellas",
    collisionType: "Side-impact, intersection",
    whyMatters:
      "Dense signalized corridors increase T-bone mechanics affecting shoulder and lumbar ROM",
  },
  {
    county: "Polk",
    collisionType: "Rear-end, rural highway",
    whyMatters:
      "Higher speed differentials on US-98 and SR-60 raise whiplash severity",
  },
  {
    county: "Pasco",
    collisionType: "Rear-end, suburban arterial",
    whyMatters:
      "Growing commuter corridors along SR-54 see rising low-speed crash counts",
  },
];

const faqs = [
  {
    question: "Is my range of motion fine if I got a normal X-ray?",
    answer:
      "No. X-rays show bone. Restricted range of motion is often a soft-tissue and muscular finding that imaging alone won't catch.",
  },
  {
    question: "Can I request my range of motion numbers in writing?",
    answer:
      "Yes. Ask your provider for a copy of your chart notes, which should include degree measurements at each visit.",
  },
  {
    question: "Will my insurance company ever dispute a ROM measurement?",
    answer:
      "It happens. That's why repeated, consistent measurements from the same clinic hold up better than a single isolated reading.",
  },
  {
    question: "Is range of motion testing painful?",
    answer:
      "It shouldn't be. A clinician stops at the point where pain or resistance begins, that stopping point is the measurement itself.",
  },
  {
    question: "How soon after a crash should range of motion be tested?",
    answer:
      "At the first visit, ideally within days and always inside Florida's 14-day PIP window.",
  },
];

const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="nofollow noopener noreferrer"
    className="font-semibold text-[#1a3a5c] underline decoration-[#9ed0ec] underline-offset-4 transition hover:text-[#2b7bb9]"
  >
    {children}
  </a>
);

const InternalLink = ({ href, children }) => (
  <Link
    href={href}
    className="font-semibold text-[#1a3a5c] underline decoration-[#9ed0ec] underline-offset-4 transition hover:text-[#2b7bb9]"
  >
    {children}
  </Link>
);

const SectionTitle = ({ eyebrow, title }) => (
  <div className="mb-5 border-l-4 border-[#2b7bb9] pl-4">
    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2b7bb9]">
      {eyebrow}
    </p>
    <h2 className="mt-2 text-2xl font-bold leading-tight text-[#1a3a5c] md:text-3xl">
      {title}
    </h2>
  </div>
);

const InfoPanel = ({ children, tone = "light" }) => {
  const toneClass =
    tone === "dark"
      ? "bg-[#1a3a5c] text-white"
      : tone === "accent"
        ? "bg-[#2b7bb9] text-white"
        : "border border-[#cfe4f2] bg-[#ebf5fb] text-[#223143]";

  return <div className={`rounded-md p-5 ${toneClass}`}>{children}</div>;
};

const QuotePanel = ({ quote, author, title }) => (
  <figure className="rounded-md border border-[#d5e7f4] bg-white p-5 shadow-sm">
    <blockquote className="text-[17px] font-semibold leading-8 text-[#1a3a5c]">
      "{quote}"
    </blockquote>
    <figcaption className="mt-4">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#2b7bb9]">
        {author}
      </p>
      {title && <p className="mt-1 text-xs text-slate-500">{title}</p>}
    </figcaption>
  </figure>
);

export default function WhyRangeOfMotionTestingMattersAfterAFloridaCarAccident() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.hessspinalandmedicalcenters.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Blog",
                    item: "https://www.hessspinalandmedicalcenters.com/blog",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Why Range of Motion Testing Matters After a Florida Car Accident",
                    item: "https://www.hessspinalandmedicalcenters.com/blog/why-range-of-motion-testing-matters-after-a-florida-car-accident",
                  },
                ],
              },
              {
                "@type": "BlogPosting",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id":
                    "https://www.hessspinalandmedicalcenters.com/blog/why-range-of-motion-testing-matters-after-a-florida-car-accident",
                },
                headline:
                  "Why Range of Motion Testing Matters After a Florida Car Accident",
                name: "How Range of Motion Tests Unlock Florida PIP Funds",
                description:
                  "Range of motion exams provide objective proof of joint damage for Florida PIP claims. Learn the simple testing mistake that drains your insurance payout.",
                url: "https://www.hessspinalandmedicalcenters.com/blog/why-range-of-motion-testing-matters-after-a-florida-car-accident",
                image:
                  "https://www.hessspinalandmedicalcenters.com/assets/static-blogs/why-range-of-motion-testing-matters-after-a-florida-car-accident.webp",
                isPartOf: {
                  "@type": "Blog",
                  "@id": "https://www.hessspinalandmedicalcenters.com/blog",
                },
                about: {
                  "@type": "Thing",
                  name: "Range of Motion Testing After Car Accident",
                  description:
                    "Comprehensive guide on why range of motion testing in degrees using a goniometer is essential for documenting injuries, establishing baseline data, unlocking Florida PIP benefits, and supporting personal injury claims.",
                },
                keywords: [
                  "range of motion testing",
                  "range of motion car accident",
                  "ROM testing Florida",
                  "Florida PIP 14 day rule",
                  "goniometer test chiropractic",
                  "whiplash range of motion",
                  "Hess Spinal and Medical Centers",
                ],
                author: {
                  "@type": "Organization",
                  name: "Hess Spinal & Medical Centers",
                },
                publisher: {
                  "@type": "Organization",
                  name: "Hess Spinal & Medical Centers",
                  url: "https://www.hessspinalandmedicalcenters.com/",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.hessspinalandmedicalcenters.com/assets/site-logo/main-logo.png",
                  },
                },
                datePublished: "2026-09-15",
                dateModified: "2026-09-15",
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />
      <div className="space-y-10 text-[#223143]">
        {/* Header Banner */}
        <section className="overflow-hidden rounded-md border border-[#d5e7f4] bg-white shadow-sm">
          <div className="grid md:grid-cols-[2fr_1fr]">
            <div className="bg-[#1a3a5c] p-6 text-white md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b9dff6]">
                Chiropractic Care & Injury Assessment
              </p>
              <h2 className="mt-4 text-2xl font-bold leading-tight md:text-3xl">
                Why Range of Motion Testing Matters After a Florida Car Accident
              </h2>
              <p className="mt-4 text-base leading-7 text-[#e6f2fb] text-justify">
                The range of motion testing is a test to determine joint movement
                restriction caused by pain, stiffness, or swelling. It can be
                performed in Florida after a car accident to document a restricted
                range of motion. The range is measured in degrees and is used to
                show the amount of movement before discomfort, resistance, or
                pressure.
              </p>
            </div>
            <div className="bg-[#2b7bb9] p-6 text-white md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e4f5ff]">
                West Central Florida
              </p>
              <p className="mt-5 text-3xl font-bold">(800) 618-4377</p>
              <p className="mt-3 text-sm leading-6 text-[#eef9ff]">
                Same-day evaluations are available at Hess Spinal & Medical
                Centers locations across West Central Florida.
              </p>
            </div>
          </div>

          {/* Key Points */}
          <div className="bg-[#ebf5fb] p-6 md:p-8">
            <h2 className="text-lg font-bold uppercase tracking-[0.15em] text-[#1a3a5c]">
              Key Points
            </h2>
            <ul className="mt-5 grid gap-3 text-[15px] leading-7 text-[#24364a] md:grid-cols-2">
              {keyPoints.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[#2b7bb9]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats Grid */}
          <div className="grid divide-y divide-[#2b7bb9] bg-[#1a3a5c] md:grid-cols-3 md:divide-x md:divide-y-0">
            {topStats.map((item) => (
              <div key={item.label} className="p-6 text-white">
                <p className="text-3xl font-bold">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.12em] text-[#d7effc]">
                  {item.label}
                </p>
                <p className="mt-1 text-xs text-[#a3d4f3]">{item.source}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 1 */}
        <section>
          <SectionTitle
            eyebrow="1"
            title="What Range of Motion Testing Actually Measures"
          />
          <div className="space-y-5 text-[17px] leading-8 text-justify">
            <p>
              Range of motion, abbreviated as ROM, refers to the distance or angle
              of movement that a joint can perform actively or passively. Active
              movements are initiated by the patient’s own muscles, while passive
              ones are performed by an external source (Merck Manual).{" "}
              <ExternalLink href={externalLinks.merckManual}>
                The Merck Manual
              </ExternalLink>{" "}
              makes a distinction between the two types of movement, defining
              active range of motion and passive range of motion. The gap between
              those two numbers tells a trained provider whether they are looking
              at muscle guarding, mechanical blockage, or something in between.
            </p>
          </div>

          {/* Table: Sample Restricted Ranges */}
          <div className="mt-7 overflow-hidden rounded-md border border-[#d5e7f4] bg-white shadow-sm">
            <div className="bg-[#1a3a5c] px-6 py-4 text-white">
              <h3 className="text-xl font-bold">
                Sample Restricted Ranges vs. Clinical Normal Ranges
              </h3>
            </div>
            <div className="p-5 space-y-4 md:p-6">
              {sampleRanges.map((item) => (
                <div key={item.joint} className="space-y-1.5">
                  <div className="flex justify-between text-sm font-bold text-[#1a3a5c]">
                    <span>{item.joint}</span>
                    <span className="text-[#2b7bb9]">{item.measured}</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-[#eef7fd]">
                    <div
                      className="h-full rounded-full bg-[#2b7bb9]"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-[#d5e7f4] bg-[#f8fcff] px-6 py-3">
              <p className="text-xs italic text-slate-500">
                Sample restricted ranges seen at initial evaluation after a
                moderate rear-end collision, measured in degrees against clinical
                normal ranges.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-5 text-[17px] leading-8 text-justify">
            <p>
              A chiropractor doesn't eyeball this. A goniometer, a hinged
              protractor built for joints, gets strapped or held against the body
              and the angle gets read in degrees. Neck rotation, shoulder
              abduction, lumbar flexion, each has an established normal range, and
              each gets checked against it.
            </p>
            <p>
              “It hurts when I turn my head” is a real symptom and a weak record.
              “Cervical rotation measured at 47 degrees to the right, down from a
              normal range of 80” is a clinical finding that a claims adjuster, an
              attorney, or a second physician can act on. Florida clinics that
              skip this step are handing patients a folder full of adjectives
              instead of evidence.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <SectionTitle
            eyebrow="2"
            title="Why Insurers Care About a Number You've Never Heard Of"
          />
          <div className="space-y-5 text-[17px] leading-8 text-justify">
            <p>
              Every Florida driver's own auto policy carries Personal Injury
              Protection, and under{" "}
              <ExternalLink href={externalLinks.floridaStatute}>
                Florida Statute § 627.736
              </ExternalLink>
              , that coverage pays 80% of reasonable medical expenses up to policy
              limits, no fault required. The catch is documentation. The statute
              requires initial treatment within the first 14-days of the crash
              and requires a qualified provider to certify that an Emergency
              Medical Condition did not exist for the full $10,000 benefit unlocks.
              The cap drops to $2,500 without that certification.
            </p>
          </div>

          {/* CTA Banner 1 */}
          <div className="mt-6">
            <InfoPanel tone="accent">
              <h3 className="text-2xl font-bold">
                Don't Let an Undocumented Injury Cost the Claim
              </h3>
              <p className="mt-3 leading-7 text-[#eef9ff]">
                Hess Spinal & Medical Centers performs baseline range of motion
                testing at every initial visit, at all 13 Tampa Bay locations,
                with no upfront cost under Florida PIP.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <Link
                  href="/appointment"
                  className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#1a3a5c] transition hover:bg-[#ebf5fb]"
                >
                  Request An Appointment
                </Link>
                <a
                  href="tel:8006184377"
                  className="inline-flex rounded-full border border-white px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
                >
                  Call (800) 618-4377
                </a>
              </div>
            </InfoPanel>
          </div>

          <div className="mt-6 space-y-5 text-[17px] leading-8 text-justify">
            <p>
              ROM testing feeds directly into that certification. A restricted,
              measured, re-tested range of motion is exactly the kind of objective
              finding an EMC determination leans on. Skip the measurement and a
              provider is left arguing severity from a pain scale alone, which
              insurers are trained to discount.
            </p>
            <p>
              The stakes compound under Florida's 2023 tort reform.{" "}
              <ExternalLink href={externalLinks.houseBill837}>
                House Bill 837
              </ExternalLink>{" "}
              shifted the pure comparative negligence rule to the modified one,
              meaning that any claim in which the plaintiff was assigned more than
              50% of the fault would not be able to recover anything. One of the
              ways of proving causation and severity in order to prevent their
              being argued is keeping consistent, thorough records.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <SectionTitle
            eyebrow="3"
            title="Why Whiplash Doesn't Announce Itself on Day One"
          />
          <div className="space-y-5 text-[17px] leading-8 text-justify">
            <p>
              Adrenaline and inflammation take time to build. A study in{" "}
              <ExternalLink href={externalLinks.pmcStudy}>PMC</ExternalLink>{" "}
              measuring passive cervical range of motion after whiplash found
              restriction patterns that correlated with long-term disability, not
              just day-one pain reports. Cervical range of motion is one of three
              components clinicians use to objectively size up a whiplash
              injury, alongside pain scoring and muscle spasm, since modern
              medicine still has no direct instrument for measuring someone else's
              pain.
            </p>
          </div>

          {/* Before & After Card */}
          <div className="mt-6 overflow-hidden rounded-md border border-[#d5e7f4] bg-white shadow-sm">
            <div className="bg-[#1a3a5c] px-6 py-4 text-white">
              <h3 className="text-xl font-bold">
                Injury Documentation: Untested vs. ROM-Documented
              </h3>
            </div>
            <div className="grid divide-y divide-[#d5e7f4] md:grid-cols-2 md:divide-x md:divide-y-0">
              {/* Before */}
              <div className="bg-[#fff9f9] p-6">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-red-700">
                  <span className="h-2 w-2 rounded-full bg-red-600" />
                  BEFORE: Untested Injury
                </div>
                <ul className="mt-4 space-y-3 text-[15px] leading-7 text-[#334155]">
                  {beforeItems.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-red-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="bg-[#f4fbf7] p-6">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-emerald-800">
                  <span className="h-2 w-2 rounded-full bg-emerald-600" />
                  AFTER: ROM-Documented Injury
                </div>
                <ul className="mt-4 space-y-3 text-[15px] leading-7 text-[#1e293b]">
                  {afterItems.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-5 text-[17px] leading-8 text-justify">
            <p>
              Some critics call ROM testing imprecise. A{" "}
              <ExternalLink href={externalLinks.bcmjGuide}>
                British Columbia Medical Journal
              </ExternalLink>{" "}
              clinical guide on whiplash exams acknowledges that manual ROM
              testing lacks the rigor of a lab instrument, yet still calls it
              essential for assessment and tracking progress over time,
              particularly when active and passive ranges get compared side by
              side to separate muscular guarding from structural restriction.
              Imperfect and useful aren't opposites. A consistent, repeated
              measurement from the same clinic beats no measurement every time.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <SectionTitle
            eyebrow="4"
            title="Tracking Recovery Instead of Guessing at It"
          />
          <div className="space-y-5 text-[17px] leading-8 text-justify">
            <p>
              A single ROM measurement is a snapshot. A course of measurements,
              taken at the same joints on a schedule, is a recovery curve. That
              curve either climbs toward normal function or it plateaus, and a
              plateau is itself clinically useful information, since it can flag
              the need for imaging, a referral, or a change in treatment plan.
            </p>
          </div>

          {/* Visual Recovery Trajectory */}
          <div className="mt-6 rounded-md border border-[#d5e7f4] bg-white p-5 shadow-sm md:p-6">
            <h3 className="text-xl font-bold text-[#1a3a5c]">
              A Typical Recovery Trajectory After Consistent Treatment
            </h3>
            <div className="mt-6 space-y-5">
              {recoveryTrajectory.map((item) => (
                <div key={item.week} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold text-[#1a3a5c]">
                    <span>{item.week}</span>
                    <span className="text-[#2b7bb9]">{item.percentage}%</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-[#eef7fd]">
                    <div
                      className="h-full rounded-full bg-[#2b7bb9]"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs italic text-slate-500">
              Percentage of normal cervical range of motion recovered, tracked
              across a 14-week treatment course. Individual results vary by
              injury severity and treatment adherence.
            </p>
          </div>

          {/* Recovery Stats */}
          <div className="mt-6 grid divide-y divide-[#2b7bb9] bg-[#1a3a5c] rounded-md overflow-hidden md:grid-cols-3 md:divide-x md:divide-y-0">
            {recoveryStats.map((item) => (
              <div key={item.label} className="p-6 text-white">
                <p className="text-3xl font-bold">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.12em] text-[#d7effc]">
                  {item.label}
                </p>
                {item.source && (
                  <p className="mt-1 text-xs text-[#a3d4f3]">{item.source}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section>
          <SectionTitle
            eyebrow="5"
            title="How Hess Spinal & Medical Centers Builds This Into Every Visit"
          />
          <div className="space-y-5 text-[17px] leading-8 text-justify">
            <p>
              <InternalLink href="/">Hess Spinal & Medical Center</InternalLink>’s
              range of motion testing isn't an add-on ordered after a complaint
              escalates. It's part of the individual treatment plan built during
              the first visit, alongside{" "}
              <InternalLink href="/services">digital radiography</InternalLink>{" "}
              and a physician evaluation. The initial range of motion is then
              compared to later exams to see the pattern of progress or decline
              over time within the patient’s treatment chart.
            </p>

            <div className="my-6">
              <QuotePanel
                quote="The patient doesn’t have to say that it feels restricted. We measure it, write it down, and measure it again next visit. That's what separates a real recovery record from a rough estimate."
                author="Dr. Stephen Hess, Hess Spinal & Medical Centers"
                title="Clinical Team Statement, Tampa Bay Area Locations"
              />
            </div>

            <p>
              The clinic's{" "}
              <InternalLink href="/about">multi-disciplinary team</InternalLink>{" "}
              of Board Certified Medical Doctors, Doctors of Osteopathic Medicine,
              and Doctors of Chiropractic work from the same chart, which matters
              when a case moves from initial care into{" "}
              <InternalLink href="/services">injury rehabilitation</InternalLink>{" "}
              built specifically to restore lost range and independence. With 13
              locations throughout Hillsborough, Pinellas, Polk, Pasco and
              Hernando counties, same-day and walk-in availability make the 14-day
              PIP time-frame a non-issue for the first place.
            </p>

            <div className="my-6">
              <QuotePanel
                quote="Clinical measurement of range of motion is a fundamental evaluation procedure. Objective measurements of ROM and correct interpretation of the results can have a substantial impact on treatment decisions."
                author="Clinical Measurement of Range of Motion Review of Goniometry"
                title="Peer-reviewed literature, physical therapy field"
              />
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section>
          <SectionTitle
            eyebrow="6"
            title="Where This Matters Most in West Central Florida"
          />
          <div className="space-y-5 text-[17px] leading-8 text-justify">
            <p>
              Traffic patterns in Tampa Bay leave plenty of Florida drivers
              hanging on the rear end or side ends of vehicles waiting to get back
              on the road each year, from I-275 to Gandy Blvd. Local crash volume
              keeps ROM documentation relevant county by county.
            </p>
          </div>

          {/* County Table */}
          <div className="mt-7 overflow-hidden rounded-md border border-[#d5e7f4] bg-white shadow-sm">
            <div className="bg-[#1a3a5c] px-5 py-4 text-white">
              <h3 className="text-xl font-bold">
                County-by-County ROM Documentation Relevance
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-[#ebf5fb] text-xs uppercase tracking-[0.14em] text-[#1a3a5c]">
                  <tr>
                    <th scope="col" className="px-5 py-4">
                      County
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Common Collision Type
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Why ROM Testing Matters Here
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d5e7f4] text-[#223143]">
                  {countyData.map((row) => (
                    <tr key={row.county}>
                      <th scope="row" className="px-5 py-4 font-bold text-[#1a3a5c]">
                        {row.county}
                      </th>
                      <td className="px-5 py-4 font-medium">{row.collisionType}</td>
                      <td className="px-5 py-4">{row.whyMatters}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA Banner 2 */}
          <div className="mt-6">
            <InfoPanel tone="dark">
              <div className="space-y-3 text-center">
                <h2 className="text-2xl font-bold text-white">
                  Get Your Baseline on Record Before the 14-Day Window Closes
                </h2>
                <p className="text-base leading-7 text-[#e6f2fb]">
                  Walk-ins are welcome at all 13 Hess Spinal & Medical Centers
                  locations across the Tampa Bay area
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <Link
                    href="/appointment"
                    className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#1a3a5c] transition hover:bg-[#ebf5fb]"
                  >
                    Request An Appointment
                  </Link>
                  <a
                    href="tel:8006184377"
                    className="inline-flex rounded-full border border-white px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
                  >
                    Call (800) 618-4377
                  </a>
                </div>
              </div>
            </InfoPanel>
          </div>
        </section>

        {/* FAQs */}
        <section>
          <div className="mb-6 border-l-4 border-[#2b7bb9] pl-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2b7bb9]">
              Frequently Asked Questions
            </p>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-[#1a3a5c] md:text-3xl">
              FAQ
            </h2>
          </div>
          <div className="divide-y divide-[#d5e7f4] rounded-md border border-[#d5e7f4] bg-white">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-5 md:p-6">
                <h3 className="text-lg font-bold text-[#1a3a5c]">
                  {faq.question}
                </h3>
                <p className="mt-2 leading-7 text-[#334155] text-justify">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="rounded-md border border-[#d5e7f4] bg-[#f8fcff] p-5 text-sm leading-7 text-[#475569]">
          <p className="font-bold uppercase tracking-[0.14em] text-[#1a3a5c]">
            Disclaimer
          </p>
          <p className="mt-2 text-justify">
            This article provides general information and does not constitute
            medical advice. Please contact Hess Spinal & Medical Centers for a
            personalized diagnosis and treatment.
          </p>
        </section>
      </div>
    </>
  );
}
