import { ColorKeyType, TypographyKeyType } from '@/styles/theme';
import { ChipContainer } from './Chip.style';

interface IChipProps {
  content: string;
  color: ColorKeyType;
  typography: TypographyKeyType;
}

const Chip = ({ content, color, typography }: IChipProps) => {
  return (
    <ChipContainer color={color} typography={typography}>
      {content}
    </ChipContainer>
  );
};

export default Chip;
