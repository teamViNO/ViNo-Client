import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import {
  createVideoSummaryAPI,
  deleteVideoSummaryAPI,
  updateVideoAPI,
} from '@/apis/videos';

import PlusIcon from '@/assets/icons/plus.svg?react';

import GuestLoginModal from '@/components/modals/GuestLoginModal';

import useIndex from '@/hooks/useIndex';

import { IVideoSummary } from '@/models/video';

import { summaryIsEditingViewState, summaryVideoState } from '@/stores/summary';
import { userTokenState } from '@/stores/user';

import NoteItem from './NoteItem';

type Props = {
  onRefresh: () => void;
};

const NoteBox = ({ onRefresh }: Props) => {
  const userToken = useRecoilValue(userTokenState);
  const summaryVideo = useRecoilValue(summaryVideoState);
  const isEditingView = useRecoilValue(summaryIsEditingViewState);
  const [editableIndex, setEditableIndex, setDisableIndex] = useIndex();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleActiveEditable = (index: number) => {
    if (userToken) {
      if (index > (summaryVideo?.summary || []).length - 1) {
        setEditableIndex(-1);
      } else {
        setEditableIndex(index);
      }
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

  const handleClickCreateButton: React.MouseEventHandler<HTMLButtonElement> = (
    e,
  ) => {
    if (userToken) {
      e.stopPropagation();
      setEditableIndex(-1);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
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
          {editableIndex === null && !isEditingView && (
            <button className="create-button" onClick={handleClickCreateButton}>
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

      {isModalOpen && (
        <GuestLoginModal
          title="수정사항 저장 안내"
          description={
            <>
              로그인하지 않으면 수정한 부분을 나중에 다시 확인할 수 없어요!
              <br />
              로그인하고 수정내용을 저장해요
            </>
          }
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default NoteBox;
