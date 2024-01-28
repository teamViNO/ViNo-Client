import { TooltipBox, TooltipBoxDirection } from './style';

type Props = {
  direction: TooltipBoxDirection;
  children: JSX.Element | JSX.Element[] | string;
};

const Tooltip = ({ direction, children }: Props) => {
  return <TooltipBox direction={direction}>{children}</TooltipBox>;
};

export default Tooltip;
