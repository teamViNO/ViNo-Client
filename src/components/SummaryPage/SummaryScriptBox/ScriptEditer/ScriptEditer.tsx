import { useRecoilValue } from 'recoil';

import PlayIcon from '@/assets/icons/play.svg?react';

import { IVideo, IVideoSubHeading } from '@/models/video';

import { summaryVideoState } from '@/stores/summary';

const ScriptEditer = () => {
  const summaryUpdateVideo = useRecoilValue(summaryVideoState) as IVideo;

  const handleChange = (
    subHeading: IVideoSubHeading,
    value: string,
    column: 'name' | 'content',
  ) => {
    console.log(subHeading, value, column);
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
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span className="play-button">
                <PlayIcon width={36} height={36} />
              </span>

              <input
                type="text"
                className="script-title"
                value={script.name}
                onChange={({ target: { value } }) =>
                  handleChange(script, value, 'name')
                }
              />
            </div>

            <span className="script-badge">
              {script.start_time}-{script.end_time}
            </span>
          </div>

          <div className="script-content">
            <div className="script-content-edit" contentEditable>
              {script.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScriptEditer;
