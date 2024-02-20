import { getAlarmAPI } from '@/apis/user';
import { userAlarmState } from '@/stores/user';
import { useSetRecoilState } from 'recoil';

const useGetAlarm = () => {
  const setAlarmList = useSetRecoilState(userAlarmState);
  const getAlarm = async () => {
    const { alarms } = (await getAlarmAPI()).data.result;

    setAlarmList(alarms);
  };

  return { getAlarm };
};

export default useGetAlarm;
