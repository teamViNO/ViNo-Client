import React from 'react';
import { InsightVideosContainer } from '@/styles/HomepageStyle';
import Videos from '@/components/Home/Videos';
import { Video } from '@/pages/HomePage';

interface InsightVideosProps {
  videos: Video[];
  username: string;
  popularHashtags: string[];
}

const InsightVideos: React.FC<InsightVideosProps> = ({ videos, username, popularHashtags }) => {
  const formattedHashtags = popularHashtags.map(tag => '#' + tag);

  return (
    <InsightVideosContainer>
      <div className='insight-container'>
        <div className='text-container'>
          <h2 className='insight-title'>
            이런 인사이트는 어때요?
          </h2>
          <h4 className='insight-subtitle'>
            {username}님이 많이 찾은 {formattedHashtags.join(', ')} 관련 콘텐츠에요!
          </h4>
        </div>
        <div className='insight-videos'>
          <Videos videos={videos}/>
          <Videos videos={videos}/>
        </div>
        
      </div>
    </InsightVideosContainer>
  );
};

export default InsightVideos;