import React, { useState, FormEvent } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import VideoIcon from '@/assets/icons/video.svg?react';
import WarningIcon from '@/assets/icons/warning.svg?react';

import theme from '@/styles/theme';
import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchContainer,
} from '@/styles/HomepageStyle';

import { recommendationModalState } from '@/stores/modal';

import {
  modelingDataState,
  modelingProgressState,
  modelingStatusState,
  videoLinkState,
} from '@/stores/model-controller';

import { validateYoutubeLink } from '@/utils/validation';

import ProgressBar from './ProgressBar';
import useCreateVideo from '@/hooks/useCreateVideo';

type Props = {
  searchRef: React.RefObject<HTMLInputElement>;
};

const SearchYoutube = ({ searchRef }: Props) => {
  const setIsOpenModal = useSetRecoilState(recommendationModalState);
  const setModelingData = useSetRecoilState(modelingDataState);
  const setVideoLink = useSetRecoilState(videoLinkState);
  const setProgress = useSetRecoilState(modelingProgressState);
  const [status, setStatus] = useRecoilState(modelingStatusState);
  const { createVideo } = useCreateVideo();

  const [inputLink, setInputLink] = useState('');

  const isValidate = validateYoutubeLink(inputLink);

  const getTitle = () => {
    if (inputLink !== '' && !isValidate) {
      return '영상 주소를 다시 확인해주세요!';
    }

    switch (status) {
      case 'COMPLETE':
        return '영상 변환이 완료되었어요!';
      case 'STOP':
      case 'CONTINUE':
        return '읽기 편한 영상을 만들고 있어요!';
      case 'NONE':
        return '어떤 영상을 정리해볼까요?';
      case 'ERROR':
        return '영상 변환 중 오류가 발생했어요!';
    }
  };

  const getSubTitle = () => {
    if (inputLink !== '' && !isValidate) {
      return 'YouTube 영상의 링크만 변환이 가능해요!';
    }

    switch (status) {
      case 'COMPLETE':
        return '지금 바로 변환된 영상을 읽어보세요';
      case 'STOP':
      case 'CONTINUE':
        return '열심히 영상을 변환 중이에요';
      case 'NONE':
        return '영상에서 글로 변환하고 싶은 YouTube 영상의 링크를 붙여넣어주세요';
      case 'ERROR':
        return '영상 변환 중 오류가 발생했어요';
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (validateYoutubeLink(inputLink)) {
      setVideoLink(inputLink);
      setIsOpenModal(true);
    }
  };

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputLink(e.target.value);
    setVideoLink(null);
    setStatus('NONE');
    setProgress(0);
    setModelingData(null);
  };

  return (
    <>
      <SearchContainer className="dark-section">
        <SearchForm onSubmit={handleSubmit}>
          <div className="search-text">
            <h1 className="search-title">{getTitle()}</h1>

            <div className="search-subtitle-wrapper">
              {(status === 'ERROR' || (!isValidate && inputLink !== '')) && (
                <WarningIcon
                  width={24}
                  height={24}
                  style={{ marginRight: 12 }}
                />
              )}

              <h4
                className="search-subtitle"
                style={{
                  color:
                    status === 'ERROR' || (!isValidate && inputLink !== '')
                      ? theme.color.red
                      : theme.color.gray300,
                }}
              >
                {getSubTitle()}
              </h4>
            </div>
          </div>

          <div className="input-container">
            <div className="link-container">
              <div className="icon-container">
                <VideoIcon width={36} height={36} />
              </div>

              <SearchInput
                type="text"
                value={inputLink}
                disabled={status === 'CONTINUE'}
                onChange={handleChangeInput}
                placeholder="https://youtube.com/..."
                ref={searchRef}
              />
            </div>

            {status === 'COMPLETE' ? (
              <SearchButton
                type="button"
                style={{
                  color: theme.color.gray500,
                  backgroundColor: theme.color.green400,
                }}
                onClick={createVideo}
              >
                영상 읽기
              </SearchButton>
            ) : (
              <SearchButton
                type="submit"
                disabled={status === 'CONTINUE' || !isValidate}
              >
                변환하기
              </SearchButton>
            )}
          </div>

          {status !== 'NONE' && <ProgressBar />}
        </SearchForm>
      </SearchContainer>
    </>
  );
};

export default SearchYoutube;
