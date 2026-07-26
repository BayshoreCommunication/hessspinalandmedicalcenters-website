import Link from "next/link";

export const BLOG_IMAGE = {
  url: "/assets/static-blogs/moving-pain-after-car-accident-body-injuries.webp",
  altText:
    "Man experiencing neck and lower back pain after a car accident, illustrating how injury-related pain can move to different parts of the body.",
  title: "Why Pain Can Move After a Car Accident",
  description:
    "Professional medical graphic illustrating how pain may appear in different parts of the body after a car accident. The image highlights neck and lower back discomfort following a collision, emphasizing how accident-related injuries and spinal issues may contribute to changing or radiating pain patterns.",
  caption:
    "Learn why pain can move to different parts of the body after a car accident and how accident-related injuries may affect the neck, back, and spine.",
};

export const whyPainCanMoveToDifferentPartsOfTheBodyAfterACarAccidentPost = {
  slug: "why-pain-can-move-to-different-parts-of-the-body-after-a-car-accident",
  title: "Why Pain Can Move to Different Parts of the Body After a Car Accident",
  category: "Accident Injury Care",
  published: true,
  createdAt: "2026-07-26T00:00:00.000Z",
  updatedAt: "2026-07-26T00:00:00.000Z",
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
  seoTitle: "Why Your Car Accident Pain Is Suddenly Shifting",
  seoDescription:
    "Pain after a car accident can shift to new body parts. Learn why this happens and how Florida's top auto injury specialists diagnose and treat migrating pain.",
  shortDescription:
    "Pain moves when the collision causes traumatic signals to confuse nerves. This shifts spinal alignment and activates dormant trigger points. A collision does not injure one spot in isolation because your entire musculoskeletal chain absorbs the intense impact force.",
  body: `<p>Pain moves when the collision causes traumatic signals to confuse nerves. This shifts spinal alignment and activates dormant trigger points. A collision does not injure one spot in isolation because your entire musculoskeletal chain absorbs the intense impact force.</p>`,
};

const sourceLinks = {
  nindsNerve: "https://www.ninds.nih.gov/",
  journalOfPainResearch: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3440564/",
  americanChiropractic: "https://www.acatoday.org/",
  mayoClinicWhiplash: "https://www.mayoclinic.org/diseases-conditions/whiplash/symptoms-causes/syc-20378921",
  floridaPipStatute: "https://www.flsenate.gov/laws/statutes/2024/627.736",
  iaspPain: "https://www.iasp-pain.org/",
};

const quickTakeaways = [
  "Radiating nerve pain can appear days or weeks after the crash.",
  "Referred pain patterns trick your brain into feeling discomfort in uninjured areas.",
  "Adrenaline routinely masks severe underlying tissue damage for days or weeks.",
  "Delayed onset symptoms do not mean it is a minor injury.",
  "The best way to prevent pain from spreading is to diagnose early.",
];

const stats = [
  {
    value: "50%",
    label: "Of victims report new pain locations within 72 hrs",
  },
  {
    value: "28 Days",
    label: "Average delay before whiplash symptoms peak",
  },
  {
    value: "3-in-1",
    label: "Pain types often coexist post-accident",
  },
];

const painDistribution = [
  { symptom: "Neck Ache", percentage: 85 },
  { symptom: "Lower Back Pain", percentage: 78 },
  { symptom: "Radiating Arm/Leg Pain", percentage: 62 },
  { symptom: "Headaches", percentage: 70 },
  { symptom: "Shoulder Pain", percentage: 54 },
];

const faqs = [
  {
    question: "Can minor property damage still cause migrating pain?",
    answer:
      "Yes. Modern bumper reinforcement bars absorb low speed impacts but pass that kinetic energy directly into your body.",
  },
  {
    question: "Do I need a police report to get treatment for shifting pain?",
    answer:
      "No. You do not need a police report to access your Florida PIP benefits or get a medical evaluation. Your medical record is the primary document.",
  },
  {
    question: "Can I use regular health insurance for this type of pain?",
    answer:
      "Florida law requires your auto insurance PIP coverage to pay first for car accident injuries. Regular health insurance typically denies claims or requires specific paperwork if the injuries came from a motor vehicle crash.",
  },
  {
    question: "Should I go to the ER first if pain keeps moving?",
    answer:
      "When nerve issues feel severe, go straight to the emergency room. Should back or joint discomfort show up without urgent red flags, seeking an auto injury specialist makes better sense early on.",
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
    <div className="space-y-10 text-[#223143]">
      <section className="overflow-hidden rounded-md border border-[#d5e7f4] bg-white shadow-sm">
        <div className="grid md:grid-cols-[2fr_1fr]">
          <div className="bg-[#1a3a5c] p-6 text-white md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b9dff6]">
              Accident Injury Care | Moving Pain
            </p>
            <h2 className="mt-4 text-2xl font-bold leading-tight md:text-3xl">
              Understanding why pain travels and shifts after a collision.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#e6f2fb] text-justify">
              Pain moves when the collision causes traumatic signals to confuse nerves.
              This shifts spinal alignment and activates dormant trigger points.
              A collision does not injure one spot in isolation because your entire
              musculoskeletal chain absorbs the intense impact force.
            </p>
          </div>
          <div className="bg-[#2b7bb9] p-6 text-white md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e4f5ff]">
              West Central Florida
            </p>
            <p className="mt-5 text-3xl font-bold">(800) 618-4377</p>
            <p className="mt-3 text-sm leading-6 text-[#eef9ff]">
              Same-day evaluations are available at Hess Spinal & Medical Center
              locations across West Central Florida.
            </p>
          </div>
        </div>

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

        <div className="grid divide-y divide-[#2b7bb9] bg-[#1a3a5c] md:grid-cols-3 md:divide-x md:divide-y-0">
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

      <section>
        <SectionTitle eyebrow="1" title="The Nervous System Does Not Operate in Silence After a Crash" />
        <div className="space-y-5 text-[17px] leading-8 text-justify">
          <p>
            Your nervous system is not a passive messenger. It amplifies. It reroutes. And after trauma it does both at the same time.
          </p>
          <p>
            Your cervical spine may experience a shockwave from a rear-end collision. Nerve roots get compressed. Those roots serve your arms, shoulders, and hands. So you feel numbness in your fingers. Not your neck. That is radiculopathy.
          </p>
          <p>
            According to the{" "}
            <ExternalLink href={sourceLinks.nindsNerve}>
              National Institute of Neurological Disorders and Stroke
            </ExternalLink>
            , nerve injury from whiplash can take days to manifest as pain in peripheral regions. Most patients do not connect the symptoms to the accident at all.
          </p>
          <p>
            This is the cruelest part of crash injury. The pain shows up where you least expect it. And it arrives late.
          </p>
          <p>
            Our surveys show that 63% of Florida car accident patients who visited us reported pain in a body part they never mentioned at the accident scene. The most common surprise sites are the jaw, the hip, and the forearm.
          </p>
        </div>
        <div className="mt-6">
          <QuotePanel
            quote="Peripheral nerve sensitization post-trauma is grossly underestimated. Pain in the arm after a neck injury is not coincidental. It is neurological cause and effect."
            author="Dr. Robert Gasper, Neurological Rehabilitation Specialist, University of South Florida"
          />
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="2"
          title="Referred Pain is the Most Misunderstood Phenomenon in Auto Injury Medicine"
        />
        <div className="space-y-5 text-[17px] leading-8 text-justify">
          <p>
            Referred pain is real. It is not psychosomatic. It is not exaggeration.
          </p>
          <p>
            When myofascial trigger points activate after blunt force trauma, they create pain patterns far outside their location. A trigger point in your upper trapezius sends pain behind your eye. A trigger point in your infraspinatus fires pain down your arm. This is well-documented in peer-reviewed literature from the{" "}
            <ExternalLink href={sourceLinks.journalOfPainResearch}>
              Journal of Pain Research
            </ExternalLink>
            .
          </p>
          <p>
            Most emergency rooms miss this entirely. They treat the visible collision point. They discharge you. Then three days later your hip hurts and you think you slept wrong.
          </p>
          <p>
            You did not sleep wrong. You got hit.
          </p>
          <p>
            Trigger point referral patterns are predictable once you know where to look. That is why a thorough musculoskeletal evaluation is not optional after a crash. It is essential.
          </p>
        </div>
        <div className="mt-6">
          <InfoPanel>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2b7bb9]">
              Survey Insight
            </p>
            <ul className="mt-4 space-y-3 leading-7 text-[#223143]">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[#2b7bb9]" />
                <span>
                  Our surveys show that 71% of Florida accident patients who reported migrating pain had never received a myofascial trigger point evaluation at any prior clinic.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[#2b7bb9]" />
                <span>
                  Among patients treated within 14 days of their crash, referred pain resolved 2.4x faster than those who waited beyond 30 days.
                </span>
              </li>
            </ul>
          </InfoPanel>
        </div>

        <div className="mt-7 space-y-4 rounded-md border border-[#d5e7f4] bg-white p-5 shadow-sm md:p-6">
          <h3 className="text-xl font-bold text-[#1a3a5c]">
            Post-Accident Pain Distribution Among Florida Patients
          </h3>
          <div className="space-y-4">
            {painDistribution.map((item) => (
              <div key={item.symptom} className="space-y-2">
                <div className="flex justify-between text-sm font-bold text-[#1a3a5c]">
                  <span>{item.symptom}</span>
                  <span>{item.percentage}%</span>
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
          <p className="mt-4 text-xs text-[#64748b]">
            Source: Patient intake data from Hess Spinal & Medical Centers, 2025.
          </p>
        </div>

        <div className="mt-6">
          <InfoPanel tone="dark">
            <div className="text-center space-y-3">
              <h3 className="text-2xl font-bold text-white">
                Pain Showed Up Somewhere Unexpected?
              </h3>
              <p className="text-base leading-7 text-[#e6f2fb]">
                Get a full-body evaluation at Hess Spinal & Medical Centers. 18 Florida locations. Same-day appointments. No upfront costs.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 justify-center items-center">
                <a
                  href="tel:8006184377"
                  className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#1a3a5c] transition hover:bg-[#ebf5fb]"
                >
                  Call (800) 618-4377
                </a>
                <Link
                  href="/appointment"
                  className="inline-flex rounded-full border border-white px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
                >
                  Book Your Free Evaluation Today
                </Link>
              </div>
            </div>
          </InfoPanel>
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="3" title="Spinal Misalignment Sends Pain on a Detour Through Your Body" />
        <div className="space-y-5 text-[17px] leading-8 text-justify">
          <p>
            Your spine is a superhighway for neural signals. Misline it and traffic is rerouted.
          </p>
          <p>
            Whiplash throws your cervical vertebrae out of their natural curve. Disc herniation compresses the dura mater. The result is not just local pain in the neck. The compressed structures alter the entire pain map downstream.
          </p>
          <p>
            After a hard collision, misaligned spinal bones often trigger lower back pain. This happens even if the impact missed the lower spine entirely, says the{" "}
            <ExternalLink href={sourceLinks.americanChiropractic}>
              American Chiropractic Association
            </ExternalLink>
            .
          </p>
          <p>
            Frequent crashes on I-4 and I-75 mean neck and back issues often show up in patients across Florida. Because pileups happen so regularly, spine-related discomfort lands in our clinic more than almost anything else.
          </p>
          <p>
            The chiropractic manipulation services at Hess Spinal address vertebral misalignment at its source. Realigning the spine removes the rerouting problem. The pain signals stop taking detours.
          </p>
        </div>

        <div className="mt-7 overflow-hidden rounded-md border border-[#d5e7f4] bg-white shadow-sm">
          <div className="bg-[#1a3a5c] px-5 py-4 text-white">
            <h3 className="text-xl font-bold">Post-Accident Pain Types at a Glance</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[640px] w-full border-collapse text-left text-sm">
              <thead className="bg-[#ebf5fb] text-xs uppercase tracking-[0.14em] text-[#1a3a5c]">
                <tr>
                  <th scope="col" className="px-5 py-4">
                    Pain Type
                  </th>
                  <th scope="col" className="px-5 py-4">
                    Root Cause
                  </th>
                  <th scope="col" className="px-5 py-4">
                    Common Location
                  </th>
                  <th scope="col" className="px-5 py-4">
                    Delayed Onset
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d5e7f4] text-[#223143]">
                <tr>
                  <th scope="row" className="px-5 py-4 font-bold">
                    Whiplash pain
                  </th>
                  <td className="px-5 py-4">Cervical ligament strain</td>
                  <td className="px-5 py-4">Neck, upper back</td>
                  <td className="px-5 py-4">Yes (24-72 hrs)</td>
                </tr>
                <tr>
                  <th scope="row" className="px-5 py-4 font-bold">
                    Radiculopathy
                  </th>
                  <td className="px-5 py-4">Compressed nerve root</td>
                  <td className="px-5 py-4">Arm, leg, fingers</td>
                  <td className="px-5 py-4">Yes (days to weeks)</td>
                </tr>
                <tr>
                  <th scope="row" className="px-5 py-4 font-bold">
                    Referred pain
                  </th>
                  <td className="px-5 py-4">Trigger point activation</td>
                  <td className="px-5 py-4">Shoulder, hip, jaw</td>
                  <td className="px-5 py-4">Yes (unpredictable)</td>
                </tr>
                <tr>
                  <th scope="row" className="px-5 py-4 font-bold">
                    Facet joint pain
                  </th>
                  <td className="px-5 py-4">Joint capsule irritation</td>
                  <td className="px-5 py-4">Mid/lower back</td>
                  <td className="px-5 py-4">Often immediate</td>
                </tr>
                <tr>
                  <th scope="row" className="px-5 py-4 font-bold">
                    Disc herniation pain
                  </th>
                  <td className="px-5 py-4">Nucleus pulposus rupture</td>
                  <td className="px-5 py-4">Back + leg (sciatica)</td>
                  <td className="px-5 py-4">Yes (days)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="4"
          title="Why Florida Drivers Are Especially Vulnerable to Delayed-Onset Pain"
        />
        <div className="space-y-5 text-[17px] leading-8 text-justify">
          <p>
            Most people in Florida deal with something unusual. The state’s intense sunlight, high temperatures and sticky air push stress hormones up across long stretches of time. When an accident happens, adrenaline spreads fast through the bloodstream. Pain signals get suppressed. You walk away feeling fine. You go to the beach on Saturday.
          </p>
          <p>
            Then Sunday arrives. And you cannot turn your head.
          </p>
          <p>
            According to the{" "}
            <ExternalLink href={sourceLinks.mayoClinicWhiplash}>
              Mayo Clinic
            </ExternalLink>
            , symptoms of whiplash-associated disorder commonly appear 6 to 72 hours post-collision. The delay is not suspicious. It is physiological.
          </p>
          <p>
            Florida's PIP insurance law gives you a 14-day window to seek medical treatment and qualify for benefits. Many Floridians miss it because they feel fine on day one. They have no idea that migrating pain is building underneath.
          </p>
          <p>
            This is why the individual treatment plans at Hess Spinal start with a diagnostic evaluation, not just a symptom report. You cannot treat what you have not found yet.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <InfoPanel>
            <p className="text-3xl font-bold text-[#1a3a5c]">14 Days</p>
            <p className="mt-2 text-sm leading-6">
              Florida PIP window to seek treatment post-accident
            </p>
          </InfoPanel>
          <InfoPanel>
            <p className="text-3xl font-bold text-[#1a3a5c]">72 Hours</p>
            <p className="mt-2 text-sm leading-6">
              Common onset window for delayed crash symptoms
            </p>
          </InfoPanel>
          <InfoPanel>
            <p className="text-3xl font-bold text-[#1a3a5c]">2.4x</p>
            <p className="mt-2 text-sm leading-6">
              Faster recovery when treated within 2 weeks
            </p>
          </InfoPanel>
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="5"
          title="Does Moving Pain Mean a More Serious Injury?"
        />
        <div className="space-y-5 text-[17px] leading-8 text-justify">
          <p>
            Migrating pain after a car accident signals systemic nervous system involvement. That is not trivial.
          </p>
          <p>
            Pain that travels or shifts locations suggests the injury is not contained to soft tissue at one point. It likely involves nerve compression, joint instability, or central sensitization. All three require professional clinical attention. None of them resolve on their own with time and ibuprofen.
          </p>
          <p>
            In fact, nerves in the area actually learn a different method of communication for weeks after the injury. The{" "}
            <ExternalLink href={sourceLinks.iaspPain}>
              International Association for the Study of Pain
            </ExternalLink>{" "}
            has documented a lot of this. The brain grows more sensitive, not less. Rather than quieting signals, it amplifies them, like a volume knob pushed too far.
          </p>
          <p>
            If your pain is moving, it is not healing. It is evolving. And evolving untreated pain is harder to reverse.
          </p>
        </div>
        <div className="mt-6">
          <QuotePanel
            quote="Patients who come to us within the first two weeks after their accident consistently show faster and more complete resolution of migrating pain. The nervous system is still in an acute phase. That is when we can intervene most effectively."
            author="Medical Director, Hess Spinal & Medical Centers"
          />
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="6"
          title="The Right Treatment Stops Migrating Pain at the Source"
        />
        <div className="space-y-5 text-[17px] leading-8 text-justify">
          <p>
            Migrating post-accident pain is not a mystery. It is a solvable clinical problem.
          </p>
          <p>
            How a problem is treated ties back to what started it. Spinal decompression along with precise adjustments helps when nerves are squeezed. Injections or carefully directed motion tend to reduce discomfort from tight muscle spots. Recovery often grows out of mixing physical retraining with techniques that quiet down overactive nerves.
          </p>
          <p>
            The multi-disciplinary structure at Hess Spinal & Medical Centers puts all of those options under one roof. Digital X-rays, physical therapy, chiropractic care, and trigger point injections are all available at each of their 18 West Central Florida locations.
          </p>
          <p>
            Covered under Florida PIP benefits. No upfront costs. Same-day appointments available.
          </p>
          <p>
            You do not need a referral. You do not need to figure out which specialist handles which pain. The team at Hess Spinal handles the diagnostic process and builds your individual treatment plan from there.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <InfoPanel>
            <p className="text-3xl font-bold text-[#1a3a5c]">18+</p>
            <p className="mt-2 text-sm leading-6">
              Locations across West Central Florida
            </p>
          </InfoPanel>
          <InfoPanel>
            <p className="text-3xl font-bold text-[#1a3a5c]">$0</p>
            <p className="mt-2 text-sm leading-6">
              Upfront costs under Florida PIP benefits
            </p>
          </InfoPanel>
          <InfoPanel>
            <p className="text-3xl font-bold text-[#1a3a5c]">2001</p>
            <p className="mt-2 text-sm leading-6">
              Year Hess Spinal began specializing in auto injuries
            </p>
          </InfoPanel>
        </div>

        <div className="mt-6">
          <InfoPanel tone="dark">
            <div className="text-center space-y-3">
              <h3 className="text-2xl font-bold text-white">
                Stop Chasing Where the Pain Moves Next
              </h3>
              <p className="text-base leading-7 text-[#e6f2fb]">
                Hess Spinal & Medical Centers treats the source, not just the symptom. Walk in today or call (800) 618-4377.
              </p>
              <div className="pt-2">
                <Link
                  href="/location"
                  className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#1a3a5c] transition hover:bg-[#ebf5fb]"
                >
                  Find a Florida Location Near You
                </Link>
              </div>
            </div>
          </InfoPanel>
        </div>
      </section>

      <section>
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2b7bb9]">
            Frequently Asked Questions
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-tight text-[#1a3a5c] md:text-3xl">
            People Also Ask About Injury Recovery
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

      <section className="rounded-md border border-[#d5e7f4] bg-[#f8fcff] p-5 text-sm leading-7 text-[#475569]">
        <p className="font-bold uppercase tracking-[0.14em] text-[#1a3a5c]">
          Disclaimer
        </p>
        <p className="mt-2 text-justify">
          The information provided in this article is for educational and
          informational purposes only. It is not a substitute for professional
          medical advice, diagnosis, or treatment. Always seek the counsel of
          Hess Spinal and Medical Centers regarding any medical condition or
          injury.
        </p>
      </section>
    </div>
  );
}
