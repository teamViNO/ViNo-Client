import React, { useEffect, useState } from 'react';
import VideoTag from '../common/videoTag';
import { categoryItems } from './dummy';
import * as CardStyles from '@/styles/category/Card.style';

interface cardInputProps {
  userSelectMode : boolean;
  setUserSelectMode : (value: boolean) => void;
}

const Card : React.FC<cardInputProps> = ({userSelectMode, setUserSelectMode}) => {
  const [isShadow,setIsShadow] = useState<boolean[]>(new Array(10).fill(false));
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(10).fill(false));

  useEffect(() => {
    if(checkedItems.includes(true)){
      setIsShadow(isShadow.map(() => true))
      setUserSelectMode(!userSelectMode)
    } else if(!isShadow.includes(false)){
      setIsShadow(isShadow.map(() => false))
      setUserSelectMode(!userSelectMode)
    }
  }, [checkedItems])

  const handleMouseEnter = (id : number) => {
      let prev = [...isShadow];
      prev[id] = true;
      setIsShadow(prev);
  }
  const handleMouseLeave = (id : number) => {
      if(!checkedItems.includes(true)){
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

