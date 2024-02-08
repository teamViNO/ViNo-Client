import { useRecoilValue } from 'recoil';

import PlusIcon from '@/assets/icons/plus.svg?react';

import useIndex from '@/hooks/useIndex';

import { summaryVideoState } from '@/stores/summary';

import NoteItem from './NoteItem';

const NoteBox = () => {
  const summaryVideo = useRecoilValue(summaryVideoState);
  const [editableIndex, setEditableIndex, setDisableIndex] = useIndex();

  const handleActiveEditable = (index: number) => {
    if (index > (summaryVideo?.summary || []).length - 1) {
      setEditableIndex(-1);
    } else {
      setEditableIndex(index);
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
            onActiveNextEditable={() => handleActiveEditable(index + 1)}
          />
        ))}

        {/* 추가 */}
        {editableIndex === -1 && (
          <NoteItem
            summary={{ id: 0, content: '' }}
            isEditable={editableIndex === -1}
            onDisableEditable={setDisableIndex}
          />
        )}

        {/* 추가 버튼 */}
        {editableIndex === null && (
          <button
            className="create-button"
            onClick={() => setEditableIndex(-1)}
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
