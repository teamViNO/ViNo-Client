import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchContainer,
} from '@/styles/HomepageStyle';
import VideoIcon from '@/assets/icons/video.svg?react';

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchYoutube: React.FC<SearchBarProps> = ({ onSearch }) => {
  // const [warning, setWarning] = useState(''); // 경고문구
  const [inputLink, setInputLink] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch(inputLink);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputLink(event.target.value);
  };

  return (
    <SearchContainer className="dark-section">
      <SearchForm onSubmit={handleSubmit}>
        <div className="search-text">
          <h1 className="search-title">어떤 영상을 정리해볼까요?</h1>
          <h4 className="search-subtitle">
            영상에서 글로 변환하고 싶은 YouTube 영상의 링크를 붙여넣어주세요
          </h4>
        </div>
        <div className="input-container">
          <div className="link-container">
            <div className="icon-container">
              <VideoIcon width={36} height={36} />
            </div>
            <SearchInput
              type="text"
              value={inputLink}
              onChange={handleChange}
              placeholder="https://youtube.com/..."
            />
          </div>
          <SearchButton type="submit">변환하기</SearchButton>
        </div>
      </SearchForm>
    </SearchContainer>
  );
};

export default SearchYoutube;
