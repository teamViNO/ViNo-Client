import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as SignupPageStyles from '@/styles/signup/SignuppageStyle';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import firstImg from '../assets/first.png';
import errorImg from '@/assets/Error.png';
import calendar from '../assets/calendar.png';
import CloseIcon from '@/assets/icons/close.svg?react';
import axios, { AxiosError } from 'axios';
import { checkEmailAPI } from '@/apis/user';

import { BlurBackground } from '@/styles/modals/common.style';

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
  const [selectedSex, setSelectedSex] = useState<string | undefined>();
  const [name, setName] = useState<string>('');
  const [phonenumber, setPhonenumber] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [mismatchError, setMismatchError] = useState<boolean>(false);

  const [isPhonenumber, setIsPhonenumber] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean | string>('');

  const [emailMessage, setEmailMessage] = useState<string>('');
  const [avaMessage, setAvaMessage] = useState<string>('');
  const [passwordMessage, setPasswordMessage] = useState<string>(
    '*8자 이상으로 입력 *대문자 사용 *숫자 사용 *특수문자 사용',
  );
  const [passwordcheckMessage, setPasswordCheckMessage] = useState<string>(
    '비밀번호 확인을 위해 다시 한 번 입력해주세요',
  );
  const [errMessage, setErrMessage] = useState('');

  const [isOpenOverlapModal, setIsOpenOverlapModal] = useState(false);

  const handleSexSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    e.preventDefault();
    setSelectedSex((e.target as HTMLButtonElement).value);
  };

  useEffect(() => {
    console.log(selectedSex);
  }, [selectedSex]);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log(name);
  };

  const onChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
    console.log(year);
  };

  const onChangeMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(e.target.value);
    console.log(month);
  };

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    console.log(date);
  };

  const onChangePhonenumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phonenumberRegex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    const phonenumberCurrent = e.target.value;
    setPhonenumber(phonenumberCurrent);
    console.log(phonenumber);
    if (!phonenumberRegex.test(phonenumberCurrent)) {
      setErrMessage('올바른 전화번호 형식이 아닙니다.');
      setIsPhonenumber(false);
    } else {
      setErrMessage('');
      setIsPhonenumber(true);
    }
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
    console.log(email);
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
    console.log(passwordCheck);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      name,
      year,
      month,
      date,
      selectedSex,
      phonenumber,
      email,
      password,
      passwordCheck,
    );
    if (!mismatchError) {
      console.log('서버로 회원가입하기');
    }
  };

  const id_overlap_check: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    try {
      const { code } = (await checkEmailAPI({ email })).data;
      console.log(code);
      setAvaMessage('사용 가능한 이메일이에요!');
    } catch (e) {
      if (e instanceof AxiosError) {
        console.log(e.response?.data.code);
        setIsOpenOverlapModal(true);
      }
    }
  };

  const navigate = useNavigate();
  const onApply = () => {
    if (
      name &&
      year &&
      month &&
      date &&
      selectedSex &&
      phonenumber &&
      email &&
      password &&
      passwordCheck &&
      !mismatchError
    ) {
      // 서버에 데이터 전송
      onRegisterUserInfo();
      console.log('정보 등록 완료');
      navigate('/sign-up/success');
    } else {
      alert('입력값을 확인해주세요.');
    }
  };

  const onRegisterUserInfo = async () => {
    try {
      const res = await axios.post('', {
        name: name,
        birth: year + ':' + month + ':' + date,
        email: email,
        password: password,
        phonenumber: phonenumber,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SignupPageStyles.Wrapper>
      <SignupPageStyles.LogoSection>
        <img src={firstImg} alt="로고 이미지" />
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
                  onChange={onChangeYear}
                ></SignupPageStyles.BirthInputBox>
                <SignupPageStyles.BirthInputBox
                  type="text"
                  id="month"
                  name="month"
                  value={month}
                  placeholder="MM"
                  onChange={onChangeMonth}
                ></SignupPageStyles.BirthInputBox>
                <SignupPageStyles.BirthInputBox
                  type="text"
                  id="date"
                  name="date"
                  value={date}
                  placeholder="DD"
                  onChange={onChangeDate}
                ></SignupPageStyles.BirthInputBox>
                <img src={calendar} alt="달력 이미지" />
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
              <span>전화번호</span>
              <SignupPageStyles.InputBox
                type="text"
                id="phonenumber"
                name="phonenumber"
                value={phonenumber}
                placeholder="휴대폰 번호 입력 (-제외)"
                onChange={onChangePhonenumber}
              ></SignupPageStyles.InputBox>
              {!isPhonenumber && (
                <SignupPageStyles.Error>{errMessage}</SignupPageStyles.Error>
              )}
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
                ></SignupPageStyles.EmailInputBox>
                {isEmail ? (
                  <SignupPageStyles.DupSucButton
                    id="overlap_button"
                    onClick={id_overlap_check}
                  >
                    중복 확인하기
                  </SignupPageStyles.DupSucButton>
                ) : (
                  <SignupPageStyles.DupButton>
                    중복 확인하기
                  </SignupPageStyles.DupButton>
                )}
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
          isPhonenumber &&
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
