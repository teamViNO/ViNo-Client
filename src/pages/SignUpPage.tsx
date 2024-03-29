import { AxiosError } from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { checkEmailAPI, joinAPI } from '@/apis/user';

import LogoIcon from '@/assets/icons/dark-logo.svg?react';
import errorImg from '@/assets/Error.png';
import CloseIcon from '@/assets/icons/close.svg?react';

import Calendar from '@/components/Calendar';
import ImageSlider from '@/components/ImageSlider';
import PhoneCheck from '@/components/PhoneCheck';
import { ValidatePassword, validatePassword } from '@/utils/validation';

import { BlurBackground } from '@/styles/modals/common.style';
import * as SignupPageStyles from '@/styles/signup/SignuppageStyle';

import useCreateToast from '@/hooks/useCreateToast';

const SignUp = () => {
  const [name, setName] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [selectedSex, setSelectedSex] = useState<string>('');
  const [phonenumber, setPhonenumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isCertify, setIsCertify] = useState(false);
  const [emailMessage, setEmailMessage] = useState<string>('');
  const [avaMessage, setAvaMessage] = useState<string>('');
  const [validateNewPassword, setValidateNewPassword] =
    useState<ValidatePassword | null>(null);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validateConfirmPassword, setValidateConfirmPassword] = useState(true);
  // const [mismatchError, setMismatchError] = useState<boolean>(false);
  const [isEmailSuccess, setIsEmailSuccess] = useState(false);

  const [isOpenOverlapModal, setIsOpenOverlapModal] = useState(false);
  const { createToast } = useCreateToast();

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSexSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedSex((e.target as HTMLButtonElement).value);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);
    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('이메일 형식을 다시 확인해주세요');
      setIsEmail(false);
    } else {
      setEmailMessage('');
      setIsEmail(true);
    }
  };

  const id_overlap_check = async () => {
    try {
      const { code } = (await checkEmailAPI({ email })).data;
      console.log(code);
      setAvaMessage('사용 가능한 이메일이에요!');
      setIsEmailSuccess(true);
    } catch (e) {
      if (e instanceof AxiosError) {
        console.log(e.response?.data.code);
        setIsOpenOverlapModal(true);
        setIsEmailSuccess(false);
      }
    }
  };

  const handleChangeNewPassword: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setPassword(value);
    setValidateNewPassword(validatePassword(value));
    setValidateConfirmPassword(value === password);
  };

  const handleChangeConfirmPassword: React.ChangeEventHandler<
    HTMLInputElement
  > = ({ target: { value } }) => {
    setConfirmPassword(value);
    setValidateConfirmPassword(value === password);
  };

  const getHelpStyle = (test: undefined | boolean) => {
    if (test === undefined) return '';
    return test ? 'active' : 'error';
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  const tohome = () => {
    navigate('/');
  };

  const onApply = () => {
    if (
      name &&
      year &&
      month &&
      date &&
      isCertify &&
      selectedSex &&
      email &&
      password &&
      confirmPassword &&
      validateConfirmPassword
    ) {
      // 서버에 데이터 전송
      onRegisterUserInfo();
      navigate('/sign-up/success');
    } else {
      createToast('입력값을 확인해주세요.');
    }
  };

  const onRegisterUserInfo = async () => {
    try {
      const response = (
        await joinAPI({
          name: name,
          email: email,
          password: password,
          check_password: confirmPassword,
          birth_date: [year, month, date].join('-'),
          gender: selectedSex === '미표기' ? null : selectedSex,
          phone_number: phonenumber,
        })
      ).data;
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleOnClick(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  const handleOnClick = () => {
    onApply();
  };

  const getConfirmPasswordStyle = () => {
    if (confirmPassword === '') {
      return { color: '#BBBBBB' };
    } else if (validateConfirmPassword) {
      return { color: '#3681FE' };
    } else {
      return { color: '#FF4A4A' };
    }
  };

  return (
    <SignupPageStyles.Wrapper>
      <SignupPageStyles.LogoSection>
        <ImageSlider />
      </SignupPageStyles.LogoSection>
      <SignupPageStyles.MainSection>
        <SignupPageStyles.InputSection>
          <SignupPageStyles.Intro>
            <LogoIcon onClick={tohome} />
            <h3>회원가입</h3>
            <p>새로운 계정을 생성하고 나만의 영상 아카이빙을 시작해요</p>
          </SignupPageStyles.Intro>
          <SignupPageStyles.Form onSubmit={onSubmit}>
            <SignupPageStyles.Label>
              <span>이름</span>
              <SignupPageStyles.InputBox
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="홍길동"
                onChange={onChangeName}
              ></SignupPageStyles.InputBox>
            </SignupPageStyles.Label>
            <SignupPageStyles.Label>
              <span>생년월일</span>
              <SignupPageStyles.BirthInputSection>
                <SignupPageStyles.BirthInputBox
                  type="text"
                  id="year"
                  name="year"
                  value={year}
                  placeholder="YYYY"
                  readOnly={true}
                ></SignupPageStyles.BirthInputBox>
                <SignupPageStyles.BirthInputBox
                  type="text"
                  id="month"
                  name="month"
                  value={month}
                  placeholder="MM"
                  readOnly={true}
                ></SignupPageStyles.BirthInputBox>
                <SignupPageStyles.BirthInputBox
                  type="text"
                  id="date"
                  name="date"
                  value={date}
                  placeholder="DD"
                  readOnly={true}
                ></SignupPageStyles.BirthInputBox>
                <Calendar
                  setYear={setYear}
                  setMonth={setMonth}
                  setDate={setDate}
                />
              </SignupPageStyles.BirthInputSection>
            </SignupPageStyles.Label>
            <SignupPageStyles.Label>
              <span>성별</span>
              <SignupPageStyles.SexSelectBox>
                <SignupPageStyles.SexButton
                  value="미표기"
                  onClick={handleSexSelect}
                  selected={selectedSex === '미표기'}
                >
                  미표기
                </SignupPageStyles.SexButton>
                <SignupPageStyles.SexButton
                  value="남자"
                  onClick={handleSexSelect}
                  selected={selectedSex === '남자'}
                >
                  남자
                </SignupPageStyles.SexButton>
                <SignupPageStyles.SexButton
                  value="여자"
                  onClick={handleSexSelect}
                  selected={selectedSex === '여자'}
                >
                  여자
                </SignupPageStyles.SexButton>
              </SignupPageStyles.SexSelectBox>
            </SignupPageStyles.Label>
            <SignupPageStyles.Label>
              <PhoneCheck
                tel={phonenumber}
                setTel={setPhonenumber}
                setCheck={setIsCertify}
                type={true}
              />
            </SignupPageStyles.Label>
            <SignupPageStyles.Label>
              <span>이메일 주소</span>
              <SignupPageStyles.TwoLabel>
                <SignupPageStyles.EmailInputBox
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="abcd@email.com"
                  onChange={onChangeEmail}
                  readOnly={isEmailSuccess}
                ></SignupPageStyles.EmailInputBox>
                <SignupPageStyles.DupSucButton
                  id="overlap_button"
                  onClick={id_overlap_check}
                  disabled={!isEmail || isEmailSuccess}
                >
                  중복 확인하기
                </SignupPageStyles.DupSucButton>
              </SignupPageStyles.TwoLabel>
              {!isEmail && (
                <SignupPageStyles.Error>{emailMessage}</SignupPageStyles.Error>
              )}
              <SignupPageStyles.Avail>{avaMessage}</SignupPageStyles.Avail>
            </SignupPageStyles.Label>
            <SignupPageStyles.Label>
              <span>비밀번호</span>
              <SignupPageStyles.InputBox
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChangeNewPassword}
              ></SignupPageStyles.InputBox>
              <div className="input-help">
                <span className={getHelpStyle(validateNewPassword?.LENGTH)}>
                  *8자 이상으로 입력
                </span>

                <span
                  className={getHelpStyle(validateNewPassword?.ALPHA_UPPER)}
                >
                  *대문자 사용
                </span>

                <span className={getHelpStyle(validateNewPassword?.NUMBER)}>
                  *숫자 사용
                </span>

                <span
                  className={getHelpStyle(validateNewPassword?.SPECIAL_CHAR)}
                >
                  *특수문자 사용
                </span>
              </div>
            </SignupPageStyles.Label>
            <SignupPageStyles.Label>
              <span>비밀번호 재입력</span>
              <SignupPageStyles.InputBox
                type="password"
                id="passwordCheck"
                name="passwordCheck"
                value={confirmPassword}
                onChange={handleChangeConfirmPassword}
                onKeyDown={handleOnKeyDown}
              ></SignupPageStyles.InputBox>
              <div className="input-help">
                {validateConfirmPassword ? (
                  <span style={getConfirmPasswordStyle()}>
                    {confirmPassword === ''
                      ? '비밀번호 확인을 위해 다시 한 번 입력해주세요'
                      : '비밀번호가 일치해요!'}
                  </span>
                ) : (
                  <span className="error">
                    비밀번호가 일치하지 않아요 다시 입력해주세요
                  </span>
                )}
              </div>
            </SignupPageStyles.Label>
          </SignupPageStyles.Form>
        </SignupPageStyles.InputSection>
        <SignupPageStyles.ButtonSection>
          {name &&
          year &&
          month &&
          date &&
          selectedSex &&
          isEmail &&
          avaMessage &&
          confirmPassword &&
          validateConfirmPassword ? (
            <SignupPageStyles.SucButton type="submit" onClick={onApply}>
              가입하기
            </SignupPageStyles.SucButton>
          ) : (
            <SignupPageStyles.Button>가입하기</SignupPageStyles.Button>
          )}
          <SignupPageStyles.TextTotalComponent>
            <SignupPageStyles.TextDiv>
              이미 계정이 있으신가요?
            </SignupPageStyles.TextDiv>
            <StyledLink to="/sign-in">로그인</StyledLink>
          </SignupPageStyles.TextTotalComponent>
        </SignupPageStyles.ButtonSection>
      </SignupPageStyles.MainSection>
      {isOpenOverlapModal && (
        <BlurBackground>
          <SignupPageStyles.ModalDiv>
            <CloseIcon
              width={28}
              height={28}
              style={{ alignSelf: 'flex-end', cursor: 'pointer' }}
              onClick={() => setIsOpenOverlapModal(false)}
            />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <img src={errorImg} alt="error" width={56} height={56} />
              <h1 className="title">이미 가입된 이메일</h1>
              <span className="description">
                이미 가입되어있는 이메일 입니다!
              </span>
            </div>

            <SignupPageStyles.RetryButton
              style={{ marginTop: 48 }}
              onClick={() => setIsOpenOverlapModal(false)}
            >
              다시 입력하기
            </SignupPageStyles.RetryButton>
          </SignupPageStyles.ModalDiv>
        </BlurBackground>
      )}
    </SignupPageStyles.Wrapper>
  );
};

export default SignUp;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.gray500};
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 160%;
  margin: 0px 0px 0px 10px;
`;
