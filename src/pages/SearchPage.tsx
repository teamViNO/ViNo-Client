import { Container, HashtagBox } from '@/styles/SearchPage';
import TooltipImg from '@/assets/icons/tooltip.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';

import { useState } from 'react';
import TagInput from '@/components/SearchPage/SearchComponent';
import { useNavigate, createSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const [searchType, setSearchType] = useState(true); // True : keyword | False : hashTag
  const userHashTag = [
    '기획',
    '광고',
    '마케팅',
    '트렌드',
    '기업',
    '광고',
    '마케팅',
    '트렌드',
    '기업',
    '광고',
  ]; // 사용자의 해시태그 데이터 10개 <임의 데이터>
  const [selectedHashtags, setSelectedHashtags] = useState<string[]>([]);
  const searchNav = useNavigate();

  const handleHashtagBox = (value: string) => {
    const isSelected = selectedHashtags.includes(value);
    setSelectedHashtags((prev) =>
      isSelected ? prev.filter((idx) => idx !== value) : [...prev, value],
    );
    isSelected
      ? setTags(tags.filter((prev) => prev !== '#' + value))
      : setTags([...tags, `#${value}`]);
    setSearchType(false); // 박스를 클릭했을 때도 type 변경
  };

  const handleSearch = () => {
    const params = {
      type: searchType === true ? 'keyword' : 'hashtag',
      value: searchType ? input : tags.join('&'),
    };

    searchNav({
      pathname: '/search/result',
      search: `?${createSearchParams(params)}`,
    });
  };

  return (
    <Container style={{ width: '100%', height: '100vh' }}>
      <div className="wrap" style={{ width: '908px', height: '450px' }}>
        <div className="search" style={{ width: '908px', height: '288px' }}>
          <div
            className="search-inner"
            style={{ width: '908px', height: '204px' }}
          >
            <div className="header" style={{ width: '508px', height: '92px' }}>
              <span
                className="header3"
                style={{ width: '508px', height: '58px' }}
              >
                찾고 싶은 키워드가 있나요?
              </span>
              <span
                className="header5"
                style={{ width: '508px', height: '26px' }}
              >
                찾고자 하는 키워드를 검색하면 관련 영상을 찾아드릴게요
              </span>
            </div>

            <div
              className="inputwrap"
              style={{ width: '908px', height: '72px' }}
            >
              <div
                className="input-inner"
                style={{ width: '861px', height: '36px' }}
              >
                <div
                  className="input"
                  style={{ width: '770px', height: '36px' }}
                >
                  <SearchIcon width={36} height={36} />
                  <TagInput
                    tags={tags}
                    input={input}
                    searchType={searchType}
                    selectedHashtags={selectedHashtags}
                    setTags={setTags}
                    setInput={setInput}
                    setSearchType={setSearchType}
                    setSelectedHashtags={setSelectedHashtags}
                  />
                </div>
                <button
                  className="search-btn"
                  onClick={handleSearch}
                  disabled={input.length === 0 && tags.length === 0}
                  style={{ width: '90px', height: '36px' }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          {input.length === 0 && tags.length === 0 ? <TooltipImg /> : ''}
        </div>

        <div className="hashtag" style={{ width: '572px', height: '102px' }}>
          {userHashTag.map((value: string, idx: number) => {
            return (
              <HashtagBox
                key={idx}
                onClick={() => handleHashtagBox(value)}
                className={selectedHashtags.includes(value) ? 'toggle' : ''}
              >
                {'#' + value}
              </HashtagBox>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default SearchPage;
