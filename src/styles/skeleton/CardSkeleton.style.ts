import styled from 'styled-components';
import { CommonBackground } from './CategoryPageSkeleton.style';

export const Container = styled.div`
  height: 346px;
`;

export const Image = styled(CommonBackground)`
  height: 163px;
`;

export const ContentWrap = styled.div`
  padding: 26.87px 16px 0;
`;

export const ContentLong = styled(CommonBackground)`
  height: 20px;
  margin-bottom: 6px;
`;

export const ContentShort = styled(CommonBackground)`
  width: 142px;
  height: 20px;
  margin-bottom: 20px;
`;

export const TagWrap = styled.div`
  display: flex;
`;

export const Tag = styled(CommonBackground)`
  width: 62px;
  height: 31px;
  margin-right: 8px;
`;
