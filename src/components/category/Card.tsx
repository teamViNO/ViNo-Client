import React, { useEffect, useState } from 'react';
import VideoTag from '../common/videoTag';
import * as CardStyles from '@/styles/category/Card.style';

export interface cardDummy {
  imageURL: string;
  title: string;
  summary: string;
  tags: string[];
}

interface CardInputProps {
  categoryItems : Array<cardDummy>;
  checkedItems : boolean[];
  setCheckedItems : (value : boolean[]) => void;
}

const Card : React.FC<CardInputProps> = ({ categoryItems, checkedItems, setCheckedItems}) => {
  const [isShadow,setIsShadow] = useState<boolean[]>(new Array(6).fill(false));
  
  useEffect(() => {
    if(checkedItems.includes(true)){ // 1개 이상 클릭 시 모든 hover event 활성화 
      setIsShadow(isShadow.map(() => true))
    } else if(!isShadow.includes(false)){ 
      //모든 hover 활성화, 모든 체크 비활성화 시 모든 hover 활성화 제거
      setIsShadow(isShadow.map(() => false))
    }
  }, [checkedItems])

  const handleMouseEnter = (id : number) => {
      let prev = checkedItems.includes(true) ? [...isShadow] : new Array(isShadow.length).fill(false);
      // 체크박스 미선택 이동 시 isshadow 중복 작동으로 인해 방식 변경
      prev[id] = true;
      setIsShadow(prev);
  }

  const handleMouseLeave = (id : number) => {
      if(!checkedItems.includes(true)){ // 선택되면 유지
        let prev = [...isShadow];
        prev[id] = false;
        setIsShadow(prev);
    }
  }

  const checkBoxHandler = (id : number) => {
      let prev = [...checkedItems];
      prev[id] = !prev[id];
      setCheckedItems(prev);
  }
  
  return (
    <CardStyles.Container>
      {categoryItems.map((categoryItem, idx) => (
        <CardStyles.Wrap key={`${categoryItem.title}-wrap`} onMouseEnter={() => handleMouseEnter(idx)} onMouseLeave={() => handleMouseLeave(idx)}>
          <img src={categoryItem.imageURL} alt="썸네일 이미지" 
          style={{filter : isShadow[idx]? 'brightness(50%)' : ''}}/>
         {isShadow[idx] && <CardStyles.CheckBox type='checkbox' checked={checkedItems[idx]} onChange={() => checkBoxHandler(idx)}/>}
          <CardStyles.Content key={`${categoryItem.title}-card-content`}>
            <CardStyles.Title key={`${categoryItem.title}`}>
              {categoryItem.title}
            </CardStyles.Title>
            <CardStyles.Summary key={`${categoryItem.summary}`}>
              {categoryItem.summary}
            </CardStyles.Summary>
            <CardStyles.ChipWrap key={`${categoryItem.title}-chip-wrap`}>
              {categoryItem.tags.map((tag) => (
                <VideoTag
                  content={`# ${tag}`}
                  color={'gray400'}
                  typography="Caption1"
                  key={`${categoryItem.title}-${tag}`}
                />
              ))}
            </CardStyles.ChipWrap>
          </CardStyles.Content>
        </CardStyles.Wrap>
      ))}
    </CardStyles.Container>
  );
};

export default Card;

