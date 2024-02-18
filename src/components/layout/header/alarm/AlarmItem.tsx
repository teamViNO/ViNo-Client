import { IAlarm } from '@/models/alarm';

import CheckIcon from '@/assets/icons/checked.svg?react';
import EmptyFileImage from '@/assets/empty-file.png';
import FileImage from '@/assets/file.png';
import FileReadImage from '@/assets/file-read.png';
import ErrorImage from '@/assets/Error.png';

import { Container } from '@/styles/layout/header/alarm/AlarmItem.style';

import { diffTime } from '@/utils/date';

type Props = {
  alarm: IAlarm;
  selectIdList: number[];
  onUpdateSelectIdList: (list: number[]) => void;
};

const AlarmItem = ({ alarm, selectIdList, onUpdateSelectIdList }: Props) => {
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

  const handleClickRemoveButton = () => {
    if (selectIdList.indexOf(alarm.alarm_id) < 0) {
      onUpdateSelectIdList([...selectIdList, alarm.alarm_id]);
    } else {
      onUpdateSelectIdList(selectIdList.filter((id) => id !== alarm.alarm_id));
    }
  };

  return (
    <Container className={`${alarm.is_confirm && 'read'}`}>
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
    </Container>
  );
};

export default AlarmItem;
