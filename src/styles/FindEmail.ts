import styled from "styled-components";
import theme from "./theme";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 1440px;
    width: 100%;
    min-height: 100vh;

    & div {
        display : flex;
        flex-direction : column;
        justify-content: center;
        align-items: center;
    }

    & div.wrapper {
        width : 740px;
        height : 380px;
        gap : 60px;
    }

    & span.result {
        ${theme.typography.Header4};
        color : ${theme.color.gray500};
    }
    & span.tool {
        ${theme.typography.Body1};
        color : ${theme.color.gray300};
    }
    & button {
        width : 494px;
        height : 56px;
        border : none;
        border-radius : 12px;
        ${theme.typography.Body1};
        cursor: pointer;
    }
    & img {
        width : 87px;
        height : 87px;
    }

`

export default Container;