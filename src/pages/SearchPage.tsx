import { Container, HashtagBox } from '@/styles/SearchPage';
import { Tooltip } from '@/components/common';
import { useEffect, useState } from 'react';
import TagInput from '@/components/SearchPage/SearchComponent';
import { tagAPI } from '@/apis/search';

const SearchPage = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [input, setInput] = useState<string>('');
    const [searchType, setSearchType] = useState(true); // True : keyword | False : hashTag
    const [userHashTag, setUserHashTag] = useState<string[]>([]); 
    const [selectedHashtags, setSelectedHashtags] = useState<string[]>([]);
    
    useEffect(() => {
        const handleTagAPI = async () => {
            try {
                const {data} = (await tagAPI());
                const extraData = data.result.map((item) => {
                    return item.name;
                });
                const shuffleData = sortShuffle(extraData).slice(0,10);
                setUserHashTag(shuffleData);

            } catch(e) {
                setUserHashTag([]);
            }
        }
        handleTagAPI();
    }, []);

  
    const handleHashtagBox = (value : string) => {
        const isSelected = selectedHashtags.includes(value);
        setSelectedHashtags(prev =>
            isSelected ? prev.filter(idx => idx !== value) : [...prev, value]
        );
        isSelected ? setTags(tags.filter((prev) => prev !== '#'+value)) : setTags([...tags, `#${value}`]);
        setSearchType(false); // 박스를 클릭했을 때도 type 변경
    }

    const sortShuffle = (arr : string[]) => {
        return arr.sort(() => Math.random() - 0.5);
      }
    const firstHalf = userHashTag.slice(0, 5);
    const secondHalf = userHashTag.slice(5);

    return (
        <Container style={{width : '100vw', height : '100vh'}}>
            <div className='wrap' style={{width : '908px', height : '450px'}}>
                <div className="search" style={{width : '908px', height : '288px'}}>
                    <div className="search-inner" style={{width : '908px', height : '204px'}}>
                        <div className='header' style={{width : '508px', height : '92px'}}>
                            <span className='header3' style={{width: '508px', height: '58px'}}>찾고 싶은 키워드가 있나요?</span>
                            <span className='header5' style={{width: '508px', height: '26px'}}>찾고자 하는 키워드를 검색하면 관련 영상을 찾아드릴게요</span>
                        </div>

                        <div className='inputwrap' style={{width : '908px', height : '72px'}}>
                            <div className='input-inner' style={{width : '861px', height : '36px'}}>
                                <div className='input' style={{width : '770px', height : '36px'}}>
                                    <TagInput tags={tags} input={input} searchType={searchType} selectedHashtags={selectedHashtags}
                                     setTags={setTags} setInput={setInput} setSearchType={setSearchType} setSelectedHashtags={setSelectedHashtags}/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    {(input.length === 0 && tags.length === 0) ? (
                        <Tooltip direction='up'>
                            <>
                                1. 키워드 검색 : 키워드를 검색하면 해당 키워드가 언급 된 영상들을 찾아드려요!
                                <br/>
                                2. 해시태그 검색 : #을 함께 검색하면 해당 해시태그가 있는 영상들을 찾아드려요!
                            </>
                        </Tooltip>
                        )
                        : ''
                        }
                </div>

                <div className="hashtag" style={{width : '908px'}}>
                    <div className='hashtag'>
                        {
                            firstHalf.map((value : string, idx : number) => {
                                return(<HashtagBox key={idx} onClick={() => handleHashtagBox(value)}
                                className={selectedHashtags.includes(value) ? 'toggle' : ''}>{'#' + value}</HashtagBox>)
                            })
                        }
                    </div>
                    <div className='hashtag'>
                    {
                            secondHalf.map((value : string, idx : number) => {
                                return(<HashtagBox key={idx} onClick={() => handleHashtagBox(value)}
                                className={selectedHashtags.includes(value) ? 'toggle' : ''}>{'#' + value}</HashtagBox>)
                            })
                        }
                    </div>
                </div>
            </div>
        </Container>
);
};

export default SearchPage;
