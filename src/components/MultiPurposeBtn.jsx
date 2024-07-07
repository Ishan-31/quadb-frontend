import React from 'react'
import { background } from '@chakra-ui/react'

const GetInTouch = (props) => {

  return (
    <button className='getintouch flex items-center h-full justify-center text-base font-bold text-white' style={{width: props.width, boxShadow: '0px 3px 10px grey' ,backgroundImage: "linear-gradient(to right, rgba(243, 140, 185, 1) , rgba(138, 217, 221, 1))", height: props.height, borderRadius: '0.5rem'}} onClick={props.func}>
        {props.text}
    </button>
  )
}

export default GetInTouch
