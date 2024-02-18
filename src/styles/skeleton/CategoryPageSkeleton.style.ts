import styled, { keyframes } from 'styled-components';
import theme from '../theme';

const gradient = keyframes`
    0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const CommonBackground = styled.div`
  background: linear-gradient(
    -45deg,
    ${theme.color.gray100},
    ${theme.color.gray200},
    ${theme.color.gray100}
  );
  background-size: 200% 100%;
  animation: ${gradient} 1.5s ease infinite;

  border-radius: 4px;
`;

export const Container = styled.div`
  padding: 60px 60px 40px 120px;
  width: 100%;
  margin-inline: auto;
`;

export const Title = styled(CommonBackground)`
  height: 40px;
  width: 259px;
  background-color: ${theme.color.gray100};
`;

export const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0 44px;
`;

export const TagWrap = styled.div`
  display: flex;
`;

export const Tag = styled(CommonBackground)`
  visibility: hidden;
  width: 64px;
  height: 20px;
  margin-right: 20px;

  &.show {
    visibility: visible;
  }
`;

export const Menu = styled(CommonBackground)`
  width: 90px;
  height: 20px;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 290px);
  column-gap: 20px;
  row-gap: 61px;
`;
