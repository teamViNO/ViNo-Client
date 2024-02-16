import styled, { keyframes } from "styled-components";
import theme from "./theme";

const sliderFrame = keyframes`
0%, 12%, 100% {
    transform: translateX(0);
    animation-timing-function: ease;
  }
  25% {
    transform: translateX(-100%);
    animation-timing-function: step-end;
  }
  87% {
    transform: translateX(100%);
    animation-timing-function: ease;
  }
`

const Slider = styled.div`
    width: 598px;
    height: 840px;
    position: relative;
    border-radius : 40px;
    overflow : hidden;

    & img.slide {
        position: absolute;
        z-index : -1;
        width: 100%;
        height: 100%;
        animation: ${sliderFrame} 16s infinite;

        &:nth-child(1) {
            animation-delay: 0s;
        }
        &:nth-child(2) {
            animation-delay: -4s;
        }
        &:nth-child(3) {
            animation-delay: -8s;
        }
        &:nth-child(4) {
            animation-delay: -12s;
        }
    }
    & img {
        width : 100%;
        height : 100%;
    }
    & div.list {
        position : relative;
        width : 598px;
        top : 770px;
    }
    & ul {
        padding : 10px 10px 10px 10px;
        display : flex;
        flex-direction: row;
        justify-content: center;
        align-items : center;
        gap : 15px;
    }
    & li {
        width : 5px;
        height : 5px;
        background-color : ${theme.color.gray400};
        border-radius : 50%;
    }
`


export default Slider;