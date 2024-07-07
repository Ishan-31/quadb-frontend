import Layout from "@/components/Layout";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Btn from '../components/MultiPurposeBtn'
import insta from '@/assets/images/insta-icon.png'
import { Stack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-[150px]">
        <Stack spacing={10}>
          <div
            onClick={() => {
              window.open('https://api.whatsapp.com/send?phone=7725868075', '_blank')
            }}
            className="flex flex-row items-center gap-4 py-2 cursor-pointer">
            <img
              className="object-contain max-w-[60px] "
              src="/Assets/Contact Us/whatsapp icon.png"
              alt=""
            />
            <h1 className="text-[18px]">
              Whatsapp: <span>+91 77258 68075</span>
            </h1>
          </div>
          <div className="flex flex-row items-center py-4 gap-4 cursor-pointer">
            <img
              className="object-contain max-w-[60px]"
              src="/Assets/Contact Us/Vectormail-icon.png"
              alt="mail"
            />
            <h1 className="text-[18px] md:text-[25px]">
              Email us here <span>
                <a
                  href="mailto:" className="text-[#FFB800]">
                  lookokids@gmail.com
                </a>
              </span>
            </h1>
          </div>
          <Link
            href="https://instagram.com/loo_koz?utm_source=qr&igshid=MzNlNGNkZWQ4Mg"
            target="_blank"
          >
            <div className="flex flex-row gap-4 py-2 items-center">
              <Image
                className="object-contain cursor-pointer"
                src={insta.src}
                objectFit="contain"
                alt="insta"
                width={50}
                height={50}
              />
              <h2 className="text-[18px] md:text-[25px]">
                Dm us for any enquiry
              </h2>
            </div>
          </Link>
        </Stack>
        <Link href="/">
          <div className="py-8">
            <Btn width={'12rem'} height={'3rem'} text='Back to home' />
          </div>
        </Link>
      </div>
    </Layout>
  );
};

export default Contact;
