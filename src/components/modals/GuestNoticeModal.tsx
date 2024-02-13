import {
  BlurBackground,
  CommonCategoryContainer,
  CommonCloseButton,
} from '@/styles/modals/common.style';
import CloseSvg from '@/assets/icons/close.svg?react';
import useOutsideClick from '@/hooks/useOutsideClick';
import AfterLogin from '@/assets/after-login.png';
import * as GuestNoticeModalStyles from '@/styles/modals/GuestNoticeModal.style';

interface IGuestNoticeModalProp {
  setIsGuestNoticeModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const GuestNoticeModal = ({
  setIsGuestNoticeModalOpen,
}: IGuestNoticeModalProp) => {
  const onCloseModal = () => setIsGuestNoticeModalOpen(false);
  const [GuestNoticeModalRef] = useOutsideClick<HTMLDivElement>(onCloseModal);
  return (
    <BlurBackground>
      <CommonCategoryContainer ref={GuestNoticeModalRef}>
        <CommonCloseButton onClick={onCloseModal}>
          <CloseSvg width={21.42} height={21.42} />
        </CommonCloseButton>
        <img src={AfterLogin} />
        <GuestNoticeModalStyles.Title>
          로그인하고 중요한 영상 저장하기
        </GuestNoticeModalStyles.Title>
        <GuestNoticeModalStyles.SubTitle>
          로그인 후 더 많은 서비스를 이용해보세요!
        </GuestNoticeModalStyles.SubTitle>
        <GuestNoticeModalStyles.Button to="/sign-in">
          로그인 하기
        </GuestNoticeModalStyles.Button>
      </CommonCategoryContainer>
    </BlurBackground>
  );
};

export default GuestNoticeModal;
