import theme from '@/styles/theme';
import * as AlarmStyle from '@/styles/layout/header/Alarm.style';

interface IAlarmContainerProps {
  type: 'convert' | 'error' | 'welcome';
  title?: string;
  nickname?: string;
}

interface IDatas {
  color: string;
  image: string;
  title?: string;
  content: string;
}

const Alarm = ({ type, title, nickname }: IAlarmContainerProps) => {
  let datas: IDatas | null = null;
  switch (type) {
    case 'convert':
      datas = {
        color: theme.color.green400,
        image: 'success-file',
        title: `[${title}]`,
        content:
          '영상이 모두 변환되었어요! 이제 정리 된 영상을 확인하러 가볼까요?',
      };
      break;
    case 'error':
      datas = {
        color: theme.color.red,
        image: 'Error',
        title: `[${title}]`,
        content: '영상 변환도중 오류가 생겼어요 ㅠ 어떤 문제인지 확인해보세요!',
      };
      break;
    case 'welcome':
      datas = {
        color: theme.color.gray300,
        image: 'file',
        title: `${nickname}님 반가워요!`,
        content: '이제부터 어떻게 vino를 사용하면 좋을지 소개해드릴게요:)',
      };
      break;
    default:
      console.log('something went wrong!');
  }
  return (
    <>
      <AlarmStyle.StateWrap>
        <AlarmStyle.StateColor background={datas?.color} />
        <AlarmStyle.StateType>영상 변환</AlarmStyle.StateType>
        <AlarmStyle.Divide />
        <span style={theme.typography.Caption2}>10분 전</span>
      </AlarmStyle.StateWrap>
      <AlarmStyle.ContentContainer>
        <AlarmStyle.Image src={`src/assets/${datas?.image}.png`} />
        <AlarmStyle.ContentWrap>
          <span>{datas?.title}</span>
          <span>{datas?.content}</span>
        </AlarmStyle.ContentWrap>
      </AlarmStyle.ContentContainer>
    </>
  );
};

export default Alarm;
