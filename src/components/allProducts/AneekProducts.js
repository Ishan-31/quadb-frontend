import React from "react";
// import Link from "next/link";
import cart from '../../assets/images/Cart2.png'
import { Link, Image, Flex, Text } from "@chakra-ui/react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCount } from '../../context/Count';
import { useCart } from "react-use-cart";
// import Image from "next/image"; // Import the next/image component

const AneekProducts = (props) => {
  const { products } = props;
  const { addItem } = useCart();
  return (
    <div id="aneek" className="flex flex-col items-center bg-transparent mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 bg-transparent md:gap-8 xl:gap-12">

        {products?.map((product, index) => {
          let isAddingToCart = false;
          var quantity = 1;
          const { updateCount } = useCount();
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
              addItem(item)
              updateCount()
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
            <div data-aos="zoom-in-up"
              key={index}
              className="bg-transparent pinkshadow flex flex-col"
            >
              <Link href={`/product/${product._id}`} py={'1.5rem'} px={'2.5rem'}>
                <Flex width={'100%'} justify={'center'} align={'center'}>
                  <Image
                    src={product.defaultImage}
                    alt={product.title}
                    height={300}
                    layout="responsive"
                    objectFit="cover"
                  />
                </Flex>
              </Link>

              <div className="flex flex-col justify-evenly h-full pb-4">
                <div className="flex flex-col gap-2">
                  <Link href={`/product/${product._id}`}>
                    <h2 className="font-bold mt-1 px-4 mb-2 text-[12px] md:text-[15px]">
                      {product.title}
                    </h2>
                  </Link>
                </div>
                <Flex width={'90%'} justify={'space-between'}>
                  <Flex width={'50%'} justify={'flex-start'} px={'1rem'} align={'center'}>
                    <h2 className="font-bold text-[14px] md:text-[18px] mr-2">
                      ₹{product.price}
                    </h2>
                    <Text as='del'>
                      ₹{product.actualPrice}
                    </Text>
                  </Flex>
                  <button
                    onClick={() => handleAddToCart()}
                  >
                    <Image
                      src={cart.src}
                      height={'2rem'}
                    />
                  </button>
                </Flex>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default AneekProducts;
