import Styled from '@/styles/SearchResult';

const TestObj = {
    "user_id": "여울",
    "date" : "2024-01-01",
    "title": "메조미디어가 본 내년 미디어 트렌드는…생성AI·광고없는 구독",
    "link": "영상링크",
    "image": "이미지링크",
    "subheading": [
      {
        "name": "트렌드에 맞는 다양한 분야 팁",
        "content": "스크립트 1"
      },
      {
        "name": "소제목2",
        "content": "스크립트 2"
      },
      {
        "name": "소제목3",
        "content": "스크립트 3"
      }
    ],
    "summary": [
      {
        content:"요약1"
      }
    ],
    "tag": [
      {
        "name": "태그1"
      },
      {
        "name": "태그2"
      },
      {
        "name": "태그3"
      }
    ]
  }

const SearchResultBox = () => {
    return (
        <Styled.VideoCard>
            <div className="main">
                <div className="user">
                    <span className="userName">여울</span>
                    <span className='contour'></span>
                    <span className="userDate">2024년 1월 1일</span>
                </div>
                <div className="content">
                    <div className="title">메조미디어가 본 내년 <mark>미디어 트렌드는</mark>…생성AI·광고없는 구독</div>
                    <div className="subtitle">2024 <mark>광고</mark> 시장의 현황</div>
                    <div className="subcontent">올해 <mark>마크색 테스트</mark>IT업계의 가장 큰 화제는 단연코 생성형 AI라고 할 수 있겠습니다. 2022년 11월, OpenAI가 출시한 ChatGPT는 멀게만 느껴졌던 AI 기술을 우리의 실생활에 밀접한 서비스로 바꾸었죠. 그리고 이제는 디지털 광고 영역도dsad 우리모두화이팅</div>
                </div>
                <div className='hashtag'>
                    <Styled.hashtagBox>#마케팅</Styled.hashtagBox>
                    <Styled.hashtagBox>#트렌드</Styled.hashtagBox>
                    <Styled.hashtagBox>#기획</Styled.hashtagBox>
                </div>
            </div>
            <div className="imgBox"></div>
        </Styled.VideoCard>
    );
}

export default SearchResultBox;