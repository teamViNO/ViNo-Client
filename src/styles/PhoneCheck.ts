import styled from "styled-components";
import theme from "./theme";

const Cotainer = styled.div`
    width : 494px;
    display : flex;
    flex-direction : column;
    gap : 5px;
    & div.label {
        color : ${theme.color.gray400};
        ${theme.typography.Body1};
    }
    & input {
        width : 326px;
        height : 56px;
        padding: 0px 0px 0px 20px;
        border : 1.5px solid ${theme.color.gray200};
        border-radius : 12px;
        outline : none;
        color : ${theme.color.gray500};
        ${theme.typography.Body1};
        &:focus {
            border: 1.5px solid ${theme.color.gray500};
        };
        &:hover {
            border: 1.5px solid ${theme.color.gray500};
        }
        &::placeholder {
            color : ${theme.color.gray300};
        }
    }
    & button {
        width : 160px;
        height : 56px;
        background-color : ${theme.color.green400};
        color : ${theme.color.gray500};
        border : none;
        border-radius : 12px;
        ${theme.typography.Body1};
        cursor: pointer;
        &:disabled {
            background-color : ${theme.color.gray100};
            color : ${theme.color.gray300};
            cursor: default;
        }
    }
    & div.inputwrap {
        display : flex;
        gap : 10px;
    }
    & span.msg {
        margin-left : 10px;
        ${theme.typography.Body3};
        color : ${theme.color.red};
    }
`;



export default Cotainer;