import { useRecoilState, useSetRecoilState } from 'recoil';
import { Account, ServiceSetting } from '@/components/ProfilePage';
import { userInfoState, userTokenState } from '@/stores/user';
import { Wrapper } from '@/styles/ProfilePage';
import React, { useState } from 'react';
import WithdrawModal from '@/components/modals/WIthdrawModal';
import NoticeModal from '@/components/modals/NoticeModal';
import ProfilePageSkeleton from '@/components/skeleton/ProfilePageSkeleton';

const ProfilePage = () => {
  const [reason, setReason] = useState('');
  const setUserToken = useSetRecoilState(userTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const [etcReason, setEtcReason] = useState('');

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    if (target.innerHTML === '회원탈퇴') {
      setIsWithdrawModalOpen(true);
      return;
    }
    setIsLogoutModalOpen(true);
  };

  const onLogoutClick = () => {
    setUserInfo(null);
    setUserToken(null);
  };

  const onWithdrawClick = () => {};

  return (
    <>
      {!userInfo && <ProfilePageSkeleton />}
      {userInfo && (
        <Wrapper>
          <div className="container">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h1 className="title">내 정보</h1>
                <span className="description">
                  여기서 계정 정보를 관리하세요
                </span>
              </div>

              {userInfo && (
                <>
                  <Account />

                  <ServiceSetting />
                </>
              )}
            </div>

            <div
              style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}
            >
              <button className="other" onClick={handleOpenModal}>
                회원탈퇴
              </button>
              <button className="other" onClick={handleOpenModal}>
                로그아웃
              </button>
            </div>
          </div>
        </Wrapper>
      )}

      {isLogoutModalOpen && (
        <NoticeModal
          title="로그아웃 하시겠어요?"
          subTitle="다시 돌아오길 기다릴게요"
          buttonTitle="로그아웃 하기"
          to="/"
          onButtonClick={onLogoutClick}
          setIsNoticeModalOpen={setIsLogoutModalOpen}
        />
      )}
      {isWithdrawModalOpen && (
        <WithdrawModal
          setIsWithdrawModalOpen={setIsWithdrawModalOpen}
          reason={reason}
          setReason={setReason}
          etcReason={etcReason}
          setEtcReason={setEtcReason}
          setIsNoticeModalOpen={setIsNoticeModalOpen}
        />
      )}
      {isNoticeModalOpen && (
        <NoticeModal
          title="정말 탈퇴하시겠어요?"
          subTitle="저장한 데이터는 다시 복구할 수 없어요"
          buttonTitle="탈퇴하기"
          to="/"
          onButtonClick={onWithdrawClick}
          setIsNoticeModalOpen={setIsNoticeModalOpen}
        />
      )}
    </>
  );
};

export default ProfilePage;
