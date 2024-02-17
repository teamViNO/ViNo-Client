import SearchNotFoundIcon from '@/assets/icons/search-notfound.svg?react';
import styled from '@/styles/SearchResult';
import { useNavigate } from 'react-router-dom';

type NotFoundprop = {
    input : string
}

const SearchNotFound : React.FC<NotFoundprop> = ( {input} ) => {
    const navigate = useNavigate();

    const handleBtn = () => {
        navigate('/');
    }
    return (
        <styled.SearchNotFoundContainer>
            <SearchNotFoundIcon width={156} height={156}/>
            <div className='text'> <span className='user'>{input}</span>에 대한 검색 결과가 없어요</div>
            <button onClick={handleBtn}>더 많은 영상 변환하기</button>
        </styled.SearchNotFoundContainer>
    );
}


export default SearchNotFound;