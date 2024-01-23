import { ColorKeyType, TypographyKeyType } from '@/styles/theme';
import { VideoTagContainer } from './VideoTag.style';

interface IChipProps {
  content: string;
  color: ColorKeyType;
  typography: TypographyKeyType;
}

const VideoTag = ({ content, color, typography }: IChipProps) => {
  return (
    <VideoTagContainer color={color} typography={typography}>
      {content}
    </VideoTagContainer>
  );
};

export default VideoTag;
