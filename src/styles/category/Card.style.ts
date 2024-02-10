import styled from 'styled-components';
import theme from '../theme';
import checkIcon from '@/assets/icons/check.svg';
import checkedIcon from '@/assets/icons/checked.svg';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 20px;
  row-gap: 40px;
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

export const CheckBox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${theme.color.gray300};
  background-image: url(${checkIcon});
  background-repeat: no-repeat;
  background-position: center;
  border: 1.5px solid ${theme.color.white};
  color: ${theme.color.white};

  position: absolute;
  margin-left: 252px;
  margin-top: 13px;

  &:checked {
    border: 1.5px solid ${theme.color.green300};
    background-color: ${theme.color.green300};
    background-image: url(${checkedIcon});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const Image = styled.img`
  &:hover {
    filter: brightness(50%);
  }
`;
