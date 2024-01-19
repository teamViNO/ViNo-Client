import * as AlarmListStyle from '@/styles/layout/header/alarm/AlarmList.style';
import theme from '@/styles/theme';
import AlarmItem from './AlarmItem';

interface IAlarmListProps {
  type: 'convert' | 'error' | 'welcome';
  title?: string;
  nickname?: string;
}

const AlarmList = () => {
  const alarms: IAlarmListProps[] = [
    { type: 'convert', title: '2023 콜드체인 트렌드 리포트' },
    {
      type: 'error',
      title: '메조미디어가 본 내년 미디어 트렌드는…생성AI·광고없는 구독',
    },
    { type: 'welcome', nickname: '레니' },
  ];

  return (
    <AlarmListStyle.Layout>
      <AlarmListStyle.Container>
        <AlarmListStyle.NoticeWrap>
          <span style={theme.typography.Subheader3}>읽지 않은 알림</span>
          <AlarmListStyle.NoticeCount length={alarms.length}>
            {alarms.length}
          </AlarmListStyle.NoticeCount>
        </AlarmListStyle.NoticeWrap>
        {alarms.length ? (
          alarms.map((alarm) =>
            alarm.type === 'welcome' ? (
              <AlarmItem
                type={alarm.type}
                nickname={alarm.nickname}
                key={`${alarm.nickname}`}
              />
            ) : (
              <AlarmItem
                type={alarm.type}
                title={alarm.title}
                key={`${alarm.title}`}
              />
            ),
          )
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
