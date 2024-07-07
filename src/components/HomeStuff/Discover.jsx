import React,{useRef} from 'react'
import { Image, Stack } from '@chakra-ui/react'
import { Text, Flex, Link, Box } from '@chakra-ui/react'
import discover from '../../assets/images/discover.png'
import ReactPlayer from "react-player";

const VIDEO_PATH = "/looko_desktop_video.mp4";
const VIDEO_PATH2 = "/looko_phone_video.mp4";

const Discover = () => {
  const playerRef = useRef(null);
  return (
    // <Flex data-aos="zoom-in-up" direction={'column'} align={'center'} justify={'center'} mt={'4rem'}>
    // <Flex direction={['column-reverse', 'column-reverse', 'row']} mb={['2rem','2rem','0rem']} justify={['space-around']} align={"center"} width={'90vw'} wrap={'wrap-reverse'}>
    //     <Flex direction={'column'} mt={['2rem', '0rem', '0rem']}>
    //         <Text textShadow={'2px 4px 4px gray'} fontWeight={'2px'} width={['90vw', '90vw', '30vw']} fontSize={['2rem','2.5rem','2.5rem']} mb={'1rem'} px={['3rem', '1rem', '0rem']} align={['center', 'center', 'left']}>
    //         Discover the Magic of Vedic Art and Culture
    //         </Text>
    //         <Link href='/allProducts' textDecoration={'underline'} display={['none', 'none', 'block']}>
    //           Explore Store
    //         </Link>
    //     </Flex>
    //     <Image
    //         src={discover.src}
    //         width={600}
    //         mb={'0.3rem'}
    //     />

    // </Flex>
    // </Flex>
    <Box position="relative" mt='-10px'>
    <Box h={["140vw", "57vw", "57vw"]} position={"relative"} display={['none','block','block']}>
      <Box width={"100%"} height={["100%", "100%", "100%"]}>
        <ReactPlayer
          width={"100%"}
          height={["100%"]}
          ref={playerRef}
          url={VIDEO_PATH}
          controls={false}
          playing={true}
          loop={true}
          muted="true"
        />
      </Box>
    </Box>
    <Box h={["180vw", "57vw", "57vw"]} position={"relative"} display={['block','none','none']}>
      <Box width={"100%"} height={["100%", "100%", "100%"]}>
        <ReactPlayer
          width={"100%"}
          height={["100%"]}
          ref={playerRef}
          url={VIDEO_PATH2}
          controls={false}
          playing={true}
          loop={true}
          muted="true"
        />
      </Box>
    </Box>
    <Stack position={"absolute"} top={["120vw", "9vw", "18vw"]}
      left={['8vw','5vw',"8vw"]} width={['90vw', '35vw', '30vw']}>
    <Text
      textShadow={'2px 4px 4px gray'} fontWeight={'2px'} fontSize={['2rem','2rem','2.5rem']}
    >
       Discover the Magic of Vedic Art and Culture
    </Text>
    <Link href='/allProducts' textDecoration={'underline'} display={['none', 'block', 'block']}>
    Explore Store
    </Link>
    </Stack>
    </Box>
  )
}

export default Discover
