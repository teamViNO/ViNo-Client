import React, { useState, ChangeEvent, FormEvent } from 'react';
import theme from '@/styles/theme';
import ProgressBar from './ProgressBar';
import { useSetRecoilState } from 'recoil';
import { recommendationModalState } from '@/stores/modal';

import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchContainer,
} from '@/styles/HomepageStyle';

import VideoIcon from '@/assets/icons/video.svg?react';
import WarningIcon from '@/assets/icons/warning.svg?react';
import { getVideoModeling } from '@/apis/videos';

interface SearchBarProps {
  onSearch: (value: string) => void;
  searchRef: React.RefObject<HTMLInputElement>;
}

const SearchYoutube: React.FC<SearchBarProps> = ({ onSearch, searchRef }) => {
  const [inputLink, setInputLink] = useState('');
  const [isButtonValid, setIsButtonValid] = useState(false);
  const [isTextValid, setIsTextValid] = useState(true);
  const [isConverting, setIsConverting] = useState(false);

  const setModalOpen = useSetRecoilState(recommendationModalState);

  const onStartConvert = async () => {
    await getVideoModeling(inputLink);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (isValidYoutubeLink(inputLink)) {
      setIsButtonValid(true);
      setIsTextValid(true);
      setIsConverting(true);
      onSearch(inputLink);
      setModalOpen(true);
    } else {
      setIsButtonValid(false);
      setIsTextValid(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputLink(event.target.value);
    if (isValidYoutubeLink(event.target.value)) {
      setIsButtonValid(true);
      setIsTextValid(true);
    } else {
      setIsButtonValid(false);
      setIsTextValid(true);
    }
  };

  const isValidYoutubeLink = (link: string) => {
    const pattern = new RegExp('^(https?://)?(www.youtube.com|youtu.?be)/.+');
    return pattern.test(link);
  };

  return (
    <SearchContainer className="dark-section">
      <SearchForm onSubmit={handleSubmit}>
        <div className="search-text">
          {isTextValid ? (
            <div className="valid-text">
              <h1
                className="search-title"
                style={{ width: isConverting ? '449px' : '441px' }}
              >
                {isConverting
                  ? '읽기 편한 영상을 만들고 있어요!'
                  : '어떤 영상을 정리해볼까요?'}
              </h1>
              <h4
                className="search-subtitle"
                style={{ color: theme.color.gray300 }}
              >
                {isConverting
                  ? '열심히 영상을 변환 중이에요'
                  : '영상에서 글로 변환하고 싶은 YouTube 영상의 링크를 붙여넣어주세요'}
              </h4>
            </div>
          ) : (
            <div className="non-valid-text">
              <h1 className="search-title" style={{ width: 441 }}>
                영상 주소를 다시 확인해주세요!
              </h1>
              <div className="search-subtitle-wrapper">
                <WarningIcon width={24} height={24} />
                <h4
                  className="search-subtitle"
                  style={{ width: 265, color: 'red', marginLeft: 12 }}
                >
                  Youtube 영상의 링크만 변환이 가능해요!
                </h4>
              </div>
            </div>
          )}
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
              ref={searchRef}
            />
          </div>
          <SearchButton
            type="submit"
            onClick={onStartConvert}
            style={{
              color: isButtonValid ? 'white' : theme.color.gray300,
              backgroundColor: isButtonValid
                ? theme.color.gray500
                : theme.color.gray100,
            }}
          >
            변환하기
          </SearchButton>
        </div>
        {isConverting && <ProgressBar />}
      </SearchForm>
    </SearchContainer>
  );
};

export default SearchYoutube;
