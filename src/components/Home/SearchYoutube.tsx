import React, { useState, ChangeEvent, FormEvent } from 'react';
import { SearchForm, SearchInput, SearchButton, SearchIcon } from '@/styles/HomepageStyle';
import SvgIcons from '../SvgIcons';

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchYoutube: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputLink, setInputLink] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch(inputLink);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputLink(event.target.value);
  }

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchIcon>
        <SvgIcons.VideoIcon/>
      </SearchIcon>
      <SearchInput
          type='text'
          value={inputLink}
          onChange={handleChange}
          placeholder='https://youtu.be/...'
      />
      <SearchButton type='submit'>변환하기</SearchButton>
    </SearchForm>
  );
};

export default SearchYoutube;