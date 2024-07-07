import React from "react";
import Link from "next/link";
import Image from "next/image";

const RahaProducts = (props) => {
  const { products } = props;
  return (
    <div id="raah" className="flex flex-col items-center py-20">
      <div className="grid grid-cols-2 xs:grid-cols-2 gap-4 mt-8 bg-transparent md:gap-8 xl:gap-12">
        {products?.map((product, index) => (
          <div
            key={index}
            className="md:max-w-[300px] max-w-[165px]  bg-transparent shadow-xl flex flex-col gap-4"
          >
            <Link href={`/product/${product._id}`}>
              {/* Replaced img tag with next/Image */}
              <Image
                src={product.defaultImage}
                alt={product.title}
                width={403}
                height={403}
                layout="responsive"
                objectFit="cover"
              />
            </Link>

            <div className="flex flex-col justify-between gap-2 h-full">
              <div className="flex flex-col gap-2">
                <Link href={`/product/${product._id}`}>
                  <h2 className="font-bold mt-4 px-4 text-[12px] md:text-[15px]">
                    {product.title}
                  </h2>
                </Link>
                <Link href={`/product/${product._id}`}>
                  <p className="text-gray-600 hidden md:block px-4 md:text-[12px]">
                    {product.shortDescription}
                  </p>{" "}
                </Link>
              </div>

              <h2 className="font-bold text-[14px] md:text-[18px] px-4">
                ₹{product.price}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RahaProducts;
