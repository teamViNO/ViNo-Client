import EmptyFile from '@/assets/empty-file.png';
import * as EmptyCardStyles from '@/styles/category/EmptyCard.style';

const EmptyCard = () => {
  return (
    <EmptyCardStyles.Container>
      <img src={EmptyFile} alt="비어있는 폴더" />
      <EmptyCardStyles.ContentWrap>
        <EmptyCardStyles.Content>
          아직 관련 영상이 없어요!
        </EmptyCardStyles.Content>
        <EmptyCardStyles.Content>
          관련 영상들을 모아보세요
        </EmptyCardStyles.Content>
      </EmptyCardStyles.ContentWrap>
      <EmptyCardStyles.Button>영상 정리해보기</EmptyCardStyles.Button>
    </EmptyCardStyles.Container>
  );
};

export default EmptyCard;
