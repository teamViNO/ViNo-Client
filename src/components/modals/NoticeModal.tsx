import {
  BlurBackground,
  CommonCategoryContainer,
  CommonCloseButton,
} from '@/styles/modals/common.style';
import CloseSvg from '@/assets/icons/close.svg?react';
import useOutsideClick from '@/hooks/useOutsideClick';
import AfterLogin from '@/assets/after-login.png';
import * as NoticeModalStyles from '@/styles/modals/NoticeModal.style';

interface IGuestNoticeModalProp {
  title: string;
  subTitle: string;
  to: string;
  buttonTitle: string;
  onButtonClick?: () => void;
  setIsNoticeModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoticeModal = ({
  title,
  subTitle,
  to,
  buttonTitle,
  onButtonClick,
  setIsNoticeModalOpen,
}: IGuestNoticeModalProp) => {
  const onCloseModal = () => setIsNoticeModalOpen(false);
  const [noticeModalRef] = useOutsideClick<HTMLDivElement>(onCloseModal);
  return (
    <BlurBackground>
      <CommonCategoryContainer ref={noticeModalRef}>
        <CommonCloseButton onClick={onCloseModal}>
          <CloseSvg width={21.42} height={21.42} />
        </CommonCloseButton>
        <img src={AfterLogin} />
        <NoticeModalStyles.Title>{title}</NoticeModalStyles.Title>
        <NoticeModalStyles.SubTitle>{subTitle}</NoticeModalStyles.SubTitle>
        <NoticeModalStyles.Button to={to} onClick={onButtonClick}>
          {buttonTitle}
        </NoticeModalStyles.Button>
      </CommonCategoryContainer>
    </BlurBackground>
  );
};

export default NoticeModal;
