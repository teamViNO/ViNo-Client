import useBoolean from '@/hooks/useBoolean';

import ChangePasswordModal from './ChangePasswordModal';

type Props = {
  onRefresh: () => void;
};

const ChangePassword = ({ onRefresh }: Props) => {
  const [isOpen, , open, close] = useBoolean(false);

  return (
    <>
      <div
        className="account-group"
        style={{ flexDirection: 'row', justifyContent: 'space-between' }}
      >
        <span className="group-title">비밀번호</span>

        <button className="submit" onClick={open}>
          변경하기
        </button>
      </div>

      {isOpen && <ChangePasswordModal onClose={close} onRefresh={onRefresh} />}
    </>
  );
};

export default ChangePassword;
