import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { getAlarmAPI } from '@/apis/user';

import NotifyOffIcon from '@/assets/icons/notify-off.svg?react';
import NotifyOnIcon from '@/assets/icons/notify-on.svg?react';

import useOutsideClick from '@/hooks/useOutsideClick';

import { IAlarm } from '@/models/alarm';

import { modelingStatusState } from '@/stores/model-controller';

import * as HeaderStyle from '@/styles/layout/header';

import AlarmList from './AlarmList';

type Props = {
  isDark: boolean;
};

const Alarm = ({ isDark }: Props) => {
  const status = useRecoilValue(modelingStatusState);
  const [isOpen, setIsOpen] = useState(false);
  const [alarmList, setAlarmList] = useState<IAlarm[]>([]);

  const [alarmRef] = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));

  const hasNotReadAlarm = alarmList.find((item) => !item.is_confirm);

  const callAPI = async () => {
    const { alarms } = (await getAlarmAPI()).data.result;

    setAlarmList(alarms);
  };

  useEffect(() => {
    callAPI();
  }, []);

  useEffect(() => {
    if (status === 'ERROR') {
      callAPI();
    }
  }, [status]);

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

      {isOpen && (
        <AlarmList
          alarmList={alarmList}
          onRefresh={callAPI}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Alarm;
