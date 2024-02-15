import { useRecoilValue } from 'recoil';

import {
  createVideoSummaryAPI,
  deleteVideoSummaryAPI,
  updateVideoAPI,
} from '@/apis/videos';

import PlusIcon from '@/assets/icons/plus.svg?react';

import useIndex from '@/hooks/useIndex';

import { IVideoSummary } from '@/models/video';

import { summaryVideoState } from '@/stores/summary';

import NoteItem from './NoteItem';

type Props = {
  onRefresh: () => void;
};

const NoteBox = ({ onRefresh }: Props) => {
  const summaryVideo = useRecoilValue(summaryVideoState);
  const [editableIndex, setEditableIndex, setDisableIndex] = useIndex();

  const handleActiveEditable = (index: number) => {
    if (index > (summaryVideo?.summary || []).length - 1) {
      setEditableIndex(-1);
    } else {
      setEditableIndex(index);
    }
  };

  const handleUpdateNote = async (summary: IVideoSummary) => {
    if (!summaryVideo || editableIndex === null) return;

    try {
      if (summary.content === '') {
        await deleteVideoSummaryAPI(summary.id);

        setDisableIndex();
      } else {
        await updateVideoAPI(summaryVideo.video_id, { summary: [summary] });
      }

      onRefresh();
    } catch (e) {
      console.error(e);
    }
  };

  const handleCreateNote = async (content: string) => {
    if (!summaryVideo || content === '') return;

    try {
      await createVideoSummaryAPI(summaryVideo.video_id, [content]);

      onRefresh();
    } catch (e) {
      console.error(e);
    }
  };

  const handleRemoveNote = async (summaryId: number) => {
    try {
      await deleteVideoSummaryAPI(summaryId);

      setDisableIndex();
      onRefresh();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div style={{ position: 'relative', marginTop: 40 }}>
      <div className="note-box">
        {summaryVideo?.summary.map((summary, index) => (
          <NoteItem
            key={summary.id}
            summary={summary}
            isEditable={editableIndex === index}
            onDisableEditable={setDisableIndex}
            onActiveEditable={() => handleActiveEditable(index)}
            onEdit={(content) => {
              handleUpdateNote({ id: summary.id, content });
              setDisableIndex();
            }}
            onEditAndNext={(content) => {
              handleUpdateNote({ id: summary.id, content });
              handleActiveEditable(index + 1);
            }}
            onRemove={() => handleRemoveNote(summary.id)}
          />
        ))}

        {/* 추가 */}
        {editableIndex === -1 && (
          <NoteItem
            summary={{ id: -1, content: '' }}
            isEditable={editableIndex === -1}
            onDisableEditable={setDisableIndex}
            onEdit={(content) => {
              handleCreateNote(content);
              setDisableIndex();
            }}
            onEditAndNext={handleCreateNote}
          />
        )}

        {/* 추가 버튼 */}
        {editableIndex === null && (
          <button
            className="create-button"
            onClick={(e) => {
              e.stopPropagation();
              setEditableIndex(-1);
            }}
          >
            <PlusIcon width={28} height={28} />
          </button>
        )}
      </div>

      {/* <div className="note-box-tooltip">
        <Tooltip direction="left">
          더블 클릭을 통해 잘못된 내용을 수정해봐요!
        </Tooltip>

        <Tooltip direction="left">
          직접 기록하고 싶은 내용들을 추가할 수 있어요!
        </Tooltip>
      </div> */}
    </div>
  );
};

export default NoteBox;
