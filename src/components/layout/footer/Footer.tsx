import * as FooterStyle from '@/styles/layout/footer';
import AboutViNO from './AboutViNO';
import SendEmail from './SendEmail';

import FooterLogo from '@/assets/logo-footer.png';
import { isSideBarOpenState } from '@/stores/ui';
import { useRecoilValue } from 'recoil';

const Footer = () => {
  const isSideBarOpen = useRecoilValue(isSideBarOpenState);
  return (
    <FooterStyle.Container width={`100% + ${isSideBarOpen ? '348px' : '0px'}`}>
      <img src={FooterLogo} alt="Footer 로고 이미지" />
      <SendEmail />
      <AboutViNO />
      <FooterStyle.CopyRight>
        © 2024 Vino. All rights reserved.
      </FooterStyle.CopyRight>
    </FooterStyle.Container>
  );
};

export default Footer;
