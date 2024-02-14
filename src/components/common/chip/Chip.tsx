import { ChipContainer } from './Chip.style';

interface IChipProps {
  name: string;
  light?: boolean;
  selected?: boolean;
  onSelectTag?: (name: string) => void;
}

const Chip = ({ name, light, selected, onSelectTag }: IChipProps) => {
  return (
    <ChipContainer
      className={`${light && 'light'} ${selected && 'selected'}`}
      onClick={() => onSelectTag && onSelectTag(name)}
    >{`# ${name}`}</ChipContainer>
  );
};

export default Chip;
