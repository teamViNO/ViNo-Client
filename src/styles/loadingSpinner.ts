import styled from "styled-components";
import theme from "./theme";


const Container = styled.div`
    width : 100%;
    height : 100vh;

    display : flex;
    align-items : center;
    justify-content: center;

    & div.wrap {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & div.tip {
        display : flex;
        gap : 10px;
        flex-direction : column;
    }
    & div.center-box {
        display : flex;
        flex-direction : column;
        gap : 30px;
        justify-content: center;
        align-items: center;
    }
    & span.header {
        text-align : center;
        ${theme.typography.Subheader3};
        color : ${theme.color.gray500};
    }
    & span.body {
        text-align : center;
        ${theme.typography.Body4};
        color : ${theme.color.gray400};
    }
`;


export default Container;