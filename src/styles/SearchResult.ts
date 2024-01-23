import styled from "styled-components";

const Container = styled.div`
    display : flex;
    flex-direction : column;


    & mark {
        color : ${(props) => props.theme.color.green600} !important;
        background : none;
    }

    & div.inputContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px 0px 40px;
        gap: 40px;
        
        background: #FFFFFF;
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

   & div.result { 
    display: flex;
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

   }
`;

const VideoCard = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: flex-start;
     padding: 0px;

     width: 910px;
     height: 254px;

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
          
          width: 696.67px;
          height: 254px;
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
          padding: 0px;
          gap: 8px;
          
          width: 114px;
          height: 19px;

          flex: none;
          order: 0;
          flex-grow: 0;
     }

     & span.userName {
          width: 21px;
          height: 19px;
          
          ${(props) => props.theme.typography.Caption1};
          color: ${(props) => props.theme.color.gray300};
          flex: none;
          order: 0;
          flex-grow: 0;
     }

     & span.contour {
          width: 0px;
          height: 12px;
          
          border: 1px solid ${(props) => props.theme.color.gray300};
          
          flex: none;
          order: 1;
          flex-grow: 0;
     }

     & span.userDate {
          width: 77px;
          height: 19px;
          
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
          
          width: 648.67px;
          height: 108px;
          
          flex: none;
          order: 1;
          align-self: stretch;
          flex-grow: 0; 
     }

     & div.title {
          width: 648.67px;
          height: 26px;

          ${(props) => props.theme.typography.Subheader3};

          color: ${(props) => props.theme.color.gray500};
          
          flex: none;
          order: 0;
          align-self: stretch;
          flex-grow: 0;
     }

     & div.subtitle {

          width: 648.67px;
          height: 22px;
          
          ${(props) => props.theme.typography.Body3};
          
          color: ${(props) => props.theme.color.gray400};
          
          flex: none;
          order: 1;
          align-self: stretch;
          flex-grow: 0;
     }

     & div.subcontent {
          width: 648.67px;
          height: 44px;
          
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
          height: 31px;
     }

     & div.imgBox {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0px;
          gap: 8.83px;
          
          width: 213.33px;
          height: 254px;
          
          flex: none;
          order: 1;
          align-self: stretch;
          flex-grow: 0;
     }
`
const hashtagBox = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     padding: 6px 10px;
     gap: 10px;

     min-width: 51px;
     height: 31px;
     
     background: ${(props) => props.theme.color.gray100};
     color : ${(props) => props.theme.color.gray400};
     border-radius: 8px;

     flex: none;
     order: 2;
     flex-grow: 0;

     ${(props) => props.theme.typography.Caption1};
`

export default {Container, VideoCard, hashtagBox};



