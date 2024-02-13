import useBoolean from '@/hooks/useBoolean';

import ChangePasswordModal from './ChangePasswordModal';

const ChangePassword = () => {
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

      {isOpen && <ChangePasswordModal onClose={close} />}
    </>
  );
};

export default ChangePassword;
