import GuideSvg from '@/assets/icons/guide.svg?react';
import * as VinoGuideStyle from '@/styles/layout/sideBar/VinoGuide.style';

const VinoGuide = () => {
  return (
    <VinoGuideStyle.Wrap>
      <GuideSvg width={28} height={28} />
      <VinoGuideStyle.Button>Vino 가이드</VinoGuideStyle.Button>
    </VinoGuideStyle.Wrap>
  );
};

export default VinoGuide;
