import Layout from "@/components/Layout";
import React, { useEffect } from "react";
import Link from "next/link";
import { useCount } from '../context/Count'
import axios from "axios";
const success = () => {
  const { updateCount } = useCount();
  useEffect(async () => {
    let order = JSON.parse(localStorage.getItem("orderDetails"));
    if (order) {
      let id = order._id
      const res = await axios.patch(`https://looko-backend.vercel.app/api/v1/order/${id}/status`, {
        status: "order placed"
      })
      if(res.status === 200){
        localStorage.removeItem("orderDetails")
        console.log("Order Status Updated")
      }
    }
  }, []);
  updateCount()
  return (
    <Layout>
      <div className="flex flex-col items-center gap-5 py-4">
        <img
          src="/Assets/Success-Failure/Success.png"
          alt="Success"
          className="object-contain max-w-[100px]"
        />
        <div className="flex flex-col items-center text-center gap-3">
          <h2 className="text-center">Your Order has been placed !</h2>
          <h2>You will recieve further communication on your mail</h2>
        </div>

        <Link href="/">
          <button className="w-[206px] p-2 bg-gradient-to-r from-[#F38CB9] to-[#8AD9DD] rounded-lg text-white max-w-[387px] md:w-[387px]">
            {" "}
            Return to Home
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default success;
