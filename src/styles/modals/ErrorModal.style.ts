import styled from 'styled-components';
import theme from '../theme';

export const ErrorModalContainer = styled.div`
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

    .container {
        width: 700px;
        height: 384px;
        background-color: ${theme.color.white};
        padding: 40px 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .wrapper {
        width: 600px;
        height: 198px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .close-btn {
        align-self: flex-end;
        cursor: pointer;
    }

    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .modal-main {
        width: 245px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .modal-main h2 {
        color: ${theme.color.gray500};
        font-style: ${theme.typography.Header6};
        font-size: 24px;
        line-height: 1.6em;
        margin-top: 12px;
        margin-bottom: 12px;
    }

    .main h4 {
        color: ${theme.color.gray300};
        font-style: ${theme.typography.Body1};
        font-size: 16px;
        line-height: 1.6em;
    }

    .restart-btn {
        width: 600px;
        height: 58px;
        font-style: ${theme.typography.Body1};
        font-size: 16px;
        padding: 16px 24px;
        color: ${theme.color.white};
        background-color: ${theme.color.gray500};
        border: none;
        border-radius: 12px;
        cursor: pointer;
    }
`;