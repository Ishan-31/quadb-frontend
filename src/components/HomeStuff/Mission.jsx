import React from 'react'
import { Image } from '@chakra-ui/react'
import { ButtonGroup, Container, IconButton, Stack, Text, Flex } from '@chakra-ui/react'
import mission from '../../assets/images/mission.png'
import Btn from '../MultiPurposeBtn'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Mission = () => {
  const Router = useRouter()
  const exploreStore = () => {
    Router.push("/products")
  }
  return (
    <Flex direction={['column', 'column', 'row']} justify={['space-evenly','space-evenly','space-evenly']} align={'center'} px={['1rem','1rem','5rem']} py={'5rem'}>
       <Flex display={['block', 'block', 'none']} align={'center'} justify={'center'} wrap={'wrap-reverse'}><Text align={'center'} fontSize={'2.5rem'} fontWeight={'1px'} mb={'3rem'}>Mission</Text>
        </Flex> 
          <Image
            data-aos="fade-up"
            src={mission.src}
            height={'400'}
            mb={['4rem', '4rem', '0rem']}
          />
        <Flex display={['none', 'none', 'block']} justify={'space-around'}>
          <Text fontSize={'2.5rem'} fontWeight={'1px'} mb={'1rem'}>Mission</Text>
          <Text data-aos="fade-up" width={'25vw'} fontSize={'1.5rem'} mb={'2rem'}>Ignite love for learning and faith in young minds through engaging and fun educational materials that inspire curiosity, creativity, and connection with the divine. Join us on this journey of discovery!</Text>
          <Link href="/allProducts">
        <Btn width={'8rem'} height={'2rem'} text='Explore Store'/>
        </Link>          
        </Flex>
 
        <Text data-aos="zoom-in" width={'100%'} align={'center'} display={['block', 'block', 'none']} fontSize={'1.5rem'} mb={'1rem'}>Ignite love for learning and faith in young minds through engaging and fun educational materials that inspire curiosity, creativity, and connection with the divine. Join us on this journey of discovery!</Text>


    </Flex>
  )
}

export default Mission
