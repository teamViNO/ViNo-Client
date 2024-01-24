import styled from 'styled-components';
import theme from '../theme';

export const BlurBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.16);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CommonAddCategoryContainer = styled.div`
  padding: 40px 61px;
  background-color: ${theme.color.white};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
