import React, { useState, useEffect } from "react";
import { sendSMSAPI, checkSMSAPI, sendSMSFindAPI } from '@/apis/sms';
import Container from '@/styles/PhoneCheck';
import { AxiosError } from "axios";


interface PhoneCheckProps {
    setCheck : (value: boolean) => void;
    tel : string;
    setTel : (value : string) => void;
    type : boolean; // true : 회원가입  false : 이메일 비밀번호 찾기 페이지
}

const PhoneCheck : React.FC<PhoneCheckProps> = ({setCheck, tel, setTel, type}) => {
    const [certifyNum, setCertifyNum] = useState('');
    const [token, setToken] = useState('');

    const [time, setTime] = useState(5 * 60); // 초 단위
    const [isCheck, SetIsCheck] = useState(false);
    const [isSend, setIsSend] = useState(false);
    const [isCertify, setIsCertify] = useState(false);    
    const [isTel, setIsTel] = useState(false);
    const [isTimer, setIsTimer] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [phoneCertify, setPhoneCertify] = useState(false);
    
    useEffect(() => {
            if (isTimer) {
            const intervalId = setInterval(() => {
                setTime(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(intervalId);
                    setIsTimer(false);
                    return 0;
                } else {
                    return prevTime - 1;
                }
                });
            }, 1000);
        
            return () => clearInterval(intervalId);
            }
      }, [isTimer]);

      const onChangeCertifyInput = (e : React.ChangeEvent<HTMLInputElement>) => {
            const certifyRegex = /^\d{7}$/;
            setCertifyNum(e.target.value);
            if(certifyRegex.test(e.target.value)){
            setIsCertify(true);
            } else {
            setIsCertify(false);
            }
      }
      const onChangeTel =  (e: React.ChangeEvent<HTMLInputElement>) => {
            const telRegex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
            const telCurrent = e.target.value;
            setTel(telCurrent);

            if (!telRegex.test(telCurrent)) {
                setIsTel(false);
            } else {
                setIsTel(true);
            }
    }
      
      const handleCheckCertify = async () => {
            setIsTimer(false);
            SetIsCheck(true);
            try{
                const {data} = (await checkSMSAPI({
                    verification_code : Number(certifyNum),
                    }, token));

                    if(data.success){
                        setIsSuccess(true);
                        setCheck(true);
                    } else {
                        setIsSuccess(false);
                    }
            } catch(e){
                setIsSuccess(false)
            }
      }

      const handleCertifyNum = async () => {
            if(isSend){
                SetIsCheck(false);
                setTime(5*60);
            }
            try{
                const {data} = type === true ? (await sendSMSAPI({
                    phone_number : tel
                    })) : (await sendSMSFindAPI({
                        phone_number : tel
                    }));
                
                    if(data.success){
                        setIsSend(true)
                        setIsTimer(true);
                        setPhoneCertify(false);
                        setToken(data.result.token);
                    }
            } catch(e){
                const err = e as AxiosError;
                if(err.response?.status === 400)
                    setPhoneCertify(true);
            }
            
      }
    
    const minutes = Math.floor(time / 60); // 분
    const seconds = time % 60; 
    
    return(
        <Container>
            <div className="label">전화번호</div>
                    <div className="inputwrap">
                    <input
                      type="text"
                      id="tel"
                      name="tel"
                      value={tel}
                      placeholder="휴대폰 번호 입력 (-제외)"
                      onChange={onChangeTel}
                      style={{width : '326px'}}
                      readOnly={isSuccess}
                    />
                    <button onClick = {handleCertifyNum} disabled = {!isTel || isSuccess}>{isSend? '인증번호 재전송':'인증번호 전송'}</button>
                    </div>
            {phoneCertify && <span className="msg">전화번호가 중복되었습니다.</span>}
            {isSend ? <div className="inputwrap">
                      <input
                      type='text'
                      id='certify'
                      value={certifyNum}
                      placeholder='인증번호 입력'
                      onChange={(e) => onChangeCertifyInput(e)}
                      style={{width : '326px'}}
                      readOnly={isSuccess}/>
                      <button onClick = {handleCheckCertify} disabled = {time <= 0 || !isCertify || isSuccess}>인증번호 확인</button>
                    </div>: ''}
                    {isSend && (isCheck === false) && <span className="msg">인증번호가 발송되었어요 (유효시간 {minutes}:{seconds})</span>}
                    {isCheck === true && <span className="msg" style={{color : isSuccess ? '#3681FE' : '#FF3A4A'}}>{isSuccess ? '인증되었습니다' : '인증번호를 다시 확인해주세요'}</span>}
        </Container>
    );
}

export default PhoneCheck;
