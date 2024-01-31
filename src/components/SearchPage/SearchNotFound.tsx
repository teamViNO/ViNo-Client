import SearchNotFoundIcon from '@/assets/icons/search-notfound.svg?react';
import styled from '@/styles/SearchResult';

type NotFoundprop = {
    input : string
}

const SearchNotFound : React.FC<NotFoundprop> = ( {input} ) => {
    return (
        <styled.SearchNotFoundContainer>
            <SearchNotFoundIcon width={156} height={156}/>
            <div className='text'> <span className='user'>{input}</span>에 대한 검색 결과가 없어요</div>
            <button>더 많은 영상 변환하기</button>
        </styled.SearchNotFoundContainer>
    );
}


export default SearchNotFound;