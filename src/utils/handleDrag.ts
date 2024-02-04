import theme from '@/styles/theme';

const handleDrag = () => {
  const dragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    target.style.backgroundColor = theme.color.gray200;
  };
  const dragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    target.style.backgroundColor = 'white';
  };
  return { dragEnter, dragLeave };
};

export default handleDrag;
