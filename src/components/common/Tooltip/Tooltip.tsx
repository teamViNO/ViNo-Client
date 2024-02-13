import { CSSProperties } from 'react';
import { TooltipBox, TooltipBoxDirection } from './style';

type Props = {
  direction: TooltipBoxDirection;
  children: JSX.Element | JSX.Element[] | string;
  style?: CSSProperties;
};

const Tooltip = ({ direction, children, style }: Props) => {
  return (
    <TooltipBox direction={direction} style={style}>
      {children}
    </TooltipBox>
  );
};

export default Tooltip;
