import styled from 'styled-components';
import theme from '../theme';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 20px;
  row-gap: 36px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.05);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 20px;
`;

export const Title = styled.span`
  ${theme.typography.Subheader3};
  color: ${theme.color.gray500};
  margin-bottom: 16px;
`;

export const Summary = styled.span`
  ${theme.typography.Body3};
  color: ${theme.color.gray300};
  margin-bottom: 16px;
`;

export const ChipWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
