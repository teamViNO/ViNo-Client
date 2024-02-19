import styled from 'styled-components';
import theme from '@/styles/theme';
import React, { useState } from 'react';
import { getMyInfoAPI, nickNameAPI } from '@/apis/user';
import nameImg from '@/assets/name.png';
import { BlurBackground } from '@/styles/modals/common.style';
import { userInfoState } from '@/stores/user';
import { useSetRecoilState } from 'recoil';
import useCreateToast from '@/hooks/useCreateToast';

const NicknameModal = () => {
  const [inputCount, setInputCount] = useState(0);
  const [name, setName] = useState<string>('');
  const { createToast } = useCreateToast();

  const setUserInfo = useSetRecoilState(userInfoState);

  const refreshMyInfo = async () => {
    try {
      const { result } = (await getMyInfoAPI()).data;

      setUserInfo(result);
    } catch (e) {
      console.error(e);
    }
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (target.value.length > 7) {
      target.value = target.value.slice(0, 7);
    }
    setName(target.value);
    setInputCount(
      target.value.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, '$&$1$2').length,
    );
    setInputCount(target.value.length);
  };

  const onApply = () => {
    if (name) {
      // 서버에 데이터 전송
      onRegisterNicknameInfo();
    } else {
      createToast('입력값을 확인해주세요.');
    }
  };

  const onRegisterNicknameInfo = async () => {
    try {
      const response = (
        await nickNameAPI({
          nick_name: name,
        })
      ).data;
      refreshMyInfo();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BlurBackground>
      <ModalDiv>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <img src={nameImg} alt="signup" width={56} height={56} />
          <h1 className="title">어떤 이름으로 불러드릴까요?</h1>
          <span className="description">
            vino에 오신걸 환영합니다! 원하시는 이름으로 불러드릴게요
          </span>
        </div>

        <TextDiv className="text_box">
          <InputBox
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="원하시는 닉네임을 작성해주세요"
            onChange={onChangeName}
            maxLength={7}
          ></InputBox>
          <InputNickNameMessage>
            <InputNickNameLength>{inputCount}</InputNickNameLength>
            /7(공백포함)
          </InputNickNameMessage>
        </TextDiv>
        {name ? (
          <SucButton type="submit" onClick={onApply} style={{ marginTop: 12 }}>
            등록하기
          </SucButton>
        ) : (
          <Button style={{ marginTop: 12 }}>등록하기</Button>
        )}
      </ModalDiv>
    </BlurBackground>
  );
};

export default NicknameModal;

const ModalDiv = styled.div`
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  border-radius: 20px;
  background: ${(props) => props.theme.color.white};
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.1);

  & h1.title {
    color: ${(props) => props.theme.color.gray500};
    ${(props) => props.theme.typography.Header6};
  }

  & span.description {
    color: ${(props) => props.theme.color.gray300};
    ${(props) => props.theme.typography.Body1};
  }
`;

const InputBox = styled.input`
  width: 202px;
  height: 56px;
  background-color: #f3f3f3;
  padding: 0px 0px 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex: 1 0 0;
  font-style: normal;
  border: none;
  border-radius: 12px;
  color: var(--Main, #1e1e1e);
  font-family: Pretendard;
  ${theme.typography.Body1};
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #bbb;
    ${theme.typography.Body1};
  }
`;

const SucButton = styled.button`
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 12px;
  background-color: #1e1e1e;
  color: #fff;
  text-align: center;
  ${theme.typography.Body1};
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 12px;
  background-color: #f3f3f3;
  color: #bbbbbb;
  text-align: center;
  ${theme.typography.Body1};
`;

const InputNickNameMessage = styled.span`
  ${theme.typography.Caption1};
  color: ${theme.color.gray300};
  padding: 0px 20px 0px 0px;
`;

const InputNickNameLength = styled.span`
  color: ${({ theme }) => theme.color.gray300};
`;

const TextDiv = styled.div`
  position: relative;
  width: 600px;
  height: 56px;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  margin-top: 48px;
`;
