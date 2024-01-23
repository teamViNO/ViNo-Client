import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { isSideBarOpenState } from '@/stores/ui';

import Footer from './footer/Footer';
import Header from './header';
import SideBar from './sideBar';

const Layout = () => {
  const isSideBarOpen = useRecoilValue(isSideBarOpenState);

  return (
    <>
      <Header />

      <div style={{ display: 'flex' }}>
        {isSideBarOpen && <SideBar />}

        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
