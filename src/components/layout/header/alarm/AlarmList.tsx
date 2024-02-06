import { IAlarm } from '@/models/alarm';

import * as AlarmListStyle from '@/styles/layout/header/alarm/AlarmList.style';
import theme from '@/styles/theme';

import AlarmItem from './AlarmItem';

type Props = {
  alarmList: IAlarm[];
};

const AlarmList = ({ alarmList }: Props) => {
  const count = alarmList.filter((item) => !item.is_confirm).length;

  return (
    <AlarmListStyle.Layout>
      <AlarmListStyle.Container>
        <AlarmListStyle.NoticeWrap>
          <span style={theme.typography.Subheader3}>읽지 않은 알림</span>

          <div className={`notice-count ${count && 'active'}`}>{count}</div>
        </AlarmListStyle.NoticeWrap>

        {count ? (
          <div style={{ padding: '0 28px', maxHeight: 480, overflowY: 'auto' }}>
            {alarmList.map((alarm) => (
              <AlarmItem key={alarm.alarm_id} alarm={alarm} />
            ))}
          </div>
        ) : (
          <AlarmListStyle.NoticeAbsenceMessage>
            알람이 없어요!
          </AlarmListStyle.NoticeAbsenceMessage>
        )}
      </AlarmListStyle.Container>
    </AlarmListStyle.Layout>
  );
};

export default AlarmList;
