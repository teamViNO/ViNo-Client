
import { useState, useEffect } from "react";
import SearchIcon from '@/assets/icons/search.svg?react'
import useBoolean from "@/hooks/useBoolean";
import { useLocation } from "react-router-dom";
import Styled from "@/styles/SearchResult";
import TagInput from "@/components/SearchPage/SearchComponent";
import SearchNotFound from "@/components/SearchPage/SearchNotFound";
import { axiosInstance } from "@/apis/config/instance";

const SearchResult = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [input, setInput] = useState('');
    const [searchType, setSearchType] = useState(true); // True : keyword | False : hashTag
    const [isScrolling, ,startScrolling,,] = useBoolean(false);
    const [loading, setLoading] = useState(Boolean);
    
    const location = useLocation();

    useEffect(() => {
        const fetchApiData = async () => {
            try {
                setLoading(true);
                const response = await axiosInstance.get('/search/keyword', {
                    data : {
                        "keywords" : ['dasdas']
                    }
                })
                setLoading(false);
                return response.data;
            } catch (notFound) {
                setLoading(false);
                return notFound;
            }
        }
        fetchApiData().then((data) => {
            console.log(data);
        });
    }, [])

  if(loading){
    return (
        <div>스켈레톤 페이지</div>
    )
  }
  return (
    <Styled.Container style={{width : '100vw', height : '100vh'}}>
        <div className="inputContainer" 
        style={{
            height: '210px',
            boxShadow: isScrolling ? '0px 4px 40px rgba(0, 0, 0, 0.05)' : ''
          }}>
            <div className='inputwrap' style={{width : '908px', height : '72px'}}>
                    <div className='input-inner' style={{width : '860px', height : '36px'}}>
                        <div className='input' style={{width : '770px', height : '36px'}}>
                            <SearchIcon width={36} height={36}/>
                            <TagInput tags={tags} input={input} searchType={searchType}
                            setTags={setTags} setInput={setInput} setSearchType={setSearchType}/>
                        </div>
                        <button className='search-btn' style={{width : '90px', height : '36px'}} disabled={(input.length === 0 && tags.length === 0)}>Search</button>
                    </div>
            </div>
        </div>
        
        <div className="result" onScroll={startScrolling}>
            <div className="filter" style={{width : '910px', height : '24px'}}>
                <span>총 0개의 영상이 발견되었어요!</span>
            </div>
            <div className="content">
                <SearchNotFound input="dasdd"></SearchNotFound>
            </div>
        </div>
    </Styled.Container>
  );
};

export default SearchResult;
