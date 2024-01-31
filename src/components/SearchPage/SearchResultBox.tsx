import Styled from '@/styles/SearchResult';

const SearchResultBox = () => {
    return (
        <Styled.VideoCard style={{width : '910px', height : '254px'}}>
            <div className="main" style={{width : '670px', height : '254px'}}>
                <div className="user" style={{width : '114px', height : '20px'}}>
                    <span className="userName" style={{height : '19px'}}>여울</span>
                    <span className='contour' style={{width : '0px', height : '12px'}}></span>
                    <span className="userDate" style={{height :'19px'}}>2024년 1월 1일</span>
                </div>
                <div className="content" style={{width : '648px', height : '108px'}}>
                    <div className="title" style={{width : '648px', height : '26px'}}>메조미디어가 본 내년 <mark>미디어 트렌드는</mark>…생성AI·광고없는 구독</div>
                    <div className="subtitle" style={{width : '648px', height : '22px'}}>2024 <mark>광고</mark> 시장의 현황</div>
                    <div className="subcontent" style={{width : '648px' , height : '44px'}}>올해 <mark>마크색 테스트</mark>IT업계의 가장 큰 화제는 단연코 생성형 AI라고 할 수 있겠습니다. 2022년 11월, OpenAI가 출시한 ChatGPT는 멀게만 느껴졌던 AI 기술을 우리의 실생활에 밀접한 서비스로 바꾸었죠. 그리고 이제는 디지털 광고 영역도dsad 우리모두화이팅</div>
                </div>
                <div className='hashtag' style={{maxWidth : '648px',height : '31px'}}>
                    <Styled.hashtagBox>#마케팅팅팅</Styled.hashtagBox>
                    <Styled.hashtagBox>#트렌드</Styled.hashtagBox>
                    <Styled.hashtagBox>#기획</Styled.hashtagBox>
                </div>
            </div>
            <div className="imgBox" style={{width : '213px', height : '254px'}}></div>
        </Styled.VideoCard>
    );
}

export default SearchResultBox;