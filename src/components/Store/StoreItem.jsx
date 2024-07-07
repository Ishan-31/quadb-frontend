import React, { useEffect } from 'react'
import { Flex } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'
const StoreItem = (props) => {
  const router = useRouter()
  useEffect(() => {
    router.prefetch(`/product/${props.id}`)
  }, [])

  return (
    <Flex height={'350px'} width={'380px'} justify={'center'}>
      <Image
      cursor={'pointer'}
        onClick={() => {
          router.push(`/product/${props.id}`)
        }}
        src={props.img}
        width={300}
        mb={'0.3rem'}
      />
    </Flex>
  )
}

export default StoreItem
