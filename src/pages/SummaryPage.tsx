import { Container, DetailBox, ScriptBox } from '@/styles/SummaryPage';

const SummaryPage = () => {
  return (
    <Container>
      <div style={{ height: '100vh', overflowY: 'auto', flex: '1 1 auto' }}>
        <DetailBox>
          <span className="created_at">2024년 1월 1일</span>

          <span className="youtube-video-title">
            메조미디어가 본 미디어 트렌드는...생성AI 광고 없는 구독
          </span>

          <div style={{ display: 'flex', gap: 10 }}>
            <span className="hashtag">#뉴웨이브</span>
            <span className="hashtag">#미디어</span>
            <span className="hashtag">#광고</span>
          </div>

          <div
            style={{
              margin: '20px 0',
              width: '100%',
              height: 432,
              borderRadius: 16,
              backgroundColor: '#f3f3f3',
            }}
          >
            Youtube
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            <div className="select-box">어떤 카테고리에 넣을까요?</div>

            <span className="icon-button">Icon</span>
          </div>

          <span className="title">2024년 광고 시장의 전망</span>

          <div
            style={{
              marginTop: 20,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <div className="subtitle">
              <span className="subtitle-index">1</span>
              <span className="subtitle-text">생성형 AI 검색과 광고</span>
            </div>

            <div className="subtitle">
              <span className="subtitle-index">2</span>
              <span className="subtitle-text">비즈니스 핵심 전략, 숏폼</span>
            </div>

            <div className="subtitle">
              <span className="subtitle-index">3</span>
              <span className="subtitle-text">
                맞춤형 광고 못하는 쿠키리스 시대
              </span>
            </div>

            <div className="subtitle">
              <span className="subtitle-index">4</span>
              <span className="subtitle-text">
                단 한 명의 고객을 위한 초개인화 마케팅
              </span>
            </div>
          </div>

          <div className="note-box">
            <div className="note-item">
              <span className="note-icon">✏️</span>
              <span className="note-text">
                2023년 디지털 광고 시장 규모 9조 281억 원으로 9.7% 성장
              </span>
            </div>

            <div className="note-item">
              <span className="note-icon">✏️</span>
              <span className="note-text">
                1분기부터 순차적으로 구글의 제3자 쿠키 지원이 중단될 예정
              </span>
            </div>

            <div className="note-item">
              <span className="note-icon">✏️</span>
              <span className="note-text">
                AI 기술 상용화로 도래한 초개인화 마케팅 시대를 예측
              </span>
            </div>

            <div className="note-item">
              <span className="note-icon">✏️</span>
              <span className="note-text">
                상용화되어 디지털 생태계를 더욱 다양하게 변화시킬 것
              </span>
            </div>

            <div className="note-item">
              <span className="note-icon">✏️</span>
              <span className="note-text">
                2023년 디지털 광고 시장 규모 9조 281억 원으로 9.7% 성장
              </span>
            </div>

            <div className="note-item">
              <span className="note-icon">✏️</span>
              <span className="note-text">
                '클로바X'와 생성형 AI 검색 서비스 '큐:(CUE:)'를 출시하며 본격
                경쟁
              </span>
            </div>
          </div>
        </DetailBox>
      </div>

      <ScriptBox>asdf</ScriptBox>
    </Container>
  );
};

export default SummaryPage;
