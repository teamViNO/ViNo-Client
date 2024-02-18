import * as CardSkeletonStyles from '@/styles/skeleton/CardSkeleton.style';
const CardSkeleton = () => {
  return (
    <CardSkeletonStyles.Container>
      <CardSkeletonStyles.Image />
      <CardSkeletonStyles.ContentWrap>
        <CardSkeletonStyles.ContentLong />
        <CardSkeletonStyles.ContentShort />
        <CardSkeletonStyles.ContentShort />
        <CardSkeletonStyles.TagWrap>
          <CardSkeletonStyles.Tag />
          <CardSkeletonStyles.Tag />
          <CardSkeletonStyles.Tag />
        </CardSkeletonStyles.TagWrap>
      </CardSkeletonStyles.ContentWrap>
    </CardSkeletonStyles.Container>
  );
};

export default CardSkeleton;
