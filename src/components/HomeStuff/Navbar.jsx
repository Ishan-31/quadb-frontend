import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import lookologo from '../../assets/images/LOOKO-LOGO.png'
import search from '../../assets/images/search-icon.png'
import cart from '../../assets/images/cart-icon.png'
import divider from '../../assets/images/divider.png'
import menu from '../../assets/images/Menu.png'
import { useCount } from '../../context/Count';

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack, Text, useDisclosure, Box, Flex, Link
} from '@chakra-ui/react'
import { useCart } from 'react-use-cart'
const Navbar = () => {
  const Router = useRouter()

  const NavBarLinks = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/allProducts" },
    { name: "Cart", link: "/cart" },
    { name: "Contact", link: "/contact" },
    { name: "Privacy Policy", link: "/privacy" },
    { name: "Return Policy", link: "/returnpolicy" },
    { name: "Terms & Conditions", link: "/terms" },
    { name: "About Us", link: "/about" },
  ];
  const homepage = () => {
    Router.push("/")
  }
  const cartlink = () => {
    Router.push("/cart")
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { count } = useCount();
  const { totalUniqueItems } = useCart()
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor={'white'}>
          <DrawerCloseButton color={'black'} />
          <DrawerBody color={'white'}>
            <Stack
              zIndex={400}
              direction="column"
              bg="white"
              as="nav"
              py={"20px"}
              fontSize={"20px"}
            >
              <Stack pl="65px">
                <Link href="/">
                  <Image src={lookologo.src} width={150} height={0} alt='LOOKO' />
                </Link>
              </Stack>
              <Stack w="100%">
                <Stack
                  direction="column"
                  justify={"space-evenly"}
                  align={"center"}
                  color={'black'}
                >
                  {NavBarLinks.map((link, index) => (
                    <Stack key={index} my="20px">
                      <Text
                        cursor={"pointer"}
                        onClick={() => {
                          Router.push(`${link.link}`);
                        }}
                        fontWeight={"medium"}
                        className={`navbar__link ${Router.pathname === `${link.link}`
                          ? "sidebar__link--active"
                          : ""
                          }`}
                      >
                        {link.name}
                      </Text>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <nav className="sticky w-full h-24 shadow-xl bg-white top-0 z-40
    bg-white/60 backdrop-filter backdrop-blur-[10px]
    ">
        <div className='flex justify-between items-center h-full w-full px-2 2xl:px-8'>
          <div onClick={onOpen} style={{ cursor: 'pointer' }}>
            <Image
              src={menu.src}
              width={'25'}
              height={0}
              alt='menu'
            />
          </div>
          <Image
            src={lookologo.src}
            width={150}
            height={0}
            alt='LOOKO'
            onClick={homepage}
            style={{ cursor: 'pointer', position: 'absolute', left: '50%', transform: 'translate(-50%, 0)' }}
          />
          <Flex className='flex justify-end items-center h-full px-2'>

            <Flex className='flex justify-between w-16 items-center h-full px-3' display={['none', 'none', 'flex']}>

              <div className="search-container mr-4">
                <form action="/allProducts" method="get">
                  <input className="search expandright" id="searchright" type="search" name="q" placeholder="Search" />
                  <label className="button searchbutton" for="searchright">
                    <span className="mglass">
                      <Image
                        src={search.src}
                        width={20}
                        height={0}
                        alt='search'
                        style={{ cursor: 'pointer' }}
                      />
                    </span>
                  </label>
                </form>
              </div>
              <Image
                src={divider.src}
                width={0.6}
                height={0}
                alt=''
              />
            </Flex>
            <button type="button" className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white rounded-lg focus:outline-none">
              <Image
                src={cart.src}
                width={25}
                height={0}
                alt='cart'
                style={{ cursor: 'pointer' }}
                onClick={cartlink}
              />

              <Box className={`absolute items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -right-2 ${totalUniqueItems == 0 ? "hidden" : "inline-flex"}`}>
                {totalUniqueItems}
              </Box>
            </button>

          </Flex>
        </div>
      </nav>
    </>
  )
}

export default Navbar
