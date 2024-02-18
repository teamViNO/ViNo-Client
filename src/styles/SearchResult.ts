import styled from "styled-components";
import theme from "./theme";

const Container = styled.div`
     display : flex;
     flex : 1 1 auto;
     flex-direction : column;

    & mark {
          color : ${(props) => props.theme.color.green600} !important;
          background : transparent;
    }

    & div.inputContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 0px 40px;
          gap: 40px;
        
          background: ${(props) => props.theme.color.white};
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
          gap : 10px;
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
          &:hover {
               background-color : ${theme.color.green500};
               color : ${theme.color.gray500};
          }
   }

   & button:disabled {
          background: ${(props) => props.theme.color.gray300};
   }

   & div.result { 
          display: flex;
          min-height : 800px;
          overflow : scroll;
          align-items : center;
          flex-direction: column;
          gap : 10px;
   }

   & div.filter {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          padding: 0px;
          gap: 12px;
          & span {
               ${(props) => props.theme.typography.Body3};
               color : ${(props) => props.theme.color.gray300};
          }
   }
   & div.content {
          display : flex;
          flex-direction : column;
          padding : 10px 0 10px 0;
          gap : 20px;
   }
`;

const VideoCard = styled.div`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: flex-start;
          padding: 0px;

          background : ${(props) => props.theme.color.white}
          flex: none;
          order: 1;
          flex-grow: 0;

          box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.05);
          border-radius: 16px;

     & div.main {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 24px;
          gap: 24px;
          
          background : transparent;

          flex: none;
          order: 0;
          flex-grow: 1;
     }

     & div.user {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 0px 0px 0px 24px;
          gap: 8px;

          flex: none;
          order: 0;
          flex-grow: 0;
     }

     & span.userName {

          ${(props) => props.theme.typography.Caption1};
          color: ${(props) => props.theme.color.gray300};
          flex: none;
          order: 0;
          flex-grow: 0;
     }

     & span.contour {
          border: 1px solid ${(props) => props.theme.color.gray300};
          
          flex: none;
          order: 1;
          flex-grow: 0;
     }

     & span.userDate {
          ${(props) => props.theme.typography.Caption1};
          
          color: ${(props) => props.theme.color.gray300};

          flex: none;
          order: 2;
          flex-grow: 0;      
     }

     & div.content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px;
          gap: 8px;
          
          flex: none;
          order: 1;
          align-self: stretch;
          flex-grow: 0; 
     }

     & div.title {
          ${(props) => props.theme.typography.Subheader3};

          color: ${(props) => props.theme.color.gray500};
          
          flex: none;
          order: 0;
          align-self: stretch;
          flex-grow: 0;
     }

     & div.subtitle {        
          ${(props) => props.theme.typography.Body3};
          
          color: ${(props) => props.theme.color.gray400};
          
          flex: none;
          order: 1;
          align-self: stretch;
          flex-grow: 0;
     }

     & div.subcontent {
          ${(props) => props.theme.typography.Body3};

          color: ${(props) => props.theme.color.gray300};
          overflow : hidden;
          text-overflow : ellipsis;
          flex: none;
          order: 2;
          align-self: stretch;
          flex-grow: 0;
     }

     & div.hashtag {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding: 0px;
          gap: 8px;
          order : 2;
     }

     & div.imgBox {
          padding: 0;
          width : 213px;
          height : 254px;
          border-radius : 0px 16px 16px 0px;
          overflow:hidden;
          margin:0 auto;
     }
     & img {
          width : 100%;
          height : 100%;
          object-fit: cover;
     }
`
const hashtagBox = styled.div`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 6px 10px;
          gap: 10px;

          height: 31px;
          
          background: ${(props) => props.theme.color.gray100};
          color : ${(props) => props.theme.color.gray400};
          border-radius: 8px;

          flex: none;
          order: 2;
          flex-grow: 0;

          ${(props) => props.theme.typography.Caption1};
     `

const SearchNotFoundContainer = styled.div`
     width : 500px;
     height : 337px;
     display : flex;
     flex-direction : column;
     justify-content: center;
     align-items: center;
     gap : 40px;

     & div.text {
          ${(props) => props.theme.typography.Header3};
          display : flex;
          flex-direction : column;
          justify-content: center;
          align-items: center;
     }
     & span.user {
          color : ${(props) => props.theme.color.gray300};
          text-align : center;
     }

     & button {
          width : 235px;
          height : 56px;
          background : ${(props) => props.theme.color.gray500};
          color : ${(props) => props.theme.color.white};
          border : none;
          border-radius : 100px;
          padding: 12px 32px;
          gap: 10px;
          ${(props) => props.theme.typography.Subheader2};
     }
 `
export default {Container, VideoCard, hashtagBox, SearchNotFoundContainer};



