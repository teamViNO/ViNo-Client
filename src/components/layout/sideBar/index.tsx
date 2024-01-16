import * as SideBarStyle from '@/styles/layout/sideBar';
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
    <SideBarStyle.Container>
      <VinoGuide />
      <ConvertVideo />
      <AddCategory />
      {isUser ? <UserMode /> : <GuestMode />}
    </SideBarStyle.Container>
  );
};

export default SideBar;
