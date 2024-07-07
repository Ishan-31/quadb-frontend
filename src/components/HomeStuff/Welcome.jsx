import React, { forwardRef } from 'react'
import { Image } from '@chakra-ui/react'
import { Text, Flex } from '@chakra-ui/react'
import welcome from '../../assets/images/welcome.png'
const Welcome = () => {
  return (
    <Flex data-aos="fade-up" direction={['column', 'column','row']} justify={['center', 'center', 'space-around']} align={'center'} mt={'1rem'} mb={'1rem'} wrap={'wrap'}>
                <Image
            src={welcome.src}
            width={500}
            mb={'0.3rem'}
        />
        <Text width={['100vw', '100vw', '50vw']} fontSize={['1rem','1rem','1.5rem']} align={['center', 'center', 'left']} px={['3rem', '3rem', '2rem']}>
        Welcome to Looko Publishing House, your gateway to the fascinating world of Vedic art and culture. Our educational materials are designed to make learning about ancient illustrations and devotional themes fun and adventurous. Join us on a journey of discovery and growth as we explore the mysteries of the universe and dive deep into your faith. Let our heroes be your guide on this exciting adventure!
        </Text>

    </Flex>
  )
}

export default Welcome;
