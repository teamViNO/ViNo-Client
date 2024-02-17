import * as CategoryPageSkeletonStyles from '@/styles/skeleton/CategoryPageSkeleton.style';
import CardSkeleton from './CardSkeleton';

interface ICategoryPageSkeletonProp {
  isSubSkeleton: boolean;
}

const CategoryPageSkeleton = ({ isSubSkeleton }: ICategoryPageSkeletonProp) => {
  return (
    <CategoryPageSkeletonStyles.Container>
      <CategoryPageSkeletonStyles.Title />
      <CategoryPageSkeletonStyles.MenuWrap>
        <CategoryPageSkeletonStyles.TagWrap>
          <CategoryPageSkeletonStyles.Tag
            className={`${isSubSkeleton && 'show'}`}
          />
          <CategoryPageSkeletonStyles.Tag
            className={`${isSubSkeleton && 'show'}`}
          />
        </CategoryPageSkeletonStyles.TagWrap>
        <CategoryPageSkeletonStyles.Menu />
      </CategoryPageSkeletonStyles.MenuWrap>
      <CategoryPageSkeletonStyles.CardContainer>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </CategoryPageSkeletonStyles.CardContainer>
    </CategoryPageSkeletonStyles.Container>
  );
};

export default CategoryPageSkeleton;
