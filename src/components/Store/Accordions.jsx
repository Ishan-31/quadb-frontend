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
function Accordions(props) {
  const { aboutData, specificationData } = props
  return (
    <Flex justify={'center'} width={'100%'} data-aos="fade-up">
      <Accordion allowMultiple width={['100%', '80%', '70%']} >
        <AccordionItem fontWeight={'1rem'} color={'white'} bgImage={"linear-gradient(to right, rgba(243, 140, 185, 1) , rgba(138, 217, 221, 1))"} borderRadius={'1rem'} padding={['0.3rem']} mb={'1.5rem'}>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='center'>
                About The Book
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {aboutData}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem fontWeight={'1rem'} color={'white'} bgImage={"linear-gradient(to right, rgba(243, 140, 185, 1) , rgba(138, 217, 221, 1))"} borderRadius={'1rem'} padding={['0.3rem']} mb={'1.5rem'}>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='center'>
                Specifications
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ul>
              {specificationData?.split(',').map((item, i) => {
                return (
                  <li key={i}>{item}</li>
                )
              })}
            </ul>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  )
}

export default Accordions
