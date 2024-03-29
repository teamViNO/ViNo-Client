import ErrorIcon from '@/assets/icons/error.svg?react';
import { QuestionTip } from '@/components/Guide';

import {
  GuideHome,
  QuestionHome,
  QuestionSection,
  Section,
} from '@/styles/GuidePage';

import GuideProgress1 from '@/assets/guideprogress1.svg?react';
import GuideProgress2 from '@/assets/guideprogress2.svg?react';
import GuideProgress3 from '@/assets/guideprogress3.svg?react';

const GuideHomePage = () => {
  return (
    <>
      <Section>
        <div className="info-box">
          <h2 className="subtitle">홈 화면</h2>

          <h1 className="title">
            홈 화면에서 빠르게
            <br />
            <span>영상을 텍스트로 변환</span>할 수 있어요
          </h1>
        </div>
        
        <GuideHome>
          <div className="item">
            <img src="/assets/home-guide1.png" alt="guide-image" width={446} />

            <div className="content">
              <h1>영상을 텍스트로 한 번에 변환</h1>

              <div className="description">
                <span>
                  1. 링크 복붙 한 번으로 유튜브 영상을 텍스트로 변환해요
                </span>
                <span className="error" style={{ paddingLeft: 26 }}>
                  <ErrorIcon width={24} height={24} />
                  YouTube 영상의 링크만 변환 가능
                </span>
                <span>
                  2. 링크를 삽입하고 <button>변환하기</button> 를 누르면 현재
                  진행 상황을 확인할 수 있어요
                </span>
                <span>
                  3. 진행 바에 마우스를 올리면 정확한 진행율을 확인하고 변환을
                  멈출 수도 있어요
                </span>
              </div>
            </div>
          </div>

          <div className="item">
            <img src="/assets/home-guide2.png" alt="guide-image" width={446} />

            <div className="content">
              <h1>이런 인사이트는 어때요?</h1>

              <div className="description">
                <ul>
                  <li>
                    개인화된 추천으로 사용자가 자주 만난 키워드를 가진
                    <br />
                    맞춤 영상들을 소개해요
                  </li>
                  <li>
                    나와 비슷한 관심사를 가진 사람들에게 영감을 준 콘텐츠들도
                    <br />
                    만날 수 있어요
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </GuideHome>
      </Section>

      <QuestionSection>
        <div className="question-box">
          <h1>
            <strong>
              Q1
              <br />
              얼마만큼 변환 되었는지
            </strong>
            <br />
            빠르게 알고 싶어요!
          </h1>

          <div className="question-tips">
            <QuestionTip
              image="/assets/home-question1.png"
              title="알림으로 언제든지 변환 진행율 파악"
              description="상단 바에 있는 [읽지 않은 알림]에서 어느 페이지에서든 실시간으로 영상변환 진행율을 파악할 수 있어요"
              position="상단바 > 읽지 않은 알림"
            />

            <QuestionHome>
              <div className="item">
                <GuideProgress1 width={205}/>
                <span>진행중</span>
              </div>

              <div className="item">
                <GuideProgress2 width={205}/>
                <span>진행 완료</span>
              </div>

              <div className="item">
                <GuideProgress3 width={205}/>
                <span>진행 오류</span>
              </div>
            </QuestionHome>
          </div>
        </div>

        <div className="question-box">
          <h1>
            <strong>
              Q2
              <br />
              다른 일을 하는 동시에
            </strong>
            <br />
            영상을 변환하고 싶어요!
          </h1>

          <div className="question-tips">
            <QuestionTip
              image="/assets/home-question2.png"
              title="사이드 바에서 영상 변환"
              description={
                <>
                  사이드 바에 있는 [영상 변환하기] 영역에서 다른 작업을 하는
                  동시에 영상을 변환하고, 진행율을 확인할 수 있어요
                  <span className="error">
                    <ErrorIcon width={24} height={24} />
                    단, 영상 2개를 동시에 변환하는 것은 불가능해요!
                  </span>
                </>
              }
              position="좌측 메뉴바 > 영상 변환하기"
            />
          </div>
        </div>
      </QuestionSection>
    </>
  );
};

export default GuideHomePage;
