import ModifyIcon from '@/assets/icons/modify.svg?react';
import TransformationIcon from '@/assets/icons/transformation.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';

import { QuestionTip } from '@/components/Guide';

import { QuestionSection, Section } from '@/styles/GuidePage';

const GuideSummaryPage = () => {
  const question1Tips = [
    {
      id: 'KEYWORD',
      image: '/assets/summary-question1-1.png',
      title: (
        <>
          <span className="icon">
            <TransformationIcon width={17} height={17} />
          </span>
          특정 단어 변경하기
        </>
      ),
      description:
        '본문 상단에 있는 [단어 변경]에서 찾는 단어를 검색하고 해당 언어를 원하는 단어로 수정할 수 있어요',
      position: '영상 요약 페이지 > 단어 변경',
    },
    {
      id: 'EDIT',
      image: '/assets/summary-question1-2.png',
      title: (
        <>
          <span className="icon">
            <ModifyIcon width={17} height={17} />
          </span>
          키워드 검색
        </>
      ),
      description:
        '본문 상단에 있는 [내용 수정]에서 전체 내용을 수정할 수 있어요',
      position: '영상 요약 페이지 > 내용 수정',
    },
  ];

  const question2Tips = [
    {
      id: 'SEARCH',
      image: '/assets/summary-question2.png',
      title: (
        <>
          <span className="icon">
            <SearchIcon width={17} height={17} />
          </span>
          내용 수정하기
        </>
      ),
      description:
        '본문 상단에 있는 [키워드 검색]에서 원하는 키워드를 검색하고 하이라이트 된 부분을 확인할 수 있어요',
      position: '영상 요약 페이지 > 키워드 검색',
    },
  ];

  return (
    <>
      <Section>
        <div className="info-box">
          <h2 className="subtitle">영상 요약</h2>

          <h1 className="title">
            영상을 텍스트로 변환하고
            <br />
            <span>쉽게 정리</span>할 수 있어요
          </h1>
        </div>
      </Section>

      <QuestionSection>
        <div className="question-box">
          <h1>
            <strong>Q1</strong>
            <br />
            내용이 잘못 인식 된 것 같아요.
            <br />
            <strong>직접 내용을 수정</strong>하고 싶어요!
          </h1>

          <div className="question-tips">
            {question1Tips.map((tip) => (
              <QuestionTip key={tip.id} {...tip} />
            ))}
          </div>
        </div>

        <div className="question-box">
          <h1>
            <strong>Q2</strong>
            <br />
            본문에서 찾고자 하는 키워드를
            <br />
            <strong>바로 찾고</strong> 싶어요!
          </h1>

          <div className="question-tips">
            {question2Tips.map((tip) => (
              <QuestionTip key={tip.id} {...tip} />
            ))}
          </div>
        </div>
      </QuestionSection>
    </>
  );
};

export default GuideSummaryPage;
