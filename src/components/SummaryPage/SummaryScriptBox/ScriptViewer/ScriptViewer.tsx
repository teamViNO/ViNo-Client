import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';

import PlayIcon from '@/assets/icons/play.svg?react';

import { IVideo } from '@/models/video';

import { summarySearchIsOpenState } from '@/stores/ui';
import { summaryTransformModalState } from '@/stores/modal';
import { summaryVideoState } from '@/stores/summary';

import { escapeHTML } from '@/utils/string';

type Props = {
  keyword: string;
};

const ScriptViewer = ({ keyword }: Props) => {
  const summaryVideo = useRecoilValue(summaryVideoState) as IVideo;
  const searchIsOpen = useRecoilValue(summarySearchIsOpenState);
  const transformModalIsOpen = useRecoilValue(summaryTransformModalState);

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

  return (
    <div className="script-container">
      {scriptList.map((script) => (
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

              <span
                className="script-title"
                dangerouslySetInnerHTML={{ __html: script.name }}
              />
            </div>

            <span className="script-badge">
              {script.start_time}-{script.end_time}
            </span>
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
