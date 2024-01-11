import * as AlarmContainerStyle from '@/styles/layout/header/AlarmContainer.style';
import theme from '@/styles/theme';
import Alarm from './Alarm';

interface IAlarmContainerProps {
  type: 'convert' | 'error' | 'welcome';
  title?: string;
  nickname?: string;
}

const AlarmContainer = () => {
  const alarms: IAlarmContainerProps[] = [
    { type: 'convert', title: '2023 콜드체인 트렌드 리포트' },
    {
      type: 'error',
      title: '메조미디어가 본 내년 미디어 트렌드는…생성AI·광고없는 구독',
    },
    { type: 'welcome', nickname: '레니' },
  ];

  return (
    <AlarmContainerStyle.Layout>
      <AlarmContainerStyle.Container>
        <AlarmContainerStyle.NoticeWrap>
          <span style={theme.typography.Subheader3}>읽지 않은 알림</span>
          <AlarmContainerStyle.NoticeCount length={alarms.length}>
            {alarms.length}
          </AlarmContainerStyle.NoticeCount>
        </AlarmContainerStyle.NoticeWrap>
        {alarms.length ? (
          alarms.map((alarm) =>
            alarm.type === 'welcome' ? (
              <Alarm
                type={alarm.type}
                nickname={alarm.nickname}
                key={`${alarm.nickname}`}
              />
            ) : (
              <Alarm
                type={alarm.type}
                title={alarm.title}
                key={`${alarm.title}`}
              />
            ),
          )
        ) : (
          <AlarmContainerStyle.NoticeAbsenceMessage>
            알람이 없어요!
          </AlarmContainerStyle.NoticeAbsenceMessage>
        )}
      </AlarmContainerStyle.Container>
    </AlarmContainerStyle.Layout>
  );
};

export default AlarmContainer;
