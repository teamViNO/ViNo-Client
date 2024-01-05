import styled from 'styled-components';

export const ExampleStyledComponent = styled.div`
  /* Font */
  ${(props) => props.theme.typography.Header4}

  width: 100px;
  height: 100px;
  /* Color */
  background-color: ${(props) => props.theme.color.green600};
`;
