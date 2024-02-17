import { Section } from '@/styles/GuidePage';

const GuidePage = () => {
  const serviceList = [
    {
      id: 'SIMPLE',
      image: '',
      title: '한 눈에 읽는 영상',
      description: (
        <>
          단락으로 나누어져 이해 쏙쏙!
          <br />한 눈에 읽고 이해해요!
        </>
      ),
    },
    {
      id: 'INSIGHT',
      image: '',
      title: '쉽게 남기는 인사이트',
      description: (
        <>
          난 이 부분이 인상 깊었어!
          <br />
          쉽고 빠르게 기록해요!
        </>
      ),
    },
    {
      id: 'SEARCH',
      image: '',
      title: '다시 읽고 싶다면 간단하게 검색',
      description: (
        <>
          영상 속 기억나는 단어 하나로도
          <br />
          쉽게 찾을 수 있어요!
        </>
      ),
    },
    {
      id: 'CATEGORY',
      image: '',
      title: '내용별 카테고리 정리',
      description: (
        <>
          다시 찾기 편하도록
          <br />
          카테고리로 영상을 분류해요!
        </>
      ),
    },
  ];

  return (
    <Section>
      <img src="/assets/guide-comment.png" alt="guide-comment" width={505} />

      <div className="info-box" style={{ marginTop: 30, gap: 20 }}>
        <h3 className="subtitle">TO. 영상보다 글이 편한 당신에게</h3>

        <h1 className="title">
          영상을 텍스트로 변환해서 쉽게 정리해요!
          <br />
          <span>영상 요약 & 정리 솔루션 서비스</span>
        </h1>
      </div>

      <div className="service-content">
        {serviceList.map((service) => (
          <div key={service.id} className="service-item">
            <img src="" alt="service-item" />

            <h1>{service.title}</h1>

            <span>{service.description}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default GuidePage;
