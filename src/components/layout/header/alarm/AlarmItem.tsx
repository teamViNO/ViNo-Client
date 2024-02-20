import { useNavigate } from 'react-router-dom';

import { IAlarm } from '@/models/alarm';

import CheckIcon from '@/assets/icons/checked.svg?react';
import EmptyFileImage from '@/assets/empty-file.png';
import FileImage from '@/assets/file.png';
import FileReadImage from '@/assets/file-read.png';
import ErrorImage from '@/assets/Error.png';

import { Container } from '@/styles/layout/header/alarm/AlarmItem.style';

import { diffTime } from '@/utils/date';
import { useRecoilValue } from 'recoil';
import {
  modelingProgressState,
  modelingStatusState,
} from '@/stores/model-controller';
import theme from '@/styles/theme';
import { confirmSelectAlarmAPI } from '@/apis/user';

type Props = {
  alarm: IAlarm;
  selectIdList: number[];
  onUpdateSelectIdList: (list: number[]) => void;
  onClose: () => void;
  onRefresh: () => void;
};

const AlarmItem = ({
  alarm,
  selectIdList,
  onUpdateSelectIdList,
  onClose,
  onRefresh,
}: Props) => {
  const navigate = useNavigate();
  const status = useRecoilValue(modelingStatusState);
  const progress = useRecoilValue(modelingProgressState);
  const isSelected = selectIdList.indexOf(alarm.alarm_id) > -1;

  const type = () => {
    switch (alarm.type) {
      case 'video':
        return alarm.state === 'fail' ? '오류' : '영상 변환';
      case 'notice':
        return '환영인사';
    }
  };

  const image = () => {
    switch (alarm.type) {
      case 'video':
        return alarm.state === 'fail' ? ErrorImage : EmptyFileImage;
      case 'notice':
        return alarm.is_confirm ? FileReadImage : FileImage;
    }
  };

  const time = () => {
    const { second, minute, hour, day } = diffTime(
      Date.now(),
      new Date(alarm.updated_at).getTime(),
    );

    if (day > 0) return `${day}일`;
    if (hour > 0) return `${hour}시간`;
    if (minute > 0) return `${minute}분`;
    return `${second}초`;
  };

  const handleClick = async () => {
    if (alarm.type === 'notice') {
      navigate('/guide');
      onClose();
    }
    if (alarm.type === 'video' && !alarm.is_confirm && alarm.alarm_id !== 999) {
      try {
        await confirmSelectAlarmAPI({ alarms: [alarm.alarm_id] });
        onRefresh();
        navigate(`/summary/${alarm.video_id}`);
        onClose();
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleClickRemoveButton: React.MouseEventHandler<HTMLButtonElement> = (
    e,
  ) => {
    e.stopPropagation();

    if (selectIdList.indexOf(alarm.alarm_id) < 0) {
      onUpdateSelectIdList([...selectIdList, alarm.alarm_id]);
    } else {
      onUpdateSelectIdList(selectIdList.filter((id) => id !== alarm.alarm_id));
    }
  };

  return (
    <Container
      className={`${alarm.is_confirm && 'read'}`}
      style={{ cursor: alarm.type === 'notice' ? 'pointer' : 'default' }}
      onClick={handleClick}
    >
      <div className="top">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div className={`color ${alarm.state === 'fail' && 'error'}`} />

          <span className="type">{type()}</span>
          <div className="line" />
          <span className="time">{time()} 전</span>
        </div>

        <button
          className={`remove-button ${selectIdList.length && 'show'} ${
            isSelected && 'selected'
          }`}
          onClick={handleClickRemoveButton}
        >
          <CheckIcon width={16} height={16} />
        </button>
      </div>

      <div className="bottom">
        <img src={image()} alt="image" width={56} height={56} />

        <div className="content">
          {alarm.title && <h1>{alarm.title}</h1>}
          <span>{alarm.content}</span>
        </div>
      </div>
      {status !== 'NONE' && alarm.alarm_id === 999 && (
        <div className="progress-wrap">
          <div className="progress-bar">
            <div
              style={{
                width: `${progress}%`,
                backgroundColor:
                  status === 'ERROR' ? theme.color.red : theme.color.green300,
              }}
            />
          </div>

          <span className="progress-text">
            {status === 'ERROR' ? '변환 중 오류' : `${progress}%`}
          </span>
        </div>
      )}
    </Container>
  );
};

export default AlarmItem;
