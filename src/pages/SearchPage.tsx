import { Container, HashtagBox } from '@/styles/SearchPage';
import TooltipImg from '@/assets/icons/tooltip.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TagInput from '@/components/SearchPage/SearchComponent';

const SearchPage = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [input, setInput] = useState<string>('');
    const [searchType, setSearchType] = useState(true); // True : keyword | False : hashTag
    const [userHashTag, SetUserHashTag] = useState<string[]>(["기획", "광고", "마케팅", "트렌드", "기업", "광고", "마케팅", "트렌드", "기업", "광고"]); // 사용자의 해시태그 데이터 10개 <임의 데이터>
    const [selectedHashtags, setSelectedHashtags] = useState<string[]>([]);
    const searchNavigate = useNavigate();
    const [query, SetQuery] = useState<string>('dasdas');
    
  
    const handleSearch = (event) => {
        event.preventDefault(true);
        searchNavigate(`/search/result/${query}`);
    }
    const handleHashtagBox = (value : string) => {
        const isSelected = selectedHashtags.includes(value);
        setSelectedHashtags(prev =>
            isSelected ? prev.filter(idx => idx !== value) : [...prev, value]
        );
        isSelected ? setTags(tags.filter((prev) => prev !== '#'+value)) : setTags([...tags, `#${value}`]);
        setSearchType(false); // 박스를 클릭했을 때도 type 변경
    }

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
                                        <SearchIcon
                                        style={{width: '36px', height: '36px',left: '0px', top: '0px'}}
                                        />
                                        <TagInput tags={tags} input={input} searchType={searchType} selectedHashtags={selectedHashtags}
                                         setTags={setTags} setInput={setInput} setSearchType={setSearchType} setSelectedHashtags={setSelectedHashtags}/>
                                    </div>
                                    <button className='search-btn' onClick={(e) => handleSearch(e)} disabled={(input.length === 0 && tags.length === 0)}>Search</button>
                                </div>
                            </div>
                            
                        </div>
                        {(input.length === 0 && tags.length === 0)? <TooltipImg/> : ''}
                    </div>

                    <div className="hashtag">
                            {
                                userHashTag.map((value : string, idx : number) => {
                                    return(<HashtagBox key={idx} onClick={() => handleHashtagBox(value)}
                                    style={{
                                        border: selectedHashtags.includes(value) ? '1.3px solid #000' : '' 
                                    }}>{'#' + value}</HashtagBox>)
                                })
                            }
                    </div>
                </div>
            </Container>
    );
};

export default SearchPage;
