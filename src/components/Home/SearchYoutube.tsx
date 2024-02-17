import React, { useState, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { createVideoAPI } from '@/apis/videos';

import VideoIcon from '@/assets/icons/video.svg?react';
import WarningIcon from '@/assets/icons/warning.svg?react';

import RecommendationModal from '@/components/modals/RecommendationModal';

import theme from '@/styles/theme';
import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchContainer,
} from '@/styles/HomepageStyle';

import {
  modelingDataState,
  modelingErrorCodeState,
  modelingProgressState,
  videoLinkState,
} from '@/stores/model-controller';
import { userTokenState } from '@/stores/user';

import { validateYoutubeLink } from '@/utils/validation';

import ProgressBar from './ProgressBar';

type Props = {
  searchRef: React.RefObject<HTMLInputElement>;
};

const SearchYoutube = ({ searchRef }: Props) => {
  const navigate = useNavigate();

  const userToken = useRecoilValue(userTokenState);
  const progress = useRecoilValue(modelingProgressState);
  const setErrorCode = useSetRecoilState(modelingErrorCodeState);
  const [modelingData, setModelingData] = useRecoilState(modelingDataState);
  const [videoLink, setVideoLink] = useRecoilState(videoLinkState);

  const [inputLink, setInputLink] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isValidate = validateYoutubeLink(inputLink);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (validateYoutubeLink(inputLink)) {
      setIsModalOpen(true);
      setVideoLink(inputLink);
    }
  };

  const handleClickCreateVideoButton = async () => {
    if (!modelingData) return;

    if (userToken) {
      try {
        const { video_id } = (await createVideoAPI(modelingData)).data.result;

        navigate(`/summary/${video_id}`);
        setModelingData(null);
      } catch (e) {
        console.error(e);
      }
    }

    setVideoLink(null);
    setErrorCode(null);
  };

  useEffect(() => {
    if (videoLink) {
      setIsModalOpen(true);
    }
  }, [videoLink]);

  return (
    <>
      <SearchContainer className="dark-section">
        <SearchForm onSubmit={handleSubmit}>
          <div className="search-text">
            {inputLink === '' || isValidate ? (
              <>
                <h1 className="search-title">
                  {progress === 100
                    ? '영상 변환이 완료되었어요!'
                    : progress === 0
                      ? '어떤 영상을 정리해볼까요?'
                      : '읽기 편한 영상을 만들고 있어요!'}
                </h1>

                <h4
                  className="search-subtitle"
                  style={{ color: theme.color.gray300 }}
                >
                  {progress === 100
                    ? '지금 바로 변환된 영상을 읽어보세요'
                    : progress === 0
                      ? '영상에서 글로 변환하고 싶은 YouTube 영상의 링크를 붙여넣어주세요'
                      : '열심히 영상을 변환 중이에요'}
                </h4>
              </>
            ) : (
              <>
                <h1 className="search-title">영상 주소를 다시 확인해주세요!</h1>
                <div className="search-subtitle-wrapper">
                  <WarningIcon width={24} height={24} />
                  <h4
                    className="search-subtitle"
                    style={{ width: 265, color: 'red', marginLeft: 12 }}
                  >
                    Youtube 영상의 링크만 변환이 가능해요!
                  </h4>
                </div>
              </>
            )}
          </div>

          <div className="input-container">
            <div className="link-container">
              <div className="icon-container">
                <VideoIcon width={36} height={36} />
              </div>

              <SearchInput
                ref={searchRef}
                type="text"
                value={inputLink}
                disabled={!!videoLink}
                onChange={(e) => setInputLink(e.target.value)}
                placeholder="https://youtube.com/..."
              />
            </div>

            {progress === 100 ? (
              <SearchButton
                type="button"
                style={{
                  color: theme.color.gray500,
                  backgroundColor: theme.color.green400,
                }}
                onClick={handleClickCreateVideoButton}
              >
                영상 읽기
              </SearchButton>
            ) : (
              <SearchButton type="submit" disabled={!!videoLink || !isValidate}>
                변환하기
              </SearchButton>
            )}
          </div>

          {videoLink && <ProgressBar />}
        </SearchForm>
      </SearchContainer>

      {isModalOpen && (
        <RecommendationModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default SearchYoutube;
