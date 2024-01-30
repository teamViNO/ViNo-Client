import { useEffect, useState } from 'react';

import { getAlarm } from '@/apis/user';

import NotifyOffIcon from '@/assets/icons/notify-off.svg?react';
import NotifyOnIcon from '@/assets/icons/notify-on.svg?react';

import useOutsideClick from '@/hooks/useOutsideClick';

import { IAlarm } from '@/models/alarm';

import * as HeaderStyle from '@/styles/layout/header';

import AlarmList from './AlarmList';

type Props = {
  isDark: boolean;
};

const Alarm = ({ isDark }: Props) => {
  const [alarmRef] = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));
  const [isOpen, setIsOpen] = useState(false);
  const [alarmList, setAlarmList] = useState<IAlarm[]>([]);
  const hasNotReadAlarm = alarmList.find((item) => !item.is_confirm);

  const callAPI = async () => {
    const { alarms } = (await getAlarm()).data.result;

    setAlarmList(alarms);
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div ref={alarmRef}>
      <HeaderStyle.Button
        color={isDark ? 'gray400' : 'gray500'}
        onClick={() => setIsOpen(!isOpen)}
      >
        {hasNotReadAlarm ? (
          <NotifyOnIcon width={28} height={28} />
        ) : (
          <NotifyOffIcon width={28} height={28} />
        )}
      </HeaderStyle.Button>

      {isOpen && <AlarmList alarmList={alarmList} />}
    </div>
  );
};

export default Alarm;
