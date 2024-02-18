import React, { KeyboardEvent, useEffect } from 'react';
import Container from '@/styles/SearchComponent';
import useBoolean from '@/hooks/useBoolean';
import useIndex from '@/hooks/useIndex';
import CloseIcon from '@/assets/icons/close-btn.svg?react'
import SearchIcon from '@/assets/icons/search.svg?react';
import { createSearchParams, useNavigate } from 'react-router-dom';

const placeholder = '검색하고 싶은 키워드를 입력해주세요'

interface BaseTagInputProps {
  tags: string[];
  input: string;
  searchType: boolean;
  setTags: (tag: string[]) => void;
  setInput: (value: string) => void;
  setSearchType: (value: boolean) => void;
};

interface SelectedHashtagsProps {
  selectedHashtags: string[];
  setSelectedHashtags: (value: string[]) => void;
}

type TagInputProps = BaseTagInputProps & Partial<SelectedHashtagsProps>;


const SearchComponent : React.FC<TagInputProps> = ({tags, input, searchType, selectedHashtags, setTags, setInput, setSearchType, setSelectedHashtags}) => {
  const [isComposing, , setIsComposingTrue, setIsComposingFalse] = useBoolean(false);
  const [hoverdIndex, setHoveredIndex, setLeaveIndex] = useIndex(null);
  const [hoverBtnIndex, setHoverBtnIndex, setLeaveBtnIndex] = useIndex(null);
  const [tagIndex, setRemovingTagIndex, setNullTagIndex] = useIndex(null);
  const searchNav = useNavigate();
  useEffect(() => {
    if (tags.length > 3) {
      const lastValue = tags[3]
      if(selectedHashtags && setSelectedHashtags && selectedHashtags.includes(lastValue.substring(1)))
        setSelectedHashtags(selectedHashtags.filter((prev : string) => prev !== lastValue.substring(1)));
      const timer = setTimeout(() => {
        setNullTagIndex();
        setTags(tags.slice(0, -1));
      }, 500); 
      
      return () => {
        clearTimeout(timer);
      };
    }
  }, [tags, setTags]);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter'){
      handleSearch();
    }
    if(!searchType){
        
        if ((event.code === 'Comma' || event.code === 'Space') && !isComposing) {
        event.preventDefault();
        if (input) {
          tags.length > 0 && !input.startsWith('#') ? setTags([...tags, '#' + input]) : setTags([...tags, input])
          if(selectedHashtags && setSelectedHashtags && !selectedHashtags.includes(input))
            input.startsWith('#') ? setSelectedHashtags([...selectedHashtags, input.substring(1).replace(/\s/g, '')]) : setSelectedHashtags([...selectedHashtags, input.replace(/\s/g, '')])
          setInput('');
        }
        } else if ((event.key === 'Backspace' || event.code === 'Backspace') && !input) { 
          if(tags.length > 0){
            const lastValue = tags[tags.length - 1]
            if(selectedHashtags && setSelectedHashtags && selectedHashtags.includes(lastValue.substring(1).replace(/\s/g, '')))
              setSelectedHashtags(selectedHashtags.filter((prev : string) => prev !== lastValue.substring(1).replace(/\s/g, '')));
            setRemovingTagIndex(tags.length - 1);
    
            setTimeout(() => {
              setNullTagIndex();
              setTags(tags.slice(0, tags.length - 1));
            }, 500)
          }
        }
    }
  };
  
  const handleOnchage = (event : React.ChangeEvent<HTMLInputElement>) => {
    if(tags.length > 2){
      event.target.value = event.target.value.replace(/./g, '');
    }
    setInput(event.target.value);
    if(tags.length === 0)
      event.target.value.startsWith('#') ? setSearchType(false) : setSearchType(true)
  }
  const handleOnclick = (removeIndex : number) => {
    const lastValue = tags[removeIndex]
    
    if(selectedHashtags && setSelectedHashtags && selectedHashtags.includes(lastValue.substring(1)))
        setSelectedHashtags(selectedHashtags.filter((prev : string) => prev !== lastValue.substring(1)));
    setRemovingTagIndex(removeIndex);
    setTimeout(() => {
      setNullTagIndex();
      setTags(tags.filter((_ : string, index : number) => index !== removeIndex))
    }, 500)
  }

  const handleSearch = () => {
    const params = {
        type : searchType === true ? 'keyword' : 'hashtag',
        value: searchType ? input : tags.join('&')
    };

    window.scrollTo(0, 0);
    searchNav({
        pathname : '/search/result',
        search : `?${createSearchParams(params)}`
    })
    window.location.reload();
}

  return (
    <div style={{display : 'flex', flexDirection : 'row'}}>
    <div className='input' style={{width : '770px', height : '36px'}}>
      <SearchIcon width={36} height={36}/>
    <Container className="tag-container" style={{width : '700px', height : '36px'}}>
      {tags.map((tag : string, index : number) => (
        <span className={`tag ${hoverdIndex === index ? 'hovered' : ''} ${ (index >= 3 || index === tagIndex) ? 'exceed' : ''}`} key={index} onMouseEnter={() => setHoverBtnIndex(index)} onMouseLeave={setLeaveBtnIndex}>
          <span className='tag-content'>{tag}</span>
          {hoverBtnIndex === index && <button className='tag-btn' style={{width : '16px', height : '16px'}} onClick={()=> handleOnclick(index)} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={setLeaveIndex}><CloseIcon height={16}/></button>}
        </span>
      ))}
      <input
        className='tag-input'
        type="text"
        value={input}
        placeholder={tags.length === 0 ? placeholder : ''}
        onKeyDown={handleKeyDown}
        onCompositionStart={setIsComposingTrue}
        onCompositionEnd={setIsComposingFalse}
        onChange={(e) => handleOnchage(e)}
      />
    </Container>
    </div>
      <button className='search-btn' onClick={handleSearch} disabled={(input.length === 0 && tags.length === 0)} style={{width : '90px', height : '36px'}}>Search</button>
    </div>
  );
};

export default SearchComponent;