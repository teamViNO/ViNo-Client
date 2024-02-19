import styled from 'styled-components';
import { CommonBackground } from './CategoryPageSkeleton.style';

export const CommonFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  padding: 60px 0 121px;
  margin-inline: auto;
  width: 873px;
`;

export const Rectangle = styled(CommonBackground)`
  width: 220px;
  height: 20px;
  margin: 12px 0 59px;

  &.small,
  &.medium,
  &.large {
    margin: 0;
  }
  &.small {
    width: 41px;
  }

  &.medium {
    width: 90px;
    height: 40px;
  }

  &.large {
    width: 274px;
    margin-top: 11px;
    align-self: flex-end;
  }
`;

export const Box = styled(CommonBackground)`
  width: 40px;
  height: 40px;

  &.large {
    width: 84px;
    height: 84px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  margin-top: 53px;
  justify-content: flex-end;
`;

export const InnerWrap = styled(CommonFlex)`
  justify-content: space-between;
  margin-left: 20px;
`;

export const Chip = styled(CommonBackground)`
  width: 41px;
  height: 20px;

  &.medium {
    width: 734px;
    height: 43px;
  }

  &.large {
    width: 838px;
    height: 50px;
    margin-top: 10px;
  }
`;

export const CommonWrap = styled(CommonFlex)`
  margin-top: 45px;
  align-items: flex-end;
`;
