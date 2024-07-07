import Layout from "@/components/Layout";
import React from "react";

const privacy = () => {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
        <p className="my-2">
          Welcome to the Looko E-commerce Website. These terms and conditions outline the rules and regulations
          for using our website, which is operated by Looko Publication House, a book publishing company.
          By accessing or using our services, you agree to comply with the following terms and conditions.
          Please read them carefully for a smooth and satisfactory experience.
        </p>

        <ul className="list-none list-inside" data-aos="fade-up">
          <li className="my-4">
            <h2 className="font-bold">Acceptance of Terms</h2>
            <p>
              By using our e-commerce website, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our website.
            </p>
          </li>

          <li className="my-4">
            <h2 className="font-bold">Amendments to Terms</h2>
            <p>
              Looko Publication House reserves the right to modify or replace these terms and conditions at any time without prior notice. Your continued use of the website signifies your acceptance of any changes. It is your responsibility to review these terms periodically.
            </p>
          </li>

          <li className="my-4">
            <h2 className="font-bold">Privacy Policy</h2>
            <p>
              Your use of our website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information. Please read our Privacy Policy to understand how we handle your data.
            </p>
          </li>

          <li className="my-4">
            <h2 className="font-bold">User Accounts</h2>
            <p>
              We provide the use of a secure server when you place orders or
              access your account information. All of the data you enter is
              encrypted by the secure server software (SSL) before it is sent to
              us. All of the customer information we gather is additionally
              secured against unauthorised access.
            </p>
          </li>

          <li className="my-4">
            <h2 className="font-bold">Content and Intellectual Property</h2>
            <p>
              All content on the Looko E-commerce Website, including text, graphics, logos, images, audio, video, and software, is the property of Looko Publication House or its content suppliers and is protected by copyright and other intellectual property laws. You may not use or reproduce this content without our written permission.
            </p>
            {/* ... Continue other sections */}
          </li>

          <li className="my-4">
            <h2 className="font-bold">User Conduct</h2>
            <p>
              When using our website, you agree not to:
              - Engage in any activity that disrupts or interferes with the website's operation.
              - Attempt to gain unauthorized access to any part of the website or any user accounts.
              - Transmit any harmful code, viruses, or malware.
              - Violate any applicable laws or regulations.

              {/* ... Continue other sections */}
            </p>
          </li>

          <li className="my-4">
            <h2 className="font-bold">Orders and Payments</h2>
            <p>
              When you place an order on our website, you agree to provide accurate and complete information. You are responsible for paying all charges associated with your order. Looko Publication House reserves the right to refuse or cancel any order at our discretion.
            </p>
          </li>
          <li className="my-4">
            <h2 className="font-bold">
              Shipping and Returns
            </h2>
            <p>
              Our shipping and returns policies are outlined in detail on our website. By making a purchase, you agree to these policies.
            </p>
          </li>
          <li className="my-4">
            <h2 className="font-bold">
              Termination
            </h2>
            <p>
              We reserve the right to terminate or suspend your access to our website, without notice, for any reason, including a breach of these terms and conditions.
            </p>
          </li>
          <li className="my-4">
            <h2 className="font-bold">
              Limitation of Liability
            </h2>
            <p>
              Looko Publication House is not liable for any damages, whether direct or indirect, resulting from the use or inability to use our website. This includes damages for loss of data, profits, or business interruption.
            </p>
          </li>
          <li className="my-4">
            <h2 className="font-bold">
              Governing Law
            </h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Looko Publication House operates. Any legal actions arising out of or related to these terms and conditions must be filed in Ujjain, Madhya Pradesh, India only.
            </p>
          </li>
          <li className="my-4">
            <h2 className="font-bold">
              Contact Information
            </h2>
            <p>
              If you have any questions or concerns regarding these terms and conditions, please contact us through our customer support channels.
              Thank you for choosing the Looko E-commerce Website. We are committed to providing you with the best possible experience for your book-related needs.
            </p>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default privacy;
