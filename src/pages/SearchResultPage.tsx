import TagInput from "@/components/SearchPage/SearchComponent";
import { useState } from "react";
import SearchIcon from '@/assets/icons/search.svg?react'
import FilterIcon from '@/assets/icons/filter.svg?react'
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
                            <SearchIcon width={36}/>
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
                <div className="select">
                <select>
                    <option>최근 등록순</option>
                </select>
                <FilterIcon/>
                </div>
            </div>
            <div className="content">

            </div>
        </div>
    </Container>
  );
};

export default SearchResult;
