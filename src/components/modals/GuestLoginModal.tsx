import { Link } from 'react-router-dom';

import CloseIcon from '@/assets/icons/close.svg?react';

import { Modal } from '@/components/common';

import { ModalBox } from '@/styles/SummaryPage';

type Props = {
  title: string;
  description: string | JSX.Element;
  onClose: () => void;
};

const GuestLoginModal = ({ title, description, onClose }: Props) => {
  return (
    <Modal onClose={onClose}>
      <ModalBox>
        <div className="close-button" onClick={onClose}>
          <CloseIcon width={28} height={28} />
        </div>

        <div className="content">
          <img src="/assets/check.png" alt="check" />

          <h1>{title}</h1>

          <span>{description}</span>
        </div>

        <Link to="/sign-in">로그인 하기</Link>
      </ModalBox>
    </Modal>
  );
};

export default GuestLoginModal;
