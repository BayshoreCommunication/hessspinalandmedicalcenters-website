import Link from "next/link";

export const BLOG_IMAGE = {
  url: "/assets/static-blogs/how-stress-increases-physical-neck-back-pain.webp",
  altText:
    "Man sitting holding his head and neck showing red pain highlight points from physical stress effects",
  title: "How Stress Can Increase Physical Pain & Inflammation",
  description:
    "Learn how chronic stress triggers muscle tension, heightens pain sensitivity, and worsens physical pain in your neck and back, along with effective relief options.",
  caption:
    "Understand the mind-body connection and discover how stress increases inflammation and physical chronic pain.",
};

export const howCanStressIncreasePhysicalPainPost = {
  slug: "how-can-stress-increase-physical-pain",
  title: "How Can Stress Increase Physical Pain?",
  category: "Accident Injury Care",
  published: true,
  createdAt: "2026-08-23T00:00:00.000Z",
  updatedAt: "2026-08-23T00:00:00.000Z",
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
    "https://www.hessspinalandmedicalcenters.com/blog/how-can-stress-increase-physical-pain",
  seoTitle: "The Shocking Reasons Stress Increasing Your Physical Pain",
  seoDescription:
    "Stress tightens muscles and raises cortisol, fueling chronic pain across Florida. See how Hess Spinal treats the stress pain cycle at the source.",
  shortDescription:
    "The muscles are forced to be guarded when under stress. While cortisol and adrenaline stay elevated far longer than they should, increasing your already excruciating physical pain. This tightens the neck, back and shoulders. It also lowers the body's pain threshold and slows tissue healing. Chronic stress doesn’t just feel heavy but physically rewires how the nervous system reads pain.",
  body: `<p>The muscles are forced to be guarded when under stress. While cortisol and adrenaline stay elevated far longer than they should, increasing your already excruciating physical pain. This tightens the neck, back and shoulders. It also lowers the body's pain threshold and slows tissue healing. Chronic stress doesn’t just feel heavy but physically rewires how the nervous system reads pain.</p>`,
};

const sourceLinks = {
  apaStress2025:
    "https://www.apa.org/pubs/reports/stress-in-america/2025",
  trafficCongestion:
    "https://statranker.org/cities-urban-life/us-cities-by-traffic-congestion-2026/",
  mdpiInflammation: "https://www.mdpi.com/2073-4409/12/23/2726",
  pubmedCortisol: "https://pubmed.ncbi.nlm.nih.gov/25035267/",
};

const quickTakeaways = [
  "Stress chemicals keep your muscles wound up tight long after the actual tension has passed.",
  "An exhausted nervous system starts shouting about minor pain signals it would usually just ignore.",
  "Old injuries flare up when life stress spikes, even without any new trauma.",
  "Florida's traffic, heat, and hurricane season add a physical stress load most other states don’t carry.",
  "Left untreated, muscle guarding turns short term stress into long term chronic pain.",
];

const surveyResearchStats = [
  {
    value: "75%",
    label: "of Americans report physical symptoms tied to stress",
  },
  {
    value: "83%",
    label: "of U.S. workers say their job stress shows up physically",
  },
  {
    value: "8.7%",
    label: "rise in cortisol per point increase in reported pain severity",
  },
];

const stressResponseRows = [
  {
    response: "Cortisol surge",
    effect: "Raises inflammation, keeps pain receptors on alert",
    area: "Lower back, hips, old crash injuries",
  },
  {
    response: "Muscle guarding",
    effect: "Shoulders, jaw, and neck lock into a braced position",
    area: "Neck and shoulder tension after I-4 or I-275 traffic",
  },
  {
    response: "Shallow breathing",
    effect: "Reduces oxygen flow to tight muscle tissue",
    area: "Upper back stiffness, tension headaches",
  },
  {
    response: "Nervous system overdrive",
    effect: "Lowers the threshold at which touch becomes pain",
    area: "Whiplash and soft tissue injuries that will not settle",
  },
];

const stressPainFlareLevels = [
  {
    level: "Low stress",
    percentage: 18,
  },
  {
    level: "Moderate stress",
    percentage: 41,
  },
  {
    level: "High stress",
    percentage: 63,
  },
  {
    level: "Chronic/daily stress",
    percentage: 82,
  },
];

const faqs = [
  {
    question: "How does the billing work with my PIP insurance?",
    answer:
      "Personal Injury Protection is there to help you out after an accident. If your pain is tied to a crash, we handle the billing and the paperwork so you don’t need to stress about it.",
  },
  {
    question: "Will I get an adjustment the same day I walk in?",
    answer:
      "We don’t jump into treatments until we know exactly what we are looking at. We start with a thorough exam and check your X-rays. If it’s safe and right for your body, we will adjust you during that first visit.",
  },
  {
    question: "How many visits will I actually need to feel better?",
    answer:
      "Everyone is different. Some folks feel a real shift in just a few sessions but keep in mind that we are trying to calm down a nervous system that has been wound up for a long time. We work with you to build a plan that’s effective and moves you forward as fast as we can.",
  },
  {
    question: "Do I need a referral from my regular family doctor",
    answer:
      "No, you do not need a referral from anyone to come see us. You can just pick up the phone and call directly to get on the schedule.",
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

  return <div className="rounded-md p-5 ${toneClass}">{children}</div>;
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

export default function HowCanStressIncreasePhysicalPain() {
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
                    "item": "https://www.hessspinalandmedicalcenters.com/",
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Blog",
                    "item": "https://www.hessspinalandmedicalcenters.com/blog",
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "How Can Stress Increase Physical Pain?",
                    "item":
                      "https://www.hessspinalandmedicalcenters.com/blog/how-can-stress-increase-physical-pain",
                  },
                ],
              },
              {
                "@type": "BlogPosting",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id":
                    "https://www.hessspinalandmedicalcenters.com/blog/how-can-stress-increase-physical-pain",
                },
                "headline": "How Can Stress Increase Physical Pain?",
                "name":
                  "The Shocking Reasons Stress Increasing Your Physical Pain",
                "description":
                  "Stress tightens muscles and raises cortisol, fueling chronic pain across Florida. See how Hess Spinal treats the stress pain cycle at the source.",
                "url":
                  "https://www.hessspinalandmedicalcenters.com/blog/how-can-stress-increase-physical-pain",
                "image":
                  "https://www.hessspinalandmedicalcenters.com/assets/static-blogs/how-stress-increases-physical-neck-back-pain.webp",
                "isPartOf": {
                  "@type": "Blog",
                  "@id": "https://www.hessspinalandmedicalcenters.com/blog",
                },
                "about": {
                  "@type": "Thing",
                  "name": "Stress and Physical Pain Connection",
                  "description":
                    "An overview of how chronic stress triggers muscle tension, heightens pain sensitivity, elevates cortisol, and worsens neck and back pain.",
                },
                "keywords": [
                  "how stress increases physical pain",
                  "stress and back pain",
                  "stress neck pain Florida",
                  "cortisol chronic pain",
                  "muscle guarding stress",
                  "car accident stress pain flare up",
                  "Hess Spinal stress pain treatment",
                ],
                "author": {
                  "@type": "Organization",
                  "name": "Hess Spinal & Medical Centers",
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Hess Spinal & Medical Centers",
                  "url": "https://www.hessspinalandmedicalcenters.com/",
                  "logo": {
                    "@type": "ImageObject",
                    "url":
                      "https://www.hessspinalandmedicalcenters.com/assets/site-logo/main-logo.png",
                  },
                },
                "datePublished": "2026-08-23",
                "dateModified": "2026-08-23",
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name":
                      "How does the billing work with my PIP insurance?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "Personal Injury Protection is there to help you out after an accident. If your pain is tied to a crash, we handle the billing and the paperwork so you don’t need to stress about it.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name":
                      "Will I get an adjustment the same day I walk in?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "We don’t jump into treatments until we know exactly what we are looking at. We start with a thorough exam and check your X-rays. If it’s safe and right for your body, we will adjust you during that first visit.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name":
                      "How many visits will I actually need to feel better?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "Everyone is different. Some folks feel a real shift in just a few sessions but keep in mind that we are trying to calm down a nervous system that has been wound up for a long time. We work with you to build a plan that’s effective and moves you forward as fast as we can.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name":
                      "Do I need a referral from my regular family doctor",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "No, you do not need a referral from anyone to come see us. You can just pick up the phone and call directly to get on the schedule.",
                    },
                  },
                ],
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
                Accident Injury Care | Stress & Physical Pain
              </p>
              <h2 className="mt-4 text-2xl font-bold leading-tight md:text-3xl">
                How Can Stress Increase Physical Pain?
              </h2>
              <p className="mt-4 text-base leading-7 text-[#e6f2fb] text-justify">
                The muscles are forced to be guarded when under stress. While
                cortisol and adrenaline stay elevated far longer than they
                should, increasing your already excruciating physical pain. This
                tightens the neck, back and shoulders. It also lowers the body's
                pain threshold and slows tissue healing. Chronic stress doesn’t
                just feel heavy but physically rewires how the nervous system
                reads pain.
              </p>
            </div>
            <div className="bg-[#2b7bb9] p-6 text-white md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e4f5ff]">
                West Central Florida
              </p>
              <p className="mt-5 text-3xl font-bold">(800) 618-4377</p>
              <p className="mt-3 text-sm leading-6 text-[#eef9ff]">
                Same-day evaluations are available at Hess Spinal & Medical
                Center locations across West Central Florida.
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

          {/* Survey & Research Stats Grid */}
          <div className="bg-[#ebf5fb] p-6 md:p-8 border-t border-[#d5e7f4]">
            <h2 className="text-lg font-bold uppercase tracking-[0.15em] text-[#1a3a5c]">
              What Our Surveys And National Research Confirm
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {surveyResearchStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-md border border-[#d5e7f4] bg-white p-5 text-center shadow-sm"
                >
                  <p className="text-3xl font-bold text-[#1a3a5c]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-6 text-[#475569]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1 */}
        <section>
          <SectionTitle
            eyebrow="1"
            title="Stress Not Only Stay In Your Head But Lands In Your Back"
          />
          <div className="space-y-5 text-[17px] leading-8 text-justify">
            <p>
              Most people think stress is a mood. It’s not. It’s a chemical
              event. The second your brain senses trouble, whether it’s a real
              danger or just something you are sweating over, your body releases
              cortisol and adrenaline. Your muscles brace for impact. That
              bracing is ancient wiring, built for a saber tooth cat, not a
              Monday inbox.{" "}
              <ExternalLink href={sourceLinks.apaStress2025}>
                The APA's Stress in America research
              </ExternalLink>{" "}
              shows most U.S. adults now report physical or emotional symptoms
              tied to stress and the number keeps climbing year over year.
            </p>
            <p>
              So the stress response fires. Then it doesn’t switch off. Traffic,
              deadlines, a mortgage, a fender bender you are still fighting your
              insurance over. Small things, stacked daily. Each one keeps the
              muscles a little tighter than the last. Give it a few months of
              that pattern and the tension stops being situational. It becomes
              structural. That’s when patients start walking into a clinic
              describing pain that has no clear origin, no fall, no lift, no
              obvious cause. There usually is one. It has just been building
              quietly for weeks.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <SectionTitle
            eyebrow="2"
            title="Why Does Stress Cause Physical Pain In Florida Drivers and Office Workers?"
          />
          <div className="space-y-5 text-[17px] leading-8 text-justify">
            <p>
              Florida adds its own layer to this. Tampa Bay now ranks among the
              worst metro areas in the country for traffic, and drivers here{" "}
              <ExternalLink href={sourceLinks.trafficCongestion}>
                lose roughly 41 hours a year sitting in congestion
              </ExternalLink>
              , much of it crawling across the Howard Frankland or stacked up
              where I-4 meets I-275. That’s not a minor inconvenience. It’s a
              daily dose of low grade physiological stress and the body responds
              to it the same way it responds to any other threat with tightened
              shoulders and a clenched jaw. As well as a spine that never fully
              relaxes.
            </p>
            <p>
              Add Florida's heat, the dread of hurricane season and a job market
              where{" "}
              <ExternalLink href={sourceLinks.apaStress2025}>
                69% of employed adults name work as a significant stressor
              </ExternalLink>
              , and you get a state full of people carrying tension they never
              intended to hold. Cortisol is the driver here. Short bursts of it
              are protective, useful even. However, when it stays high for
              weeks,{" "}
              <ExternalLink href={sourceLinks.mdpiInflammation}>
                it stirs up inflammation and makes your nerves incredibly
                sensitive
              </ExternalLink>
              . Suddenly, just moving around or getting a hug hurts when it
              shouldn't.
            </p>
          </div>

          {/* Table: Stress Response & What It Does To The Body */}
          <div className="mt-7 overflow-hidden rounded-md border border-[#d5e7f4] bg-white shadow-sm">
            <div className="bg-[#1a3a5c] px-5 py-4 text-white">
              <h3 className="text-xl font-bold">
                Stress Response Impact on the Body
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-[640px] w-full border-collapse text-left text-sm">
                <thead className="bg-[#ebf5fb] text-xs uppercase tracking-[0.14em] text-[#1a3a5c]">
                  <tr>
                    <th scope="col" className="px-5 py-4">
                      Stress Response
                    </th>
                    <th scope="col" className="px-5 py-4">
                      What It Does To The Body
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Where Floridians Feel It Most
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d5e7f4] text-[#223143]">
                  {stressResponseRows.map((row) => (
                    <tr key={row.response}>
                      <th scope="row" className="px-5 py-4 font-bold">
                        {row.response}
                      </th>
                      <td className="px-5 py-4">{row.effect}</td>
                      <td className="px-5 py-4 font-semibold text-[#1a3a5c]">
                        {row.area}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA Box 1 */}
          <div className="mt-6">
            <div className="rounded-md bg-[#1a3a5c] p-6 text-white shadow-sm">
              <div className="space-y-3 text-center">
                <h2 className="text-2xl font-bold text-white">
                  Feeling Tightness and Don’t Know Why?
                </h2>
                <p className="text-base leading-7 text-[#e6f2fb]">
                  Our team looks for the real root of the trouble
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/appointment"
                    className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#1a3a5c] transition hover:bg-[#ebf5fb]"
                  >
                    Get A Same Day Appointment
                  </Link>
                  <a
                    href="tel:8006184377"
                    className="inline-flex rounded-full border border-white px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
                  >
                    Call (800) 618-4377
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <SectionTitle
            eyebrow="3"
            title="Can Old Injuries Flare Up When Stress Piles On?"
          />
          <div className="space-y-5 text-[17px] leading-8 text-justify">
            <p>
              Yes, and this is the part car accident patients feel the hardest.
              A whiplash injury, a strained lumbar disc, a shoulder that never
              quite finished healing—these tissues stay more sensitive than
              uninjured ones for a long time after the initial trauma. Stress
              doesn’t really create a new injury. It reopens the sensitivity of
              an old one. The nervous system, already primed from the crash gets
              another jolt of cortisol from an unrelated stressor. And suddenly
              the same old ache is back at twice the intensity.
            </p>
            <p>
              We see this constantly at{" "}
              <InternalLink href="/about">
                Hess Spinal & Medical Centers
              </InternalLink>
              . A patient finishes physical therapy, feels good for a month.
              Then a stressful week at work or a second accident anniversary
              rolls around and the neck pain resurfaces with no new incident to
              explain it. That’s the stress-pain loop doing exactly what{" "}
              <ExternalLink href={sourceLinks.pubmedCortisol}>
                the research on cortisol dysfunction in pain rehabilitation
              </ExternalLink>{" "}
              says it will do. It’s also exactly why a treatment plan built
              only around the original injury without addressing the ongoing
              stress load, tends to underperform.
            </p>
          </div>

          <div className="my-6">
            <QuotePanel
              quote="Pain is almost never just about the muscle or bone. Your nerves remember the fear and stress brings that memory right back to life long after the body has done its best to heal."
              author="Dr. Kate Hannibal, physical therapy and pain science researcher"
            />
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <SectionTitle
            eyebrow="4"
            title="Tampa Bay Carries A Heavier Stress Load Than Most Of The Country"
          />
          <div className="space-y-5 text-[17px] leading-8 text-justify">
            <p>
              Our surveys of patients across our Tampa Bay locations show a
              pattern that lines up with the national data almost exactly.
              Patients who report high daily stress are far more likely to
              describe their pain as widespread rather than localized and far
              more likely to report flare-ups with no clear physical trigger.
              That distinction matters clinically. Widespread, trigger-free
              pain points toward a nervous system problem layered on top of a
              structural one, and treating only the structure leaves the loop
              running.
            </p>
            <p>
              This is not unique to any one patient. It is a regional pattern.
              Florida's population is growing faster than its infrastructure,
              and that mismatch shows up in bodies before it shows up in
              headlines.
            </p>
          </div>

          {/* Pain Flare Frequency Visualization */}
          <div className="mt-7 rounded-md border border-[#d5e7f4] bg-white p-5 shadow-sm md:p-6">
            <h3 className="text-xl font-bold text-[#1a3a5c]">
              Reported Pain Flare Frequency By Stress Level
            </h3>
            <div className="mt-6 space-y-5">
              {stressPainFlareLevels.map((item) => (
                <div key={item.level} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold text-[#1a3a5c]">
                    <span>{item.level}</span>
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
          </div>
        </section>

        {/* Section 5 */}
        <section>
          <SectionTitle eyebrow="5" title="Can You Actually Break The Cycle?" />
          <div className="space-y-5 text-[17px] leading-8 text-justify">
            <p>
              You just can’t stretch your way out of a nervous system that’s
              stuck in alert mode. You also can’t meditate your way out of a
              whiplash injury that never fully resolved. Breaking the cycle
              takes both tracks at once. This is where{" "}
              <InternalLink href="/services">chiropractic care</InternalLink>{" "}
              earns its keep. Spinal adjustments do more than realign joints.
              They interrupt the muscle guarding pattern directly, which lowers
              the sympathetic nervous system's alert level and gives cortisol a
              reason to drop.
            </p>
          </div>

          <div className="my-6">
            <QuotePanel
              quote="We stopped treating stress as a footnote years ago. When a patient's pain keeps returning without a new injury, the stress response is almost always part of the picture, and we build the treatment plan around that reality."
              author="Dr. Stephen Hess, Hess Spinal & Medical Centers, Florida"
            />
          </div>

          <div className="space-y-5 text-[17px] leading-8 text-justify">
            <p>
              Pair that with physical therapy, hydrotherapy, and targeted
              trigger point work, and you are not just chasing pain, you are
              dismantling the loop that keeps generating it. Florida residents
              dealing with stress that increases physical pain rarely need one
              appointment. They need a coordinated plan, which is why{" "}
              <InternalLink href="/">
                Hess Spinal & Medical Centers
              </InternalLink>{" "}
              builds multidisciplinary treatment under one roof, X-rays,
              chiropractic manipulation, and rehabilitation together, so the
              plan adjusts to what the nervous system is actually doing, not just
              what the last MRI showed.
            </p>
          </div>

          {/* CTA Box 2 */}
          <div className="mt-6">
            <div className="rounded-md bg-[#1a3a5c] p-6 text-white shadow-sm">
              <div className="space-y-3 text-center">
                <h2 className="text-2xl font-bold text-white">
                  Stop Guessing Why The Pain Keeps Coming Back
                </h2>
                <p className="text-base leading-7 text-[#e6f2fb]">
                  Walk in for a same day evaluation at any of our 13 Florida
                  locations. No upfront cost under PIP coverage.
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/appointment"
                    className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#1a3a5c] transition hover:bg-[#ebf5fb]"
                  >
                    Request Your Appointment Today
                  </Link>
                  <a
                    href="tel:8006184377"
                    className="inline-flex rounded-full border border-white px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
                  >
                    Call (800) 618-4377
                  </a>
                </div>
              </div>
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
              FAQ
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
            This article is provided for general information only and does not
            constitute medical advice. Individual results from any treatment
            vary based on skin condition, severity, and overall health.
            Schedule a consultation to determine the right treatment plan for
            your specific case.
          </p>
        </section>
      </div>
    </>
  );
}
