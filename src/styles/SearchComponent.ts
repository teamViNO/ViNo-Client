import styled, { keyframes } from "styled-components";

const Fadeout = keyframes`
    from {
        max-width: 100%; 
        opacity: 1;
    }
    to {
        max-width: 0; 
        opacity: 0;
    }
`

const CustomTagInput = styled.div`
    display: inline-flex;
    width: 700px;
    height : 36px;
    flex-wrap: wrap;
    position: relative;
    padding: 0;
    gap: 3px;
    
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;

    color: #787878;
    transition: all 0.3s ease;

    & span.tag {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        max-width: calc(100% - 10px);
        background: #FFFFFF;
        position: relative;
        z-index: 1;
        padding: 0.3em 0.5em;
        outline: 0;
        line-height: normal;
        cursor: default;
        font-size: 14px;
        border-radius: 8px;
        border : 1.3px solid #E8E8E8;
        transition: transform all .3s ease;
        &:hover {
            transform : scale(1.1);
        }
        &.removing {
            with : 0;
            padding : 0 10px;
            margin-right : 0;
        }
    }
    & input.tag-input {
        height: 36px;
        flex-grow: 1;
        display: inline-block;
        line-height: normal;
        position: relative;
        white-space: pre-wrap;
        box-sizing: inherit;
        font-size: 18px;

        border: none;
        background: #F3F3F3;
        &:focus {
            outline : none;
        }
    }

    & button.tag-btn {
        border-radius: 50%;
        width : 16px;
        height : 16px;
        padding: 0;
        background: transparent;
        color: #787878;
        font-size: 10px;
        border: 1px solid transparent;
        transition: all 0.3s ease;

        &:hover {
            background-color: #c77777;
            color: #E8E8E8;
        }
    }

    & .exceed {
        background-color: #f2dedf !important;
        animation: ${Fadeout} 1s ease forwards;
    }

`
    export default CustomTagInput;