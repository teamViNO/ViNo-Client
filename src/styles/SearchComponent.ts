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

const Container = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    position: relative;
    padding: 0;
    gap: 3px;
    
    ${(props) => props.theme.typography.Body1};
    transition: all 0.3s ease;

    & span.tag {
        box-sizing: border-box;

        display: inline-flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px 20px 8px 20px;
        gap: 13px;
        max-width: calc(100% - 10px);
        position: relative;
        z-index: 1;
        outline: 0;
        background : ${(props) => props.theme.color.white};
        ${(props) => props.theme.typography.Body3};
        color : ${(props) => props.theme.color.gray400};
        border-radius: 8px;
        border : 1.5px solid ${(props) => props.theme.color.gray200};
        font-size : 14px;
        height : 40px;
        transition: transform all .3s ease;
        &:hover {
            border : 1.5px solid ${(props) => props.theme.color.gray400};
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
        ${(props) => props.theme.typography.Subheader2};

        border: none;
        background: ${(props) => props.theme.color.gray100};
        &:focus {
            outline : none;
        }
    }

    & button.tag-btn {
        padding: 0;
        border : none;
        background: transparent;
        color: ${(props) => props.theme.color.gray400};
        font-size :  16px;
        padding : 0;
        &:hover {
            color: ${(props) => props.theme.color.green500};
        }
    }

    & .exceed {
        background-color: #f2dedf !important;
        animation: ${Fadeout} 1s ease forwards;
    }

`
    export default Container;



