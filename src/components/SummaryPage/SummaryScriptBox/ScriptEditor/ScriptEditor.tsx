import { useRecoilValue, useSetRecoilState } from 'recoil';

import PlayIcon from '@/assets/icons/play.svg?react';

import { IVideo, IVideoSubHeading } from '@/models/video';

import { summaryUpdateVideoState } from '@/stores/summary';

import ScriptContentEditor from './ScriptContentEditor';

const ScriptEditor = () => {
  const summaryUpdateVideo = useRecoilValue(summaryUpdateVideoState) as IVideo;
  const setSummaryUpdateVideo = useSetRecoilState(summaryUpdateVideoState);

  const handleChange = (
    subHeading: IVideoSubHeading,
    value: string,
    column: 'name' | 'content',
  ) => {
    setSummaryUpdateVideo((video) => {
      if (!video) return null;

      return {
        ...video,
        subHeading: video.subHeading.map((item) => {
          if (item.id === subHeading.id) {
            return {
              ...item,
              [column]: value,
            };
          }

          return item;
        }),
      };
    });
  };

  return (
    <div className="script-container">
      {summaryUpdateVideo.subHeading.map((script) => (
        <div key={script.id}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                width: '100%',
              }}
            >
              <span className="play-button disabled">
                <PlayIcon width={36} height={36} />
              </span>

              <div style={{ flex: '1 1 auto' }}>
                <input
                  type="text"
                  className="script-title"
                  value={script.name}
                  onChange={({ target: { value } }) =>
                    handleChange(script, value, 'name')
                  }
                />
              </div>
            </div>
          </div>

          <div className="script-content" style={{ paddingLeft: 40 }}>
            <ScriptContentEditor
              content={script.content}
              onChange={(content) => handleChange(script, content, 'content')}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScriptEditor;
