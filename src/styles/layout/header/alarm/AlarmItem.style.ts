import theme from '@/styles/theme';
import styled from 'styled-components';

export const StateWrap = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.color.gray300};
`;

export const StateColor = styled.div<{ background: string | undefined }>`
  width: 8px;
  height: 8px;
  background-color: ${(props) => props.background};
  border-radius: 100%;
  margin-right: 8px;
`;

export const StateType = styled.span`
  ${theme.typography.Caption1};
  color: ${theme.color.gray400};
`;

export const Divide = styled.span`
  margin: 0px 8px;
  height: 10px;
  border: 0.5px solid ${theme.color.gray300};
`;

export const ContentContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${theme.color.gray200};
  padding-bottom: 28px;
  margin-top: 12px;
  margin-bottom: 28px;
  &:last-child {
    border-bottom: 0;
    margin-bottom: 0;
  }
`;

export const Image = styled.img`
  width: 56px;
  height: 56px;
  margin-right: 12px;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.color.gray500};
  ${theme.typography.Body1};
`;
