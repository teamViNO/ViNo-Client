import * as FooterStyle from '@/styles/layout/Footer.style';
import AboutViNO from './AboutViNO';
import SendEmail from './SendEmail';

const Footer = () => {
  return (
    <FooterStyle.Container>
      <img src="/src/assets/logo-footer.png" alt="Footer 로고 이미지" />
      <SendEmail />
      <AboutViNO />
      <FooterStyle.CopyRight>
        © 2024 Vino. All rights reserved.
      </FooterStyle.CopyRight>
    </FooterStyle.Container>
  );
};

export default Footer;
