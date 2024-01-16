import { DetailBox } from '@/styles/SummaryPage';

import { CategorySelectBox } from './CategorySelectBox';

const SummaryDetailBox = () => {
  const title = '2024년 광고 시장의 전망';
  const hashtagList = ['뉴웨이브', '미디어', '광고'];
  const subtitleList = [
    { id: 1, text: '생성형 AI 검색과 광고' },
    { id: 2, text: '비즈니스 핵심 전략, 숏폼' },
    { id: 3, text: '맞춤형 광고 못하는 쿠키리스 시대' },
    { id: 4, text: '단 한 명의 고객을 위한 초개인화 마케팅' },
  ];
  const noteList = [
    { id: 1, text: '2023년 디지털 광고 시장 규모 9조 281억 원으로 9.7% 성장' },
    {
      id: 2,
      text: '1분기부터 순차적으로 구글의 제3자 쿠키 지원이 중단될 예정',
    },
    { id: 3, text: 'AI 기술 상용화로 도래한 초개인화 마케팅 시대를 예측' },
    { id: 4, text: '상용화되어 디지털 생태계를 더욱 다양하게 변화시킬 것' },
    { id: 5, text: '2023년 디지털 광고 시장 규모 9조 281억 원으로 9.7% 성장' },
    {
      id: 6,
      text: `'클로바X'와 생성형 AI 검색 서비스 '큐:(CUE:)'를 출시하며 본격 경쟁`,
    },
  ];

  return (
    <div style={{ height: '100vh', overflowY: 'auto', flex: '1 1 575px' }}>
      <DetailBox>
        <span className="created_at">2024년 1월 1일</span>

        <span className="youtube-video-title">
          메조미디어가 본 미디어 트렌드는...생성AI 광고 없는 구독
        </span>

        <div style={{ display: 'flex', gap: 10 }}>
          {hashtagList.map((hashtag) => (
            <span key={hashtag} className="hashtag">
              #{hashtag}
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

        <CategorySelectBox />

        <span className="title">{title}</span>

        <div
          style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {subtitleList.map((subtitle, i) => (
            <div key={subtitle.id} className="subtitle">
              <span className="subtitle-index">{i + 1}</span>
              <span className="subtitle-text">{subtitle.text}</span>
            </div>
          ))}
        </div>

        <div className="note-box">
          {noteList.map((note) => (
            <div key={note.id} className="note-item">
              <span className="note-icon">✏️</span>
              <span className="note-text">{note.text}</span>
            </div>
          ))}
        </div>
      </DetailBox>
    </div>
  );
};

export default SummaryDetailBox;
