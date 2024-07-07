import { getProductById } from "@/api/product";
import Layout from "@/components/Layout";
// import Image from "next/image";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Image, Box, Flex, Text, border } from '@chakra-ui/react'
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
// import SizeChartImage from "/public/Assets/Product Details Page/Size Chart.png";
import Btn from '../../components/MultiPurposeBtn'
import Accordions from "@/components/Store/Accordions";
import payment from '../../assets/images/payment.png'
import delivery from '../../assets/images/delivery.png'
import service from '../../assets/images/24hr.png'
import { useCount } from '../../context/Count';
import Star from "@/components/Store/Rating";
import { useCart } from "react-use-cart";

function DynamicProduct(props) {
  const { product } = props;
  const [quantity, setQuantity] = useState(1);
  const [dimg, setDimg] = useState(product.images[0])
  const { updateCount } = useCount();
  const { addItem } = useCart();


  let isAddingToCart = false; // Add this variable

  const handleAddToCart = async () => {
    if (isAddingToCart) {
      return;
    }

    isAddingToCart = true;
    const item = {
      id: product._id,
      title: product.title,
      price: product.price,
      quantity: quantity,
      image: product.defaultImage,
    };
    try {
      // await addToCart(item);
      addItem(item)
      updateCount()
      // Show toast notification when product is added to cart
      toast.success("Product added to cart", {
        position: "top-right",
        autoClose: 3000, // 3 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      isAddingToCart = false;
    }
  };

  return (
    <Layout className="flex flex-col">
      <div className="flex mb-8 flex-col flex-wrap md:flex-row space-y-6 md:space-y-0 md:space-x-6 bg-transparent justify-center gap-10">
        {/* Image Container */}
        <div className="  max-w-[705px] max-h-[767px] flex flex-col items-center pt-8">
          <h1 className=" lg:text-[28px] md:hidden font-bold  font-poppins py-2 text-right">
            {product?.title}
          </h1>{" "}
          <div className="md:hidden flex justify-center md:justify-start mb-4">
            <Star stars={3.5} />
          </div>
          <Image
            className="smc-border"
            // border={'1px solid black'}
            borderRadius={'20px'}
            src={dimg}
            alt=""
            width={405}
            height={480}
            layout="responsive"
          />
          <div className="max-w-[300px] md:max-w-[500px]">
            <div className=" py-4 bg-transparent items-center w-full overflow-x-auto">
              {/* <ProductImagesGrid images={product?.images} /> */}
              <div className="bg-transparent p-4 rounded-md">
                <div className="flex overflow-x-auto">
                  <div className="flex items-center gap-4">
                    {product.images.map((image, index) => (

                      <div
                        key={index}
                        className={`min-w-[50px] md:w-[25%] ${dimg == image ? "border border-[#F38CB9]" : "border"} active:border-transparent rounded-md overflow-hidden cursor-pointer`}
                        onClick={() => setDimg(image)}
                      >
                        <Image
                          src={image}
                          alt={`Image ${index + 1}`}
                          width={55}
                          height={55}
                          layout="responsive"
                          className="w-full h-full object-cover aspect-w-1 aspect-h-1 rounded-md"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Info Container */}
        <div className=" bg-transparent pb-6 pt-4">
          <h1 className=" lg:text-[28px] hidden md:block font-bold font-poppins py-2 ">
            {product.title}
          </h1>{" "}

          <div className="flex items-center justify-center md:justify-start mb-4 ">
            <div className="flex flex-col items-start mb-4">
              <span className="text-xl font-bold font-Poppins text-black">
                ₹{product.price}
              </span>
              <span className="text-sm font-Poppins text-black">MRP
                <span className="text-sm mx-2 line-through font-Poppins text-black">
                  ₹{product.actualPrice}
                </span>({product.discountPercent}% OFF)</span>
              {/* <span className="ml-2 text-gray-600 line-through">₹8,999</span> */}
            </div>
          </div>
          {/* <div className="flex items-center mb-4 justify-center md:justify-start"> */}
          <div className="flex justify-center md:justify-start mb-4 hidden md:block">
            <Star stars={3.5} />
          </div>
          <div className="flex flex-col gap-4">
            <ToastContainer />
            <Link href="/cart" className="flex justify-center">
              <Btn width={'20rem'} height={'2.5rem'} text='Buy Now' func={handleAddToCart} />
            </Link>
            <ToastContainer />
            <Box className="flex justify-center">
              <button
                onClick={() => handleAddToCart()}
                className="bg-[#8AD9DD] text-white py-2 px-6 rounded-md max-w-[387px] w-80"
              >
                Add To Cart
              </button>
            </Box>
          </div>
        </div>
      </div>


      <Accordions
        aboutData={product?.longDescription}
        specificationData={product?.shortDescription} />
      <Flex width={'100%'} wrap={'wrap'} my={'3rem'} justify={'space-evenly'}>
        <Image
          data-aos="fade-up"
          src={delivery.src}
          alt=""
          width={100}
          height={100}
          layout="responsive"
        />
        <Image
          data-aos="zoom-in"
          src={payment.src}
          alt=""
          width={100}
          height={100}
          layout="responsive"
        />
        <Image
          data-aos="fade-up"
          src={service.src}
          alt=""
          width={100}
          height={100}
          layout="responsive"
        />
      </Flex>
    </Layout>
  );
}

export default DynamicProduct;

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  try {
    const res = await getProductById(id);
    return {
      props: {
        product: res.data.data,
      },
    };
  } catch (err) {
    return {
      props: {
        product: null,
      },
    };
  }
}
