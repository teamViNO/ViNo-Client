import { Container, HashtagBox } from '@/styles/SearchPage';
import TooltipImg from '@/assets/tooltip.svg';
import SearchIcon from '@/assets/search.svg';

const SearchPage = () => {

    return (
            <Container>
                <div className='wrap'>
                    <div className="search">
                        <div className="search-inner">
                            <div className='header'>
                            <span className='header3' style={{width: '508px', height: '58px'}}>찾고 싶은 키워드가 있나요?</span>
                            <span className='header5'>찾고자 하는 키워드를 검색하면 관련 영상을 찾아드릴게요</span>
                            </div>
                            <div className='inputwrap'>
                                <div className='input-inner'>
                                    <div className='input'>
                                        <img src={SearchIcon} alt='not IMG' 
                                        style={{width: '36px', height: '36px',left: '0px', top: '0px'}}></img>
                                        <input type='text' placeholder='검색하고 싶은 키워드를 입력해주세요'></input>
                                    </div>
                                    <button>Search</button>
                                </div>
                            </div>
                            
                        </div>
                        <img src={TooltipImg} alt='not IMG'/>
                    </div>

                    <div className="hashtag">
                            <HashtagBox># 기획</HashtagBox>
                            <HashtagBox># 광고</HashtagBox>
                            <HashtagBox># 마케팅</HashtagBox>
                            <HashtagBox># 트렌드팅</HashtagBox>
                            <HashtagBox># 기업</HashtagBox>
                            <HashtagBox># 광고</HashtagBox>
                            <HashtagBox># 마케팅팅</HashtagBox>
                            <HashtagBox># 트렌드팅탕</HashtagBox>
                            <HashtagBox># 기업팅팅탕</HashtagBox>
                            <HashtagBox># 광고</HashtagBox>
                    </div>
                </div>
            </Container>
    );
;
};

export default SearchPage;
