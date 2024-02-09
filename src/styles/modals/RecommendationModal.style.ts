import styled from 'styled-components';
import theme from '../theme';

export const RecommendationModalContainer = styled.div<{ isOpen: boolean }>`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); 
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-container {
        padding: 40px 61px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 700px;
        height: 463.13px;
        position: relative;
        background: white;
        border-radius: 20px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    .close-btn {
        width: 600px;
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
    }

    .inform-wrapper {
        width: 600px;
        height: 144px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .inform {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .inform-text {
        margin-top: 12px;
        margin-bottom: 12px;
        color: ${theme.color.gray500};
        font-size: 24px;
        line-height: 1.6em;
    }

    .inform-subtext {
        color: ${theme.color.gray300};
        font-size: 16px;
        line-height: 1.6em;
    }

    .modal-card {
        width: 578px;
        height: 163.13px;
        margin-top: 48px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        cursor: pointer;
    }

    .modal-card img {
        border: none;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        width: 290px;
        height: auto;
    }

    .card-text {
        width: 288px;
        padding: 24px 20px;
    }

    .card-title {
        width: 248px;
        height: 78px;
        font-size: 16px;
        font-weight: bold;
        text-align: left;
    }

    .hashtag {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    .card-hashtag {
        color: ${theme.color.gray400};
        padding: 6px 10px;
        border-radius: 8px;
        background-color: ${theme.color.gray100};
        margin-right: 8px;
    }
`