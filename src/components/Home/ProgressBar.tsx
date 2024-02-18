import { useRecoilValue } from 'recoil';

import { ProgressWrapper } from '@/styles/Progress';
import theme from '@/styles/theme';

import {
  modelingProgressState,
  modelingStatusState,
} from '@/stores/model-controller';

const ProgressBar = () => {
  // 진행도 상태
  const status = useRecoilValue(modelingStatusState);
  const modelingProgress = useRecoilValue(modelingProgressState);

  const getStateText = () => {
    switch (status) {
      case 'COMPLETE':
        return '변환완료';
      case 'ERROR':
        return '변환오류';
      case 'CONTINUE':
        return '변환중';
      case 'STOP':
        return '변환중지';
    }
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
                backgroundColor:
                  status === 'ERROR'
                    ? theme.color.red
                    : status === 'STOP'
                      ? theme.color.gray300
                      : theme.color.green400,
              }}
            />
          </div>

          <div
            className="converting-state"
            style={{
              color:
                status === 'ERROR'
                  ? theme.color.red
                  : status === 'STOP'
                    ? theme.color.gray300
                    : theme.color.green400,
            }}
          >
            {getStateText()}
          </div>
        </div>

        {['CONTINUE', 'STOP', 'ERROR'].includes(status) && (
          <div className="converting-text">
            <button
              className="converting-btn"
              style={{
                backgroundColor:
                  status === 'CONTINUE'
                    ? theme.color.gray400
                    : theme.color.green400,
              }}
            >
              {status === 'CONTINUE' ? '변환중지' : '다시 시작'}
            </button>

            <div className="converting-percentage">{modelingProgress}%</div>
          </div>
        )}
      </div>
    </ProgressWrapper>
  );
};

export default ProgressBar;
