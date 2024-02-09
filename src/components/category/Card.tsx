import React, { useEffect, useState } from 'react';
import VideoTag from '../common/videoTag';
import * as CardStyles from '@/styles/category/Card.style';

export interface cardDummy {
  video_id: number;
  category_id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  created_at: string;
  youtube_created_at: string;
  tag: [{ name: string }];
}

interface ICardProps {
  videos: cardDummy[];
  checkedVideos: boolean[];
  setCheckedVideos: (value: boolean[]) => void;
}

const Card: React.FC<ICardProps> = ({
  videos,
  checkedVideos,
  setCheckedVideos,
}) => {
  const [isShadow, setIsShadow] = useState<boolean[]>(new Array(6).fill(false));

  useEffect(() => {
    if (checkedVideos.includes(true)) {
      // 1개 이상 클릭 시 모든 hover event 활성화
      setIsShadow(isShadow.map(() => true));
    } else if (!isShadow.includes(false)) {
      //모든 hover 활성화, 모든 체크 비활성화 시 모든 hover 활성화 제거
      setIsShadow(isShadow.map(() => false));
    }
  }, [checkedVideos]);

  const handleMouseEnter = (id: number) => {
    const prev = checkedVideos.includes(true)
      ? [...isShadow]
      : new Array(isShadow.length).fill(false);
    // 체크박스 미선택 이동 시 isshadow 중복 작동으로 인해 방식 변경
    prev[id] = true;
    setIsShadow(prev);
  };

  const handleMouseLeave = (id: number) => {
    if (!checkedVideos.includes(true)) {
      // 선택되면 유지
      const prev = [...isShadow];
      prev[id] = false;
      setIsShadow(prev);
    }
  };

  const checkBoxHandler = (id: number) => {
    const prev = [...checkedVideos];
    prev[id] = !prev[id];
    setCheckedVideos(prev);
  };
  return (
    <CardStyles.Container>
      {videos.map((video, idx) => (
        <CardStyles.Wrap
          key={`${video.title}-wrap`}
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={() => handleMouseLeave(idx)}
        >
          <CardStyles.Image
            src={video.image}
            alt="썸네일 이미지"
            key={`${video.title}-image`}
          />
          {isShadow[idx] && (
            <CardStyles.CheckBox
              type="checkbox"
              checked={checkedVideos[idx]}
              onChange={() => checkBoxHandler(idx)}
            />
          )}
          <CardStyles.Content key={`${video.title}-card-content`}>
            <CardStyles.Title key={`${video.title}`}>
              {video.title}
            </CardStyles.Title>
            <CardStyles.Summary key={`${video.description}`}>
              {video.description}
            </CardStyles.Summary>
            <CardStyles.ChipWrap key={`${video.title}-chip-wrap`}>
              {video.tag.map((tag) => (
                <VideoTag
                  content={`# ${tag.name}`}
                  color={'gray400'}
                  typography="Caption1"
                  key={`${video.title}-${tag.name}`}
                />
              ))}
            </CardStyles.ChipWrap>
          </CardStyles.Content>
        </CardStyles.Wrap>
      ))}
    </CardStyles.Container>
  );
};

export default Card;
