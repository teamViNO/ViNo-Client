import * as ProfilePageSkeletonStyles from '@/styles/skeleton/ProfilePageSkeleton.style';

const ProfilePageSkeleton = () => {
  return (
    <ProfilePageSkeletonStyles.Container>
      <ProfilePageSkeletonStyles.Rectangle className="medium" />
      <ProfilePageSkeletonStyles.Rectangle />
      <ProfilePageSkeletonStyles.Box />
      <ProfilePageSkeletonStyles.Wrap>
        <ProfilePageSkeletonStyles.Box className="large" />
        <ProfilePageSkeletonStyles.InnerWrap>
          <ProfilePageSkeletonStyles.Rectangle className="small" />
          <ProfilePageSkeletonStyles.Chip className="medium" />
        </ProfilePageSkeletonStyles.InnerWrap>
      </ProfilePageSkeletonStyles.Wrap>
      <ProfilePageSkeletonStyles.CommonWrap>
        <ProfilePageSkeletonStyles.CommonFlex>
          <ProfilePageSkeletonStyles.Rectangle className="small" />
          <ProfilePageSkeletonStyles.Chip className="large" />
          <ProfilePageSkeletonStyles.Rectangle className="large" />
        </ProfilePageSkeletonStyles.CommonFlex>
      </ProfilePageSkeletonStyles.CommonWrap>
      <ProfilePageSkeletonStyles.CommonWrap>
        <ProfilePageSkeletonStyles.CommonFlex>
          <ProfilePageSkeletonStyles.Rectangle className="small" />
          <ProfilePageSkeletonStyles.Chip className="large" />
        </ProfilePageSkeletonStyles.CommonFlex>
      </ProfilePageSkeletonStyles.CommonWrap>
      <ProfilePageSkeletonStyles.CommonWrap>
        <ProfilePageSkeletonStyles.CommonFlex>
          <ProfilePageSkeletonStyles.Rectangle className="small" />
          <ProfilePageSkeletonStyles.Chip className="large" />
        </ProfilePageSkeletonStyles.CommonFlex>
      </ProfilePageSkeletonStyles.CommonWrap>
    </ProfilePageSkeletonStyles.Container>
  );
};

export default ProfilePageSkeleton;
