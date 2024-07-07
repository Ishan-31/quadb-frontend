import Layout from "@/components/Layout";
import React from "react";

const privacy = () => {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">PRIVACY POLICY</h1>
        <p className="my-4">
          At Looko, we are committed to protecting your privacy and ensuring that your personal information
          is handled with care and in compliance with applicable data protection laws.
          This Privacy Policy outlines our practices concerning the collection, use, and protection of your personal information in the context of our e-commerce website. Please read this policy carefully to understand how we handle the data.
        </p>
        <ul className="list-none list-inside" data-aos="fade-up">
          <li className="my-4">
            <h2 className="font-bold">SECURITY GUARANTY</h2>
            <p>
              Without your express permission, we hereby agree not to sell or
              otherwise transfer your personal information to third parties for
              their marketing needs. We may occasionally disclose broad
              statistical data about our website and users, such as the number
              of visitors, the quantity and nature of goods and services
              purchased, etc. Our staff members are only given access to your
              information when they need it to carry out their duties. Any
              employee who disobeys our privacy and/or security policies faces
              disciplinary action, which may include termination as well as
              possible civil and/or criminal prosecution.
            </p>
          </li>

          <li className="my-4">
            <h2 className="font-bold">INFORMATION ON COLLECTION</h2>
            <p>
              We obtain and store your personal information from you when you
              use our website. The provision of our services is our main
              objective in doing this. Generally speaking, you are free to
              browse the website without disclosing any personal information.
              Your name, date of birth, contact information, email address, user
              name, password, address or place of employment, billing
              information, shipping information, bank account information, and
              other personal information as indicated on the forms throughout
              the Site may be requested of you in order to register on our site
              and use all of its features.
            </p>
          </li>

          <li className="my-4">
            <h2 className="font-bold">DISCLOSE OF YOUR INFORMATION</h2>
            <p>
              In some cases, we may use the information we have about you to
              send you information about new services and promotions that are
              specifically tailored to your interests. To run our Site, we may
              work with a variety of external organisations (third party service
              providers).
            </p>
            {/* ... Continue other sections */}
          </li>

          <li className="my-4">
            <h2 className="font-bold">SECURITY</h2>
            <p>
              We provide the use of a secure server when you place orders or
              access your account information. All of the data you enter is
              encrypted by the secure server software (SSL) before it is sent to
              us. All of the customer information we gather is additionally
              secured against unauthorised access.
            </p>
            {/* ... Continue other sections */}
          </li>

          <li className="my-4">
            <h2 className="font-bold">CHANGE IN POLICY</h2>
            <p>
              You agree without reservation that using this site constitutes
              your assent to our Privacy Policy and that this Privacy Policy
              forms a part of the User Agreement. Do not use our Site if you
              disagree with this privacy statement. Your visit and any privacy
              dispute are governed by this policy and the User Agreement,
              including any damage cap. We reserve the right to modify these
              privacy policies and the terms of use at any time.
            </p>
          </li>

          <li className="my-4">
            <h2 className="font-bold">YOUR RIGHTS</h2>
            <p>
              Depending on your jurisdiction, you may be given certain rights
              regarding your personal data under data protection and privacy
              laws. The following rights could be one or all of them:
            </p>
          </li>

          <li className="my-4">
            <h2 className="font-bold">CHANGE IN POLICY</h2>
            <p>
              You agree without reservation that using this site constitutes your assent to our Privacy
              Policy and that this Privacy Policy forms a part of the User Agreement. Do not use our Site if you disagree with this privacy statement. Your visit and any privacy dispute are governed by this policy and the User Agreement,
              including any damage cap. We reserve the right to modify these privacy policies and the terms of use at any time.
            </p>
          </li>

          <li className="my-4">
            <h2 className="font-bold">EFFECTIVE DATE: [15-10-2023]</h2>
            <p>
              Your use of our e-commerce website signifies your acceptance of this Privacy Policy. Please review this policy periodically for any changes.
            </p>
          </li>

          <li className="my-4">
            <h2 className="font-bold">CONTACT US</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or your personal information, please contact us through our customer support channels.
            </p>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default privacy;
