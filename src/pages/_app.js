import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ReactDOM from 'react-dom';
import React from "react";
// import App from './App';
import { CountProvider } from '../context/Count';
import { CartProvider } from "react-use-cart";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          href="/Assets/Home Page Assets/Header/favicon.png" // Path to your favicon
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Looko | Publishing House | India</title>

        <link rel="canonical" href="https://looko.in" />

        <meta property="og:site_name" content="Looko" />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://looko.in" />

        <meta property="og:title" content="Looko" />

        <meta name="description" content="At Looko Publishing House, we blend the enchantment of imagination with the essence of devotion." />

        <meta name="keywords" content="Looko, Books, best book publishing house in india, book publishing, kids books, kids learning books, vedic art books, art books, kids learning, kids art books, children books, kids educational books, online kids books store" />

        <meta name="robots" content="follow,index" />

        <link rel="canonical" href="https://looko.in" />

        <meta property="og:url" content="https://looko.in" />

        <meta property="og:title" content="Looko | Publishing House | India" />

        <meta property="og:description" content="Discover the Magic of Vedic Art and Culture with Looko" />

        <meta property="og:image:type" content="image/webp" />

        <meta property="og:image:width" content="730" />

        <meta property="og:image:height" content="1200" />

        <meta name="twitter:card" content="summary" />

        <meta name="twitter:title" content="Looko | Publishing House | India" />

        <meta name="twitter:description" content="Discover the Magic of Vedic Art and Culture with Looko" />

        <meta name="twitter:image" content="https://ik.imagekit.io/o0spphqdc/Looko/Looko-Logo_VuSTMzH19x.png?updatedAt=1700815928409" />

        <meta itemprop="name" content="Looko | Publishing House | India" />

        <meta itemprop="description" content="At Looko Publishing House, we blend the enchantment of imagination with the essence of devotion." />

        <meta property="og:image" itemprop="image" content="https://ik.imagekit.io/o0spphqdc/Looko/Looko-Logo_VuSTMzH19x.png?updatedAt=1700815928409" />


      </Head>

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-full -z-10">
          <img
            className="h-full w-full  "
            src="/Assets/Home Page Assets/Body/Background leaves+Texture.png"
            alt=""
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-full -z-10">
          <img
            className="h-full w-full  "
            src="/Assets/Home Page Assets/Body/Texture Image.png"
            alt=""
          />
        </div>
        <CountProvider>
          <CartProvider>
            <ChakraProvider>
              <div className="z-10 font-poppins">
                <Component {...pageProps} />
              </div>
            </ChakraProvider>
          </CartProvider>
        </CountProvider>
      </div>
    </>
  );
}

export default MyApp;
