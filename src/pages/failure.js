import Layout from "@/components/Layout";
import React from "react";

const failure = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center gap-5 py-4">
        <img
          src="https://ik.imagekit.io/o0spphqdc/Looko/payment_failed?updatedAt=1702448343028"
          alt="Failure"
          className="object-contain max-w-[100px]"
        />
        <div className="flex flex-col items-center text-center gap-3">
          <h2 className="text-center">Transaction Failed!</h2>
          {/* <h2>Error:</h2> */}
          <h2>Contact us at lookokids@gmail.com</h2>
        </div>

        <button className="w-[206px] p-2 bg-gradient-to-r from-[#F38CB9] to-[#8AD9DD] rounded-lg text-white max-w-[387px] md:w-[387px]">
          {" "}
          Contact Us
        </button>
      </div>
    </Layout>
  );
};

export default failure;
