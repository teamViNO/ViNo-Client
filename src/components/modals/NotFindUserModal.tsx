import Icon from '@/assets/empty-search.png';
import CloseIcon from '@/assets/icons/close.svg?react';
import React from 'react';
import Container from '@/styles/modals/NotFindUserModal';
import { useNavigate } from 'react-router-dom';

interface NotFindUserModalProp {
    setIsShow: (value: boolean) => void;
    type : boolean;
}
const NotFindUserModal : React.FC<NotFindUserModalProp> = ({setIsShow, type}) => {
    const navigate = useNavigate();
    // type (true => 이메일 찾기 결과 / false => 비밀번호 찾기 결과)

    const handleCloseBtn = () => {
        setIsShow(false);
    }
    const handleJoinBtn = () => {
        navigate('/sign-up')
    }
    const handleReload = () => {
        window.location.reload();
    }

    return (
        <Container>
                <div className="contentWrap">
                    <div className="textContent">
                        <div className='closeWrap'>
                            <CloseIcon width={28} height={28} onClick={handleCloseBtn}/>
                        </div>
                        <img src={Icon}/>
                        <span className='title'>존재하지 않는 회원 정보</span>
                        <div className='subtitleWrap'>
                            <span className='subtitle'>{type ? 
                            "이름 및 전화 번호를 다시 확인해주세요!" :
                            "이메일/이름/전화번호를 다시 확인해주세요!"}
                            </span>
                            <span className='subtitle'>
                            아직 회원이 아니시라면, 회원가입으로 우리와 함께해요!
                            </span>
                        </div>
                    </div>
                    <div className="btnContent">
                        <button className='b_btn' onClick={handleJoinBtn}>회원가입 하기</button>
                        <button className='w_btn' onClick={handleReload}>다시 입력하기</button>
                    </div>
                </div>
        </Container>
    ); 
}   

export default NotFindUserModal;