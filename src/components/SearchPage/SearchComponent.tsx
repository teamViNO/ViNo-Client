<<<<<<< HEAD
import React, { useState, KeyboardEvent, useEffect } from 'react';
import CustomTagInput from '@/styles/SearchComponent';

=======
import React, { KeyboardEvent, useEffect } from 'react';
import Container from '@/styles/SearchComponent';
import useBoolean from '@/hooks/useBoolean';
import useIndex from '@/hooks/useIndex';
import CloseIcon from '@/assets/icons/close-btn.svg?react'
>>>>>>> feature-012
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

<<<<<<< HEAD
const TagInput : React.FC<TagInputProps> = ({tags, input, searchType, selectedHashtags, setTags, setInput, setSearchType, setSelectedHashtags}) => {
  const [isComposing, setIsComposing] = useState(false);
  const [hoverdIndex, setHoveredIndex] = useState<Number | null>(null);
  const [removingTagIndex, setRemovingTagIndex] = useState<Number | null>(null);
=======

const SearchComponent : React.FC<TagInputProps> = ({tags, input, searchType, selectedHashtags, setTags, setInput, setSearchType, setSelectedHashtags}) => {
  const [isComposing, , setIsComposingTrue, setIsComposingFalse] = useBoolean(false);
  const [hoverdIndex, setHoveredIndex, setLeaveIndex] = useIndex(null);
  const [hoverBtnIndex, setHoverBtnIndex, setLeaveBtnIndex] = useIndex(null);
  const [tagIndex, setRemovingTagIndex, setNullTagIndex] = useIndex(null);
>>>>>>> feature-012

  useEffect(() => {
    if (tags.length > 3) {
      const lastValue = tags[3]
<<<<<<< HEAD
      if(selectedHashtags && setSelectedHashtags && selectedHashtags.includes(lastValue.substring(1)))
        setSelectedHashtags(selectedHashtags.filter((prev) => prev !== lastValue.substring(1)));
      const timer = setTimeout(() => {
        setTags(tags.slice(0, -1)); 
      }, 500);
      
      return () => {
        clearTimeout(timer); 
=======
    
      if(selectedHashtags && setSelectedHashtags && selectedHashtags.includes(lastValue.substring(1)))
        setSelectedHashtags(selectedHashtags.filter((prev : string) => prev !== lastValue.substring(1)));
      const timer = setTimeout(() => {
        setNullTagIndex();
        setTags(tags.slice(0, -1));
      }, 500); 
      
      return () => {
        clearTimeout(timer);
>>>>>>> feature-012
      };
    }
  }, [tags, setTags]);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if(!searchType){
<<<<<<< HEAD
      if (event.key === 'Enter' && !isComposing) {
=======
      if(tags.length > 2 && event.key !== 'Backspace')
        event.preventDefault();
      else if (event.key === 'Enter' && !isComposing) {
>>>>>>> feature-012
        event.preventDefault(); 
        if (input) {
          tags.length > 0 && !input.startsWith('#') ? setTags([...tags, '#' + input]) : setTags([...tags, input])
          if(selectedHashtags && setSelectedHashtags && !selectedHashtags.includes(input))
            input.startsWith('#') ? setSelectedHashtags([...selectedHashtags, input.substring(1)]) : setSelectedHashtags([...selectedHashtags, input])
          setInput('');
        }
      } else if (event.key === 'Backspace' && !input) { 
          if(tags.length > 0){
            const lastValue = tags[tags.length - 1]
            if(selectedHashtags && setSelectedHashtags && selectedHashtags.includes(lastValue.substring(1)))
<<<<<<< HEAD
              setSelectedHashtags(selectedHashtags.filter((prev) => prev !== lastValue.substring(1)));
            setRemovingTagIndex(tags.length - 1);
            setTimeout(() => {
              setTags(tags.slice(0, tags.length - 1));
              setRemovingTagIndex(null);
=======
              setSelectedHashtags(selectedHashtags.filter((prev : string) => prev !== lastValue.substring(1)));
            setRemovingTagIndex(tags.length - 1);
            
            setTimeout(() => {
              setNullTagIndex();
              setTags(tags.slice(0, tags.length - 1));
>>>>>>> feature-012
            }, 500)
          }
      }
    }
  };
  
  const handleOnchage = (event : React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    if(tags.length === 0)
      event.target.value.startsWith('#') ? setSearchType(false) : setSearchType(true)
  }
  const handleOnclick = (removeIndex : number) => {
    const lastValue = tags[removeIndex]
    
    if(selectedHashtags && setSelectedHashtags && selectedHashtags.includes(lastValue.substring(1)))
<<<<<<< HEAD
        setSelectedHashtags(selectedHashtags.filter((prev) => prev !== lastValue.substring(1)));
    setRemovingTagIndex(removeIndex);
    setTimeout(() => {
      setTags(tags.filter((_, index) => index !== removeIndex))
      setRemovingTagIndex(null);
    }, 500)
  }
  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = () => {
    setIsComposing(false);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index); 
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  
  return (
    <CustomTagInput className="tag-container">
      {tags.map((tag, index) => (
        <span className={`tag ${hoverdIndex === index ? 'hovered' : ''} ${ (index >= 3 || index === removingTagIndex) ? 'exceed' : ''}`} key={index}>
          <span className='tag-content'>{tag}</span>
          <button className='tag-btn' onClick={()=> handleOnclick(index)} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>X</button>
=======
        setSelectedHashtags(selectedHashtags.filter((prev : string) => prev !== lastValue.substring(1)));
    setRemovingTagIndex(removeIndex);
    setTimeout(() => {
      setNullTagIndex();
      setTags(tags.filter((_ : string, index : number) => index !== removeIndex))
    }, 500)
  }

  
  return (
    <Container className="tag-container" style={{width : '700px', height : '36px'}}>
      {tags.map((tag : string, index : number) => (
        <span className={`tag ${hoverdIndex === index ? 'hovered' : ''} ${ (index >= 3 || index === tagIndex) ? 'exceed' : ''}`} key={index} onMouseEnter={() => setHoverBtnIndex(index)} onMouseLeave={setLeaveBtnIndex}>
          <span className='tag-content'>{tag}</span>
          {hoverBtnIndex === index && <button className='tag-btn' style={{width : '16px', height : '16px'}} onClick={()=> handleOnclick(index)} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={setLeaveIndex}><CloseIcon height={16}/></button>}
>>>>>>> feature-012
        </span>
      ))}
      <input
        className='tag-input'
        type="text"
        value={input}
        placeholder={tags.length === 0 ? placeholder : ''}
        onKeyDown={handleKeyDown}
<<<<<<< HEAD
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
        onChange={(e) => handleOnchage(e)}
      />
    </CustomTagInput>
  );
};

export default TagInput;
=======
        onCompositionStart={setIsComposingTrue}
        onCompositionEnd={setIsComposingFalse}
        onChange={(e) => handleOnchage(e)}
      />
    </Container>
  );
};

export default SearchComponent;
>>>>>>> feature-012
