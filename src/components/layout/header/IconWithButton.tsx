import * as HeaderStyle from '@/styles/layout/header/Header.style';
import MenuIcon from '@/assets/icons/menu-light.svg?react';
import NotifyOffIcon from '@/assets/icons/notify-off-light.svg?react';
import NotifyOnIcon from '@/assets/icons/notify-on-light.svg?react';
import { KeyOfIcon } from 'types/icon';

const IconWithButton = ({
  name,
  onClick,
}: {
  name: KeyOfIcon;
  onClick: () => void;
}) => {
  switch (name) {
    case 'Menu':
      return (
        <HeaderStyle.Button onClick={onClick}>
          <MenuIcon width={28} height={28} />
        </HeaderStyle.Button>
      );
    case 'NotifyOff':
      return (
        <HeaderStyle.Button onClick={onClick}>
          <NotifyOffIcon width={28} height={28} />
        </HeaderStyle.Button>
      );
    case 'NotifyOn':
      return (
        <HeaderStyle.Button onClick={onClick}>
          <NotifyOnIcon width={28} height={28} />
        </HeaderStyle.Button>
      );
    default:
      console.log('something went wrong!');
  }
};

export default IconWithButton;
