import TagInput from "@/components/SearchPage/SearchComponent";
import { useState } from "react";
import SearchIcon from '@/assets/search.svg'
import Container from "@/styles/SearchResult";

const SearchResult = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [input, setInput] = useState<string>('');
    const [searchType, setSearchType] = useState(true); // True : keyword | False : hashTag

  return (
    <Container style={{width : '100wh', height : '100vh'}}>
        <div className="inputContainer">
            <div className='inputwrap'>
                    <div className='input-inner'>
                        <div className='input'>
                            <img src={SearchIcon} alt='not IMG Search Icon' 
                            style={{width: '36px', height: '36px',left: '0px', top: '0px'}}
                            />
                            <TagInput tags={tags} input={input} searchType={searchType}
                            setTags={setTags} setInput={setInput} setSearchType={setSearchType}/>
                        </div>
                        <button className='search-btn' disabled={(input.length === 0 && tags.length === 0)}>Search</button>
                    </div>
            </div>
            
        </div>
        
        <div className="result">
            <div className="filter">
                <span>총 0개의 영상이 발견되었어요!</span>
                <select>
                    <option>최근 등록순</option>
                </select>
            </div>
        </div>
    </Container>
  );
};

export default SearchResult;
