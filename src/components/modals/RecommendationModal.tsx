import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { recommendationModalState } from '@/stores/modal';
import useOutsideClick from '@/hooks/useOutsideClick';

import emptyvideoImg from '@/assets/empty-video.png';
import CloseIcon from '@/assets/icons/close.svg?react';
import cardimageImg from '@/assets/card-image.png';

import { userInfoState } from '@/stores/user';

import { RecommendationModalContainer } from '@/styles/modals/RecommendationModal.style';

const RecommendationModal: React.FC = () => {
  const userInfo = useRecoilValue(userInfoState);
  const [modalOpen, setModalOpen] = useRecoilState(recommendationModalState);

  const closeModal = () => {
    setModalOpen(false);
  };

  const [modalRef] = useOutsideClick<HTMLDivElement>(closeModal);

  return (
    <RecommendationModalContainer isOpen={modalOpen}>
      <div className="modal-container" ref={modalRef}>
        <div className="modal-inform">
          <div className="close-btn" onClick={closeModal}>
            <CloseIcon width={28} height={28} />
          </div>
          <div className="inform-wrapper">
            <div className="inform">
              <img
                src={emptyvideoImg}
                alt="emptyvideoImg"
                width={56}
                height={56}
              />
              <div className="inform-text">
                기다리는 동안 이런 영상은 어때요?
              </div>
              <div className="inform-subtext">
                {userInfo?.nick_name}님을 위해 미리 정리 된 영상을
                소개해드릴게요
              </div>
            </div>
          </div>
        </div>
        <div className="modal-card">
          <img src={cardimageImg} alt="card-image" width={290} />
          <div className="card-text">
            <h2 className="card-title">우리는 카카오워크로 일해요</h2>
            <div className="hashtag">
              <span className="card-hashtag"># 디자인</span>
              <span className="card-hashtag"># 진로</span>
            </div>
          </div>
        </div>
      </div>
    </RecommendationModalContainer>
  );
};

export default RecommendationModal;
