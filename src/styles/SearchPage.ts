import styled from "styled-components";

const Container = styled.div`
    display : flex;
    flex-direction : row;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;
    order: 0;
    flex-grow: 0;

    & div.wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        gap: 60px;
        left: calc(50% - 908px/2);
        top: 327px;
    }

    & span.header3 {
        ${(props) => props.theme.typography.Header3};
        color: ${(props) => props.theme.color.gray500};
    }

    & span.header5 {
        ${(props) => props.theme.typography.Body1};
        color : ${(props) => props.theme.color.gray300};
        order: 1;
    }

    & div.search {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        gap: 10px;
    }

    & div.search-inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 40px;
    }

    & div.header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0px;
        gap: 8px;
    }

    & div.inputwrap {
        display : flex;
        flex-direction : column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 20px;

        background: ${(props) => props.theme.color.gray100};
        border-radius: 12px;
        white-space: nowrap;
        overflow: hidden;
    }

    & div.inputwrap:hover {
        box-shadow: 1px 1px 20px ${(props) => props.theme.color.gray100};
    }

    & div.input-inner {
        display : flex;
        justify-content : space-between;
        white-space: nowrap;
   }

   & div.input {
        display : flex;
        gap : 20px;
   }

   & input::placeholder {
        ${(props) => props.theme.typography.Subheader2};
        color: ${(props) => props.theme.color.gray300};
   }

   & button.search-btn {
        ${(props) => props.theme.typography.Body1};
        color: ${(props) => props.theme.color.white};
        background : ${(props) => props.theme.color.gray500};
        border-radius: 8px;
        order : 1;
        border : 0;
   }

   & button:disabled {
        background: ${(props) => props.theme.color.gray300};
   }

   & div.hashtag {
        display: flex;
        flex-direction: row;
        flex-wrap : wrap;
        align-items: center;
        justify-content : center;
        padding: 0px;
        gap: 30px 5px;
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
   
    background: ${(props) => props.theme.color.white}
    ${(props) => props.theme.typography.Caption1};
    border: 1.5px solid ${(props) => props.theme.color.gray200};
    border-radius: 8px;

    

    color: ${(props) => props.theme.color.gray400};

    &:hover {
        border : 1.5px solid ${(props) => props.theme.color.gray400};
    }
    &.toggle {
        border : 1.5px solid ${(props) => props.theme.color.gray500};
        color : ${(props) => props.theme.color.gray500}; 
    }

`


export {Container, HashtagBox};


