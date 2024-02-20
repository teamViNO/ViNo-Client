import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Styled from '@/styles/SearchResult';

import TagInput from '@/components/SearchPage/SearchComponent';
import SearchNotFound from '@/components/SearchPage/SearchNotFound';
import LoadingSpinner from '@/components/loadingSpinner/loadingSpinner';
import { escapeHTML } from '@/utils/string';

import SearchIcon from '@/assets/icons/search.svg?react';
import { IVideo } from '@/models/search';
import { searchAPI } from '@/apis/search';

import SearchResultBox from '@/components/SearchPage/SearchResultBox';

const SearchResult = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [searchType, setSearchType] = useState(true); // True : keyword | False : hashTag
  const [loading, setLoading] = useState(false);
  const [isCroll, setIsCroll] = useState(false);
  const [errormsg, setErrormsg] = useState('');
  const [data, setData] = useState<IVideo[]>([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setLoading(true);

    switch (searchParams.get('type')) {
      case 'keyword':
        setSearchType(true);
        const inputValues = searchParams.get('value') as string;
        const keywordtype = searchParams.get('type') as string;

        setInput(inputValues);
        handleSearchAPI(inputValues, keywordtype, ' ');
        break;
      case 'hashtag':
        const tagValues = searchParams.get('value') as string;
        const tagtype = searchParams.get('type') as string;
        
        setTags(tagValues.replace(/\s+/g, '').split('&'));
        setSearchType(false);
        handleSearchAPI(tagValues, tagtype, '&');
        break;

      default:
      // 기타 에러
    }
  }, [location.search]);

  
  const handleSearchAPI = async (
    inputValues: string,
    type: string,
    splittype: string,
  ) => {
    try {
      setIsCroll(true);
      const keywords = inputValues.split(splittype);
      const requests = keywords.map((value) => {
        if (type === 'hashtag') {
          value = value.replace(/^#/, '').replace(/\s/g, '');
        }
        const searchData = searchAPI(type, value);
        return searchData.then((value) => value.data.result);
      });
      const responses = await Promise.all(requests);
      let responseArr = [] as IVideo[];
      responses.forEach((response) => {
        const ivideos = response.videos as IVideo[];
        ivideos.forEach((val) => {
          responseArr.push(val);
        })
      });
      if(responseArr.length === 0){
        setData([]);
        if(type === 'hashtag')
          setErrormsg(inputValues.replace(/\&/g, ' '));
        else {
          setErrormsg(inputValues);
        }
      } else {
        dataDuplicateHandler(responseArr, inputValues);
      }
    } catch (error) {
    } 
  };

  const formatContent = (content: string, keyword: string) => {
    let result = escapeHTML(content);
    const keywordArr = keyword.split(' ');
  
    keywordArr.forEach((keyword) => {
      if (keyword.trim() !== '') {
        result = result
          .split(keyword)
          .join(`<mark>${escapeHTML(keyword)}</mark>`);
      }
    });
  
    result = result.replace(/\n/g, '<br>');
  
    return result;
  };

  const dataDuplicateHandler = (videos: IVideo[], check: string) => {
    const uniqueData = videos.filter((v, index, arr) => 
      arr.findIndex(t => t.video_id === v.video_id) === index
    );
    const mappingData = uniqueData.map((video) => {
      return {
        ...video,
        title: formatContent(video.title, check),
        description: formatContent(video.description, check),
        content: formatContent(video.content, check),
      };
    });
    setData([...mappingData]);
  };

  if (loading) {
    return (
      <LoadingSpinner isCroll={isCroll} setLoading={setLoading} time={2000}/>
    );
  }
  return (
    <Styled.Container style={{ width: '100%', height: '100vh' }}>
      <div
        className="inputContainer"
        style={{
          height: '210px',
        }}
      >
        <div className="inputwrap" style={{ width: '908px', height: '72px' }}>
          <div
            className="input-inner"
            style={{ width: '860px', height: '36px' }}
          >
            <div className="input" style={{ width: '770px', height: '36px' }}>
              <SearchIcon width={36} height={36} />
              <TagInput
                tags={tags}
                input={input}
                searchType={searchType}
                setTags={setTags}
                setInput={setInput}
                setSearchType={setSearchType}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="result">
        <div className="filter" style={{ width: '910px', height: '24px' }}>
          {data.length !== 0 ? (
            <span>총 {data.length}개의 영상이 발견되었어요!</span>
          ) : (
            ''
          )}
        </div>
        <div className="content">
          {data.length === 0 ? (
            <SearchNotFound input={errormsg}></SearchNotFound>
          ) : (
            data.map((item, index) => (
              <SearchResultBox key={index} video={item} tags = {tags}/>
            ))
          )}
        </div>
      </div>
    </Styled.Container>
  );
};

export default SearchResult;
