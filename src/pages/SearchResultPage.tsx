import { escapeHTML } from "@/utils/string";
import { useState, useEffect} from "react";
import SearchIcon from '@/assets/icons/search.svg?react'
import { createSearchParams, useLocation } from "react-router-dom";
import Styled from "@/styles/SearchResult";
import TagInput from "@/components/SearchPage/SearchComponent";
import SearchNotFound from "@/components/SearchPage/SearchNotFound";
import axios, { AxiosError } from "axios";
import { IVideo } from "@/models/search";
import { useNavigate } from "react-router-dom";

import SearchResultBox from "@/components/SearchPage/SearchResultBox";

const SearchResult = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [input, setInput] = useState('');
    const [searchType, setSearchType] = useState(true); // True : keyword | False : hashTag
    const [loading, setLoading] = useState(false);
    const [errormsg, setErrormsg] = useState('');
    const [data, setData] = useState<IVideo[]>([]);
    const location = useLocation();
    const searchNav = useNavigate();


    useEffect(() => {
            const searchParams = new URLSearchParams(location.search);
            const storage = JSON.parse(localStorage.vino);
            setLoading(true);
            switch(searchParams.get('type')) {
                case 'keyword':
                    setSearchType(true);
                    const inputValues = searchParams.get('value') as string;
                    setInput(inputValues);
                    
                    const handleSearchKeyAPI = async () => {
                            try {
                                const keywords = inputValues.split(' ');
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
                                    dataDuplicateHandler(response.data.result.videos, inputValues)
                                })
                                
                        } catch (error) {
                            
                        } finally {
                            setLoading(false);
                        }
                      };
                    handleSearchKeyAPI();
                    if(data.length === 0){
                        setErrormsg(inputValues)
                    }
                    break;
                case 'hashtag':
                    const tagValues = searchParams.get('value') as string;
                    setTags(tagValues.split('&'))
                    setSearchType(false);

                    const handleSearchTagAPI = async () => {
                        try {
                            const requests = tagValues.split('&').map((value) => {
                              return axios.get('https://backend.vi-no.site/search/hashtag/', {
                                params: {
                                    hashtagName : value.replace('#','')
                                },
                                headers: {
                                    Authorization: `Bearer ${storage['user-token']}`
                                }
                              });
                            });

                            const responses = await Promise.all(requests);
                            responses.forEach((response) => {
                                dataDuplicateHandler(response.data.result.videos, tagValues.replace('#', ''))
                            })
                            
                    } catch (error) {
                        
                    } finally {
                        setLoading(false);
                    }
                    }
                    handleSearchTagAPI();
                    if(data.length === 0){
                        setErrormsg(tagValues.replace('&', ' '))
                    }
                    break;

                default:
                    // 기타 에러
            }
    }, [location.search])

    const formatContent = (content : string, keyword : string) => {
        if (keyword.trim() !== '') {
          content = content
            .split(keyword)
            .map((s) => escapeHTML(s))
            .join(`<mark>${escapeHTML(keyword)}</mark>`);
        } else {
          content = escapeHTML(content);
        }
      
        content = content.replace(/\n/g, '<br>');
      
        return content;
      };

    const dataDuplicateHandler = (videos : IVideo[], check : string) => {
        const newData = videos.filter((value) => {
        return !data.some((item) => item.video_id === value.video_id);
    }).map((video) => {
        // video의 content 부분을 formatContent 함수를 이용해 변형
        const formattedContent = formatContent(video.content, check);
        const formattedTitle = formatContent(video.title, check);
        const formattedDescription = formatContent(video.description, check)

        return {
            ...video,
            title: formattedTitle,
            description : formattedDescription,
            content: formattedContent
        };
    });
        setData(data.concat(newData));
    }
    const handleReSearch = () => {
        const params = {
            type : searchType === true ? 'keyword' : 'hashtag',
            value: searchType ? input : tags.join('&')
        };

        searchNav({
            pathname : '/search/result',
            search : `?${createSearchParams(params)}`
        })
        window.location.reload();
    }

  if(loading){
    return (
        <div style={{width : '100%', height : '100%'}}>스켈레톤 페이지</div>
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
                        <button className='search-btn' style={{width : '90px', height : '36px'}} disabled={(input.length === 0 && tags.length === 0)} onClick={handleReSearch}>Search</button>
                    </div>
            </div>
        </div>
        
        <div className="result">
            <div className="filter" style={{width : '910px', height : '24px'}}>
                {(data.length !== 0) ?  <span>총 {data.length}개의 영상이 발견되었어요!</span> : ''}
            </div>
            <div className="content">
                {data.length === 0 ? 
                <SearchNotFound input={errormsg}></SearchNotFound> :
                data.map((item, index) =>
                <SearchResultBox key={index} video={item}/>)
                }
            </div>
        </div>
    </Styled.Container>
  );
};

export default SearchResult;
