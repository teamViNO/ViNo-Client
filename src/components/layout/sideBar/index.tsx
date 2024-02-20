import { useRecoilState, useRecoilValue } from 'recoil';

import NoticeModal from '@/components/modals/NoticeModal';

import { userTokenState } from '@/stores/user';
import { guestCategoryModalState } from '@/stores/modal';

import * as SideBarStyles from '@/styles/layout/sideBar';

import GuestMode from './GuestMode';
import UserMode from './UserMode';
import AddCategory from './AddCategory';
import ConvertVideo from './ConvertVideo';
import VinoGuide from './VinoGuide';

const SideBar = () => {
  const isUser = useRecoilValue(userTokenState);
  const [isModalOpen, setIsModalOpen] = useRecoilState(guestCategoryModalState);

  return (
    <>
      <SideBarStyles.Container>
        <VinoGuide />
        <ConvertVideo />
        <SideBarStyles.StickySection>
          <AddCategory />
          {isUser ? <UserMode /> : <GuestMode />}
        </SideBarStyles.StickySection>
      </SideBarStyles.Container>

      {isModalOpen && (
        <NoticeModal
          title="로그인하고 중요한 영상 저장하기"
          subTitle="로그인 후 더 많은 서비스를 이용해보세요!"
          to="/sign-in"
          buttonTitle="로그인 하기"
          setIsNoticeModalOpen={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default SideBar;
