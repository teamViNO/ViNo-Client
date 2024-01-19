import styled from "styled-components";

const Container = styled.div`
    display : flex;
    flex-direction : column;

    & div.inputContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px 0px 40px;
        gap: 40px;
        height: 212px;
        
        background: #FFFFFF;
    }
    & div.inputwrap {
        display : flex;
        flex-direction : column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 20px;

        width: 908px;
        height: 72px;
        background: #F3F3F3;
        border-radius: 12px;
        white-space: nowrap;
        overflow: hidden;
    }

    & div.inputwrap:hover {
        box-shadow: 1px 1px 20px #ddd;
    }

    & div.input-inner {
        display : flex;
        justify-content : space-between;
        width: 861.25px;
        height: 36px;
        white-space: nowrap;
   }

   & div.input {
        display : flex;
        gap : 20px;
        width : 770px;
        height : 36px;
   }

   & img.icon {
        position: absolute;
        visibility: hidden;
        width: 36px;
        height: 36px;
        left: 0px;
        top: 0px;
   }

   & input::placeholder {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 160%;

        color: #BBBBBB;
   }

   & button.search-btn {
        width: 90px;
        height: 36px;

        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 160%;

        color: #FFFFFF;
        background : #1E1E1E;
        border-radius: 8px;
        order : 1;
        border : 0;
   }

   & button:disabled {
        background: #BBBBBB; 
   }

   & div.result { 
    display: flex;
    align-items : center;
    flex-direction: column;
   }

   & div.filter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;

    width: 910px;
    height: 24px;
   }
`;

export default Container;