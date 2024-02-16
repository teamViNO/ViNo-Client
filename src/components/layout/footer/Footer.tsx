import * as FooterStyle from '@/styles/layout/footer';
import AboutViNO from './AboutViNO';
import SendEmail from './SendEmail';

import FooterLogo from '@/assets/logo-footer.png';

const Footer = () => {
  return (
    <FooterStyle.Container>
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
