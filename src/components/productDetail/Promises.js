import React from "react";
import Image from "next/image"; // Import the next/image component

const Promises = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      {/* <h1 className="text-center py-4 lg:text-[25px]">Description</h1>
      <p className="py-4 lg:text-[18px] px-2">
        The Blue Suit Set in Italian Cotton is a sophisticated and luxurious
        ensemble, tailored to perfection using high-quality Italian cotton
        fabric. The dupatta and front are gleaming with bead works making it a
        perfect fit.
      </p> */}
      <Image
        src="/Assets/Product Details Page/Promises Grid Default.png"
        alt="default promise"
        width={720}
        height={"500"} // You might need to specify the actual height
        layout="responsive"
        className="hidden md:block py-4 w-full"
      />
      <Image
        src="/Assets/Product Details Page/Promises Grid Vertical .png"
        alt="vertical promise"
        width={"720"} // You might need to specify the actual width
        height={"500"} // You might need to specify the actual height
        layout="responsive"
        className="md:hidden py-2 block"
      />
    </div>
  );
};

export default Promises;
