import { BlurBackground } from '@/styles/modals/common.style';
import * as OptionStyles from '@/styles/layout/sideBar/Option.style';

interface IOptionProps {
  options: string[];
  handleOptionClick: (e: React.MouseEvent, option: string) => void;
  optionWrapRef: React.RefObject<HTMLDivElement>;
}

const Option = ({
  options,
  handleOptionClick,
  optionWrapRef,
}: IOptionProps) => {
  return (
    <OptionStyles.OptionsContainer>
      <BlurBackground />
      <OptionStyles.OptionsWrap ref={optionWrapRef}>
        {options.map((option) => (
          <OptionStyles.OptionButton
            onClick={(e) => handleOptionClick(e, option)}
            key={option}
          >
            {option}
          </OptionStyles.OptionButton>
        ))}
      </OptionStyles.OptionsWrap>
    </OptionStyles.OptionsContainer>
  );
};

export default Option;
