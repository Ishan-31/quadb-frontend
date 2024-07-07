import React, { useState } from 'react'
import { Text, Box, Flex, Input, Textarea, useToast } from '@chakra-ui/react'
//   const [input, setInput] = useState('')
import Btn from '../components/MultiPurposeBtn'
const Enquire = () => {
    const toast = useToast()

    const [verified, setVerified] = useState(false)

    const isValidEmail = (s) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(s);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(e.target.phone.value)) {
            toast({
                title: "Phone Number Error",
                position: "top-right",
                description: "Phone number must contain 10 digits only.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }
        if (!isValidEmail(e.target.email.value)) {
            toast({
                title: "Email Error",
                position: "top-right",
                description: "Please enter a valid email.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }
        try {
            let body = {
                "name": e.target.name.value,
                "email": e.target.email.value,
                "phone": e.target.phone.value,
                "message": e.target.message.value
            }
            const res = await createContact(body)
            if (res.status === 201) {
                toast({
                    title: "Message Sent",
                    position: "top-right",
                    description: "We will get back to you soon.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
                // setVerified(false)
                e.target.reset()
            }
        }
        catch (err) {
            console.log(err)
            toast({
                title: "Message Not Sent",
                position: "top-right",
                description: "Please try again later.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    }


    const onSubmit = (e) => {
        e.preventDefault()
        let body = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            message: e.target.message.value
        }
        if (!body.name || !body.email || !body.number || !body.comment) {
            toast({
                title: "Error",
                position: "top-right",
                description: "Please fill all the fields.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }
        send(
            "service_0hqpz27",
            "template_k83j0db",
            body,
            "fvKc-Hpv1-Y4OFsey"
        )
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                toast.success('Your response has been recorded. We will reach out to you soon.')
            })
            .catch((err) => {
                console.log("FAILED...", err);
            });

    };

    return (
        <Flex data-aos="zoom-in-up" direction={'column'} justify={'center'} align={'center'} mb={'3rem'}>
            <Text align={'center'} mb={'2rem'} fontSize={['2.5rem', '2.5rem', '3rem']}>Enquire With Us</Text>
            <Flex width={['90vw', '80vw', '500px']} height={'60vh'} boxShadow={'0px 0px 5px 1px rgba(138, 217, 221, 1)'} borderRadius={'1rem'} align={'center'} justify={'center'}>
                <form onSubmit={onSubmit}
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '90%', width: '90%', alignItems: 'center' }}>
                    <Input
                        name='name'
                        borderRadius={'0.5rem'}
                        borderColor={'rgba(243, 140, 185, 1)'}
                        w={['100%', '100%', '90%']}
                        placeholder='Name'
                        required />
                    <Input
                        name='email'
                        type='email'
                        borderRadius={'0.5rem'}
                        borderColor={'rgba(243, 140, 185, 1)'}
                        w={['100%', '100%', '90%']}
                        placeholder='Email'
                        required />
                    <Input
                        name='phone'
                        type='tel'
                        borderRadius={'0.5rem'}
                        borderColor={'rgba(243, 140, 185, 1)'}
                        w={['100%', '100%', '90%']}
                        placeholder='Phone Number'
                        required />
                    <Textarea
                        name='message'
                        borderRadius={'0.5rem'}
                        borderColor={'rgba(243, 140, 185, 1)'}
                        w={['100%', '100%', '90%']}
                        placeholder='Message'
                        required mb='20px' />
                    <Btn width={'10rem'} height={'2rem'} text='Submit Query' />
                </form>
            </Flex>
        </Flex>
    )
}

export default Enquire
