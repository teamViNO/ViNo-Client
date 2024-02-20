import styled, { css } from 'styled-components';
import theme from '../theme';
import checkIcon from '@/assets/icons/check.svg';
import checkedIcon from '@/assets/icons/checked.svg';
import { Link } from 'react-router-dom';

export const DropdownWrap = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  position: relative;
  padding: 0 20px;
  bottom: 24px;

  & div.select-box {
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    border-radius: 8px;
    border: solid 1px ${(props) => props.theme.color.gray200};
    color: ${(props) => props.theme.color.gray400};
    ${(props) => props.theme.typography.Body3};
    cursor: pointer;
  }
  & span.icon-button {
    padding: 5px 6px;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    cursor: default;
    background-color: ${theme.color.gray100};

    &.start-select {
      cursor: pointer;
      background-color: ${theme.color.green400};
    }

    &.disabled svg {
      & path:nth-of-type(1) {
        fill: ${(props) => props.theme.color.gray300};
      }

      & path:nth-of-type(2) {
        fill: ${(props) => props.theme.color.gray400};
      }
    }

    &.changed {
      background-color: ${theme.color.green400};
    }
  }
`;

export const CheckBoxWrap = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 16px 16px 0 0;

  display: none;

  flex-direction: row-reverse;
  width: 100%;
  height: 163px;

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

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 290px);
  column-gap: 20px;
  row-gap: 40px;
`;

export const Wrap = styled.div<{ token: string | null; mode: string }>`
  display: flex;
  flex-direction: column;
  width: 290px;
  border-radius: 16px;
  overflow: visible;
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.05);
  transition: all 0.5s;
  position: relative;
  height: 370px;
  background-color: ${theme.color.white};

  &:hover {
    ${CheckBoxWrap} {
      display: flex;
    }
    ${DropdownWrap} {
      display: flex;
    }
    z-index: 1;
    scale: 1.025;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
    ${(props) =>
      props.mode === 'recommend' &&
      props.token &&
      css`
        height: 424px;
      `}
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
  height: 52px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
`;

export const Summary = styled.span`
  ${theme.typography.Body3};
  color: ${theme.color.gray300};
  margin: 16px 0;
  height: 44px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
`;

export const ChipWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

export const Image = styled.img`
  border-radius: 16px 16px 0 0;
  width: 290px;
  height: 163px;
`;
