import { Outlet, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { isSideBarOpenState } from '@/stores/ui';

import Footer from './footer/Footer';
import Header from './header';
import SideBar from './sideBar';
import NicknameModal from '@/components/NicknameModal';
import { useMemo } from 'react';
import { userInfoState } from '@/stores/user';

const Layout = () => {
  const { pathname } = useLocation();
  const isSideBarOpen = useRecoilValue(isSideBarOpenState);
  const userInfo = useRecoilValue(userInfoState);

  const isShowFooter = useMemo(
    () => ['/'].includes(pathname) || /^\/category/g.test(pathname),
    [pathname],
  );

  return (
    <>
      <Header />

      <div style={{ display: 'flex' }}>
        {isSideBarOpen && <SideBar />}

        <Outlet />
      </div>

      {isShowFooter && <Footer />}
      {userInfo && userInfo.nick_name === '' && <NicknameModal />}
    </>
  );
};

export default Layout;
