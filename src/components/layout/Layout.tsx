import { Outlet, useLocation } from 'react-router-dom';
import {  useRecoilValue } from 'recoil';

import { isSideBarOpenState } from '@/stores/ui';

import Footer from './footer/Footer';
import Header from './header';
import SideBar from './sideBar';
import NicknameModal from '@/components/NicknameModal';
import ErrorModal from '../modals/ErrorModal';

import { useMemo, useEffect } from 'react';
import { userInfoState } from '@/stores/user';
import { errorModalState } from '@/stores/modal';

const Layout = () => {
  const { pathname } = useLocation();
  const isSideBarOpen = useRecoilValue(isSideBarOpenState);
  const userInfo = useRecoilValue(userInfoState);
  const isErrorModalOpen  = useRecoilValue(errorModalState)

  const isShowFooter = useMemo(
    () => pathname === '/' || /^(\/category)/g.test(pathname),
    [pathname],
  );

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />

      <div style={{ display: 'flex', width: '100%' }}>
        {isSideBarOpen && <SideBar />}

        <div style={{ flex: '1 1 auto' }}>
          <Outlet />
        </div>
      </div>

      {isShowFooter && <Footer />}
      {userInfo && userInfo.nick_name === '' && <NicknameModal />}
      {isErrorModalOpen && <ErrorModal/>}
    </>
  );
};

export default Layout;
