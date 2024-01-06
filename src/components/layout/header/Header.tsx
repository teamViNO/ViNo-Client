// import { Image } from '@/styles/layout/Header.style';
import SvgIcons from '../../SvgIcons';
import * as HeaderStyle from '@/styles/layout/Header.style';
import { Link } from 'react-router-dom';
import IconWithButton from './IconWithButton';

const Header = () => {
  return (
    <HeaderStyle.Container>
      <HeaderStyle.Area>
        <IconWithButton name="MenuIcon" onClick={() => {}} />
        <Link to="/">
          <SvgIcons.Logo width={64.55} height={20} darkMode />
        </Link>
      </HeaderStyle.Area>
      <HeaderStyle.Area>
        <HeaderStyle.LinkWithMargin to="/search">
          <SvgIcons.SearchIcon width={28} height={28} darkMode />
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
