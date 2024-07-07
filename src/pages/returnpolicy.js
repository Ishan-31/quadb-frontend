import Layout from "@/components/Layout";
import React from "react";

const ReturnPolicy = () => {
  const DATA = [
    "To go through the exchange or return policy, get in touch with customer service.",
    "Follow the return procedures within five days of receiving the package.",
    "Requests made after the return window are not accepted and not eligible for returns.",
    "Our customer service team will review and handle the request within two business days.",
    "To initiate the return/refund/exchange, contact our customer service team and provide your order number and the item(s) details you wish to return.",
    "Keep the package complete with the original tags, packaging, and invoice. The return pickup will be organized by us through our logistics partners.",
    "Do ask the logistics partner for the courier slip when handing over the package once the pickup has been scheduled.",
    "If the reverse pick-up option is not available at your address, courier your order back to us. Send us an email at email to be inserted with your order number and the courier tracking information.",
    "After the products undergo a quality check, we will deliver a closure at your request and according to your preference.",
    "We allow returns and exchanges as long as the item(s) is/are defective and returned in resalable condition with all original tags, packaging, and invoices.",
    "All refunds will be made by Bank Transfer only.",
    "We also offer exchange on prepaid orders depending on the availability of the desired items.",
  ]
  return (
    <Layout>
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-2xl font-semibold mb-4">RETURN POLICY</h2>
        <ul className="list-disc pl-6" data-aos="fade-up">
          {DATA.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default ReturnPolicy;
