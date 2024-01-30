import PlusIcon from '@/assets/icons/plus.svg?react';

import useIndex from '@/hooks/useIndex';

import NoteItem from './NoteItem';

const NoteBox = () => {
  const noteList = [
    { id: 1, text: '2023년 디지털 광고 시장 규모 9조 281억 원으로 9.7% 성장' },
    {
      id: 2,
      text: '1분기부터 순차적으로 구글의 제3자 쿠키 지원이 중단될 예정',
    },
    { id: 3, text: 'AI 기술 상용화로 도래한 초개인화 마케팅 시대를 예측' },
    { id: 4, text: '상용화되어 디지털 생태계를 더욱 다양하게 변화시킬 것' },
    { id: 5, text: '2023년 디지털 광고 시장 규모 9조 281억 원으로 9.7% 성장' },
    {
      id: 6,
      text: `'클로바X'와 생성형 AI 검색 서비스 '큐:(CUE:)'를 출시하며 본격 경쟁`,
    },
  ];

  const [editableIndex, setEditableIndex, setDisableIndex] = useIndex();

  const handleActiveEditable = (index: number) => {
    if (index > noteList.length - 1) {
      setEditableIndex(-1);
    } else {
      setEditableIndex(index);
    }
  };

  return (
    <div style={{ position: 'relative', marginTop: 40 }}>
      <div className="note-box">
        {noteList.map((note, index) => (
          <NoteItem
            key={note.id}
            note={note}
            isEditable={editableIndex === index}
            onDisableEditable={setDisableIndex}
            onActiveEditable={() => handleActiveEditable(index)}
            onActiveNextEditable={() => handleActiveEditable(index + 1)}
          />
        ))}

        {/* 추가 */}
        {editableIndex === -1 && (
          <NoteItem
            note={{ id: 0, text: '' }}
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
