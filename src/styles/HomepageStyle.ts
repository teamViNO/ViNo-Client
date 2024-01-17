import styled from 'styled-components';
import theme from './theme';

export const HomePageContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: ${theme.color.gray500}; 
  min-height: 100vh;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  padding: 20px 16px; 
`;

export const Title = styled.h1`
  margin-top: 50px;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Subtitle = styled.h4`
  color: ${theme.color.gray300}; 
  margin-bottom: 40px;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  width: 900px;
  height: 70px;
  padding: 10px 40px 10px 70px;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  outline: none;
  color: ${theme.color.gray300};

  &::placeholder {
    color: ${theme.color.gray300};
  }
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  position: absolute;
  right: 320px;
  z-index: 1;
  font-size: 1rem;
  color: ${theme.color.gray300};
  background-color: ${theme.color.gray100};
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: ${theme.color.gray500};
  }
`;

export const SearchIcon = styled.div` 
  position: absolute;
  left: 310px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;

