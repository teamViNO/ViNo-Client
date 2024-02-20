import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';

import CloseIcon from '@/assets/icons/close.svg?react';

import useOutsideClick from '@/hooks/useOutsideClick';

import { IVideoSummary } from '@/models/video';

import { summaryIsEditingViewState } from '@/stores/summary';

type Props = {
  summary: IVideoSummary;
  isEditable: boolean;
  onDisableEditable: () => void;
  onActiveEditable?: () => void;
  onEdit: (content: string) => void;
  onEditAndNext?: (content: string) => void;
  onRemove?: () => void;
};

const NoteItem = ({
  summary,
  isEditable,
  onDisableEditable,
  onActiveEditable,
  onEdit,
  onEditAndNext,
  onRemove,
}: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isEditingView = useRecoilValue(summaryIsEditingViewState);
  const [noteText, setNoteText] = useState(summary.content);

  const [outsideRef] = useOutsideClick<HTMLDivElement>(() => {
    if (isEditable) {
      onEdit(noteText);
    }
  });

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (
    e,
  ) => {
    if (e.key === 'Escape') {
      onDisableEditable();
    } else if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault();

      onEditAndNext && onEditAndNext(noteText);

      // 이어서 생성할 수 있도록
      if (summary.id === -1) {
        setNoteText('');
      }
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
      ref={outsideRef}
      className={`note-item ${isEditable && 'editable'}`}
      onDoubleClick={() => {
        if (isEditingView) return;

        onActiveEditable && onActiveEditable();
      }}
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

          {summary.id !== -1 && (
            <button className="close-button" onClick={onRemove}>
              <CloseIcon width={16} height={16} />
            </button>
          )}
        </div>
      ) : (
        <span className="note-text">{noteText}</span>
      )}
    </div>
  );
};

export default NoteItem;
