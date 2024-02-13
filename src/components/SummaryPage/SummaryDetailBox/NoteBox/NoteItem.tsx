import { useEffect, useRef, useState } from 'react';

import CloseIcon from '@/assets/icons/close.svg?react';

import { IVideoSummary } from '@/models/video';

type Props = {
  summary: IVideoSummary;
  isEditable: boolean;
  onDisableEditable: () => void;
  onActiveEditable?: () => void;
  onActiveNextEditable?: () => void;
};

const NoteItem = ({
  summary,
  isEditable,
  onDisableEditable,
  onActiveEditable,
  onActiveNextEditable,
}: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [noteText, setNoteText] = useState(summary.content);

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (
    e,
  ) => {
    if (e.key === 'Escape') {
      onDisableEditable();
    } else if (e.key === 'Enter') {
      e.preventDefault();

      onActiveNextEditable && onActiveNextEditable();
    }
  };

  useEffect(() => {
    if (isEditable) {
      textareaRef.current?.focus();
      textareaRef.current?.setSelectionRange(
        summary.content.length,
        summary.content.length,
      );
    }

    setNoteText(summary.content);
  }, [isEditable, summary.content]);

  return (
    <div
      className={`note-item ${isEditable && 'editable'}`}
      onDoubleClick={onActiveEditable}
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

          <button className="close-button" onClick={onDisableEditable}>
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
