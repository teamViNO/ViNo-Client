import { AxiosError } from 'axios';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import { getMyInfoAPI, updateMyInfoAPI } from '@/apis/user';

import NaverIconImage from '@/assets/naver-icon.png';
import KakaoIconImage from '@/assets/kakao-icon.png';

import { Tooltip } from '@/components/common';

import { GENDER_TYPE_LIST } from '@/constants/user';

import useFocus from '@/hooks/useFocus';

import { APIBaseResponse } from '@/models/config/axios';

import { userInfoState } from '@/stores/user';

import theme from '@/styles/theme';
import { Box } from '@/styles/ProfilePage';

import { validateNickname } from '@/utils/validation';

import { ChangePassword } from './ChangePassword';

const Account = () => {
  const timerRef = useRef<NodeJS.Timeout>();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [nickname, setNickname] = useState(userInfo?.nick_name || '');
  const [gender, setGender] = useState(userInfo?.gender || '');

  const [isDuplicateNickname, setIsDuplicateNickname] = useState(false);
  const [isErrorNickname, setIsErrorNickname] = useState(
    validateNickname(nickname),
  );

  const [isShowTooltip, setIsShowTooltip] = useState(false);
  const [nicknameInputRef, focusNicknameInput, isNicknameFocus] =
    useFocus<HTMLInputElement>();

  const isSocialAccount = !!userInfo?.platform;
  const birthDate = new Date(userInfo?.birth_date || '');

  const isDisabled = useMemo(() => {
    if (isErrorNickname) return true;

    return !(nickname !== userInfo?.nick_name || gender !== userInfo?.gender);
  }, [userInfo, nickname, gender, isErrorNickname]);

  const nicknameInputStyle = {
    border: `1.5px solid ${
      isErrorNickname || isDuplicateNickname
        ? theme.color.red
        : isNicknameFocus
          ? theme.color.gray500
          : theme.color.gray200
    }`,
  };

  const clearTooltipTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const showTooltip = () => {
    setIsShowTooltip(true);

    clearTooltipTimer();

    timerRef.current = setTimeout(() => {
      setIsShowTooltip(false);
    }, 1000 * 5);
  };

  const refreshMyInfo = async () => {
    try {
      const { result } = (await getMyInfoAPI()).data;

      setUserInfo(result);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChangeNickname: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setIsDuplicateNickname(false);
    setNickname(value);
    setIsErrorNickname(validateNickname(value));
  };

  const handleClickSubmitButton = async () => {
    try {
      const { success } = (
        await updateMyInfoAPI({ nick_name: nickname, gender })
      ).data;

      if (success) {
        showTooltip();
        refreshMyInfo();
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const { code } = error.response?.data as APIBaseResponse;

        if (code === 'DUPLICATE_NICKNAME') {
          setIsDuplicateNickname(true);
        }
      }
    }
  };

  useEffect(() => {
    return () => {
      clearTooltipTimer();
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 className="title">계정</h2>

        <div style={{ position: 'relative' }}>
          {isShowTooltip && (
            <div className="submit-tooltip">
              <Tooltip direction="down">수정이 완료되었어요!</Tooltip>
            </div>
          )}

          <button
            className="submit"
            disabled={isDisabled}
            onClick={handleClickSubmitButton}
          >
            변경하기
          </button>
        </div>
      </div>

      <Box>
        <div
          className="account-group"
          style={{ flexDirection: 'row', gap: 20 }}
        >
          <div className="avatar"></div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              flex: '1 1 auto',
            }}
          >
            <span className="group-title">닉네임</span>

            <div
              className="input-box"
              style={nicknameInputStyle}
              onClick={focusNicknameInput}
            >
              <div style={{ display: 'flex', flex: '1 1 auto' }}>
                <input
                  ref={nicknameInputRef}
                  type="text"
                  value={nickname}
                  onChange={handleChangeNickname}
                  maxLength={7}
                />
              </div>

              <span className="input-guide">
                {nickname.length}/7 (공백포함)
              </span>
            </div>

            {isErrorNickname && (
              <span className="input-error-text">
                닉네임 형식이 올바르지 않아요!
              </span>
            )}
            {isDuplicateNickname && (
              <span className="input-error-text">
                이미 존재하는 닉네임이에요!
              </span>
            )}
          </div>
        </div>

        <div className="account-group">
          <span className="group-title">이름</span>

          <div className="input-box disabled">
            <div style={{ display: 'flex', flex: '1 1 auto' }}>
              {userInfo?.name}
            </div>

            <span className="input-guide">
              {userInfo?.name.length}/7 (공백포함)
            </span>
          </div>
        </div>

        <div className="account-group">
          <span className="group-title">성별</span>

          <div style={{ display: 'flex', gap: 12 }}>
            {GENDER_TYPE_LIST.map((genderType) => (
              <button
                key={'gender-' + genderType.id}
                className={`option ${genderType.id === gender && 'selected'}`}
                onClick={() => setGender(genderType.id)}
              >
                {genderType.name}
              </button>
            ))}
          </div>
        </div>

        <div className="account-group">
          <span className="group-title">생년월일</span>

          <div style={{ display: 'flex', gap: 12 }}>
            <div className="input-box disabled">{birthDate.getFullYear()}</div>
            <div className="input-box disabled">
              {String(birthDate.getMonth() + 1).padStart(2, '0')}
            </div>
            <div className="input-box disabled">
              {String(birthDate.getDate()).padStart(2, '0')}
            </div>
          </div>
        </div>

        <div className="account-group">
          <span className="group-title">전화번호</span>

          <div className="input-box disabled">
            {userInfo?.phone_number || '-'}
          </div>
        </div>

        {isSocialAccount && (
          <div className="account-group">
            <span className="group-title">계정</span>

            <div
              className="input-box disabled"
              style={{ display: 'flex', alignItems: 'center', gap: 10 }}
            >
              <img
                src={
                  userInfo.platform === 'kakao'
                    ? KakaoIconImage
                    : NaverIconImage
                }
                width={40}
              />

              <span>{userInfo?.email}</span>
            </div>
          </div>
        )}
      </Box>

      {!isSocialAccount && (
        <Box>
          <div className="account-group">
            <span className="group-title">계정</span>

            <div className="input-box disabled">{userInfo?.email}</div>
          </div>

          <ChangePassword onRefresh={refreshMyInfo} />
        </Box>
      )}
    </div>
  );
};

export default Account;
