import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import firstImg from "../assets/first.png";
import calendar from "../assets/calendar.png";
import axios from "axios";
import Calendar from "react-calendar";

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
  const [selectedSex, setSelectedSex] = useState<string | undefined>();

  const [name, setName] = useState<string>("");
  const [phonenumber, setPhonenumber] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [mismatchError, setMismatchError] = useState<boolean>(false);

  const [isPhonenumber, setIsPhonenumber] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean | string>("");

  const [emailMessage, setEmailMessage] = useState<string>("");
  const [passwordMessage, setPasswordMessage] = useState<string>("*8자 이상으로 입력 *대문자 사용 *숫자 사용 *특수문자 사용");
  const [passwordcheckMessage, setPasswordCheckMessage] = useState<string>("비밀번호 확인을 위해 다시 한 번 입력해주세요");
  const [errMessage, setErrMessage] = useState('');

  const handleSexSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e)
    e.preventDefault();
    setSelectedSex((e.target as HTMLButtonElement).value);
  };

  useEffect(() => {
    console.log(selectedSex);
  }, [selectedSex]);

  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log(name);
  }, []);

  const onChangeYear = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
    console.log(year);
  }, []);

  const onChangeMonth = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMonth(e.target.value);
      console.log(month);
    },
    []
  );

  const onChangeDate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDate(e.target.value);
      console.log(date);
    },
    []
  );

  const onChangePhonenumber = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const phonenumberRegex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
      const phonenumberCurrent = e.target.value;
      setPhonenumber(e.target.value);
      console.log(phonenumber);
      setPhonenumber(phonenumberCurrent);
      if (!phonenumberRegex.test(phonenumberCurrent)) {
        setErrMessage('올바른 전화번호 형식이 아닙니다.');
        setIsPhonenumber(false);
      } else {
        setErrMessage('');
        setIsPhonenumber(true);
      }
    },
    [phonenumber],
  );

  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);
    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식을 다시 확인해주세요");
      setIsEmail(false);
    } else {
      setEmailMessage("");
      setIsEmail(true);
    }
    console.log(email);
  }, []);

 /* //이메일 중복검사
   
    function checkEmail(): void {
    const email: string = $('#email').val() as string; // email 값은 "id"인 입력란의 값을 저장

    $.ajax({
        url: '/email/emailCheckProcess', // Controller에서 요청 받을 주소
        type: 'POST', // POST 방식으로 전달
        data: {
            "email": email
        },

        success: function(cnt: number): void { // 컨트롤러에서 넘어온 cnt 값을 받는다
            if (cnt === 0) { // cnt가 1이 아니면(0일 경우) -> 사용 가능한 아이디
                $("#vaildEmail").text("사용할 수 있는 아이디 입니다.").css("color", "green");
                console.log(email);
            } else { // cnt가 1일 경우 -> 이미 존재하는 아이디
                $("#vaildEmail").text("이미 존재하는 이메일 입니다.").css("color", "red");
                alert("아이디를 다시 입력해주세요");
                $('#email').val('');
            }
        }
    });
}*/

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordRegex = /^[A-Za-z0-9]{8,16}$/;
      const passwordCurrent = e.target.value;
      setPassword(passwordCurrent);
      if (!passwordRegex.test(passwordCurrent)) {
        setPasswordMessage("*8자 이상으로 입력 *대문자 사용 *숫자 사용 *특수문자 사용");
        setIsPassword(false);
      } else {
        setPasswordMessage("");
        setIsPassword(true);
      }
    },
    [passwordCheck]
  );

  const onChangePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordCheck(e.target.value);
      if (e.target.value === "") {
        setPasswordCheckMessage("비밀번호를 재입력해주세요");
      } else if (password && e.target.value !== password) {
        setMismatchError(true);
        setPasswordCheckMessage("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
      } else {
        setMismatchError(false);
        setPasswordCheckMessage("비밀번호가 일치합니다.");
      }
      //setMismatchError(e.target.value !== password);
      console.log(passwordCheck);
    },
    [password]
  );

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(email, password, passwordCheck, name, phonenumber);
      if (!mismatchError) {
        console.log("서버로 회원가입하기");
      }
    },
    [email, password, passwordCheck, name, phonenumber, mismatchError]
  );

  const onApply = () => {
    if (phonenumber && email && password && passwordCheck && !mismatchError) {
      // 서버에 데이터 전송
      onRegisterUserInfo();
      console.log("유저 정보 등록 완료");
      if (name && selectedSex && year && month && date) {
        onRegisterPetInfo();
      }
      console.log("정보 등록 완료");
      // navigate("/signedup");
    } else {
      alert("입력값을 확인해주세요.");
    }
  };

  const onRegisterUserInfo = async () => {
    try {
      const res = await axios.post(
        "",
        {
          email: email,
          password: password,
          name: phonenumber,
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const onRegisterPetInfo = async () => {
    try {
      const res = await axios.post(
        "",
        {
          name: name,
          birth: year + ":" + month + ":" + date,
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <LogoSection>
        <img src={firstImg} alt="로고 이미지" />
      </LogoSection>
      <MainSection>
        <InputSection>
          <Intro>
            <img src={logo} alt="로고 이미지" />
            <h3>회원가입</h3>
            <p>새로운 계정을 생성하고 나만의 영상 아카이빙을 시작해요</p>
          </Intro>
          <Form onSubmit={onSubmit}>
            <Label>
              <span>이름</span>
              <InputBox
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="홍길동"
                onChange={onChangeName}
              ></InputBox>
            </Label>
            <Label>
              <span>생년월일</span>
              <BirthInputSection>
                <BirthInputBox
                  type="text"
                  id="year"
                  name="year"
                  value={year}
                  placeholder="YYYY"
                  onChange={onChangeYear}
                  readOnly
                ></BirthInputBox>
                <BirthInputBox
                  type="text"
                  id="month"
                  name="month"
                  value={month}
                  placeholder="MM"
                  onChange={onChangeMonth}
                  readOnly
                ></BirthInputBox>
                <BirthInputBox
                  type="text"
                  id="date"
                  name="date"
                  value={date}
                  placeholder="DD"
                  onChange={onChangeDate}
                  readOnly
                ></BirthInputBox>
                <CalendarContainer><Calendar/></CalendarContainer>
                
                <img src={calendar} alt="달력 이미지" />
              </BirthInputSection>
            </Label>
            <Label>
              <span>성별</span>
              <SexSelectBox>
                <SexButton
                  value="미표기"
                  onClick={handleSexSelect}
                  selected={selectedSex === "미표기"}
                >
                  미표기
                </SexButton>
                <SexButton value="남자" onClick={handleSexSelect} selected={selectedSex === "남자"}>
                  남자
                </SexButton>
                <SexButton value="여자" onClick={handleSexSelect} selected={selectedSex === "여자"}>
                  여자
                </SexButton>
              </SexSelectBox>
            </Label>
            <Label>
              <span>전화번호</span>
              <InputBox
                type="text"
                id="phonenumber"
                name="phonenumber"
                value={phonenumber}
                placeholder="휴대폰 번호 입력 (-제외)"
                onChange={onChangePhonenumber}
              ></InputBox>
              {!isPhonenumber && <Error>{errMessage}</Error>}
            </Label>
            <Label>
              <span>이메일 주소</span>
              <TwoLabel>
              <EmailInputBox
                type="text"
                id="email"
                name="email"
                value={email}
                placeholder="abcd@email.com"
                onChange={onChangeEmail}
              ></EmailInputBox>
              {isEmail  ? (
              <DupSucButton>
              중복 확인하기
              </DupSucButton>
              ) : (
              <DupButton type="submit" onClick={onApply}>
               중복 확인하기
              </DupButton>
              )}
              </TwoLabel>
              {!isEmail && <Error>{emailMessage}</Error>}
            </Label>
            <Label>
              <span>비밀번호</span>
              <InputBox
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChangePassword}
              ></InputBox>
              {!isPassword && <Error>{passwordMessage}</Error>}
            </Label>
            <Label>
            <span>비밀번호 재입력</span>
            <InputBox
              type="password"
              id="passwordCheck"
              name="passwordCheck"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            ></InputBox>
            {(passwordCheck || passwordCheck === "") && (
              mismatchError ? (
                <Error>{passwordcheckMessage}</Error>
              ) : (
                <PwDiv>{passwordcheckMessage}</PwDiv>
              )
            )}
          </Label>
          </Form>
        </InputSection>
          <ButtonSection>
            <Button type="submit" onClick={onApply}>
              가입하기
            </Button>
            <TextTotalComponent>
            <TextDiv>
             이미 계정이 있으신가요? 
            </TextDiv>
            <StyledLink to="/sign-in">로그인</StyledLink>
            </TextTotalComponent>
          </ButtonSection>
        </MainSection>
    </Wrapper>
  );
};

export default SignUp;

const CalendarContainer =  styled.div`
  position : absolute;
  border : 1px solid black;
  width : 494px;
  .react-datepicker {
    /* !importan는 CSS의 우선순위를 높여주는 키워드입니다 */
    border: 1px solid white !important;
    box-shadow: 2.5px 2.5px 2.5px 2.5px #0000001a;
    .react-datepicker__month-container {
        .react-datepicker__header {
            background-color: white;
            border: none;
        }
        .react-datepicker__day-name {
            margin: 0px 7px 0px 7px;
        }
        .react-datepicker__month {
            .react-datepicker__day {
                margin: 5px 7px 5px 7px;
                &:hover {
                    border-radius: 18px;
                    background-color: #fff2b4;
                }
            }
            .react-datepicker__day--today,
            .react-datepicker__day--keyboard-selected {
                border-radius: 18px;
                background-color: #fff2b4;
                font-weight: 400;
            }
            .react-datepicker__day--selected,
            .react-datepicker__day--in-range,
            .react-datepicker__day--in-selecting-range {
                border-radius: 18px;
                background-color: #ffe457;
                color: black;
            }
        }
    }
}

.react-datepicker__aria-live,
.react-datepicker__time-list-item--disabled,
.react-datepicker-time__header {
    display: none;
}

.react-datepicker__time-container {
    overflow-y: scroll;
    height: 100px;
    cursor: pointer;
}
.react-datepicker__input-container > input,
.react-datepicker__time-container {
    width: 80px;
    background-color: #f9f9f9;
    outline: none;
    text-align: center;
    overflow-x: hidden;
}
.react-datepicker__time-list-item--selected {
    background-color: #fff2b4 !important;
    color: black !important;
}
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1440px;
  width: 100%;
  min-height: 100vh;
  gap: 124px;
`;

const LogoSection = styled.div`
  img{
    display: flex;
    width: auto;
    height: 840px;
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 580px;
  height: 896px;
  margin-top: 128px;
`;
const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 580px;
  height: auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb{
    height: 200px;
    background-color:#f3f3f3;
    border-radius: 100px;
  }
  &::-webkit-scrollbar-track{
    background-color:#ffffff;
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  img {
    width: 64.55px;
    height: 20px;
    margin-bottom: 4px;
  }
  h3 {
    color: #1e1e1e;
    font-family: Pretendard;
    font-size: 36px;
    font-weight: bold;
    line-height: 160%;
    margin: 0;
  }
  p {
    color: #bbb;
    font-size: 16px;
    font-weight: 500;
    margin-top: 8px;
    line-height: 160%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 494px;
  height: auto;
  margin-bottom: 24px;
`;

const Label = styled.label`
  margin-bottom: 40px;
  span {
    font-size: 16px;
    color: #787878;
    font-family: Pretendard;
    margin-bottom: 8px;
    font-weight: 500;
    line-height: 160%;
  }
`;

const TwoLabel = styled.label`
  display: flex;
  flex-direction: row;
`;

const InputBox = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 494px;
  height: 56px;
  padding: 0px 0px 0px 20px;
  gap: 20px;
  flex: 1 0 0;
  font-size: 16px;
  font-style: normal;
  color: var(--Main, #1E1E1E);
  font-family: Pretendard;
  font-weight: 500;
  line-height: 160%;
  border-radius: 12px;
  border: 1.5px solid var(--gray-200, #e8e8e8);
  margin-top: 8px;
  outline: none;
  &:hover {
    border: 1.5px solid #1e1e1e;
  }
  &:focus {
    border: 1.5px solid #1e1e1e;
    border-color: #1e1e1e;
  }
  &::placeholder {
    color: #bbb;

    /* Body1 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 25.6px */
  }
`;

const EmailInputBox = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 326px;
  height: 56px;
  padding: 0px 0px 0px 20px;
  gap: 20px;
  flex: 1 0 0;
  font-size: 16px;
  font-style: normal;
  color: var(--Main, #1E1E1E);
  font-family: Pretendard;
  font-weight: 500;
  line-height: 160%;
  border-radius: 12px;
  border: 1.5px solid var(--gray-200, #e8e8e8) ;
  margin-top: 8px;
  outline: none;
  &:hover {
    border: 1.5px solid #1e1e1e;
  }
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #bbb;

    /* Body1 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 25.6px */
  }
`;

const BirthInputSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  img {
    width: 56px;
    height: 56px;
  }
`;

const BirthInputBox = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 138px;
  height: 56px;
  padding: 24px 20px;
  gap: 20px;
  flex: 1 0 0;
  font-size: 16px;
  font-style: normal;
  color: var(--Main, #1E1E1E);
  font-family: Pretendard;
  font-weight: 500;
  line-height: 160%;
  margin-right: 8px;
  border-radius: 12px;
  border: 1.5px solid #e8e8e8;
  color: var(--Main, #1E1E1E);
  background: #fff;
  outline : none;
  cursor: default;
  &::placeholder {
    color: #bbb;

    /* Body1 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 25.6px */
  }
  & :hover {
    
  }
`;


const SexSelectBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

const SexButton = styled.button<{ selected: boolean }>`
  width: 158px;
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1.5px solid #e8e8e8;
  background: #fff;
  color: #787878;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 160%;
  margin-right: 10px;
  ${(props) => props.selected &&
    `
      background: #1e1e1e;
      color: #fff;
      border: none;
    `}
`;


const Error = styled.p`
  color: #eb5353;
  font-size: 14px;
  font-weight: 500;
  margin-top: 8px;
  padding-left: 16px;
  line-height: 160%;
`;

const ButtonSection = styled.div`
  width: 494px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 24px 0px 52px 0px;
`;

const Button = styled.button`
  border-radius: 12px;
  background: #f3f3f3;
  color: #bbb;
  display: flex;
  width: 494px;
  height: 56px;
  font-size: 16px;
  font-weight: 500;
  font-family: Pretendard;
  padding: 16px 24px;
  line-height: 160%;
  justify-content: center;
  align-items: center;
  border: none;
`;

const DupSucButton = styled.button`
  border-radius: 12px;
  background: #E9FF3F;
  color: #1E1E1E;
  display: flex;
  margin-top: 8px;
  margin-left: 8px;
  width: 160px;
  height: 56px;
  font-size: 16px;
  font-weight: 500;
  font-family: Pretendard;
  padding: 16px 24px;
  line-height: 160%;
  justify-content: center;
  align-items: center;
  border: none;
`;

const DupButton = styled.button`
  border-radius: 12px;
  background: #f3f3f3;
  color: #bbb;
  display: flex;
  margin-top: 8px;
  margin-left: 8px;
  width: 160px;
  height: 56px;
  font-size: 16px;
  font-weight: 500;
  font-family: Pretendard;
  padding: 16px 24px;
  line-height: 160%;
  justify-content: center;
  align-items: center;
  border: none;
`;

const PwDiv = styled.div`
   font-size: 14px;
   margin-top: 8px;
   color:#3681FE;
   font-weight: 500;
   line-height: 160%;
   padding-left: 16px;
`;


const TextTotalComponent = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0px 0px 0px;
`;

const TextDiv = styled.div`
   font-size: 14px;
   color:#BBB;
   font-weight: 500;
   line-height: 160%;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.gray500};
  text-align: center;
  text-decoration: none;
  font-size: 14px; 
  font-weight: 500;
  line-height: 160%;
  margin : 0px 0px 0px 10px;
`;