import VideoTag from '../common/videoTag';
import { categoryItems } from './dummy';
import * as CardStyles from '@/styles/category/Card.style';

const Card = () => {
  return (
    <CardStyles.Container>
      {categoryItems.map((categoryItem) => (
        <CardStyles.Wrap key={`${categoryItem.title}-wrap`}>
          <img src={categoryItem.imageURL} alt="썸네일 이미지" />
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
