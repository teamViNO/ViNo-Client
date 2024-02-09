import * as FooterStyle from '@/styles/layout/footer';
import { useState } from 'react';

import SendEmailImage from '@/assets/mail.png';

const SendEmail = () => {
  const [feedback, setFeedback] = useState<string>('');

  const handleInputFeedback = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFeedback(e.target.value);

  return (
    <FooterStyle.SendEmailWrap>
      <FooterStyle.SendEmailImage src={SendEmailImage} alt="메일 보내기" />
      <FooterStyle.SendEmailInput
        type="text"
        placeholder="서비스를 이용하면서 불편하거나, 좋은 피드백이 있다면 보내주세요!"
        value={feedback}
        onChange={handleInputFeedback}
      />
      <FooterStyle.SendEmailButton>보내기</FooterStyle.SendEmailButton>
    </FooterStyle.SendEmailWrap>
  );
};

export default SendEmail;
