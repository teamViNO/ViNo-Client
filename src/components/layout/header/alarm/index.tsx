import AlarmList from './AlarmList';
import IconWithButton from '../IconWithButton';
import useOutsideClick from '@/hooks/useOutsideClick';

interface IAlarmProps {
  alarmOpen: boolean;
  setAlarmOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Alarm = ({ alarmOpen, setAlarmOpen }: IAlarmProps) => {
  const toggleOpenState = () => setAlarmOpen(!alarmOpen);
  const [alarmRef] = useOutsideClick<HTMLDivElement>(() => setAlarmOpen(false));

  return (
    <div ref={alarmRef}>
      <section>
        <IconWithButton name="NotifyOff" onClick={toggleOpenState} />
      </section>
      {alarmOpen && <AlarmList />}
    </div>
  );
};

export default Alarm;
