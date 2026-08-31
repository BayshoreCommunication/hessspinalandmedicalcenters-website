import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";

const TermsOfService = () => {
  return (
    <>
      <SectionLayout bg="mt-10 lg:mt-22">
        <div className="text-center md:text-left text-md md:text-xl">
          <h2
            className={`text-stone-950 !font-semibold text-3xl md:text-5xl mt-10 lg:mt-20 mb-10  text-center  uppercase`}
          >
            Terms of Service{" "}
          </h2>

          <div className="flex flex-col gap-4">
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              AGREEMENT TO OUR LEGAL TERMS
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              By using the services of Hess Spinal & Medical Centers, including our website
              and related resources, you agree to these Legal Terms. If you do
              not agree with these terms, please discontinue use of the Services
              immediately. We reserve the right to update or modify these Legal
              Terms at any time. Changes will take effect upon publication, and
              continued use of the Services constitutes acceptance of the
              updated terms.{" "}
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`1) OUR SERVICES`}
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              The Services provided by Hess Spinal & Medical Centers are intended to assist
              clients with chiropractic care, physical therapy, car accident injury evaluation, and related healthcare services.
            </p>
            <ol className="pl-14 list-disc">
              <li className="pb-4">
                Hurricane, windstorm, and storm damage claims
              </li>
              <li className="pb-4">
                Roof, water, fire, mold, hail, plumbing, smoke damage claims
              </li>
              <li className="pb-4">Bad faith insurance disputes</li>
              <li className="pb-4">Vandalism and theft claims</li>
            </ol>
            <p className="text-lg text-stone-950 text-center md:text-left">
              Our Services are for lawful purposes only. Users are responsible
              for ensuring compliance with local laws if accessing the Services
              from jurisdictions with specific legal restrictions.
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`2) INTELLECTUAL PROPERTY RIGHTS`}
            </p>
            <ol className="pl-14 list-disc">
              <li className="pb-4">
                <span className="font-semibold">Our Rights: </span>
                Hess Spinal & Medical Centers owns or licenses all intellectual property
                related to the Services, including website design, text, images,
                software, databases, and trademarks. These rights are protected
                under applicable copyright and trademark laws.
              </li>
              <li className="pb-4">
                <span className="font-semibold">Your Use: </span>
                We grant you a limited, non-exclusive, non-transferable,
                revocable license to access and use the Services for personal
                purposes. Unauthorized use of our intellectual property is
                prohibited and may result in legal action.
              </li>
              <li className="pb-4">
                <span className="font-semibold">Your Submissions: </span>
                By submitting feedback or content through our website or
                Services, you grant us the right to use, modify, and distribute
                such content. Any intellectual property rights in these
                submissions will be assigned to Hess Spinal & Medical Centers.
              </li>
            </ol>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`3) USER REPRESENTATIONS`}
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              By using our Services, you represent and warrant that:
            </p>
            <ol className="pl-14 list-disc">
              <li className="pb-4">
                All information you provide is accurate, current, and complete.
              </li>
              <li className="pb-4">
                You have the legal capacity to comply with these Legal Terms.
              </li>
              <li className="pb-4">
                You are not a minor under your local jurisdiction.
              </li>
              <li className="pb-4">
                You will not use automated means to access the Services.
              </li>
              <li className="pb-4">
                You will not use the Services for unlawful purposes.
              </li>
              <li className="pb-4">
                You will comply with all applicable laws and regulations.
              </li>
            </ol>
            <p className="text-lg text-stone-950 text-center md:text-left">
              Failure to comply with these representations may result in
              suspension or termination of access to our Services.
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`4) USER REGISTRATION`}
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              Certain features of our Services may require user registration.
              You are responsible for maintaining the security of your account
              credentials. Hess Spinal & Medical Centers reserves the right to remove,
              reclaim, or modify usernames deemed inappropriate or misleading.
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`5) PROHIBITED ACTIVITIES`}
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              You agree not to:
            </p>
            <ol className="pl-14 list-disc">
              <li className="pb-4">
                Use the Services for unauthorized commercial purposes.
              </li>
              <li className="pb-4">
                Harvest data or use automated tools without our consent.
              </li>
              <li className="pb-4">
                Circumvent security features or disrupt the Services.{" "}
              </li>
              <li className="pb-4">
                Upload harmful software, such as viruses or malware.
              </li>
              <li className="pb-4">
                Use the Services to defame, harass, or harm others.
              </li>
              <li className="pb-4">
                Violate any applicable laws or regulations.
              </li>
            </ol>
            <p className="text-lg text-stone-950 text-center md:text-left">
              Engaging in prohibited activities may result in termination of
              your access and legal action.
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`6) USER-GENERATED CONTRIBUTIONS`}
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              Any content you submit must be truthful, lawful, and free of
              third-party rights violations. By submitting content, you grant
              Hess Spinal & Medical Centers the rights to use, modify, and distribute your
              contributions as part of the Services.
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`7) CONTRIBUTION LICENSE`}
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              By submitting content, you grant us an irrevocable, royalty-free,
              worldwide license to use, reproduce, modify, and distribute your
              contributions in any format or medium. You also waive any moral
              rights associated with your submissions.{" "}
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`8) PRIVACY POLICY`}
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              We respect your privacy and are committed to protecting your
              personal data. Please review our Privacy Policy to understand how
              we collect, use, and protect your information. By using our
              Services, you consent to the terms of our Privacy Policy.
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`9) COPYRIGHT INFRINGEMENT`}
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              Hess Spinal & Medical Centers respects intellectual property rights. If you
              believe your copyrighted material has been used without
              authorization, please contact us with the relevant details for
              review and resolution.
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`10) MODIFICATIONS AND INTERRUPTIONS`}
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              We reserve the right to modify, suspend, or discontinue the
              Services at any time without prior notice. Hess Spinal & Medical Centers is
              not responsible for any interruptions or changes that may occur
              during such modifications.
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`11) USER DATA`}
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              We may retain and use data related to your use of the Services.
              While we take measures to protect your data, you are responsible
              for ensuring the security of any information you transmit to or
              through our Services.
            </p>

            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              Contact Us
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              For inquiries or issues related to the Services, please contact us
              at:
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left font-semibold">
              Hess Spinal & Medical Centers
            </p>
            <p className="font-semibold text-base text-stone-950 text-center md:text-left">
              Location{" "}
              <span className="font-normal text-blue-500 underline block">
                5550 W Executive Dr Ste: 400, Tampa, FL 33609, United States
              </span>{" "}
            </p>
            <p className="text-base font-semibold text-stone-950 text-center md:text-left">
              Contact{" "}
              <span
                className="text-blue-500 font-normal underline block"
              >
                <Link
                  href="tel:800-618-4377"
                  className="hover:underline duration-300 text-base"
                >
                  (800) 618-4377
                </Link>
              </span>{" "}
            </p>
            <p className="text-base text-stone-950 font-semibold text-center md:text-left">
              Email{" "}
              <span
                className="text-blue-500 underline block font-normal"
              >
                <Link
                  href="mailto:info@hessspinalcenters.com"
                  className="hover:underline duration-300 text-base"
                >
                  info@hessspinalcenters.com
                </Link>
              </span>{" "}
            </p>
            <p className="text-base text-stone-950 font-semibold text-center md:text-left">
              {`© 2025 Hess Spinal & Medical Centers. All Rights Reserved.`}
            </p>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default TermsOfService;
