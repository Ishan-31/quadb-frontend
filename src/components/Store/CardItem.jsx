import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { ButtonGroup, Heading, Divider, Flex, Button, Stack, Text } from '@chakra-ui/react'
import cart from '../../assets/images/cart2.png'
const CardItem = (Props) => {
  return (
<Card maxW='sm' margin={'2rem'}>
  <CardBody>
    <Flex width={'100%'} justify={'center'}>
    <Image
      src={Props.img}
      alt='Hindu Mythological Book'
      borderRadius='lg'
      width={'17rem'}
    />
    </Flex>
    <Stack mt='2' spacing='3'>
      <Heading size='md' px={'1rem'}>{Props.title}</Heading>
    </Stack>
  </CardBody>
  {/* <Divider /> */}
  <CardFooter px={'2rem'} py={'0'} pb={'1.5rem'}>
    <Flex width={'100%'} justify={'space-between'} align={'center'}>
        <Flex width={'80%'} justify={'start'} align={'center'}>
            <Text color='black' fontSize={['1rem', '1.5rem', '1.5rem']}>
            Rs. {Props.discounted}
            </Text>
            <Text color='black' fontSize={['0.8rem','1.2rem','1.2rem']} as={'del'} ml={'1rem'}>
            Rs. {Props.price}
            </Text>
        </Flex>
        <Image
            src={cart.src}
            width={'2rem'}
        />
    </Flex>
    {/* <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button> */}
    {/* </ButtonGroup> */}
  </CardFooter>
</Card>
  )
}

export default CardItem
