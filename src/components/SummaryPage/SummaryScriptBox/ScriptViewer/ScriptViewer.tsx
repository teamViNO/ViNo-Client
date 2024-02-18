import { useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import PauseIcon from '@/assets/icons/pause.svg?react';
import PlayIcon from '@/assets/icons/play.svg?react';

import { IVideo } from '@/models/video';

import { summarySearchIsOpenState } from '@/stores/ui';
import { summaryTransformModalState } from '@/stores/modal';
import {
  summaryPlaySubHeadingIdState,
  summaryVideoState,
} from '@/stores/summary';

import { escapeHTML } from '@/utils/string';
import { formatTime } from '@/utils/date';

type Props = {
  keyword: string;
};

const ScriptViewer = ({ keyword }: Props) => {
  const summaryVideo = useRecoilValue(summaryVideoState) as IVideo;
  const searchIsOpen = useRecoilValue(summarySearchIsOpenState);
  const transformModalIsOpen = useRecoilValue(summaryTransformModalState);
  const [playSubHeadingId, setPlaySubHeadingId] = useRecoilState(
    summaryPlaySubHeadingIdState,
  );

  const scriptList = useMemo(() => {
    return summaryVideo.subHeading.map(({ name, content, ...others }) => {
      if ((searchIsOpen || transformModalIsOpen) && keyword !== '') {
        name = name
          .split(keyword)
          .map((s) => escapeHTML(s))
          .join(`<mark>${escapeHTML(keyword)}</mark>`);

        content = content
          .split(keyword)
          .map((s) => escapeHTML(s))
          .join(`<mark>${escapeHTML(keyword)}</mark>`);
      } else {
        name = escapeHTML(name);
        content = escapeHTML(content);
      }

      name = name.replace(/\n/g, '<br>');
      content = content.replace(/\n/g, '<br>');

      return {
        content,
        name,
        ...others,
      };
    });
  }, [summaryVideo, keyword, searchIsOpen, transformModalIsOpen]);

  const handleClickPlayButton = (id: number) => {
    if (playSubHeadingId === id) {
      setPlaySubHeadingId(-2);
    } else {
      setPlaySubHeadingId(id);
    }
  };

  return (
    <div className="script-container">
      {scriptList.map((script) => (
        <div key={script.id}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: 4,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 4 }}>
              <span
                className="play-button"
                onClick={() => handleClickPlayButton(script.id)}
              >
                {script.id === playSubHeadingId ? (
                  <PauseIcon width={36} height={36} />
                ) : (
                  <PlayIcon width={36} height={36} />
                )}
              </span>

              <span
                className="script-title"
                dangerouslySetInnerHTML={{ __html: script.name }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                minHeight: 36,
              }}
            >
              <span className="script-badge">
                {formatTime(script.start_time)}-{formatTime(script.end_time)}
              </span>
            </div>
          </div>

          <div
            className="script-content"
            dangerouslySetInnerHTML={{ __html: script.content }}
          />
        </div>
      ))}
    </div>
  );
};

export default ScriptViewer;
