import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Text, Flex } from '@chakra-ui/react'
import StoreItem from './StoreItem'
import Btn from '../MultiPurposeBtn'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'
import { getallProducts } from "@/api/product";
import cimg1 from '../../assets/carousel/cimg1.jpg'
import cimg2 from '../../assets/carousel/cimg2.jpg'
import cimg3 from '../../assets/carousel/cimg3.jpg'
import cimg4 from '../../assets/carousel/cimg4.jpg'

function StoreCarousel() {
  const [products, setProducts] = useState([])
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const fetchAllProducts = async () => {
    try {
      const res = await getallProducts()
      if (res.status === 200) {
        let data = res.data.data
        data = data.filter((product, index) => index < 4)
        data = data.map((product, index) => {
          if (index === 0) {
            product['carouselImage'] = cimg1
          }
          else if (index === 1) {
            product['carouselImage'] = cimg2
          }
          else if (index === 2) {
            product['carouselImage'] = cimg3
          }
          else if (index === 3) {
            product['carouselImage'] = cimg4
          }
          return product
        })
        setProducts(data)
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchAllProducts()
  }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'black' }}>
      <Text align={'center'} fontSize={'2rem'} mb={'3rem'}>Check out our store</Text>
      {products.length === 0 && <Text align={'center'} fontSize={'1.5rem'} mb={'3rem'}>Loading...</Text>}
      {products.length > 0 &&
        <Slider {...settings}>
          {console.log(products)}
          {products?.map((product, index) => {
            return <StoreItem key={index}
              id={product._id}
              img={product?.carouselImage?.src} />
          })}
        </Slider>
      }
      <Flex justify={'center'} mt={'3rem'}>
        <Link href="/allProducts">
          <Btn width={'8rem'} height={'2rem'} text='Explore Store' />
        </Link>
      </Flex>
    </div>
  );
}

export default StoreCarousel;
