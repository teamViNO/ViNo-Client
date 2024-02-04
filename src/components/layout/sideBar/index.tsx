import * as SideBarStyles from '@/styles/layout/sideBar';
import { useRecoilValue } from 'recoil';
import { userState } from '@/stores/user';
import GuestMode from './GuestMode';
import UserMode from './UserMode';
import AddCategory from './AddCategory';
import ConvertVideo from './ConvertVideo';
import VinoGuide from './VinoGuide';

const SideBar = () => {
  const isUser = useRecoilValue(userState);

  return (
    <SideBarStyles.Container>
      <VinoGuide />
      <ConvertVideo />
      <SideBarStyles.StickySection>
        <AddCategory />
        {isUser ? <UserMode /> : <GuestMode />}
      </SideBarStyles.StickySection>
    </SideBarStyles.Container>
  );
};

export default SideBar;
