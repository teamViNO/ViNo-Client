import React from "react"
import MailPng from '@/assets/mail.png';
import Container from "@/styles/FindEmail";
import { useNavigate } from "react-router-dom";

interface FindEmailProp {
    email : string;
}

const FindPassword : React.FC<FindEmailProp> = ({email}) => {
    const navigate = useNavigate();

    const handleLoginBtn = () => {
        navigate('/sign-in');
    }
    return(
        <Container>
            <div className="wrapper">
                <div style={{gap : '15px'}}>
                    <img src={MailPng}/>
                    <center><span className="result">{email}로 <br /> 회원님의 임시 비밀번호를 전송하였습니다!</span></center>
                    <span className="tool">로그인하고 나만의 영상 아카이빙을 시작해요</span>
                </div>
                <div style={{gap : '10px'}}>
                    <button style={{backgroundColor : '#1E1E1E', color : '#FFFFFF'}} onClick={handleLoginBtn}>로그인 하러가기</button>
                </div>
            </div>
        </Container>
    );
}

export default FindPassword;