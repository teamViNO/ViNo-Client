import * as HeaderStyle from '@/styles/layout/Header.style';
import { Link } from 'react-router-dom';
import IconWithButton from './IconWithButton';
import SearchIcon from '@/assets/icons/search-light.svg?react';

const Header = () => {
  return (
    <HeaderStyle.Container>
      <HeaderStyle.Area>
        <IconWithButton name="Menu" onClick={() => {}} />
        <Link to="/">
          <img src="/src/assets/logo-light.png" alt="하얀색 로고 이미지" />
        </Link>
      </HeaderStyle.Area>
      <HeaderStyle.Area>
        <HeaderStyle.LinkWithMargin to="/search">
          <SearchIcon width={28} height={28} />
        </HeaderStyle.LinkWithMargin>
        <IconWithButton name="NotifyOff" onClick={() => {}} />
        <HeaderStyle.Button>
          <img src="/src/assets/default-profile.png" alt="프로필 이미지" />
        </HeaderStyle.Button>
      </HeaderStyle.Area>
    </HeaderStyle.Container>
  );
};

export default Header;
