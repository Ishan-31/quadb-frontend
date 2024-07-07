import React, { useState } from "react";
import Image from "next/image"; // Import the next/image component

const ProductImagesGrid = (props) => {
  const { images } = props;

  const [expandedImage, setExpandedImage] = useState(null);

  const expandImage = (image) => {
    setExpandedImage(image);
  };

  const closeExpandedImage = () => {
    setExpandedImage(null);
  };

  return (
    <div className="bg-transparent p-4 rounded-md">
      <div className="flex overflow-x-auto">
        <div className="flex items-center gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-[50px] h-[50px] md:w-[25%] md:h-[80px] rounded-md overflow-hidden cursor-pointer"
              onClick={() => expandImage(image)}
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                width={50}
                height={50}
                layout="responsive"
                className="w-full h-full object-cover aspect-w-1 aspect-h-1 rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      {expandedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={closeExpandedImage}
        >
          <div className="max-w-[80%] max-h-[80%] relative">
            <span
              className="absolute top-2 right-2 text-white text-2xl cursor-pointer"
              onClick={closeExpandedImage}
            >
              &#10005;
            </span>
            <Image
              src={expandedImage}
              alt="Expanded Image"
              width={350}
              height={350}
              layout="responsive"
              className="max-w-[250px] md:max-w-[300px] xl:max-w-[350px] h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductImagesGrid;
