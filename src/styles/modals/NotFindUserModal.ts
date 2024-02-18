import styled from "styled-components";
import theme from "../theme";

const Container = styled.div`
    position : fixed;
    display : flex;
    z-index: 1; 
    background-color: rgba(0,0,0,0.4);
    height : 100%;
    width : 100%;
    justify-content : center;
    align-items : center;
    
    & div.contentWrap {
        width : 700px;
        height : 452px;
        padding : 40px 50px 40px 50px;
        background-color : ${theme.color.white};
        border-radius: 20px;
        display : flex;
        gap: 20px;
        flex-direction : column;
        justify-content: space-between;
    }
    & div.closeWrap {
        width : 600px;
        display: flex;
        flex-direction: row-reverse;
        cursor: pointer;
    }
    & div.textContent {
        height : 200px;
        display: flex;
        flex-direction : column;
        justify-content: space-between;
        align-items : center;
        gap : 10px;
    }
    & div.subtitleWrap {
        display : flex;
        flex-direction : column;
        justify-content : center;
        align-items : center;
        gap : 5px;
    }
    & img {
        width : 56px;
        height : 56px;
    }
    & span.title { 
        ${theme.typography.Header6}
        color : ${theme.color.gray500};
    }
    & span.subtitle {
        ${theme.typography.Body1};
        color : ${theme.color.gray300};
    }
    & div.btnContent {
        display : flex;
        flex-direction : column;
        gap: 12px;
    }
    & button {
        width : 600px;
        height : 58px;
        border-radius : 12px;
        border: none;
        ${theme.typography.Body1};
    }
    & button.b_btn {
        color : ${theme.color.white};
        background-color : ${theme.color.gray500};
        cursor: pointer;
    }
    & button.w_btn {
        color : ${theme.color.gray400};
        background-color : ${theme.color.white};
        border : 1.5px solid ${theme.color.gray200};
        cursor: pointer;
    }
`

export default Container;