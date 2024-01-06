import SvgIcons, { KeyOfIcon } from '@/components/SvgIcons';
import * as HeaderStyle from '@/styles/layout/Header.style';

const IconWithButton = ({
  name,
  onClick,
}: {
  name: KeyOfIcon;
  onClick: () => void;
}) => {
  switch (name) {
    case 'MenuIcon':
      return (
        <HeaderStyle.Button onClick={onClick}>
          <SvgIcons.MenuIcon width={28} height={28} darkMode />;
        </HeaderStyle.Button>
      );
    case 'NotifyOff':
      return (
        <HeaderStyle.Button onClick={onClick}>
          <SvgIcons.NotifyOff width={28} height={28} darkMode />
        </HeaderStyle.Button>
      );
    case 'NotifyOn':
      return (
        <HeaderStyle.Button onClick={onClick}>
          <SvgIcons.NotifyOn width={28} height={28} darkMode />
        </HeaderStyle.Button>
      );
    default:
      console.log('something went wrong!');
  }
};

export default IconWithButton;
