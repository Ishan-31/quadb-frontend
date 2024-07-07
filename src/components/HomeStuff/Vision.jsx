import React from 'react'
import { Image } from '@chakra-ui/react'
import { ButtonGroup, Container, IconButton, Stack, Text, Flex } from '@chakra-ui/react'
import visionbg from '../../assets/images/vision-bg.png'
import vision from '../../assets/images/vision.png'
import Btn from '../MultiPurposeBtn'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Vision = () => {
  const Router = useRouter()
  const exploreStore = () => {
    Router.push("/products")
  }
  return (
    <Flex bgImage={visionbg.src} wrap={'wrap'} bgRepeat={'no-repeat'} bgSize={'cover'} direction={['column', 'column', 'row']} justify={['space-evenly', 'space-evenly', 'space-evenly']} align={'center'} px={['1rem', '1rem', '5rem']} py={'5rem'}>
      <Flex display={['none', 'none', 'block']} justify={'space-around'}>
        <Text fontSize={'2.5rem'} fontWeight={'1px'} mb={'1rem'}>Vision</Text>
        <Text data-aos="fade-up" width={'25vw'} fontSize={'1.5rem'} mb={'2rem'}>
          {"Inspiring young hearts and minds through devotional learning that's accessible, fun, and unforgettable!"}</Text>
          <Link href="/allProducts">
        <Btn width={'8rem'} height={'2rem'} text='Explore Store'/>
        </Link>
      </Flex>
      <Flex display={['block', 'block', 'none']} align={'center'} justify={'center'} wrap={'wrap'}><Text align={'center'} fontSize={'2.5rem'} fontWeight={'1px'} mb={'3rem'}>Vision</Text>
      </Flex>
      <Image
        data-aos="fade-up"
        src={vision.src}
        height={'400'}
        mb={['4rem', '4rem', '0rem']}
      />
      <Text width={'100%'} data-aos="zoom-in" align={'center'} display={['block', 'block', 'none']} fontSize={'1.5rem'} mb={'1rem'}>
        {"Inspiring young hearts and minds through devotional learning that's accessible, fun, and unforgettable!"}</Text>
    </Flex>
  )
}

export default Vision
