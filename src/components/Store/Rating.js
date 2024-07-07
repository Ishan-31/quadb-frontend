import styled from "@emotion/styled";
import { IoIosStar, IoIosStarOutline, IoIosStarHalf } from "react-icons/io"
import React from 'react'

const Star = ({stars}) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index+0.5
        return (
            <span key={index}>
                {stars>=index+1? (
                    <IoIosStar className="icon"/>
                ) : stars>=number ? (
                    <IoIosStarHalf className="icon"/>
                ) : (
                    <IoIosStarOutline className="icon"/>
                )} 
            </span>
        )
    })
  return (
    <Wrapper>
        <div className="icon-style">
            {ratingStar}
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    justify-content: flex-start;

    .icon{
        font-size: 1rem;
        color: orange;
    }
    .icon-style{
        display: flex
    }
`;

export default Star
