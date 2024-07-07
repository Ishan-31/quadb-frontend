import React from "react";
import Image from "next/image";
const Shopfrom = () => {
  return (
    <div className="py-8 w-full">
      <div className=" flex flex-col  items-center justify-center lg:-h-[70px] h-[44px] md:[49px] w-full bg-[#27587D]">
        <div className="flex gap-2 items-center justify-center">
          <h1 className="text-[12px] md:text-[15px] lg:text-[18px] xl:text-[20px] font-poppins text-white text-center">
            Shop from new brands at 30% off valid for 24 hours
          </h1>
          <div className="pt-1 ">
            <Image
              className="object-contain text-white"
              src="/Assets/Home Page Assets/Header/Arrow 4arrow.png"
              alt="arrow"
              width={18}
              height={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopfrom;
