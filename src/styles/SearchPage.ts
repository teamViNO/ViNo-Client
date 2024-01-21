import styled from "styled-components";
import theme from "./theme";

const Container = styled.div`
    width : 100vw;
    height : 100vh;

    display : flex;
    
    justify-content: center;
    align-items: center;
    flex: none;
    order: 0;
    flex-grow: 0;

    & .tagify {
        border : none ; import!;
        --tag-text-color: #787878;
        --tag-text-color--edit: black;
        --tag-bg: #FFFFFF;
    }

    & div.wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        gap: 60px;
        
        width: 908px;
        height: 450px;
        left: calc(50% - 908px/2);
        top: 327px;
    }

    & span.header3 {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 160%;
        // identical to box height, or 58px
        text-transform: capitalize;

        /* gray-500 */
        color: #1E1E1E;
    }

    & span.header5 {
        width: 508px;
        height: 26px;

        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 160%;
    
        color: #BBBBBB;

        order: 1;
    }

    & div.search {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        gap: 10px;

        width: 908px;
        height: 288px;
    }

    & div.search-inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 40px;

        width: 908px;
        height: 204px;
    }

    & div.header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0px;
        gap: 8px;

        width: 508px;
        height: 92px;
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

   & div.hashtag {
        display: flex;
        flex-direction: row;
        flex-wrap : wrap;
        align-items: center;
        justify-content : center;
        padding: 0px;
        gap: 30px 5px;
        
        width: 572.52px;
        height: 102px;
        order: 1;
   }
   
`;

const HashtagBox = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    gap: 12.9px;
   
    height: 41px;

    background: #FFFFFF;

    border: 1.3px solid #E8E8E8;
    border-radius: 8px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 160%;

    color: #787878;

    &:hover {
        box-shadow: 0.5px 0.5px 5px #ddd;
    }
    &.toggle {
        border : 1.3px solid #1E1E1E;
        color : #1E1E1E;
    }

`


export {Container, HashtagBox};


