import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { ProgressWrapper } from '@/styles/Progress';
import theme from '@/styles/theme';

import {
  modelingErrorCodeState,
  modelingProgressState,
} from '@/stores/model-controller';

const ProgressBar = () => {
  // 진행도 상태
  const modelingProgress = useRecoilValue(modelingProgressState);
  const errorCode = useRecoilValue(modelingErrorCodeState);
  // 변환중 상태
  const [isConverting, setIsConverting] = useState(true);

  const getStateText = () => {
    if (modelingProgress === 100) return '변환 완료';
    else if (errorCode) return '변환 오류';

    return isConverting ? '변환중' : '다시 시작';
  };

  return (
    <ProgressWrapper>
      <div className="progress-bar" style={{ flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div className="progress">
            <div
              style={{
                width: `${modelingProgress}%`,
                backgroundColor: errorCode
                  ? theme.color.red
                  : theme.color.green400,
              }}
            />
          </div>

          <div
            className="converting-state"
            style={{
              color: errorCode
                ? theme.color.red
                : isConverting
                  ? theme.color.green400
                  : theme.color.gray300,
            }}
          >
            {getStateText()}
          </div>
        </div>

        {modelingProgress < 100 && !errorCode && (
          <div className="converting-text">
            <button
              className="converting-btn"
              style={{
                backgroundColor: isConverting
                  ? theme.color.gray400
                  : theme.color.green400,
              }}
            >
              {isConverting ? '변환중지' : '다시 시작'}
            </button>

            <div className="converting-percentage">{modelingProgress}%</div>
          </div>
        )}
      </div>
    </ProgressWrapper>
  );
};

export default ProgressBar;
