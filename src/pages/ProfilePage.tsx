import { useRecoilValue } from 'recoil';

import { Account, LogoutModal, ServiceSetting } from '@/components/ProfilePage';

import useBoolean from '@/hooks/useBoolean';

import { userInfoState } from '@/stores/user';

import { Wrapper } from '@/styles/ProfilePage';
import { useState } from 'react';
import WithdrawModal from '@/components/modals/WIthdrawModal';

const ProfilePage = () => {
  const [reason, setReason] = useState('');
  const userInfo = useRecoilValue(userInfoState);
  const [isShowLogoutModal, , openLogoutModal, closeLogoutModal] =
    useBoolean(false);
  const [etcReason, setEtcReason] = useState('');

  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWithdrawModalOpen(true);
  };

  return (
    <>
      <Wrapper>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <h1 className="title">내 정보</h1>
              <span className="description">여기서 계정 정보를 관리하세요</span>
            </div>

            {userInfo && (
              <>
                <Account />

                <ServiceSetting />
              </>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
            <button className="other" onClick={handleOpenModal}>
              회원탈퇴
            </button>
            <button className="other" onClick={openLogoutModal}>
              로그아웃
            </button>
          </div>
        </div>
      </Wrapper>

      {isShowLogoutModal && <LogoutModal onClose={closeLogoutModal} />}
      {isWithdrawModalOpen && (
        <WithdrawModal
          setIsWithdrawModalOpen={setIsWithdrawModalOpen}
          reason={reason}
          setReason={setReason}
          etcReason={etcReason}
          setEtcReason={setEtcReason}
        />
      )}
    </>
  );
};

export default ProfilePage;
