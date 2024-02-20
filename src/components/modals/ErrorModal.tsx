import { useSetRecoilState } from 'recoil';
import { errorModalState } from '@/stores/modal';
import useOutsideClick from '@/hooks/useOutsideClick';

import CloseIcon from '@/assets/icons/close.svg?react';
import errorImg from '@/assets/Error.png';
import { ErrorModalContainer } from '@/styles/modals/ErrorModal.style';

const ErrorModal = () => {
    const setIsOpenModal = useSetRecoilState(errorModalState);
    const [modalRef] = useOutsideClick<HTMLDivElement>(() =>
        setIsOpenModal(false),
    );

    return (
        <ErrorModalContainer>
            <div className="container" ref={modalRef}>
                <div className='wrapper'>
                    <div className="close-btn" onClick={() => setIsOpenModal(false)}>
                        <CloseIcon width={28} height={28} />
                    </div>

                    <div className='main'>
                        <div className='modal-main'>
                            <img src={errorImg} alt='errorImg' width={56} height={56}></img>
                            <h2>영상 업로드 중 오류</h2>
                        </div>
                        <h4>업로드 중 알 수 없는 오류가 발생했어요<br />다시 시도해주세요</h4>
                    </div>
                </div>
                <button className='restart-btn' onClick={() => setIsOpenModal(false)}>
                    다시 입력하기
                </button>
            </div>
        </ErrorModalContainer>
    );
};

export default ErrorModal;