const handleDrag = () => {
  const dragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    target.style.backgroundColor = 'black';
  };
  const dragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    target.style.backgroundColor = 'white';
  };
  return { dragEnter, dragLeave };
};

export default handleDrag;
