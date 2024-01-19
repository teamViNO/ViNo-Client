import React, { KeyboardEvent, useEffect } from 'react';
import CustomTagInput from '@/styles/SearchComponent';
import useBoolean from '@/hooks/useBoolean';
import useNumber from '@/hooks/useNumber';

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


const TagInput : React.FC<TagInputProps> = ({tags, input, searchType, selectedHashtags, setTags, setInput, setSearchType, setSelectedHashtags}) => {
  const [isComposing, , setIsComposingTrue, setIsComposingFalse] = useBoolean(false)
  const [hoverdIndex, setHoveredIndex, setLeaveIndex] = useNumber(null);
  const [tagIndex, setRemovingTagIndex, setNullTagIndex] = useNumber(null);

  useEffect(() => {
    if (tags.length > 3) {
      const lastValue = tags[3]
    
      if(selectedHashtags && setSelectedHashtags && selectedHashtags.includes(lastValue.substring(1)))
        setSelectedHashtags(selectedHashtags.filter((prev) => prev !== lastValue.substring(1)));
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
    if(!searchType){
      if (event.key === 'Enter' && !isComposing) {
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
              setSelectedHashtags(selectedHashtags.filter((prev) => prev !== lastValue.substring(1)));
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
    setInput(event.target.value);
    if(tags.length === 0)
      event.target.value.startsWith('#') ? setSearchType(false) : setSearchType(true)
  }
  const handleOnclick = (removeIndex : number) => {
    const lastValue = tags[removeIndex]
    
    if(selectedHashtags && setSelectedHashtags && selectedHashtags.includes(lastValue.substring(1)))
        setSelectedHashtags(selectedHashtags.filter((prev) => prev !== lastValue.substring(1)));
    setRemovingTagIndex(removeIndex);
    setTimeout(() => {
      setNullTagIndex();
      setTags(tags.filter((_, index) => index !== removeIndex))
    }, 500)
  }
  
  return (
    <CustomTagInput className="tag-container">
      {tags.map((tag, index) => (
        <span className={`tag ${hoverdIndex === index ? 'hovered' : ''} ${ (index >= 3 || index === tagIndex) ? 'exceed' : ''}`} key={index}>
          <span className='tag-content'>{tag}</span>
          <button className='tag-btn' onClick={()=> handleOnclick(index)} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={setLeaveIndex}>X</button>
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
    </CustomTagInput>
  );
};

export default TagInput;