import ErrorIcon from '@/assets/icons/error.svg?react';
import InfoIcon from '@/assets/icons/info-icon.svg?react';
import { QuestionTip } from '@/components/Guide';

import { CategoryGuide, QuestionSection, Section } from '@/styles/GuidePage';

const GuideCategoryPage = () => {
  return (
    <>
      <Section>
        <div className="info-box">
          <h2 className="subtitle">카테고리 정리</h2>

          <h1 className="title">
            변환된 영상들을
            <br />
            <span>나의 편의에 맞게 분류</span>할 수 있어요
          </h1>
        </div>

        <div className="feature-list">
          <div className="feature-item">
            <img src="/assets/category-feature1.png" alt="category-guide" />
            <h1>상위 카테고리</h1>

            <span className="description">
              상위 카테고리로 자주 찾는 관심 분야를 넣는 건 어떨까요?
            </span>

            <div className="info">
              <InfoIcon width={24} height={24} />

              <span>
                상위 카테고리를 하위 카테고리로 이동 시킬 시<br />
                카테고리 구분 없이 콘텐츠만 이동됩니다!
              </span>
            </div>
          </div>

          <div className="feature-item">
            <img src="/assets/category-feature2.png" alt="feature" />

            <h1>하위 카테고리</h1>

            <span className="description">
              세분화된 내용별로 하위 카테고리로 분류하여 콘텐츠를 정리해요!
            </span>
          </div>
        </div>

        <CategoryGuide>
          <img src="/assets/category-guide.png" alt="category-guide" />

          <span className="description">
            [기타] 폴더에는 어느 하위 카테고리에도 포함 되지 않은 콘텐츠들이
            담겨있어요!
          </span>

          <span className="error">
            <ErrorIcon width={24} height={24} />
            [기타] 폴더는 임의로 삭제할 수 없어요
          </span>
        </CategoryGuide>
      </Section>

      <QuestionSection>
        <div className="question-box">
          <h1>
            <strong>
              Q1
              <br />
              상위 카테고리를
            </strong>
            <br />
            추가하고 싶어요!
          </h1>

          <div className="question-tips">
            <QuestionTip
              image="/assets/category-question1.png"
              title="[+] 버튼을 통해 상위 카테고리 생성"
              description={
                <>
                  + 버튼을 클릭하면 상위 카테고리를 생성할 수 있어요.
                  <br />
                  팝업창을 통해 카테고리명도 설정해요.
                </>
              }
              position="좌측 메뉴바 > +"
            />
          </div>
        </div>

        <div className="question-box">
          <h1>
            <strong>
              Q2
              <br />
              하위 카테고리를
            </strong>
            <br />
            추가하고 싶어요!
          </h1>

          <div className="question-tips">
            <QuestionTip
              image="/assets/category-question2.png"
              title="[더보기] 버튼을 통해 하위 카테고리 생성"
              description={
                <>
                  [더보기] 버튼을 클릭해 하위 카테고리를 생성해요.
                  <br />
                  팝업창을 통해 카테고리명도 설정할 수 있어요.
                </>
              }
              position="좌측 메뉴바 > 더보기"
            />
          </div>
        </div>

        <div className="question-box">
          <h1>
            <strong>
              Q3
              <br />
              쉽게 영상의 카테고리 위치를
            </strong>
            <br />
            변경하고 싶어요!
          </h1>

          <div className="question-tips">
            <QuestionTip
              image="/assets/category-question3-1.png"
              title="카드에서 바로 카테고리 설정"
              description="홈 화면에서 간편하게 카테고리를 지정을 할 수 있어요"
              position="메인 홈 > 영상 카드 > 카테고리 변경 드롭 다운"
            />

            <QuestionTip
              image="/assets/category-question3-2.png"
              title="요약 상세 페이지에서 바로 카테고리 설정"
              description="변환된 콘텐츠 페이지에서도 바로 카테고리 지정이 가능해요"
              position="요약 상세 페이지 > 카테고리 변경 드롭 다운"
            />
          </div>
        </div>
      </QuestionSection>
    </>
  );
};

export default GuideCategoryPage;
