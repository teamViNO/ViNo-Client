import React, { useState, KeyboardEvent, useEffect } from 'react';
import CustomTagInput from '@/styles/SearchComponent';

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
  const [isComposing, setIsComposing] = useState(false);
  const [hoverdIndex, setHoveredIndex] = useState<Number | null>(null);
  const [removingTagIndex, setRemovingTagIndex] = useState<Number | null>(null);

  useEffect(() => {
    if (tags.length > 3) {
      const lastValue = tags[3]
    
      if(selectedHashtags.includes(lastValue.substring(1)))
        setSelectedHashtags(selectedHashtags.filter((prev) => prev !== lastValue.substring(1)));
      const timer = setTimeout(() => {
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
          if(!selectedHashtags.includes(input))
            input.startsWith('#') ? setSelectedHashtags([...selectedHashtags, input.substring(1)]) : setSelectedHashtags([...selectedHashtags, input])
          setInput('');
          console.log(selectedHashtags)
        }
      } else if (event.key === 'Backspace' && !input) { 
          if(tags.length > 0){
            const lastValue = tags[tags.length - 1]
            if(selectedHashtags.includes(lastValue.substring(1)))
              setSelectedHashtags(selectedHashtags.filter((prev) => prev !== lastValue.substring(1)));
            setRemovingTagIndex(tags.length - 1);
            setTimeout(() => {
              setTags(tags.slice(0, tags.length - 1));
              setRemovingTagIndex(null);
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
    
    if(selectedHashtags.includes(lastValue.substring(1)))
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
        </span>
      ))}
      <input
        className='tag-input'
        type="text"
        value={input}
        placeholder={tags.length === 0 ? placeholder : ''}
        onKeyDown={handleKeyDown}
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
        onChange={(e) => handleOnchage(e)}
      />
    </CustomTagInput>
  );
};

export default TagInput;