import * as FooterStyle from '@/styles/layout/footer';
import { useState } from 'react';

import SendEmailImage from '@/assets/mail.png';
import SuccessSendEmailImage from '@/assets/success-mail.png';
import { postFeedback } from '@/apis/feedback';
import useCreateToast from '@/hooks/useCreateToast';

const SendEmail = () => {
  const [feedback, setFeedback] = useState<string>('');
  const [successSend, setSuccessSend] = useState(false);
  const { createToast } = useCreateToast();

  const handleInputFeedback = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFeedback(e.target.value);

  const onSendFeedback = async () => {
    const res = await postFeedback(feedback);
    if (res.data.success) {
      setFeedback('');
      setSuccessSend(true);
      return;
    }
    createToast('피드백을 전송하는 과정에서 오류가 발생했습니다.');
  };

  return (
    <FooterStyle.SendEmailWrap className={`${successSend && 'success-send'}`}>
      {successSend && (
        <>
          <FooterStyle.SendEmailImage
            src={SuccessSendEmailImage}
            alt="메일 보내기"
          />
          <FooterStyle.SuccessSendEmail>
            소중한 피드백이 전달되었어요!
          </FooterStyle.SuccessSendEmail>
        </>
      )}
      {!successSend && (
        <>
          <FooterStyle.SendEmailImage src={SendEmailImage} alt="메일 보내기" />
          <FooterStyle.SendEmailInput
            type="text"
            placeholder="서비스를 이용하면서 불편하거나, 좋은 피드백이 있다면 보내주세요!"
            value={feedback}
            onChange={handleInputFeedback}
          />
          <FooterStyle.SendEmailButton
            onClick={onSendFeedback}
            disabled={!feedback}
            className={`${!feedback && 'disabled'}`}
          >
            보내기
          </FooterStyle.SendEmailButton>
        </>
      )}
    </FooterStyle.SendEmailWrap>
  );
};

export default SendEmail;
