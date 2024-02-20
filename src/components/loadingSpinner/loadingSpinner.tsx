import { useEffect } from 'react';
import Spinner from '@/assets/spinner.gif';
import Container from '@/styles/loadingSpinner';

interface LoadingSpinnerProps {
    isCroll : boolean;
    setLoading : (value : boolean) => void;
    time : number;
}

const LoadingSpinner : React.FC<LoadingSpinnerProps> = ({isCroll, setLoading, time}) => {
    useEffect(() => {
        if(isCroll){
            const timer = setTimeout(() => {
                setLoading(false);
              }, time);
              return () => clearTimeout(timer);
        }
      }, []);

    const randMsg = ['지금 이 서비스는 한 달 만에 개발된 서비스랍니다!', 
    '바꾸기 버튼으로 한 번에 원하는 단어를 바꿀 수 있어요!', '해시태그는 한번에 3개까지 섞어 검색할 수 있어요!', 
    '진행바에 마우스를 올리면 몇 %까지 진행됐는지 알 수 있어요!', '카테고리는 당겨서 이동시킬 수 있어요!'];
    const randomElement = randMsg[Math.floor(Math.random() * randMsg.length)];

    return (
    <Container>
        <div className='wrap'>
            <div className='center-box'>
                <img src={Spinner} alt='spinner-img' style={{width : '50px', height : '60px'}}/>
                <div className='tip'>
                    <span className='header'>그거 아셨나요?</span>
                    <span className='body'>{randomElement}</span>
                </div>
            </div>
        </div>
    </Container>
    );
}

export default LoadingSpinner;