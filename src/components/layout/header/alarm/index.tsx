import AlarmList from './AlarmList';
import IconWithButton from '../IconWithButton';

interface IAlarmProps {
  alarmOpen: boolean;
  setAlarmOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Alarm = ({ alarmOpen, setAlarmOpen, setModalOpen }: IAlarmProps) => {
  const toggleOpenState = () => {
    setAlarmOpen(!alarmOpen);
    setModalOpen(false);
  };
  return (
    <div>
      <section>
        <IconWithButton name="NotifyOff" onClick={toggleOpenState} />
      </section>
      {alarmOpen && <AlarmList />}
    </div>
  );
};

export default Alarm;
