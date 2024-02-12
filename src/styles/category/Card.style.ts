import styled from 'styled-components';
import theme from '../theme';
import checkIcon from '@/assets/icons/check.svg';
import checkedIcon from '@/assets/icons/checked.svg';
import { Link } from 'react-router-dom';

export const CheckBoxWrap = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: none;

  flex-direction: row-reverse;
  width: 100%;
  height: 100%;

  &.activated {
    display: flex;
  }
`;

export const CheckBox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 24px;
  height: 24px;
  border-radius: 100%;
  background-color: ${theme.color.gray300};
  background-image: url(${checkIcon});
  background-repeat: no-repeat;
  background-position: center;
  border: 1.5px solid ${theme.color.white};
  color: ${theme.color.white};
  margin: 12px;

  &:checked {
    border: 1.5px solid ${theme.color.green300};
    background-color: ${theme.color.green300};
    background-image: url(${checkedIcon});
    background-repeat: no-repeat;
    background-position: center;
  }
`;
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

  &:hover {
    ${CheckBoxWrap} {
      display: flex;
    }
  }
`;

export const Content = styled(Link)`
  text-decoration: none;
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

export const Image = styled.div<{ source: string }>`
  background-image: url(${(props) => props.source});
  width: 290px;
  height: 163px;
  background-size: 100%;
`;
