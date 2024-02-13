import { useRecoilValue } from 'recoil';

import { summaryVideoState } from '@/stores/summary';

import { DetailBox } from '@/styles/SummaryPage';

import { CategorySelectBox } from './CategorySelectBox';
import { NoteBox } from './NoteBox';
import { useState } from 'react';
import { ISelectedCategoryProps } from 'types/category';

const SummaryDetailBox = () => {
  const summaryVideo = useRecoilValue(summaryVideoState);

  const [selectedCategory, setSelectedCategory] =
    useState<ISelectedCategoryProps>({ name: '', categoryId: 0 });

  const handleSelectCategory = ({
    name,
    categoryId,
  }: ISelectedCategoryProps) => {
    setSelectedCategory({
      name,
      categoryId,
    });
    console.log('name, categoryId를 이용한 API 요청');
  };

  return (
    <div
      style={{
        height: '100%',
        overflowY: 'auto',
        flex: '1 1 555px',
      }}
    >
      <DetailBox>
        <span className="created_at">2024년 1월 1일</span>

        <span className="youtube-video-title">{summaryVideo?.title}</span>

        <div style={{ display: 'flex', gap: 10 }}>
          {summaryVideo?.tag.map((hashtag) => (
            <span key={hashtag.name} className="hashtag">
              #{hashtag.name}
            </span>
          ))}
        </div>

        <div
          style={{
            margin: '20px 0',
            width: '100%',
            height: 432,
            borderRadius: 16,
            backgroundColor: '#f3f3f3',
          }}
        />

        <CategorySelectBox
          selectedCategory={selectedCategory}
          handleSelectCategory={handleSelectCategory}
        />

        <span className="title">{summaryVideo?.description}</span>

        <div
          style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {summaryVideo?.subHeading.map((subHeading, i) => (
            <div key={subHeading.id} className="subtitle">
              <span className="subtitle-index">{i + 1}</span>
              <span className="subtitle-text">{subHeading.content}</span>
            </div>
          ))}
        </div>

        <NoteBox />
      </DetailBox>
    </div>
  );
};

export default SummaryDetailBox;
