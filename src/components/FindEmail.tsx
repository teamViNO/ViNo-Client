import React from "react"
import MailPng from '@/assets/mail.png';
import Container from "@/styles/FindEmail";
import { useNavigate } from "react-router-dom";

interface FindEmailProp {
    userName : string;
    email : string;
}

const FindEmail : React.FC<FindEmailProp> = ({userName, email}) => {
    const navigate = useNavigate();

    const handleLoginBtn = () => {
        navigate('/sign-in');
    }
    const handlePwdBtn = () => {
        navigate('/find-password');
    }
    return(
        <Container>
            <div className="wrapper">
                <div style={{gap : '15px'}}>
                    <img src={MailPng}/>
                    <span className="result">{userName}님의 이메일은 {email}입니다!</span>
                    <span className="tool">로그인하고 나만의 영상 아카이빙을 시작해요</span>
                </div>
                <div style={{gap : '10px'}}>
                    <button style={{backgroundColor : '#1E1E1E', color : '#FFFFFF'}} onClick={handleLoginBtn}>로그인 하러가기</button>
                    <button style={{backgroundColor : '#FFFFFF', color : '#787878', border : '1.5px solid #E8E8E8'}} onClick={handlePwdBtn}>비밀번호 찾기</button>
                </div>
            </div>
        </Container>
    );
}

export default FindEmail;