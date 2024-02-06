
import { useState, useEffect, useMemo } from "react";
import SearchIcon from '@/assets/icons/search.svg?react'
import useBoolean from "@/hooks/useBoolean";
import { useLocation } from "react-router-dom";
import Styled from "@/styles/SearchResult";
import TagInput from "@/components/SearchPage/SearchComponent";
import SearchNotFound from "@/components/SearchPage/SearchNotFound";
import axios, { AxiosError } from "axios";
import { IVideo } from "@/models/search";

import SearchResultBox from "@/components/SearchPage/SearchResultBox";

const SearchResult = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [input, setInput] = useState('');
    const [searchType, setSearchType] = useState(true); // True : keyword | False : hashTag
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState<IVideo[]>([]);
    const [count, setCount] = useState(0);
    const location = useLocation();

    const dataDuplicateHandler = (videos : IVideo[]) => {
        const newData = videos.filter((value) => {
            return !data.some((item) => item.video_id === value.video_id);
          });
        
          setData(data.concat(newData));
    }
    useEffect(() => {
            const searchParams = new URLSearchParams(location.search);
            setLoading(true);
            switch(searchParams.get('type')) {
                case 'keyword':
                    setSearchType(true);
                    const inputValues = searchParams.get('value') as string;
                    setInput(inputValues);
                    
                    const handleSearchAPI = async () => {
                            try {
                                const storage = JSON.parse(localStorage.vino);
                                const keywords = inputValues.split('+');
                            
                                const requests = keywords.map((value) => {
                                  return axios.get('https://backend.vi-no.site/search/keyword/', {
                                    params: {
                                      keywordName: value
                                    },
                                    headers: {
                                      Authorization: `Bearer ${storage['user-token']}`
                                    }
                                  });
                                });
                                const responses = await Promise.all(requests);
                                responses.forEach((response) => {
                                    dataDuplicateHandler(response.data.result.videos)
                                    setCount((prev) => prev + 1);
                                })
                        } catch (error) {
                            if (error instanceof AxiosError) {
                                setCount(0);
                                setError(true);
                            }
                        }
                      };
                    handleSearchAPI();
                    setLoading(false);
                    break;
                case 'hashtag':
                    const tagValues = searchParams.get('value') as string;
                    setTags(tagValues.split('&'))
                    setSearchType(false);
                    break;
                default:
                    // 기타 에러
            }
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
            height: '210px'
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
        
        <div className="result">
            <div className="filter" style={{width : '910px', height : '24px'}}>
                {(count !== 0) ?  <span>총 {count}개의 영상이 발견되었어요!</span> : ''}
            </div>
            <div className="content">
                {error ? 
                <SearchNotFound input={input}></SearchNotFound> :
                data.map((item, index) =>
                <SearchResultBox key={index} video={item}/>)
                }
            </div>
        </div>
    </Styled.Container>
  );
};

export default SearchResult;
