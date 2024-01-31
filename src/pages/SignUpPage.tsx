import React, { useState, useCallback, useEffect} from "react";
import logo from "../assets/logo.png";
import firstImg from "../assets/first.png";
import axios from "axios";
import * as Styled from '@/styles/SignUpPage'
import Calendar from "@/components/Calendar"; // Calendar 컴포넌트 추가

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
    <Styled.Wrapper>
      <Styled.LogoSection>
        <img src={firstImg} alt="로고 이미지" />
      </Styled.LogoSection>
      <Styled.MainSection>
        <Styled.InputSection>
          <Styled.Intro>
            <img src={logo} alt="로고 이미지" />
            <h3>회원가입</h3>
            <p>새로운 계정을 생성하고 나만의 영상 아카이빙을 시작해요</p>
          </Styled.Intro>
          <Styled.Form onSubmit={onSubmit}>
            <Styled.Label>
              <span>이름</span>
              <Styled.InputBox
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="홍길동"
                onChange={onChangeName}
              ></Styled.InputBox>
            </Styled.Label>
            <Styled.Label>
              <span>생년월일</span>
              <Styled.BirthInputSection>
                <Styled.BirthInputBox
                  type="text"
                  id="year"
                  name="year"
                  value={year}
                  placeholder="YYYY"
                  readOnly
                ></Styled.BirthInputBox>
                <Styled.BirthInputBox
                  type="text"
                  id="month"
                  name="month"
                  value={month}
                  placeholder="MM"
                  readOnly
                ></Styled.BirthInputBox>
                <Styled.BirthInputBox
                  type="text"
                  id="date"
                  name="date"
                  value={date}
                  placeholder="DD"
                  readOnly
                ></Styled.BirthInputBox>
                <Calendar setYear={setYear} setMonth={setMonth} setDate={setDate}/> 
              </Styled.BirthInputSection>
            </Styled.Label>
            <Styled.Label>
              <span>성별</span>
              <Styled.SexSelectBox>
                <Styled.SexButton
                  value="미표기"
                  onClick={handleSexSelect}
                  selected={selectedSex === "미표기"}
                >
                  미표기
                </Styled.SexButton>
                <Styled.SexButton value="남자" onClick={handleSexSelect} selected={selectedSex === "남자"}>
                  남자
                </Styled.SexButton>
                <Styled.SexButton value="여자" onClick={handleSexSelect} selected={selectedSex === "여자"}>
                  여자
                </Styled.SexButton>
              </Styled.SexSelectBox>
            </Styled.Label>
            <Styled.Label>
              <span>전화번호</span>
              <Styled.InputBox
                type="text"
                id="phonenumber"
                name="phonenumber"
                value={phonenumber}
                placeholder="휴대폰 번호 입력 (-제외)"
                onChange={onChangePhonenumber}
              ></Styled.InputBox>
              {!isPhonenumber && <Styled.Error>{errMessage}</Styled.Error>}
            </Styled.Label>
            <Styled.Label>
              <span>이메일 주소</span>
              <Styled.TwoLabel>
              <Styled.EmailInputBox
                type="text"
                id="email"
                name="email"
                value={email}
                placeholder="abcd@email.com"
                onChange={onChangeEmail}
              ></Styled.EmailInputBox>
              {isEmail  ? (
              <Styled.DupSucButton>
              중복 확인하기
              </Styled.DupSucButton>
              ) : (
              <Styled.DupButton type="submit" onClick={onApply}>
               중복 확인하기
              </Styled.DupButton>
              )}
              </Styled.TwoLabel>
              {!isEmail && <Styled.Error>{emailMessage}</Styled.Error>}
            </Styled.Label>
            <Styled.Label>
              <span>비밀번호</span>
              <Styled.InputBox
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChangePassword}
              ></Styled.InputBox>
              {!isPassword && <Styled.Error>{passwordMessage}</Styled.Error>}
            </Styled.Label>
            <Styled.Label>
            <span>비밀번호 재입력</span>
            <Styled.InputBox
              type="password"
              id="passwordCheck"
              name="passwordCheck"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            ></Styled.InputBox>
            {(passwordCheck || passwordCheck === "") && (
              mismatchError ? (
                <Styled.Error>{passwordcheckMessage}</Styled.Error>
              ) : (
                <Styled.PwDiv>{passwordcheckMessage}</Styled.PwDiv>
              )
            )}
          </Styled.Label>
          </Styled.Form>
        </Styled.InputSection>
          <Styled.ButtonSection>
            <Styled.Button type="submit" onClick={onApply}>
              가입하기
            </Styled.Button>
            <Styled.TextTotalComponent>
            <Styled.TextDiv>
             이미 계정이 있으신가요? 
            </Styled.TextDiv>
            <Styled.StyledLink to="/sign-in">로그인</Styled.StyledLink>
            </Styled.TextTotalComponent>
          </Styled.ButtonSection>
        </Styled.MainSection>
    </Styled.Wrapper>
  );
};

export default SignUp;
