import AlarmList from './AlarmList';
import IconWithButton from '../IconWithButton';

const Alarm = () => {
  return (
    <div>
      <section>
        <IconWithButton name="NotifyOff" onClick={() => {}} />
      </section>
      <AlarmList />
    </div>
  );
};

export default Alarm;
