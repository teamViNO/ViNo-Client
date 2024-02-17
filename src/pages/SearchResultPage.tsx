import { escapeHTML } from "@/utils/string";
import { useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Styled from "@/styles/SearchResult";
import TagInput from "@/components/SearchPage/SearchComponent";
import SearchNotFound from "@/components/SearchPage/SearchNotFound";
import SearchIcon from '@/assets/icons/search.svg?react';
import { IVideo } from "@/models/search";
import { searchAPI } from "@/apis/search";

import SearchResultBox from "@/components/SearchPage/SearchResultBox";

const SearchResult = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [input, setInput] = useState('');
    const [searchType, setSearchType] = useState(true); // True : keyword | False : hashTag
    const [loading, setLoading] = useState(false);
    const [errormsg, setErrormsg] = useState('');
    const [data, setData] = useState<IVideo[]>([]);
    const location = useLocation();

    useEffect(() => {
            const searchParams = new URLSearchParams(location.search);

            setLoading(true);

            switch(searchParams.get('type')) {
                case 'keyword':
                    setSearchType(true);
                    const inputValues = searchParams.get('value') as string;
                    const keywordtype = searchParams.get('type') as string

                    setInput(inputValues);
                    handleSearchAPI(inputValues, keywordtype, ' ');
                    if(data.length === 0){
                        setErrormsg(inputValues)
                    }
                    break;
                case 'hashtag':
                    const tagValues = searchParams.get('value') as string;
                    const tagtype = searchParams.get('type') as string;
                    setTags(tagValues.replace(/\ /g, '').split('&'))
                    setSearchType(false);
                    handleSearchAPI(tagValues, tagtype, '&');
                    if(data.length === 0){
                        const changeSpace = tagValues.replace(/\&/g, ' ');
                        setErrormsg(changeSpace)
                    }
                    break;

                default:
                    // 기타 에러
            }
    }, [location.search])

    const handleSearchAPI = async (inputValues : string, type : string, splittype : string) => {
        try {
            const keywords = inputValues.split(splittype);

            const requests = keywords.map((value) => {
                if (type === 'hashtag') {
                    value = value.replace('#', ''); 
                }
                const searchData = (searchAPI(type, value));
                return searchData.then(value => value.data.result);
            })
            const responses = await Promise.all(requests);
            responses.forEach((response) => {
                const ivideos = response.videos as IVideo[];
                dataDuplicateHandler(ivideos, inputValues);
            })
        } catch (error) {

        } finally {
            setLoading(false);
        }
    }

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
            })
            const mappingData = newData.map((video) => {
                const markdata =  {
                    ...video,
                    title: formatContent(video.title, check),
                    description : formatContent(video.description, check),
                    content: formatContent(video.content, check)
                };
                setData([...data, markdata]);
            });
            mappingData;
    }
    

  if(loading){
    return (
        <div style={{width : '100%', height : '100vh'}}>스켈레톤 페이지</div>
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
