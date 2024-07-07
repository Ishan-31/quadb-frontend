import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Flex
  } from '@chakra-ui/react'

const QueryBox = (Props) => {
  return (
    // <Flex justify={'center'} mx={['1rem','1rem','7rem']}>
    //  <Accordion>
  <AccordionItem fontWeight={'1rem'} color={'white'} bgImage={"linear-gradient(to right, rgba(243, 140, 185, 1) , rgba(138, 217, 221, 1))"} borderRadius={'1rem'} padding={['0.3rem']} mb={'1.5rem'}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' width={['80vw','80vw','60vw']}>
            {Props.question}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} pr={['2rem','2rem','4rem']} width={['90vw','90vw','60vw']}>
        {Props.answer}
    </AccordionPanel>
  </AccordionItem>
/* </Accordion> 
    </Flex> */
  )
}




  export default QueryBox
