import { useState } from 'react';

import { deleteSelectAlarmAPI } from '@/apis/user';

import { IAlarm } from '@/models/alarm';

import * as AlarmListStyle from '@/styles/layout/header/alarm/AlarmList.style';
import theme from '@/styles/theme';

import AlarmItem from './AlarmItem';

type Props = {
  alarmList: IAlarm[];
  onRefresh: () => void;
};

const AlarmList = ({ alarmList, onRefresh }: Props) => {
  const [selectIdList, setSelectIdList] = useState<number[]>([]);
  const count = alarmList.filter((item) => !item.is_confirm).length;

  const handleRemove = async (alarms: number[]) => {
    try {
      await deleteSelectAlarmAPI({ alarms });

      setSelectIdList([]);
      onRefresh();
    } catch (e) {
      console.error(e);
    }
  };

  const handleClickRemoveAll = () => {
    handleRemove(alarmList.map((i) => i.alarm_id));
  };

  const handleClickRemoveSelected = () => {
    handleRemove(selectIdList);
  };

  return (
    <AlarmListStyle.Layout>
      <AlarmListStyle.Container style={{ gap: selectIdList.length ? 20 : 36 }}>
        <AlarmListStyle.NoticeWrap>
          <span style={theme.typography.Subheader3}>읽지 않은 알림</span>

          <div className={`notice-count ${count && 'active'}`}>{count}</div>
        </AlarmListStyle.NoticeWrap>

        {Boolean(selectIdList.length) && (
          <AlarmListStyle.NoticeToolWrap>
            <span onClick={handleClickRemoveAll}>모두 삭제</span>
            <span>읽음</span>
            <span onClick={handleClickRemoveSelected}>삭제</span>
          </AlarmListStyle.NoticeToolWrap>
        )}

        {count ? (
          <div style={{ padding: '0 28px', maxHeight: 480, overflowY: 'auto' }}>
            {alarmList.map((alarm) => (
              <AlarmItem
                key={alarm.alarm_id}
                alarm={alarm}
                selectIdList={selectIdList}
                onUpdateSelectIdList={setSelectIdList}
              />
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
