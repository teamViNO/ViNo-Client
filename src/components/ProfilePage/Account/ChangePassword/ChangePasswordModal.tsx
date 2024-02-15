import { useMemo, useState } from 'react';

import CloseIcon from '@/assets/icons/close.svg?react';
import TransformationIcon from '@/assets/icons/transformation.svg?react';

import { Modal } from '@/components/common';

import { ModalBox } from '@/styles/ProfilePage';

import { ValidatePassword, validatePassword } from '@/utils/validation';
import { updatePasswordAPI } from '@/apis/user';

type Props = {
  onClose: () => void;
  onRefresh: () => void;
};

const ChangePasswordModal = ({ onClose, onRefresh }: Props) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [validateNewPassword, setValidateNewPassword] =
    useState<ValidatePassword | null>(null);
  const [validateConfirmPassword, setValidateConfirmPassword] = useState(true);

  const isDisabledSubmitButton = useMemo(() => {
    return !(
      oldPassword !== '' &&
      validateNewPassword?.ALPHA_UPPER &&
      validateNewPassword?.LENGTH &&
      validateNewPassword?.NUMBER &&
      validateNewPassword?.SPECIAL_CHAR &&
      validateConfirmPassword
    );
  }, [oldPassword, validateNewPassword, validateConfirmPassword]);

  const handleChangeNewPassword: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setNewPassword(value);
    setValidateNewPassword(validatePassword(value));
    setValidateConfirmPassword(value === newPassword);
  };

  const handleChangeConfirmPassword: React.ChangeEventHandler<
    HTMLInputElement
  > = ({ target: { value } }) => {
    setConfirmPassword(value);
    setValidateConfirmPassword(value === newPassword);
  };

  const getHelpStyle = (test: undefined | boolean) => {
    if (test === undefined) return '';
    return test ? 'active' : 'error';
  };

  const handleClickSubmitButton = async () => {
    try {
      await updatePasswordAPI({
        old_password: oldPassword,
        new_password: newPassword,
        confirm_password: confirmPassword,
      });
    } catch (e) {
      console.error(e);
    }

    onClose();
    onRefresh();
  };

  return (
    <Modal onClose={onClose}>
      <ModalBox>
        <div className="box">
          <div className="close">
            <CloseIcon width={28} height={28} onClick={onClose} />
          </div>

          <div className="content">
            <TransformationIcon width={56} height={56} />

            <h1 className="title">비밀번호 변경</h1>
          </div>
        </div>

        <div className="box" style={{ gap: 40 }}>
          <div className="input-group">
            <span className="input-title">기존 비밀번호</span>

            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>

          <div className="input-group">
            <span className="input-title">비밀번호</span>

            <input
              type="password"
              value={newPassword}
              onChange={handleChangeNewPassword}
            />

            <div className="input-help">
              <span className={getHelpStyle(validateNewPassword?.LENGTH)}>
                *8자 이상으로 입력
              </span>

              <span className={getHelpStyle(validateNewPassword?.ALPHA_UPPER)}>
                *대문자 사용
              </span>

              <span className={getHelpStyle(validateNewPassword?.NUMBER)}>
                *숫자 사용
              </span>

              <span className={getHelpStyle(validateNewPassword?.SPECIAL_CHAR)}>
                *특수문자 사용
              </span>
            </div>
          </div>

          <div className="input-group">
            <span className="input-title">비밀번호 재입력</span>

            <input
              type="password"
              value={confirmPassword}
              onChange={handleChangeConfirmPassword}
            />

            <div className="input-help">
              {validateConfirmPassword ? (
                <span>비밀번호 확인을 위해 다시 한 번 입력해주세요</span>
              ) : (
                <span className="error">
                  비밀번호가 일치하지 않아요 다시 입력해주세요
                </span>
              )}
            </div>
          </div>

          <button
            className="submit"
            disabled={isDisabledSubmitButton}
            onClick={handleClickSubmitButton}
          >
            변경하기
          </button>
        </div>
      </ModalBox>
    </Modal>
  );
};

export default ChangePasswordModal;
