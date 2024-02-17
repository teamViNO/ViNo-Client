import InfoIcon from '@/assets/icons/info-icon.svg?react';

import { QuestionTip } from '@/components/Guide';

import { QuestionSection, Section } from '@/styles/GuidePage';

const GuideSearchPage = () => {
  return (
    <>
      <Section>
        <div className="info-box">
          <h2 className="subtitle">검색</h2>

          <h1 className="title">
            <span>키워드 검색</span>을 통해
            <br />
            빠르게 나의 영상들을 찾아요
          </h1>
        </div>

        <div className="feature-list">
          <div className="feature-item">
            <img src="/assets/search-feature1.png" alt="feature" />

            <h1>키워드 검색</h1>

            <span className="description">
              유튜브 제목 / 추출 제목 / 본문 중 해당 키워드를
              <br />
              탐색하여 언급된 영상들을 제공해요
            </span>
          </div>

          <div className="feature-item">
            <img src="/assets/search-feature2.png" alt="feature" />

            <h1>해시태그 검색</h1>

            <span className="description">
              해시태그 속 키워드를 검색하면 자동 해시태그가 완성되며
              <br />
              해당 해시태그가 언급된 영상들을 제공해요
            </span>

            <div className="info">
              <InfoIcon width={24} height={24} />

              <span>해시태그는 한 번에 3개까지 함께 검색할 수 있어요!</span>
            </div>
          </div>
        </div>
      </Section>

      <QuestionSection>
        <div className="question-box">
          <h1>
            <strong>Q1</strong>
            <br />
            영상 내용은 검색으로 찾지 못한다?! NO!
            <br />
            영상에서 <strong>언급된 말을 한 번에</strong> 찾을 수 있어요
          </h1>

          <div className="question-tips">
            <QuestionTip
              image="/assets/search-question1.png"
              title="언급된 단어 탐색"
              description="유튜브 제목 / 추출 제목 / 본문 내용을 모두 탐색하여 해당 키워드가 언급된 콘텐츠를 보여줘요"
              position="상단바 > 검색"
            />
          </div>
        </div>
      </QuestionSection>
    </>
  );
};

export default GuideSearchPage;
