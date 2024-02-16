import { Link } from 'react-router-dom';

import GuideSvg from '@/assets/icons/guide.svg?react';

import * as VinoGuideStyle from '@/styles/layout/sideBar/VinoGuide.style';

const VinoGuide = () => {
  return (
    <Link to="/guide">
      <VinoGuideStyle.Wrap>
        <GuideSvg width={28} height={28} />
        <VinoGuideStyle.Button>Vino 가이드</VinoGuideStyle.Button>
      </VinoGuideStyle.Wrap>
    </Link>
  );
};

export default VinoGuide;
