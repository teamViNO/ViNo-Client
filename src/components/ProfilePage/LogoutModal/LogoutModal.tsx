import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import CloseIcon from '@/assets/icons/close.svg?react';
import AfterLoginImage from '@/assets/after-login.png';

import { Modal } from '@/components/common';

import { ModalBox } from '@/styles/ProfilePage';
import { userInfoState, userTokenState } from '@/stores/user';

type Props = {
  onClose: () => void;
};

const LogoutModal = ({ onClose }: Props) => {
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(userInfoState);
  const setUserToken = useSetRecoilState(userTokenState);

  const handleClickLogoutButton = () => {
    setUserInfo(null);
    setUserToken(null);
    navigate('/');
  };

  return (
    <Modal onClose={onClose}>
      <ModalBox>
        <div className="box">
          <div className="close">
            <CloseIcon width={28} height={28} onClick={onClose} />
          </div>

          <div className="content">
            <img src={AfterLoginImage} alt="image" />

            <h1 className="title">로그아웃 하시겠어요?</h1>

            <span className="description">다시 돌아오길 기다릴게요</span>
          </div>
        </div>

        <button onClick={handleClickLogoutButton}>로그아웃 하기</button>
      </ModalBox>
    </Modal>
  );
};

export default LogoutModal;
