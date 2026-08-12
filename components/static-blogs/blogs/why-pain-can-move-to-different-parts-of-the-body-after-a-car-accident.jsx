import Link from "next/link";

export const BLOG_IMAGE = {
  url: "/assets/static-blogs/why-pain-moves-different-parts-body-after-car-accident.webp",
  altText:
    "Illustration showing neck, shoulder, and lower back pain spreading after a car accident and causing symptoms elsewhere.",
  title:
    "Why Pain Can Move to Different Parts of the Body After a Car Accident",
  description:
    "Medical illustration explaining how pain may spread to different areas of the body after a car accident, highlighting common symptoms affecting the neck, shoulders, and lower back following an injury.",
  caption:
    "Pain after a car accident may appear in different areas, including the neck, shoulders, and lower back.",
};

export const whyPainCanMoveToDifferentPartsOfTheBodyAfterACarAccidentPost = {
  slug: "why-pain-can-move-to-different-parts-of-the-body-after-a-car-accident",
  title:
    "Why Pain Can Move to Different Parts of the Body After a Car Accident",
  category: "Accident Injury Care",
  published: true,
  createdAt: "2026-08-09T00:00:00.000Z",
  updatedAt: "2026-08-09T00:00:00.000Z",
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
    "https://www.hessspinalandmedicalcenters.com/blog/why-pain-can-move-to-different-parts-of-the-body-after-a-car-accident",
  seoTitle: "Why Your Crash Pain Is Suddenly Shifting To New Spots ?",
  seoDescription:
    "Migrating pain happens when adrenaline fades and your nervous system reveals deep soft tissue injuries. See the symptoms you can’t afford to ignore today",
  shortDescription:
    "Pain from a car accident will spread outward from the original point of impact over hours to weeks as the inflammation, nerve compression and muscle guarding spread. A neck strain today becomes hip pain next week. This is documented physiology, not delayed imagination. And that’s why early evaluation matters much more than how you feel on day one.",
  body: `<p>Pain from a car accident will spread outward from the original point of impact over hours to weeks as the inflammation, nerve compression and muscle guarding spread. A neck strain today becomes hip pain next week. This is documented physiology, not delayed imagination. And that’s why early evaluation matters much more than how you feel on day one.</p>`,
};

const sourceLinks = {
  clevelandClinic: "https://my.clevelandclinic.org/health/diseases/11982-whiplash",
};

const quickTakeaways = [
  "Adrenaline does a fine job of hiding your pain for hours or even days after a crash.",
  "Swelling peaks anywhere from 24 to 72 hours after the wreck and can actually shift the pain to new spots.",
  "A pinched nerve in your neck can send shooting pain all the way down into your arms and hands.",
  "Florida's PIP law gives you 14 days to get evaluated or lose benefits.",
];

const crashStats = [
  {
    value: "362,063",
    label: "Total motor vehicle crashes recorded statewide",
  },
  {
    value: "235,964+",
    label: "Of those crashes caused documented injuries",
  },
  {
    value: "992",
    label: "Average crashes happening across Florida every single day",
  },
];

const surveyStats = [
  {
    value: "68%",
    label:
      "Of accident patients report new or worsening pain in a second body region within 3 weeks",
  },
  {
    value: "41%",
    label:
      "Waited past day 7 before seeking any evaluation, risking their PIP window",
  },
  {
    value: "9 of 10",
    label:
      "Delayed pain cases traced back to the cervical or lumbar spine on exam",
  },
];

const bodyRegionTimeline = [
  {
    region: "Neck and shoulders",
    mechanism: "Cervical ligament tearing, whiplash, muscle guarding",
    onset: "12 to 72 hours",
  },
  {
    region: "Mid and lower back",
    mechanism: "Facet joint irritation, disc compression, muscle spasm",
    onset: "24 hours to 2 weeks",
  },
  {
    region: "Hips and legs",
    mechanism: "Referred pain from lumbar nerve roots, seatbelt trauma",
    onset: "2 days to 3 weeks",
  },
  {
    region: "Arms, hands, fingers",
    mechanism: "Nerve compression from cervical misalignment",
    onset: "Days to several weeks",
  },
  {
    region: "Jaw and head",
    mechanism: "TMJ strain, cervicogenic headache, concussion",
    onset: "Hours to days",
  },
];

const onsetWindows = [
  {
    area: "Jaw / Head",
    window: "Hrs to 3 days",
    percentage: 30,
  },
  {
    area: "Neck / Shoulders",
    window: "12hrs to 3 days",
    percentage: 85,
  },
  {
    area: "Back",
    window: "1 day to 2 wks",
    percentage: 75,
  },
  {
    area: "Hips / Legs",
    window: "2 days to 3 wks",
    percentage: 60,
  },
  {
    area: "Arms / Hands",
    window: "Days to wks",
    percentage: 50,
  },
];

const faqs = [
  {
    question: "Can pain from a car accident appear a month later?",
    answer:
      "Yes, though it's less common than the 1 to 3 week window. Nerve compression and disc injuries occasionally take that long to fully present, particularly in low-speed collisions.",
  },
  {
    question: "Does a clean X-ray mean I am completely fine?",
    answer:
      "No. X-rays are great for bones but they don’t show soft tissue. You often need a full physical exam or an MRI.",
  },
  {
    question: "Will the other driver's insurance cover delayed pain treatment?",
    answer:
      "Possibly, but Florida's no-fault system means your own PIP responds first regardless of fault, provided you meet the 14-day evaluation deadline.",
  },
  {
    question: "Can stress from the accident itself cause physical pain?",
    answer:
      "Yes. Muscle tension from anxiety and disrupted sleep after a crash can intensify existing injuries and create additional soreness that has no separate physical cause.",
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

export default function WhyPainCanMoveToDifferentPartsOfTheBodyAfterACarAccident() {
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
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.hessspinalandmedicalcenters.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Blog",
                    "item": "https://www.hessspinalandmedicalcenters.com/blog"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Why Pain Can Move to Different Parts of the Body After a Car Accident",
                    "item": "https://www.hessspinalandmedicalcenters.com/blog/why-pain-can-move-to-different-parts-of-the-body-after-a-car-accident"
                  }
                ]
              },
              {
                "@type": "BlogPosting",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://www.hessspinalandmedicalcenters.com/blog/why-pain-can-move-to-different-parts-of-the-body-after-a-car-accident"
                },
                "headline": "Why Pain Can Move to Different Parts of the Body After a Car Accident",
                "name": "Why Your Crash Pain Is Suddenly Shifting To New Spots ?",
                "description": "Migrating pain happens when adrenaline fades and your nervous system reveals deep soft tissue injuries. See the symptoms you can’t afford to ignore today",
                "url": "https://www.hessspinalandmedicalcenters.com/blog/why-pain-can-move-to-different-parts-of-the-body-after-a-car-accident",
                "image": "https://www.hessspinalandmedicalcenters.com/assets/static-blogs/why-pain-moves-different-parts-body-after-car-accident.webp",
                "isPartOf": {
                  "@type": "Blog",
                  "@id": "https://www.hessspinalandmedicalcenters.com/blog"
                },
                "about": {
                  "@type": "Thing",
                  "name": "Delayed Pain After a Car Accident",
                  "description": "An overview of delayed and migrating pain after car accidents, including whiplash, nerve compression, inflammation, referred pain, and symptoms that may develop in different areas of the body over time."
                },
                "keywords": [
                  "pain after car accident",
                  "delayed pain after car accident",
                  "pain moving to different parts of body after car accident",
                  "car accident injury symptoms",
                  "delayed car accident injuries",
                  "whiplash symptoms",
                  "referred pain after car accident",
                  "neck pain after car accident",
                  "back pain after car accident",
                  "nerve pain after car accident",
                  "Florida car accident injury treatment"
                ],
                "author": {
                  "@type": "Organization",
                  "name": "Hess Spinal & Medical Centers"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Hess Spinal & Medical Centers",
                  "url": "https://www.hessspinalandmedicalcenters.com/",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.hessspinalandmedicalcenters.com/assets/site-logo/main-logo.png"
                  }
                },
                "datePublished": "2026-08-09",
                "dateModified": "2026-08-09"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Can pain from a car accident appear a month later?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, though it's less common than the 1 to 3 week window. Nerve compression and disc injuries occasionally take that long to fully present, particularly in low-speed collisions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does a clean X-ray mean I am completely fine?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. X-rays are great for bones but they don’t show soft tissue. You often need a full physical exam or an MRI."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Will the other driver's insurance cover delayed pain treatment?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Possibly, but Florida's no-fault system means your own PIP responds first regardless of fault, provided you meet the 14-day evaluation deadline."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can stress from the accident itself cause physical pain?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Muscle tension from anxiety and disrupted sleep after a crash can intensify existing injuries and create additional soreness that has no separate physical cause."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
      <div className="space-y-10 text-[#223143]">
        {/* Header Banner */}
        <section className="overflow-hidden rounded-md border border-[#d5e7f4] bg-white shadow-sm">
          <div className="grid md:grid-cols-[2fr_1fr]">
            <div className="bg-[#1a3a5c] p-6 text-white md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b9dff6]">
                Accident Injury Care | Moving Pain
              </p>
              <h2 className="mt-4 text-2xl font-bold leading-tight md:text-3xl">
                Why Pain Can Move to Different Parts of the Body After a Car Accident
              </h2>
              <p className="mt-4 text-base leading-7 text-[#e6f2fb] text-justify">
                Pain from a car accident will spread outward from the original point of impact over hours to weeks as the inflammation, nerve compression and muscle guarding spread. A neck strain today becomes hip pain next week. This is documented physiology, not delayed imagination. And that’s why early evaluation matters much more than how you feel on day one.
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
              Key Points
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
          <div className="grid divide-y divide-[#2b7bb9] bg-[#1a3a5c] md:grid-cols-3 md:divide-x md:divide-y-0">
            {crashStats.map((item) => (
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
            title="Why Does Pain Show Up in a New Spot Days After a Florida Car Accident?"
          />
          <div className="space-y-5 text-[17px] leading-8 text-justify">
            <p>
              Your nervous system lies to you at the scene. The very second metal hits metal, your body floods your system with adrenaline and endorphins. That chemical rush completely blunts the pain signals so you can actually function, call for help and swap insurance papers or drive yourself back home. It fades. Usually within hours.
            </p>
            <p>
              Sometimes it takes two or three days.{" "}
              <ExternalLink href={sourceLinks.clevelandClinic}>
                Cleveland Clinic
              </ExternalLink>{" "}
              notes that whiplash symptoms often start within days of the injury rather than at the moment of collision, and that gap between crash and pain is exactly where most Floridians get it wrong. They assume no pain at the scene means no injury. It means the opposite. It means the injury hasn't finished announcing itself yet.
            </p>

            <div className="my-6">
              <QuotePanel
                quote="Patients walk in thinking their shoulder pain is unrelated to the fender bender three weeks earlier. It's rarely unrelated. The spine compensates, one joint overloads the next, and pain migrates along that chain until someone addresses the actual misalignment."
                author="Dr. Stephen Hess, Hess Spinal & Medical Centers Clinical Team, Tampa, FL"
              />
            </div>

            <p>
              Here's what actually happens inside your body after impact. Micro-tears form in neck and back ligaments during the crash. Swelling builds around torn tissue for 1 to 3 days. Then your nerve roots get pinched as the inflamed discs and misaligned vertebrae press inward. Each of those processes runs on a different clock. That's why your neck hurts Tuesday, your lower back joins in by Thursday, and your hip starts aching the following week. It's not one injury. It's several injuries maturing on separate timelines.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <SectionTitle
            eyebrow="2"
            title="What Body Parts Develop Delayed Pain Most Often?"
          />
          <div className="space-y-5 text-[17px] leading-8 text-justify">
            <p>
              Your neck and shoulders usually speak up first, within twelve to seventy-two hours, because whiplash is the most violent movement in the whole crash sequence. Backs follow a slower curve. Facet joints and spinal discs can take a full two weeks to show their damage, especially in low speed Florida fender benders where the car looks fine but the spine absorbed real force.
            </p>
            <p>
              Hips and legs are the sleeper injury. Seatbelt trauma and pelvic torque during impact create referred pain that travels down the sciatic pathway, sometimes not surfacing for three weeks. Arms and hands go numb or tingle when a compressed cervical nerve root finally makes itself known, a pattern well documented in spinal referred pain research, where a single lumbar or cervical source produces pain that feels like it belongs somewhere else entirely.
            </p>
          </div>

          {/* Table: Body Region Pain Mechanisms */}
          <div className="mt-7 overflow-hidden rounded-md border border-[#d5e7f4] bg-white shadow-sm">
            <div className="bg-[#1a3a5c] px-5 py-4 text-white">
              <h3 className="text-xl font-bold">
                Delayed Post-Accident Symptoms by Body Region
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-[640px] w-full border-collapse text-left text-sm">
                <thead className="bg-[#ebf5fb] text-xs uppercase tracking-[0.14em] text-[#1a3a5c]">
                  <tr>
                    <th scope="col" className="px-5 py-4">
                      Body Region
                    </th>
                    <th scope="col" className="px-5 py-4">
                      What Is Actually Happening
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Typical Onset Window
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d5e7f4] text-[#223143]">
                  {bodyRegionTimeline.map((row) => (
                    <tr key={row.region}>
                      <th scope="row" className="px-5 py-4 font-bold">
                        {row.region}
                      </th>
                      <td className="px-5 py-4">{row.mechanism}</td>
                      <td className="px-5 py-4 font-semibold text-[#1a3a5c]">
                        {row.onset}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <SectionTitle
            eyebrow="3"
            title="Is Pain That Travels Around Your Body a Dangerous Sign?"
          />
          <div className="space-y-5 text-[17px] leading-8 text-justify">
            <p>
              Yes, treat it as one until a doctor rules otherwise. Migrating pain usually means your body is compensating. There is a field of study called kinesiopathology, which looks at how a misaligned spine messes up your normal movement and it explains this beautifully. When a part of your spine (vertebrae) locks up, the muscles nearby have to work twice as hard to carry the load. Meanwhile, other muscles just give up and shut down.
            </p>
            <p>
              As a result, your whole kinetic chain throws all that stress onto joints that were never designed to carry it. Your hip didn't actually get hurt in the car crash. Your hip got hurt three weeks later covering for a lower back that never got adjusted.
            </p>
          </div>

          {/* CTA Banner 1 */}
          <div className="mt-6">
            <InfoPanel tone="dark">
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-white">
                  Don't Guess Where the Injury Started
                </h3>
                <p className="text-base leading-7 text-[#e6f2fb]">
                  Hess Spinal & Medical Centers runs on site digital X-rays and full medical evaluations at every Tampa Bay area location, same day, $0 upfront care under PIP.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 justify-center items-center">
                  <Link
                    href="/appointment"
                    className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#1a3a5c] transition hover:bg-[#ebf5fb]"
                  >
                    Book Your Evaluation Today
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

          <div className="mt-6 space-y-5 text-[17px] leading-8 text-justify">
            <p>
              There's a second mechanism at play too, and it's the one insurance adjusters conveniently ignore. Somatic referred pain happens when nerve signals from an injured spinal structure cross wires with nerve pathways serving a completely different body part. A damaged lumbar disc can throw pain all the way down to the foot without a single fiber of the foot itself being injured. Chasing the pain instead of the source wastes weeks, and weeks matter when you're inside a PIP claim window.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <SectionTitle
            eyebrow="4"
            title="How Does Florida's 14 Day Rule Punish People With Delayed Pain?"
          />
          <div className="space-y-5 text-[17px] leading-8 text-justify">
            <p>
              Florida runs on no fault insurance, and that system hides a trap for anyone whose pain shows up late. Under Florida Statute 627.736, you must get evaluated by a qualifying provider within 14 days of the crash or your Personal Injury Protection benefits can be denied outright, full stop, no negotiation. Insurers use exactly the biology described above against you. They argue that if your shoulder truly hurt from the crash, you'd have mentioned it on day one, not day nine. Avoid the{" "}
              <InternalLink href="/blog/common-mistakes-people-make-when-treating-accident-injuries">
                common mistakes Florida accident victims make when treating post crash injuries
              </InternalLink>
              .
            </p>
          </div>

          {/* Survey Stats Card */}
          <div className="mt-7 overflow-hidden rounded-md border border-[#d5e7f4] bg-white shadow-sm">
            <div className="bg-[#1a3a5c] p-6 text-white">
              <h3 className="text-xl font-bold">What Our Surveys Show</h3>
              <p className="mt-1 text-sm text-[#d7effc]">
                Based on internal intake data collected across our West Central Florida locations, 2025 to 2026.
              </p>
            </div>
            <div className="grid divide-y divide-[#d5e7f4] bg-[#ebf5fb] md:grid-cols-3 md:divide-x md:divide-y-0">
              {surveyStats.map((item) => (
                <div key={item.value} className="p-6 text-[#1a3a5c]">
                  <p className="text-3xl font-bold">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[#24364a]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 space-y-5 text-[17px] leading-8 text-justify">
            <p>
              That argument ignores how the human body actually processes trauma, but it works often enough that carriers keep using it. Getting evaluated early does two things at once. It satisfies the 14 day deadline that protects your $10,000 in PIP coverage. And creates a documented medical link between the crash and every symptom that surfaces afterward.
            </p>
            <p>
              A chiropractic evaluation counts toward that 14 day window under Florida law. Though only an MD or DO can formally diagnose an Emergency Medical Condition that unlocks the full $10,000 rather than the reduced $2,500 cap. This is precisely why multidisciplinary evaluation on day one, not day thirteen, protects both your spine and your claim.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section>
          <SectionTitle
            eyebrow="5"
            title="When Should Each Body Region Be Checked After a Crash?"
          />
          <div className="space-y-5 text-[17px] leading-8 text-justify">
            <p>
              Timing your evaluation around the region least likely to hurt yet is how you catch injuries before they graduate into chronic problems. The graph below maps typical onset windows we track across Tampa, Pinellas, Hillsborough, and the wider Bay area.
            </p>
            <p>
              Notice how wide these windows run. That spread is exactly why a single visit two days after the crash isn't enough. Injury patterns keep unfolding for weeks, and your treatment plan needs to track that curve, not a single snapshot. Read{" "}
              <InternalLink href="/blog/what-factors-affect-recovery-time-after-an-injury">
                what factors affect your recovery time after any accident related injury
              </InternalLink>
              .
            </p>
          </div>

          {/* Onset Windows Visualization Card */}
          <div className="mt-7 rounded-md border border-[#d5e7f4] bg-white p-5 shadow-sm md:p-6">
            <h3 className="text-xl font-bold text-[#1a3a5c]">
              Post-Accident Symptom Onset Windows (Day 0 to Day 21)
            </h3>
            <div className="mt-6 space-y-5">
              {onsetWindows.map((item) => (
                <div key={item.area} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold text-[#1a3a5c]">
                    <span>{item.area}</span>
                    <span className="text-[#2b7bb9]">{item.window}</span>
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
          </div>
        </section>

        {/* Section 6 */}
        <section>
          <SectionTitle
            eyebrow="6"
            title="What Actually Stops Pain From Spreading Further?"
          />
          <div className="space-y-5 text-[17px] leading-8 text-justify">
            <p>
              It takes a real plan with chiropractic adjustments and focused physical therapy. Good imaging is one of the main pieces of the puzzle to stop the damage in its tracks. Decompressing the spine can take the heavy pressure off those pinched discs before turning into a permanent problem. Digital X-rays catch structural misalignment that a symptom check alone would miss entirely, especially in a patient who still feels mostly fine on day three.
            </p>

            <div className="my-6">
              <QuotePanel
                quote="The body is brilliant at compensating and terrible at telling you it's compensating. By the time pain reaches a joint far from the crash site, that joint has usually been overworking for weeks. Early imaging changes the entire trajectory of recovery."
                author="Dr. Sarah Klein, DC, Orthopedic Rehabilitation Specialist"
              />
            </div>

            <p>
              Waiting doesn't make migrating pain resolve itself. It makes the compensation pattern harder to unwind. Every week a misaligned vertebra sits untreated, surrounding muscles adapt to the dysfunction as a new normal, and that adaptation is exactly what turns a two week recovery into a six month one. The Sunshine State's own crash data backs the urgency. With nearly a thousand crashes recorded across Florida every day, full evaluation immediately after a collision isn't caution, it's standard practice for anyone who drives here.
            </p>
          </div>

          {/* CTA Banner 2 */}
          <div className="mt-6">
            <InfoPanel tone="dark">
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-white">
                  Get Evaluated Before Day 14 Runs Out
                </h3>
                <p className="text-base leading-7 text-[#e6f2fb]">
                  13 Hess Spinal & Medical Centers locations across West Central Florida offer $0 upfront care under PIP.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 justify-center items-center">
                  <Link
                    href="/appointment"
                    className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#1a3a5c] transition hover:bg-[#ebf5fb]"
                  >
                    Request an Appointment Today
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
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2b7bb9]">
              Frequently Asked Questions
            </p>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-[#1a3a5c] md:text-3xl">
              People Also Ask About Migrating Pain After an Accident
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

        {/* Disclaimer */}
        <section className="rounded-md border border-[#d5e7f4] bg-[#f8fcff] p-5 text-sm leading-7 text-[#475569]">
          <p className="font-bold uppercase tracking-[0.14em] text-[#1a3a5c]">
            Disclaimer
          </p>
          <p className="mt-2 text-justify">
            This article is provided for general information only and does not constitute medical advice. Individual results from any treatment vary based on skin condition, severity, and overall health. Schedule a consultation to determine the right treatment plan for your specific case.
          </p>
        </section>
      </div>
    </>
  );
}
