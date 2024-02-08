import React, { useState } from 'react';
import { InsightVideosContainer } from '@/styles/HomepageStyle';
import Card from '../category/Card';
import { cardDummy } from '../category/Card';

interface InsightVideosProps {
  username: string;
  popularHashtags: string[];
}

const InsightVideos: React.FC<InsightVideosProps> = ({ username, popularHashtags }) => {
    const formattedHashtags = popularHashtags.map(tag => '#' + tag);
    const [categoryItems] = useState<cardDummy[]>([]); 
    const [checkedItems, setCheckedItems] = useState<boolean[]>([]);

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
          <Card 
          categoryItems={categoryItems} 
          checkedItems={checkedItems} 
          setCheckedItems={setCheckedItems} 
        />
        </div>
      </div>
    </InsightVideosContainer>
  );
 };

export default InsightVideos;
