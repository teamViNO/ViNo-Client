import styled from 'styled-components';
import theme from './theme';

export const HomePageContainer = styled.div`
  background-color: ${theme.color.white};
  min-height: 100vh;
  width: 100%;
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 100px;
  background-color: ${theme.color.gray500};
`;

export const SearchForm = styled.form`
  margin: 0 auto;
  width: 908px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .search-text {
    width: 436px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .valid-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .search-title {
    text-align: center;
    margin-top: 120px;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 8px;
    width: 379px;
    height: 58px;
  }

  .non-valid-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.6em;
  }

  .search-subtitle {
    color: ${theme.color.gray300};
    width: 436px;
    height: 26px;
  }

  .search-subtitle-wrapper {
    width: 301px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .input-container {
    padding: 16px 20px;
    border: none;
    border-radius: 12px;
    width: 908px;
    height: 72px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${theme.color.white};
  }

  .link-container {
    display: flex;
    align-items: center;
    width: 516.5px;
    height: 36px;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    margin-right: 20px;
  }
`;

export const SearchInput = styled.input`
  width: 372px;
  height: 26px;
  padding: 16px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  outline: none;
  color: ${theme.color.gray500};

  &::placeholder {
    color: ${theme.color.gray300};
  }
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: ${theme.color.gray500};
  }
`;

export const RecentVideosContainer = styled.div<{ length: number }>`
  background-color: ${theme.color.white};
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 50px 50px 0px 0px;
  position: relative;
  bottom: 50px;
  padding: ${(props) => (props.length ? '100px' : '0')} 0 110px;

  .container {
    width: 910px;
  }

  .empty-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .empty-video img {
    width: 155.56px;
    height: 155.56px;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  .empty-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title-container {
    width: 910px;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 40px;
  }

  .icon-wrapper {
    border: none;
    border-radius: 100px;
    background-color: ${theme.color.green400};
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const VideosTitle = styled.h2`
  font-size: 28px;
  color: ${theme.color.gray500};
  padding: 10px;
  text-align: left;
  width: 910px;
  height: 45px;
  font-weight: bold;
`;

export const VideosSubtitle = styled.h4`
  font-size: 1rem;
  color: ${theme.color.gray400};
  margin-bottom: 40px;
  line-height: 2;
`;

export const VideoButton = styled.button`
  padding: 12px 32px;
  ${theme.typography.Subheader2}
  border: none;
  width: 190px;
  height: 56px;
  background-color: ${theme.color.gray500};
  margin-bottom: 20px;
  border-radius: 100px;
  cursor: pointer;

  .button-text {
    width: 126px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.color.white};
  }

  &:hover {
    background-color: ${theme.color.green400};

    .button-text {
      color: ${theme.color.gray500};
    }
  }
`;

export const InsightVideosContainer = styled.div<{ user: string | null }>`
  display: flex;
  justify-content: center;
  background-color: ${theme.color.white};
  width: 100%;
  border-radius: 50px 50px 0 0;
  padding: ${(props) => (props.user ? '0' : '100px')} 0 110px;
  position: relative;
  bottom: 50px;

  .insight-container {
    display: flex;
    flex-direction: column;
  }

  .text-container {
    color: ${theme.color.gray500};
    padding: 10px;
    text-align: left;
    width: 910px;
    height: 87px;
    line-height: 2;
    margin-bottom: 40px;
  }

  .insight-title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .insight-subtitle {
    font-size: 1em;
    color: ${theme.color.gray400};
  }

  .end-message {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .end-wrapper {
    transition: all 1s;
    width: 255px;
    height: 171.11px;
    margin-top: 120px;
  }

  .end-text {
    margin-top: 20px;
    color: ${theme.color.gray400};
    font-size: 20px;
    line-height: 1.6em;
  }

  .category-container {
    width: 250px;
    height: 38px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .category-container select {
    width: 202px;
    height: 38px;
    padding: 6px 16px;
    border-radius: 8px;
    margin-right: 8px;
    color: ${theme.color.gray400};
    border: 1px solid ${theme.color.gray200};
  }

  .category-icon {
    height: 38px;
    width: 40px;
    background-color: ${theme.color.green400};
  }

  .insight-videos .video-card {
    transition: all 0.3s ease-in-out;
  }

  .insight-videos .video-card:hover {
    height: 424.13px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  }

  .video-card .category-container {
    display: none;
  }

  .video-card:hover .category-container {
    display: block;
  }
`;
