import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { isSideBarOpenState, summaryBoxWidthState } from '@/stores/ui';

const ResizeThumb = () => {
  const isSidebarOpen = useRecoilValue(isSideBarOpenState);
  const [width, setWidth] = useRecoilState(summaryBoxWidthState);

  const [saveWidth, setSaveWidth] = useState(-1);
  const [holdX, setHoldX] = useState(-1);

  const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (isSidebarOpen) return;

    setSaveWidth(width);
    setHoldX(e.pageX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (holdX < 0) return;

    const changeWidth = saveWidth + (holdX - e.pageX);
    setWidth(Math.min(Math.max(555, changeWidth), 865));
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

  useEffect(() => {
    setWidth(isSidebarOpen ? 555 : 865);
  }, [isSidebarOpen, setWidth]);

  return <div className="resize-thumb" onMouseDown={handleMouseDown} />;
};

export default ResizeThumb;
