import styled from 'styled-components';
import theme from '../theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  ${theme.typography.Header5};
  color: ${theme.color.gray500};
  margin-right: 12px;
`;

export const Count = styled.div`
  ${theme.typography.Subheader3};
  color: ${theme.color.gray300};
  padding: 3px 9.5px;
  background-color: ${theme.color.gray100};
  border-radius: 8px;
`;
