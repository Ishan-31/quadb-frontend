import React from 'react'
import { Image } from '@chakra-ui/react'
import { Box, Stack, Text, Flex } from '@chakra-ui/react'
import lookologo from '@/assets/images/LOOKO-LOGO.png'
import Btn from '../MultiPurposeBtn'
import insta from '@/assets/images/insta-icon.png'
import fb from '@/assets/images/facebook-logo.png'
import yt from '@/assets/images/youtube-icon.png'
import wp from '@/assets/images/linkedin.png'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Footer = () => {
    const router = useRouter()
    return (
        <Box as="footer" role="contentinfo" width={'100%'}>
            <Stack spacing={{ base: '4', md: '5' }}>
                <Flex direction={'column'}>
                    <Flex justify={["space-around", "space-around", "space-around"]} direction={["column", "column", "row"]} align="center">
                        <Flex direction={'column'} width={['100vw', '100vw', '30vw']} justify={['center', 'center', 'center']} align={['center', 'center', 'start']} mb={['2rem', '2rem', '1rem']}>
                            <Image
                                src={lookologo.src}
                                width={[200, 200, 300]}
                                mb={'0.3rem'}
                            />
                            <Text align={['center', 'center', 'left']} mb={'1rem'} width={['90vw', '90vw', '30vw']}>
                                Looko Publishing House prioritizes book durability and safety, employing eco-friendly materials like recycled paper and non-toxic inks.
                            </Text>
                            <Link href="/contact">
                                <Btn width={'10rem'} height={'2rem'} text='Get In Touch' />
                            </Link>
                        </Flex>
                        <Flex direction={"column"} mb={['2rem', '2rem', '1rem']}>
                            <Text color={'rgba(243, 140, 185, 1)'} mb={'5px'} fontWeight={'bold'} fontSize={['2rem', '2rem', '2rem']} align={['center', 'center', 'center']}>
                                Explore
                            </Text>
                            <Link href="/">
                                <Text align={['center', 'center', 'center']} mb={'5px'}>
                                    Home
                                </Text>
                            </Link>
                            <Link href='/allProducts'>
                                <Text align={['center', 'center', 'center']}>
                                    Store
                                </Text>
                            </Link>
                        </Flex>
                        <Flex direction={'column'} mb={['2rem', '2rem', '1rem']}>
                            <Text color={'rgba(138, 217, 221, 1)'} fontWeight={'bold'} fontSize={['2rem', '2rem', '2rem']} align={['center', 'center', 'justify']}>
                                About
                            </Text>
                            <Link href='/about'>
                                <Text align={['center', 'center', 'center']} mb={'5px'}>About Us</Text>
                            </Link>
                            <Link href='/contact'>
                                <Text align={['center', 'center', 'center']} mb={'5px'}>Contact Us</Text>
                            </Link>
                        </Flex>
                    </Flex>
                    <Flex justify={['center', 'center', 'end']} direction={'row'} pr={['0rem', '0rem', '1rem']} mb={'0.3rem'}>
                        <Image
                            onClick={() => {
                                window.open('https://api.whatsapp.com/send?phone=7725868075', '_blank')
                            }}
                            cursor={'pointer'}
                            src={wp.src}
                            width={7}
                            mr={'0.5rem'}
                        />
                        <Link href='https://www.facebook.com/profile.php?id=100089790751488&mibextid=ZbWKwL' target='_blank'>
                            <Image
                                src={fb.src}
                                width={7}
                                mr={'0.5rem'}
                            />
                        </Link>
                        <Link href='https://instagram.com/loo_koz?utm_source=qr&igshid=MzNlNGNkZWQ4Mg' target='_blank'>
                            <Image
                                src={insta.src}
                                width={7}
                                mr={'0.5rem'}
                            />
                        </Link>
                        <Link href='https://youtube.com/@Look_o?si=BmsUSzWMNSl06oDI' target='_blank'>
                            <Image
                                src={yt.src}
                                width={7}
                                mr={'0.5rem'}
                            />
                        </Link>
                    </Flex>
                    <Flex bgColor={'rgba(243, 140, 185, 1)'} direction={['column', 'row', 'row']} justify={["space-around", "space-around", "space-between"]} py={'1rem'}>
                        <Text mx={'2rem'} color={'white'} align={'center'}
                            onClick={() => {
                                router.push('/privacy')
                            }}
                            cursor={'pointer'}>
                            Privacy Policy
                        </Text>
                        <Text mx={'2rem'} color={'white'} align={'center'}>© 2023 Looko, All rights reserved</Text>
                    </Flex>
                </Flex>
            </Stack>
        </Box>
    )
}

export default Footer
