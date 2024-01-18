import TagInput from "@/components/SearchPage/SearchComponent";
import { useState } from "react";
const SearchResult = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [input, setInput] = useState<string>('');
    const [searchType, setSearchType] = useState(true); // True : keyword | False : hashTag

  return (
    <div>
        <TagInput tags={tags} input={input} searchType={searchType} setTags={setTags} setInput={setInput} setSearchType={setSearchType}/>

    </div>
  );
};

export default SearchResult;
