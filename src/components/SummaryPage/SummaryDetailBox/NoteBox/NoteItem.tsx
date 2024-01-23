import { useEffect, useRef, useState } from 'react';

import CloseIcon from '@/assets/icons/close.svg?react';

// 임시 타입
interface Item {
  id: number;
  text: string;
}

type Props = {
  note: Item;
  updateId: number;
  onChangeUpdateId: (updateId: number) => void;
};

const NoteItem = ({ note, updateId, onChangeUpdateId }: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [noteText, setNoteText] = useState(note.text);
  const isEditable = note.id === updateId;

  const handleDoubleClick = () => {
    if (updateId > -1) return;

    onChangeUpdateId(note.id);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (
    e,
  ) => {
    if (e.key === 'Escape') {
      onChangeUpdateId(-1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (isEditable) {
      textareaRef.current?.focus();
      textareaRef.current?.setSelectionRange(
        note.text.length,
        note.text.length,
      );
    }

    setNoteText(note.text);
  }, [isEditable, note.text]);

  return (
    <div
      className={`note-item ${isEditable && 'editable'}`}
      onDoubleClick={handleDoubleClick}
    >
      <span className="note-icon">✏️</span>

      {isEditable ? (
        <div style={{ display: 'flex', gap: 12, flex: '1 1 auto' }}>
          <div style={{ flex: '1 1 auto' }}>
            <textarea
              ref={textareaRef}
              className="note-textarea"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <button className="close-button" onClick={() => onChangeUpdateId(-1)}>
            <CloseIcon width={16} height={16} />
          </button>
        </div>
      ) : (
        <span className="note-text">{noteText}</span>
      )}
    </div>
  );
};

export default NoteItem;
