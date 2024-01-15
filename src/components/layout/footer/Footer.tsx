import { useState } from 'react';
import SvgIcons from '../../SvgIcons';
import * as FooterStyle from '@/styles/layout/Footer.style';
import AboutViNO from './AboutViNO';
import SendEmail from './SendEmail';

const Footer = () => {
  const [feedback, setFeedback] = useState<string>('');

  const aboutViNOs: [string, string, string][] = [
    ['TEAM Vi.NO', '고객센터 | 01041949853', '메일 | pm.ooodd@gmail.com'],
    ['이용약관', '개인정보처리방침', '문의하기'],
  ];

  return (
    <FooterStyle.Container>
      <SvgIcons.Logo width={64.55} height={20} footer />
      <SendEmail feedback={feedback} setFeedback={setFeedback} />
      <AboutViNO aboutViNOs={aboutViNOs} />
      <FooterStyle.CopyRight>
        © 2024 Vino. All rights reserved.
      </FooterStyle.CopyRight>
    </FooterStyle.Container>
  );
};

export default Footer;