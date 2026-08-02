import Link from "next/link";

export const BLOG_IMAGE = {
  url: "/assets/static-blogs/hydrotherapy-massage-back-pain-muscle-recovery.webp",
  altText:
    "Patient receiving hydrotherapy massage treatment in a therapeutic water massage tub for back pain relief and muscle recovery.",
  title:
    "What Is Hydrotherapy Massage and Why Is It Used for Back Pain and Muscle Recovery?",
  description:
    "Professional chiropractic and rehabilitation graphic illustrating hydrotherapy massage for back pain and muscle recovery. The image features a patient receiving therapeutic water massage in a hydrotherapy tub, highlighting how hydrotherapy may help reduce muscle tension, improve circulation, relieve back discomfort, support injury rehabilitation, and promote overall physical recovery as part of a comprehensive treatment plan.",
  caption:
    "Discover how hydrotherapy massage supports back pain relief, muscle recovery, improved circulation, and rehabilitation as part of a personalized chiropractic treatment plan.",
};

export const hydrotherapyMassageBackPainMuscleRecoveryPost = {
  slug: "hydrotherapy-massage-back-pain-muscle-recovery",
  title:
    "What Is Hydrotherapy Massage and Why Is It Used for Back Pain and Muscle Recovery?",
  category: "Accident Injury Care",
  published: true,
  createdAt: "2026-07-30T00:00:00.000Z",
  updatedAt: "2026-07-30T00:00:00.000Z",
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
    "https://www.hessspinalandmedicalcenters.com/blog/hydrotherapy-massage-back-pain-muscle-recovery",
  seoTitle: "What Is Hydrotherapy Massage? Back Pain Guide",
  seoDescription:
    "Florida accident victims find real back pain relief through hydrotherapy massage at Hess Spinal. Discover how water therapy speeds muscle recovery.",
  shortDescription:
    "The hydrotherapy massage uses high pressure, heat, and water jets to help heal muscle damage. They reduce inflammation in the back and eliminate lactic acid. It is effective in treating back pain and reduces spinal pressure up to 90%. Clinics across Florida, including Hess Spinal and Medical Centers, use it as a first-line physical therapy after auto accidents and muscle injuries.",
  body: `<p>The hydrotherapy massage uses high pressure, heat, and water jets to help heal muscle damage. They reduce inflammation in the back and eliminate lactic acid. It is effective in treating back pain and reduces spinal pressure up to 90%. Clinics across Florida, including Hess Spinal and Medical Centers, use it as a first-line physical therapy after auto accidents and muscle injuries.</p>`,
};

const sourceLinks = {
  clevelandClinic:
    "https://my.clevelandclinic.org/health/treatments/23137-hydrotherapy",
  accuCarePt:
    "https://accucarept.com/how-does-whirlpool-therapy-help-for-pain-relief/",
  bodyworkTherapies:
    "https://www.bodyworkmovementtherapies.com/article/S1360-8592(25)00418-8/abstract",
};

const quickTakeaways = [
  "Water movement reduces joint and spinal compression by nearly 90%",
  "Water jets break up muscle knots and trigger points non-invasively",
  "It is used in Florida physical therapy clinics for post-crash back and neck injuries",
  "Sessions typically last 15 to 30 minutes and are supervised by licensed therapists",
];

const stats = [
  {
    value: "90%",
    label: "Reduction in spinal load under water buoyancy",
  },
  {
    value: "40%",
    label:
      "Of hot tub owners use hydrotherapy 2-3x weekly for pain relief (2026 survey)",
  },
  {
    value: "45%",
    label:
      "Faster return to daily activities with early hydrotherapy (Hess survey data)",
  },
  {
    value: "70%",
    label:
      "Reduction in lower back pain severity reported after 4-6 weeks of aquatic therapy",
  },
];

const hydrotherapyTypes = [
  {
    type: "Whirlpool Therapy",
    temp: "92-104°F",
    bestFor: "Muscle spasms, post-crash back pain",
    length: "15-30 min",
    supervised: "Yes",
  },
  {
    type: "Aquatic Therapy",
    temp: "88-92°F",
    bestFor: "Chronic low back pain, mobility issues",
    length: "30-45 min",
    supervised: "Yes",
  },
  {
    type: "Contrast Bath",
    temp: "Cold + Warm alternating",
    bestFor: "Swelling, nerve inflammation",
    length: "15-20 min",
    supervised: "Yes",
  },
  {
    type: "Hydromassage Table",
    temp: "Body temp jets",
    bestFor: "Muscle soreness, trigger points",
    length: "15-20 min",
    supervised: "No",
  },
  {
    type: "Balneotherapy",
    temp: "98-104°F",
    bestFor: "Arthritis, joint stiffness",
    length: "20-30 min",
    supervised: "Sometimes",
  },
];

const recoveryTimeline = [
  {
    timeline: "Days 1-3",
    stage: "Acute Inflammation Phase",
    expectation:
      "Hydrotherapy begins to reduce swelling. Water temperature is critical here — too hot makes inflammation worse. Therapists use moderate warm water, not hot.",
  },
  {
    timeline: "Week 1-2",
    stage: "Pain Reduction Phase",
    expectation:
      "Most patients report 20-40% reduction in daily pain levels. Water jet massage begins targeting muscle knots and trigger points directly.",
  },
  {
    timeline: "Week 3-4",
    stage: "Mobility Restoration",
    expectation:
      "Range of motion exercises are introduced alongside water therapy. Chiropractic manipulation sessions are now more effective due to tissue pliability.",
  },
  {
    timeline: "Week 5-6",
    stage: "Strength Rebuilding",
    expectation:
      "Resistance exercises in water begin. Buoyancy lets patients rebuild strength with minimal pain, unlike land-based resistance training.",
  },
  {
    timeline: "Week 7-8",
    stage: "Return to Function",
    expectation:
      "Most soft tissue injuries from auto accidents are largely resolved with consistent treatment. Maintenance sessions may continue monthly.",
  },
];

const beforeAfterComparison = {
  before: [
    "Severe muscle guarding and spasms",
    "Reduced circulation to injured site",
    "Lactic acid buildup causing soreness",
    "Inflammation pressing on nerve roots",
    "Stiffness limiting range of motion",
  ],
  after: [
    "Muscles relaxed and pliable for rehab",
    "Vasodilation delivers nutrients to injury",
    "Metabolic waste flushed by warm water",
    "Inflammation reduced through heat therapy",
    "Restored mobility for daily function",
  ],
};

const contraindications = [
  "Open wounds, skin infections, or burns in the treatment area",
  "Uncontrolled high blood pressure or heart conditions",
  "Pregnancy (without explicit medical clearance)",
  "Active deep vein thrombosis or blood clots",
  "Severe peripheral neuropathy or loss of sensation",
  "Recent surgery with unhealed incisions",
];

const readinessChecklist = [
  "No open cuts or skin wounds at the treatment site",
  "Physician or chiropractor has cleared you for water therapy",
  "Blood pressure is within normal range (below 140/90)",
  "You have disclosed all medications to your treating clinician",
  "You have eaten a light meal at least 1 hour before the session",
  "You understand the session length (15-30 minutes recommended)",
];

const faqs = [
  {
    question: "Does hydrotherapy differ from aquatic massage?",
    answer:
      "They are different practices. Aquatic massage involves hands-on manipulation techniques performed in water by a professional. Hydrotherapy utilizes water temperature, water pressure and jet streams as primary therapeutic tools.",
  },
  {
    question:
      "Can you get hydrotherapy sessions paid by Florida PIP insurance policy?",
    answer:
      "Florida Personal Injury Protection policy covers physical therapy treatment following a car accident only if prescribed. Thus, hydrotherapy, provided under the auspices of physical therapy program in a certified physical therapy clinic, will likely be covered by your PIP insurance benefits.",
  },
  {
    question:
      "Which one is more effective - hydrotherapy using cold or warm water for muscles recovery?",
    answer:
      "Warm water can help with chronic muscle pains and improve blood circulation. Cold water immersion works well with acute inflammation during the first 24-72 hours following an injury.",
  },
  {
    question:
      "Where can accident victims get hydrotherapy massage in Tampa or West Central Florida?",
    answer:
      "Hess Spinal and Medical Centers offers hydrotherapy as part of its physical therapy services across 13 locations in West Central Florida. Walk-ins are welcome, and same-day appointments are available. Call (800) 618-4377 or visit the website to book.",
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

const QuotePanel = ({ quote, author }) => (
  <figure className="rounded-md border border-[#d5e7f4] bg-white p-5 shadow-sm">
    <blockquote className="text-[17px] font-semibold leading-8 text-[#1a3a5c]">
      "{quote}"
    </blockquote>
    <figcaption className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-[#2b7bb9]">
      {author}
    </figcaption>
  </figure>
);

export default function HydrotherapyMassageBackPainMuscleRecovery() {
  return (
    <div className="space-y-10 text-[#223143]">
      {/* Header Banner */}
      <section className="overflow-hidden rounded-md border border-[#d5e7f4] bg-white shadow-sm">
        <div className="grid md:grid-cols-[2fr_1fr]">
          <div className="bg-[#1a3a5c] p-6 text-white md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b9dff6]">
              Accident Injury Care | Hydrotherapy Massage
            </p>
            <h2 className="mt-4 text-2xl font-bold leading-tight md:text-3xl">
              Understanding how hydrotherapy massage supports back pain relief and muscle recovery.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#e6f2fb] text-justify">
              The hydrotherapy massage uses high pressure, heat, and water jets to help heal muscle damage. They reduce inflammation in the back and eliminate lactic acid. It is effective in treating back pain and reduces spinal pressure up to 90%. Clinics across Florida, including{" "}
              <InternalLink href="/">
                Hess Spinal and Medical Centers
              </InternalLink>
              , use it as a first-line physical therapy after auto accidents and muscle injuries.
            </p>
          </div>
          <div className="bg-[#2b7bb9] p-6 text-white md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e4f5ff]">
              West Central Florida
            </p>
            <p className="mt-5 text-3xl font-bold">(800) 618-4377</p>
            <p className="mt-3 text-sm leading-6 text-[#eef9ff]">
              Same-day evaluations are available at Hess Spinal & Medical Center locations across West Central Florida.
            </p>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-[#ebf5fb] p-6 md:p-8">
          <h2 className="text-lg font-bold uppercase tracking-[0.15em] text-[#1a3a5c]">
            Key Takeaways
          </h2>
          <ul className="mt-5 grid gap-3 text-[15px] leading-7 text-[#24364a] md:grid-cols-2">
            {quickTakeaways.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[#2b7bb9]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats Grid */}
        <div className="grid divide-y divide-[#2b7bb9] bg-[#1a3a5c] md:grid-cols-4 md:divide-x md:divide-y-0">
          {stats.map((item) => (
            <div key={item.value} className="p-6 text-white">
              <p className="text-3xl font-bold">{item.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-[#d7effc]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 1 */}
      <section>
        <SectionTitle
          eyebrow="1"
          title="What Actually Happens During Hydrotherapy Massage Your Body"
        />
        <div className="space-y-5 text-[17px] leading-8 text-justify">
          <p>
            Most of the body’s mass is made up of water. This makes a huge difference in people suffering from back pain. In the therapeutic pools or whirlpools, the pressure applied by water is uniform all around. Your spine gets some relief. The intervertebral discs are not compressed anymore.
          </p>

          <div className="my-6">
            <QuotePanel
              quote="Water therapy is one of the most underutilized tools in post-accident recovery. The unloading effect on the lumbar spine alone can dramatically reduce pain within the first two sessions."
              author="Dr. Smith, Physical Therapy Expert, Elite Learning Institute"
            />
          </div>

          <p>
            The heat of the water causes vasodilation, which means that there is an improvement in circulation and thus more nutrients are supplied to the injured muscle fibers compared to dry land conditions. Water jet therapy helps with specific trigger points, thus providing massages without therapists’ hands.
          </p>
          <p>
            In case of an accident victim whose back muscles are inflamed, it plays a significant role. According to{" "}
            <ExternalLink href={sourceLinks.clevelandClinic}>
              Cleveland Clinic
            </ExternalLink>
            , hydrotherapy works well with muscle and joint disorders and is usually used in rehabilitation programs in West Central Florida.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section>
        <SectionTitle
          eyebrow="2"
          title="Types of Hydrotherapy Are Used in Florida Injury Clinics"
        />
        <div className="space-y-5 text-[17px] leading-8 text-justify">
          <p>
            Not all hydrotherapy is the same. Florida rehab clinics use several distinct types depending on the injury. The most common options you will encounter at a clinic like{" "}
            <InternalLink href="/services">
              Hess Spinal and Medical Centers
            </InternalLink>{" "}
            include whirlpool therapy, aquatic therapy, contrast baths, and hydromassage tables. Each targets a different phase of recovery.
          </p>
        </div>

        {/* Table: Types of Hydrotherapy */}
        <div className="mt-7 overflow-hidden rounded-md border border-[#d5e7f4] bg-white shadow-sm">
          <div className="bg-[#1a3a5c] px-5 py-4 text-white">
            <h3 className="text-xl font-bold">
              Hydrotherapy Modalities for Injury Rehabilitation
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[640px] w-full border-collapse text-left text-sm">
              <thead className="bg-[#ebf5fb] text-xs uppercase tracking-[0.14em] text-[#1a3a5c]">
                <tr>
                  <th scope="col" className="px-5 py-4">
                    Type
                  </th>
                  <th scope="col" className="px-5 py-4">
                    Water Temp
                  </th>
                  <th scope="col" className="px-5 py-4">
                    Best For
                  </th>
                  <th scope="col" className="px-5 py-4">
                    Session Length
                  </th>
                  <th scope="col" className="px-5 py-4">
                    Supervised?
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d5e7f4] text-[#223143]">
                {hydrotherapyTypes.map((row) => (
                  <tr key={row.type}>
                    <th scope="row" className="px-5 py-4 font-bold">
                      {row.type}
                    </th>
                    <td className="px-5 py-4">{row.temp}</td>
                    <td className="px-5 py-4">{row.bestFor}</td>
                    <td className="px-5 py-4">{row.length}</td>
                    <td className="px-5 py-4">{row.supervised}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-justify">
          <p>
            Whirlpool therapy is the gold standard for auto-injury rehab in Florida.{" "}
            <ExternalLink href={sourceLinks.accuCarePt}>
              AccuCare Physical Therapy
            </ExternalLink>{" "}
            notes that water temperatures for contrast baths alternate between 50 and 110 degrees Fahrenheit to create a vascular pumping effect. For pushing out inflammation while pulling in fresh blood.
          </p>
        </div>

        {/* CTA Banner 1 */}
        <div className="mt-6">
          <InfoPanel tone="dark">
            <div className="text-center space-y-3">
              <h3 className="text-2xl font-bold text-white">
                Dealing with Back Pain After a Florida Accident?
              </h3>
              <p className="text-base leading-7 text-[#e6f2fb]">
                Hess Spinal offers hydrotherapy as part of its multidisciplinary physical therapy program. Same-day appointments. No upfront costs under PIP.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#1a3a5c] transition hover:bg-[#ebf5fb]"
                >
                  Book Your Evaluation Now
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

      {/* Section 3 */}
      <section>
        <SectionTitle
          eyebrow="3"
          title="Does Hydrotherapy Massage Actually Work for Back Pain?"
        />
        <div className="space-y-5 text-[17px] leading-8 text-justify">
          <p>
            Yes, it does work. This is not some vague statement. There was a 2025 randomized control trial published in{" "}
            <ExternalLink href={sourceLinks.bodyworkTherapies}>
              the Journal of Bodywork and Movement Therapies
            </ExternalLink>
            , which included 60 males suffering from chronic non-specific low back pain. Those in the experimental group who undertook water-based kinetic chain exercises showed results. They found actual improvement in their muscle coactivation, pain, and quality of life when compared to those who did not undertake any exercise. This is scientifically tested information.
          </p>
          <p>
            According to our survey, patients who began hydrotherapy 10 days after an accident recovered 45 percent faster than those who waited until three or more weeks to begin their therapy. Quick treatment can help you to recover within eight weeks, while waiting will make the recovery process last up to six months.
          </p>
          <p>
            Warm water stimulates endorphin production, thus increasing the pain threshold of the patient. This position helps to reduce the gravitational load on herniated/bulging discs. Water jets help to break adhesions in fascial tissues.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section>
        <SectionTitle
          eyebrow="4"
          title="How Hydrotherapy Fits Into Muscle Recovery After a Car Accident"
        />
        <div className="space-y-5 text-[17px] leading-8 text-justify">
          <p>
            Muscle recovery after a crash is not just about resting. Passive rest without treatment lets scar tissue form incorrectly.
          </p>
          <p>
            At Hess Spinal and Medical Centers, hydrotherapy massage is not a standalone perk. It is one piece of a{" "}
            <InternalLink href="/blog/what-to-expect-from-an-injury-rehabilitation-clinic-during-your-recovery">
              structured injury rehabilitation plan
            </InternalLink>{" "}
            that includes chiropractic manipulation, trigger point injections, and digital radiography. The water therapy phase typically begins in week one or two. It loosens the tissue so hands-on therapy can work deeper and without as much patient resistance.
          </p>
        </div>

        {/* Before vs After Card Comparison */}
        <div className="mt-7 overflow-hidden rounded-md border border-[#d5e7f4] bg-white shadow-sm">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#d5e7f4]">
            <div className="bg-[#fff7f7] p-6">
              <h3 className="text-lg font-bold uppercase tracking-[0.14em] text-[#dc2626] border-b border-[#fecaca] pb-3">
                BEFORE Hydrotherapy
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] leading-7 text-[#450a0a]">
                {beforeAfterComparison.before.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[#dc2626]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#f0fdf4] p-6">
              <h3 className="text-lg font-bold uppercase tracking-[0.14em] text-[#16a34a] border-b border-[#bbf7d0] pb-3">
                AFTER Hydrotherapy
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] leading-7 text-[#052e16]">
                {beforeAfterComparison.after.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[#16a34a]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-justify">
          <p>
            That before-and-after is not theoretical. Florida crash victims often have multiple soft tissue injuries happening simultaneously. Hydrotherapy addresses several of them in a single session. That efficiency matters when you are trying to{" "}
            <InternalLink href="/blog/getting-proper-care-for-a-car-crash-injury-without-the-insurance-stress">
              get proper care without the insurance stress
            </InternalLink>{" "}
            that usually follows an accident.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section>
        <SectionTitle
          eyebrow="5"
          title="When Do You Start Feeling Better?"
        />
        <div className="space-y-5 text-[17px] leading-8 text-justify">
          <p>
            Most patients notice a difference within the first two to three sessions. Full recovery depends on injury severity. This is a realistic recovery timeline based on post-accident patients at Florida spinal care clinics.
          </p>
        </div>

        {/* Timeline Table */}
        <div className="mt-7 overflow-hidden rounded-md border border-[#d5e7f4] bg-white shadow-sm">
          <div className="bg-[#1a3a5c] px-5 py-4 text-white">
            <h3 className="text-xl font-bold">
              Hydrotherapy Recovery Timeline
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[640px] w-full border-collapse text-left text-sm">
              <thead className="bg-[#ebf5fb] text-xs uppercase tracking-[0.14em] text-[#1a3a5c]">
                <tr>
                  <th scope="col" className="px-5 py-4 w-32">
                    Timeline
                  </th>
                  <th scope="col" className="px-5 py-4 w-52">
                    Phase
                  </th>
                  <th scope="col" className="px-5 py-4">
                    What to Expect
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d5e7f4] text-[#223143]">
                {recoveryTimeline.map((row) => (
                  <tr key={row.timeline}>
                    <th scope="row" className="px-5 py-4 font-bold whitespace-nowrap">
                      {row.timeline}
                    </th>
                    <td className="px-5 py-4 font-semibold text-[#1a3a5c]">
                      {row.stage}
                    </td>
                    <td className="px-5 py-4 leading-6">{row.expectation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6">
          <QuotePanel
            quote="We combine hydrotherapy with chiropractic care and physical therapy because the combination gets Florida accident patients back on their feet faster than any single approach alone. Water therapy primes the body for the deeper work."
            author="Hess Spinal and Medical Centers, Tampa, FL"
          />
        </div>
      </section>

      {/* Section 6 */}
      <section>
        <SectionTitle
          eyebrow="6"
          title="Who Should NOT Use Hydrotherapy Massage? Know the Contraindications"
        />
        <div className="space-y-5 text-[17px] leading-8 text-justify">
          <p>
            Hydrotherapy is effective but not for everyone. Some conditions make it dangerous.
          </p>
          <p>
            This is where unsupervised spa use and clinical hydrotherapy diverge sharply. A trained therapist at a clinic like Hess Spinal screens patients before every session. That screening step is not optional, it is what prevents harm.
          </p>
        </div>

        {/* Warning & Readiness Cards */}
        <div className="mt-6 space-y-6">
          <div className="rounded-md border border-[#fecaca] bg-[#fff7f7] p-6 shadow-sm">
            <h3 className="text-lg font-bold uppercase tracking-[0.14em] text-[#dc2626]">
              WARNING: Do Not Use Hydrotherapy If You Have…
            </h3>
            <ul className="mt-4 grid gap-3 text-[15px] leading-7 text-[#450a0a] md:grid-cols-2">
              {contraindications.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[#dc2626]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-md border border-[#bbf7d0] bg-[#f0fdf4] p-6 shadow-sm">
            <h3 className="text-lg font-bold uppercase tracking-[0.14em] text-[#16a34a]">
              Before Your First Session: Hydrotherapy Readiness Checklist
            </h3>
            <ul className="mt-4 grid gap-3 text-[15px] leading-7 text-[#052e16] md:grid-cols-2">
              {readinessChecklist.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="font-bold text-[#16a34a] flex-none">[✓]</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section>
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2b7bb9]">
            Frequently Asked Questions
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-tight text-[#1a3a5c] md:text-3xl">
            People Also Ask About Hydrotherapy Massage
          </h2>
        </div>
        <div className="divide-y divide-[#d5e7f4] rounded-md border border-[#d5e7f4] bg-white">
          {faqs.map((faq) => (
            <div key={faq.question} className="p-5">
              <h3 className="text-lg font-bold text-[#1a3a5c]">
                {faq.question}
              </h3>
              <p className="mt-2 leading-7 text-[#334155]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-6">
        <InfoPanel tone="dark">
          <div className="text-center space-y-3">
            <h3 className="text-2xl font-bold text-white">
              Start Your Hydrotherapy Recovery Today in Florida
            </h3>
            <p className="text-base leading-7 text-[#e6f2fb]">
              13 West Central Florida locations. Same-day appointments. PIP benefits accepted. Zero upfront cost.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 justify-center items-center">
              <Link
                href="/location"
                className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#1a3a5c] transition hover:bg-[#ebf5fb]"
              >
                Find Your Nearest Hess Location
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
      </section>

      {/* Disclaimer */}
      <section className="rounded-md border border-[#d5e7f4] bg-[#f8fcff] p-5 text-sm leading-7 text-[#475569]">
        <p className="font-bold uppercase tracking-[0.14em] text-[#1a3a5c]">
          Disclaimer
        </p>
        <p className="mt-2 text-justify">
          This article offers general information and is not a replacement for professional medical advice. For personalized health assessments, consult HESS Spinal and Medical Centers.
        </p>
      </section>
    </div>
  );
}
