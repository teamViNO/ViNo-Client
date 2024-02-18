import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProgressWrapper } from '@/styles/Progress';
import theme from '@/styles/theme';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [convertingState, setConvertingState] = useState('변환중');
  const [convertingButtonState, setConvertingButtonState] = useState('변환중지'); 


  const handleConvertingBtn = () => {
    if (convertingState === '변환중') {
      setConvertingState('변환중지');
      setConvertingButtonState('다시 시작');
    } else if (convertingState === '변환중지'){
      setConvertingState('변환중');
      setConvertingButtonState('변환중지');
    }
  }  

  useEffect(() => {
    const updateProgress = async () => {
        if (convertingState === '변환중') {
            for (let step = 0; step < 4; step++) {
                try {
                    setConvertingState('변환중');
                // 응답을 받아올 주소 입력
                const response = await axios.get('');
                
                if (response.status === 200) {
                    // 각 단계가 끝날 때마다 프로그레스바 25%씩 증가
                    setProgress((step + 1) * 25);
                }
                } catch (error) {
                    setConvertingState('변환오류');
                }
            }
        }
    };

    updateProgress();
  }, [convertingState]); //convertingState 상태가 변경될 때마다 effect 재실행
  return (
    <ProgressWrapper>
        <div className='progress-bar' style={{ flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className='progress'>
                </div>
                <div className='converting-state' style={{ 
                    color: convertingState === '변환오류' ? `${theme.color.red}`: convertingState === '변환중지' ? `${theme.color.gray300}` : `${theme.color.green400}`
                }}>
                    {convertingState}
                </div>
            </div>
            <div className='converting-text'>
                <button className='converting-btn' 
                        onClick={handleConvertingBtn}
                        style={{ 
                            color: theme.color.gray500, 
                            backgroundColor: convertingButtonState === '변환중지' ? theme.color.gray400 : theme.color.green400
                        }}
                        >
                    { convertingButtonState }
                </button>
                <div className='converting-percentage'>
                    {progress}%
                </div>
            </div>
        </div>
    </ProgressWrapper>
  );

};

export default ProgressBar;
