import { useState } from 'react';

import NotifyOffIcon from '@/assets/icons/notify-off.svg?react';
import NotifyOnIcon from '@/assets/icons/notify-on.svg?react';

import useOutsideClick from '@/hooks/useOutsideClick';

import * as HeaderStyle from '@/styles/layout/header';

import AlarmList from './AlarmList';

type Props = {
  isDark: boolean;
};

const Alarm = ({ isDark }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [alarmRef] = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));
  const hasAlarm = true;

  return (
    <div ref={alarmRef}>
      <HeaderStyle.Button
        color={isDark ? 'gray400' : 'gray500'}
        onClick={() => setIsOpen(!isOpen)}
      >
        {hasAlarm ? (
          <NotifyOnIcon width={28} height={28} />
        ) : (
          <NotifyOffIcon width={28} height={28} />
        )}
      </HeaderStyle.Button>

      {isOpen && <AlarmList />}
    </div>
  );
};

export default Alarm;
