import React, { useState, useEffect, useCallback, useRef } from 'react';
import { throttle } from 'lodash';
import { InsightVideosContainer } from '@/styles/HomepageStyle';
import Card from '../category/Card';
import { cardDummy } from '../category/Card';
import successImg from '@/assets/success.png';

interface InsightVideosProps {
  username: string;
  popularHashtags: string[];
}

const InsightVideos: React.FC<InsightVideosProps> = ({
  username,
  popularHashtags,
}) => {
  const formattedHashtags = popularHashtags.map((tag) => '#' + tag);
  const [categoryItems] = useState<cardDummy[]>([]);
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);
  const [isEndOfPage, setIsEndOfPage] = useState(false);

  const timerId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isEndOfPage) {
      timerId.current = setTimeout(() => {
        window.scroll(0, 1000);
        setIsEndOfPage(false);
      }, 3000);
    }
  
    return () => {
      if (timerId.current !== null) {
        clearTimeout(timerId.current);
      }
    };
  }, [isEndOfPage]);
  

  const checkScrollPosition = useCallback(() => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setIsEndOfPage(true);
    } else {
      setIsEndOfPage(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);

    return () => {
        window.removeEventListener('scroll', checkScrollPosition);
    }
  }, [checkScrollPosition]);

  return (
    <InsightVideosContainer>
      <div className="insight-container">
        <div className="text-container">
          <h2 className="insight-title">이런 인사이트는 어때요?</h2>
          <h4 className="insight-subtitle">
            {username}님이 많이 찾은 {formattedHashtags.join(', ')} 관련
            콘텐츠에요!
          </h4>
        </div>
        <div className="insight-videos">
          <Card
            videos={categoryItems}
            checkedVideos={checkedItems}
            setCheckedVideos={setCheckedItems}
          />
        </div>
        {isEndOfPage && 
        <div className='end-message'>
            <div className='end-wrapper'>
                <img src={successImg} alt='successImg' width={87.11} height={87.11}/>
                <h4 className='end-text'>
                    마지막 영상이에요!<br />더 많은 영상 변환하러 가볼까요?
                </h4>
            </div>
        </div>}
      </div>
    </InsightVideosContainer>
  );
};

export default InsightVideos;
