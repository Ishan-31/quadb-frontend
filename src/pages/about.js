import Layout from '@/components/Layout'
import { Heading, Text } from '@chakra-ui/react'
import React from 'react'

const about = () => {
    return (
        <Layout>
            <Heading my={5} textAlign={'center'}>About Us</Heading>
            <Text w='80%' mx='auto' fontSize={'md'}>
                At Looko Publishing House, we blend the enchantment of imagination with the essence of devotion.
                <br />
                <br />
                Our journey begins with Dr. Parul Upadhyay, a linguist and a devoted mother, who embarked on a personal quest to discover top-quality, captivating books for her own child.
                <br />
                <br />
                Along the way, she unearthed a burgeoning demand for children's literature and educational materials deeply rooted in spirituality and devotion.
                With her linguistic finesse, Dr. Upadhyay expertly crafts materials that are not merely child-friendly but also thoughtfully tailored to each child's unique stage of development.
                <br />
                <br />
                Looko takes great pride in producing bilingual books in both English and Hindi, ensuring that children from all walks of life can embark on an enriching odyssey of exploration and faith.
                <br />
                <br />
                Our core commitment lies in nurturing young spirits. Looko Publishing House is steadfast in making devotional learning accessible, pleasurable, and etched in memory.
                Our dedication is to ignite the hearts and minds of the next generation through the transformative power of knowledge, creativity, and unwavering devotion. Dr. Parul Upadhyay, our founder and director, leads our dedicated company, guiding us on a journey to empower and enlighten young minds
            </Text>
        </Layout>
    )
}

export default about