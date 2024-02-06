import { IVideo } from '@/models/search';
import Styled from '@/styles/SearchResult';
import React from 'react';

interface SearchResultBoxProp {
    video : IVideo
}
const SearchResultBox : React.FC<SearchResultBoxProp>= ({video}) => {
    const date = video.created_at.toString().split('T')[0].split('-');
    return (
        <Styled.VideoCard style={{width : '910px', height : '254px'}}>
            <div className="main" style={{width : '670px', height : '254px'}}>
                <div className="user" style={{width : '114px', height : '20px'}}>
                    <span className="userName" style={{height : '19px'}}>{video.user}</span>
                    <span className='contour' style={{width : '0px', height : '12px'}}></span>
                    <span className="userDate" style={{height :'19px'}}>
                        {`${date[0]}년 ${date[1]}월 ${date[2]}일`}
                    </span>
                </div>
                <div className="content" style={{width : '648px', height : '108px'}}>
                    <div className="title" style={{width : '648px', height : '26px'}}>{video.title}</div>
                    <div className="subtitle" style={{width : '648px', height : '22px'}}>{video.description}</div>
                    <div className="subcontent" style={{width : '648px' , height : '44px'}}>{video.content}</div>
                </div>
                <div className='hashtag' style={{maxWidth : '648px',height : '31px'}}>
                    {video.tag.map((item, index) => 
                        <Styled.hashtagBox key = {index}>{item.name}</Styled.hashtagBox>
                    )}
                </div>
            </div>
            <div className="imgBox" style={{width : '213px', height : '254px'}}>
                <img src={video.image} style={{width : '213px', height : '254px'}}></img>
            </div>
        </Styled.VideoCard>
    );
}

export default SearchResultBox;