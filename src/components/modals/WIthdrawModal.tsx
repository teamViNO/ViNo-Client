import {
  BlurBackground,
  CommonCategoryContainer,
  CommonCloseButton,
} from '@/styles/modals/common.style';
import CloseSvg from '@/assets/icons/close.svg?react';
import useOutsideClick from '@/hooks/useOutsideClick';
import AfterLogin from '@/assets/after-login.png';
import * as WithdrawModalStyles from '@/styles/modals/WIthdrawModal.style';

interface IWithdrawModalProp {
  reason: string;
  setReason: React.Dispatch<React.SetStateAction<string>>;
  etcReason: string;
  setEtcReason: React.Dispatch<React.SetStateAction<string>>;
  setIsWithdrawModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsNoticeModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const WithdrawModal = ({
  reason,
  setReason,
  etcReason,
  setEtcReason,
  setIsWithdrawModalOpen,
  setIsNoticeModalOpen,
}: IWithdrawModalProp) => {
  const onCloseModal = () => {
    setReason('');
    setIsWithdrawModalOpen(false);
  };
  const options = [
    '기록을 삭제하고 싶어요',
    '변환 결과가 마음에 들지 않아요',
    '이용이 불편하고 장애가 많아요',
    '사용빈도가 낮아요',
    '기타',
  ];
  const [withdrawModalRef] = useOutsideClick<HTMLDivElement>(onCloseModal);

  const handleModalState = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWithdrawModalOpen(false);
    setIsNoticeModalOpen(true);
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEtcReason(e.target.value);

  return (
    <BlurBackground>
      <CommonCategoryContainer ref={withdrawModalRef}>
        <CommonCloseButton onClick={onCloseModal}>
          <CloseSvg width={21.42} height={21.42} />
        </CommonCloseButton>
        <img src={AfterLogin} />
        <WithdrawModalStyles.Title>
          왜 탈퇴하시려고 하나요?
        </WithdrawModalStyles.Title>
        <WithdrawModalStyles.SubTitle>
          탈퇴를 결심한 이유를 알려주세요
        </WithdrawModalStyles.SubTitle>
        {options.map((option) => (
          <WithdrawModalStyles.SelectButton
            key={option}
            onClick={() => setReason(option)}
            className={`${option === reason && 'selected'}`}
          >
            {option}
          </WithdrawModalStyles.SelectButton>
        ))}
        <WithdrawModalStyles.EtcInputWrap
          className={`${reason === '기타' && 'open'}`}
        >
          <WithdrawModalStyles.EtcInput
            value={etcReason}
            onChange={handleInput}
          />
        </WithdrawModalStyles.EtcInputWrap>
        <WithdrawModalStyles.SubmitButton
          disabled={!reason}
          className={`${!reason && 'disabled'}`}
          onClick={handleModalState}
        >
          선택하기
        </WithdrawModalStyles.SubmitButton>
      </CommonCategoryContainer>
    </BlurBackground>
  );
};
export default WithdrawModal;
