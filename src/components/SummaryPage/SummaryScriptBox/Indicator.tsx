// 임시 타입
interface Item {
  id: number;
}

type Props = {
  list: Item[];
  focusId: number;
  onChange: (focusId: number) => void;
};

const Indicator = ({ list, focusId, onChange }: Props) => {
  return (
    <div className="indicator">
      {list.map((item) => (
        <div
          key={item.id}
          className={`indicator-item ${item.id === focusId && 'active'}`}
          onClick={() => onChange(item.id)}
        />
      ))}
    </div>
  );
};

export default Indicator;
