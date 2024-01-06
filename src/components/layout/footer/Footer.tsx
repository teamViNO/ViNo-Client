import { useState } from 'react';
import SvgIcons from '../../SvgIcons';
import * as FooterStyle from '@/styles/layout/Footer.style';
import AboutViNO from './AboutViNO';

const Footer = () => {
  const [feedback, setFeedback] = useState<string>('');

  const aboutViNOs: [string, string, string][] = [
    ['TEAM Vi.NO', '고객센터 | 01041949853', '메일 | pm.ooodd@gmail.com'],
    ['이용약관', '개인정보처리방침', '문의하기'],
  ];

  const handleInputFeedback = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFeedback(e.target.value);

  return (
    <FooterStyle.Container>
      <SvgIcons.Logo width={64.55} height={20} footer />
      <FooterStyle.SendEmailWrap>
        <FooterStyle.SendEmailImage
          src="/src/assets/mail.png"
          alt="메일 보내기"
        />
        <FooterStyle.SendEmailInput
          type="text"
          placeholder="서비스를 이용하면서 불편하거나, 좋은 피드백이 있다면 보내주세요!"
          value={feedback}
          onChange={handleInputFeedback}
        />
        <FooterStyle.SendEmailButton>보내기</FooterStyle.SendEmailButton>
      </FooterStyle.SendEmailWrap>
      <AboutViNO aboutViNOs={aboutViNOs} />
      <FooterStyle.CopyRight>
        © 2024 Vino. All rights reserved.
      </FooterStyle.CopyRight>
    </FooterStyle.Container>
  );
};

export default Footer;
