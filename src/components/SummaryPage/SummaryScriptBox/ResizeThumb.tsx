import { useEffect, useState } from 'react';

type Props = {
  width: number;
  onChange: (width: number) => void;
};

const ResizeThumb = ({ width, onChange }: Props) => {
  const [saveWidth, setSaveWidth] = useState(-1);
  const [holdX, setHoldX] = useState(-1);

  const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setSaveWidth(width);
    setHoldX(e.pageX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (holdX < 0) return;

    const changeWidth = saveWidth + (holdX - e.pageX);
    onChange(Math.min(Math.max(555, changeWidth), 865));
  };

  const handleMouseUp = () => {
    setSaveWidth(-1);
    setHoldX(-1);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  });

  return <div className="resize-thumb" onMouseDown={handleMouseDown} />;
};

export default ResizeThumb;
