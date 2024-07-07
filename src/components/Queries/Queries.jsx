import React from 'react'
import { ButtonGroup, Box, IconButton, Stack, Text, Flex } from '@chakra-ui/react'
import {
  Accordion
} from '@chakra-ui/react'
import QueryBox from './QueryBox'

const Queries = () => {
  return (
    <Box data-aos="fade-up" my={'2rem'} mx={['1rem', '1rem', '0rem']}>
    <Text align={'center'} mb={'2rem'} fontSize={['2.5rem','2.5rem','3rem']}>Few Questions Answered</Text>
    <Flex justify={'center'} mx={['1rem','1rem','7rem']}>
     <Accordion allowToggle>
    <QueryBox question='What kind of materials does Looko Publishing House use for their books?' answer='Looko Publishing House uses high-quality materials for their books to ensure durability and longevity. They use materials that are safe for children and the environment, such as recycled paper and non-toxic inks.'/>
    <QueryBox question="What age group are Looko Publishing House's books designed for?" answer="Looko Publishing House's books are designed for children in the age group of 0-3 years old. They are specially crafted to suit the cognitive and developmental needs of this age group."/>
    <QueryBox question='What are Vedic books, and does Looko Publishing House publish them?' answer='Vedic books are books based on the ancient Hindu scriptures known as the Vedas. Looko Publishing House specializes in publishing Vedic books.'/>
    </Accordion> 
    </Flex>
    </Box>
  )
}

export default Queries
