import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useCount } from '../context/Count';
import { useCart } from "react-use-cart";

const Cart = () => {
  const router = useRouter();
  const [cartData, setCartItems] = useState([]);
  const { updateCount } = useCount();
  const { updateItem, removeItem } = useCart();
  const { items, emptyCart } = useCart();
  async function fetchCartItems() {
    // const items = await getCartItems();
    setCartItems(items);
  }
  useEffect(() => {
    fetchCartItems();
  }, []);
  const calculateTotalAmount = () => {
    return cartData.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const removeItemFromCart = async (itemId) => {
    // await removeFromCart(itemId);
    removeItem(itemId)
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    updateCount()
  };


  const updateQuantity = async (item, sign) => {
    if (sign === "-") {
      if (item.quantity === 1) {
        return removeItem(item.id)
      }
      // await updateCartItem(item);
      updateItem(item.id, {
        quantity: item.quantity - 1
      })
      setCartItems((prevItems) =>
        prevItems.map((prevItem) =>
          prevItem.id === item.id
            ? { ...prevItem, quantity: prevItem.quantity - 1 }
            : prevItem
        )
      );
    } else {
      // await updateCartItem(item);
      updateItem(item.id, {
        quantity: item.quantity + 1
      })
      setCartItems((prevItems) =>
        prevItems.map((prevItem) =>
          prevItem.id === item.id
            ? { ...prevItem, quantity: prevItem.quantity + 1 }
            : prevItem
        )
      );
    }
  };

  const handleProceedToCheckout = () => {
    if (cartData.length === 0) {
      toast.warning("Please add products to your cart first.");
    } else {
      const amt = calculateTotalAmount()
      router.push(`/checkout?totalAmount=${amt}`);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row justify-evenly md:items-start items-center my-10 gap-6">
        {/* First Container */}
        <div className="w-full md:w-1/2 flex flex-col justify-between items-center">
          <div className="w-[340px] md:w-full px-4 py-2 bg-gradient-to-r from-[#F38CB9] to-[#8AD9DD] rounded-lg text-white text-center">
            <h2 className="text-xl font-bold">My Cart</h2>
          </div>
          <div className="md:w-full  p-4">
            <button
              className="bg-[#F38CB9] rounded p-1 text-white mb-4"
              onClick={() => {
                // clearCart();
                emptyCart();
                setCartItems([]);
                updateCount();
              }}
            >
              Clear Cart
            </button>

            {cartData.length === 0 ? (
              <p>Your cart is empty. Please add products to your cart.</p>
            ) : (
              cartData.map((item, index) => (
                <div key={index} className="flex mb-8 justify-between">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-259px h-259px object-contain"
                    style={{ maxHeight: "259px" }}
                  />
                  <div className=" flex flex-col md:ml-4 justify-between pl-2">
                    <button className="border-[#F38CB9] border rounded p-1 text-[#F38CB9] mb-4"
                      onClick={() => removeItemFromCart(item.id)}>remove</button>
                    <h3 className="text-sm font-bold">{item.title}</h3>
                    <p className="hidden md:block text-gray-600">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center mt-2 flex-wrap ">
                      <div className="text-sm px-2">Rs {item.price}</div>
                      <div className="flex items-center justify-between border rounded-xl px-2 border-gray-500 shadow-md bg-white">
                        <button
                          onClick={() => updateQuantity(item, "-")}
                          className="  p-1 md:px-3 md:py-1 text-black"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item, "+")}
                          className=" p-1 md:px-3 md:py-1"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Second Container */}
        <div className="w-full md:w-1/3 p-4 font-bold flex flex-col text-center md:text-left border border-gray-400">
          <h2 className="md:text-[25px] text-center font-bold">
            Order Summary
          </h2>
          {cartData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between flex-wrap items-center pt-10 px-2"
            >
              <div>
                x {item.quantity}
              </div>
              <div className="px-3"> {item.title}</div>
              <div>Rs {item.price * item.quantity}</div>
            </div>
          ))}
          <div className="border-t border-gray-400 mt-10 px-2 py-8">
            <div className="flex justify-between items-center">
              <div>Amount</div>
              <div>
                Rs{" "}
                {cartData.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div>Tax</div>
              <div>Rs 0</div>
            </div>
            <div className="border-t border-gray-400 mt-8 py-2">
              <div className="flex justify-between items-center py-6">
                <div>Total Amount</div>
                <div>
                  Rs{" "}
                  {cartData.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )}
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link href={`/checkout?totalAmount=${calculateTotalAmount()}`}>
                <button
                  className={`bg-gradient-to-r from-[#F38CB9] to-[#8AD9DD] rounded-xl shadow-lg text-white mt-4 py-2 px-2 w-auto max-h-[77px] md:text-[26px] ${cartData.length === 0 ? "opacity-30 cursor-not-allowed" : ""
                    }`}
                  onClick={handleProceedToCheckout}
                  // disabled={cartData.length === 0}
                >
                  <h2 className="text-sm font-bold">Proceed to Checkout</h2>

                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
