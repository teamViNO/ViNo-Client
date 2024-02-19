import React, { useState } from 'react';
import styled from 'styled-components';
import * as SignupPageStyles from '@/styles/signup/SignuppageStyle';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import errorImg from '@/assets/Error.png';
import CloseIcon from '@/assets/icons/close.svg?react';
import { AxiosError } from 'axios';
import { checkEmailAPI, joinAPI } from '@/apis/user';

import { BlurBackground } from '@/styles/modals/common.style';
import Calendar from '@/components/Calendar';
import ImageSlider from '@/components/ImageSlider';
import PhoneCheck from '@/components/PhoneCheck';
import { Link } from 'react-router-dom';
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
  const [passwordCheck, setPasswordCheck] = useState<string>('');

  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean | string>('');
  const [isCertify, setIsCertify] = useState(false);
  const [emailMessage, setEmailMessage] = useState<string>('');
  const [avaMessage, setAvaMessage] = useState<string>('');
  const [passwordMessage, setPasswordMessage] = useState<string>(
    '*8자 이상으로 입력 *대문자 사용 *숫자 사용 *특수문자 사용',
  );
  const [passwordcheckMessage, setPasswordCheckMessage] = useState<string>(
    '비밀번호 확인을 위해 다시 한 번 입력해주세요',
  );
  const [mismatchError, setMismatchError] = useState<boolean>(false);
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

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        '*8자 이상으로 입력 *대문자 사용 *숫자 사용 *특수문자 사용',
      );
      setIsPassword(false);
    } else {
      setPasswordMessage('');
      setIsPassword(true);
    }
  };

  const onChangePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
    if (e.target.value === '') {
      setPasswordCheckMessage('비밀번호를 재입력해주세요');
    } else if (password && e.target.value !== password) {
      setMismatchError(true);
      setPasswordCheckMessage(
        '비밀번호가 일치하지 않습니다. 다시 확인해주세요.',
      );
    } else {
      setMismatchError(false);
      setPasswordCheckMessage('비밀번호가 일치합니다.');
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const navigate = useNavigate();
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
      passwordCheck &&
      !mismatchError
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
          check_password: passwordCheck,
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

  return (
    <SignupPageStyles.Wrapper>
      <SignupPageStyles.LogoSection>
        <ImageSlider />
      </SignupPageStyles.LogoSection>
      <SignupPageStyles.MainSection>
        <SignupPageStyles.InputSection>
          <SignupPageStyles.Intro>
            <img src={logo} alt="로고 이미지" />
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
                onChange={onChangePassword}
              ></SignupPageStyles.InputBox>
              {!isPassword && (
                <SignupPageStyles.Error>
                  {passwordMessage}
                </SignupPageStyles.Error>
              )}
            </SignupPageStyles.Label>
            <SignupPageStyles.Label>
              <span>비밀번호 재입력</span>
              <SignupPageStyles.InputBox
                type="password"
                id="passwordCheck"
                name="passwordCheck"
                value={passwordCheck}
                onChange={onChangePasswordCheck}
              ></SignupPageStyles.InputBox>
              {(passwordCheck || passwordCheck === '') &&
                (mismatchError ? (
                  <SignupPageStyles.Error>
                    {passwordcheckMessage}
                  </SignupPageStyles.Error>
                ) : (
                  <SignupPageStyles.PwDiv>
                    {passwordcheckMessage}
                  </SignupPageStyles.PwDiv>
                ))}
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
          isPassword &&
          passwordCheck &&
          !mismatchError ? (
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
