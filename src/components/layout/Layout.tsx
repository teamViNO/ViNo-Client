import { useRecoilValue } from 'recoil';
import Footer from './footer/Footer';
import Header from './header';
import SideBar from './sideBar';
import { sideBarState } from '@/stores/sideBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isSideBarOpen = useRecoilValue(sideBarState);
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        {isSideBarOpen && <SideBar />}
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
