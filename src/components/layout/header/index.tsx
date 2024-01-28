import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import CloseIcon from '@/assets/icons/close.svg?react';
import MenuIcon from '@/assets/icons/menu.svg?react';
import SearchIcon from '@/assets/icons/search-light.svg?react';

import * as HeaderStyle from '@/styles/layout/header';

import { isSideBarOpenState } from '@/stores/ui';
import { userTokenState } from '@/stores/user';

import Alarm from './alarm';
import Profile from './profile';

const Header = () => {
  const { pathname } = useLocation();
  const userToken = useRecoilValue(userTokenState);
  const [isSideBarOpen, setIsSideBarOpen] = useRecoilState(isSideBarOpenState);
  const [isDarkSection, setIsDarkSection] = useState(false);

  const isDark = ['/'].includes(pathname) && isDarkSection;

  const observer = useMemo(() => {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { height, y } = entry.boundingClientRect;

          setIsDarkSection(!(y < height * -0.9));
        });
      },
      { threshold: 0.1 },
    );
  }, []);

  const toggleSideBarState = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  useEffect(() => {
    const darkSectionList = document.querySelectorAll('.dark-section') || [];

    darkSectionList.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [observer, pathname]);

  return (
    <HeaderStyle.Container id="header" color={isDark ? 'gray500' : 'white'}>
      <HeaderStyle.Area>
        <HeaderStyle.Button
          color={isDark ? 'white' : 'gray500'}
          onClick={toggleSideBarState}
        >
          {isSideBarOpen ? (
            <CloseIcon width={28} height={28} />
          ) : (
            <MenuIcon width={28} height={28} />
          )}
        </HeaderStyle.Button>

        <Link to="/">
          <img
            src={`/src/assets/logo-${isDark ? 'light' : 'dark'}.png`}
            alt="Logo"
          />
        </Link>
      </HeaderStyle.Area>

      <HeaderStyle.Area>
        {userToken ? (
          <>
            <HeaderStyle.IconLink
              to="/search"
              color={isDark ? 'white' : 'gray500'}
            >
              <SearchIcon width={28} height={28} />
            </HeaderStyle.IconLink>

            <Alarm isDark={isDark} />

            <Profile />
          </>
        ) : (
          <HeaderStyle.LoginButton
            to="/sign-in"
            background={isDark ? 'green400' : 'gray500'}
            text={isDark ? 'gray500' : 'white'}
          >
            로그인/회원가입
          </HeaderStyle.LoginButton>
        )}
      </HeaderStyle.Area>
    </HeaderStyle.Container>
  );
};

export default Header;
