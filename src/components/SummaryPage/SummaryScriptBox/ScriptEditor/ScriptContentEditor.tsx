import { useEffect, useRef } from 'react';

type Props = {
  content: string;
  onChange: (content: string) => void;
};

const ScriptContentEditor = ({ content, onChange }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const caretPos = useRef(-1);

  const getCaret = (el: HTMLDivElement) => {
    let caretAt = 0;
    const sel = window.getSelection();

    if (!sel) return 0;
    if (sel.rangeCount == 0) {
      return caretAt;
    }

    const range = sel.getRangeAt(0);
    const preRange = range.cloneRange();
    preRange.selectNodeContents(el);
    preRange.setEnd(range.endContainer, range.endOffset);
    caretAt = preRange.toString().length;

    return caretAt;
  };

  const setCaret = (el: HTMLDivElement, offset: number) => {
    const sel = window.getSelection();
    const range = document.createRange();

    if (sel && el.childNodes.length) {
      range.setStart(el.childNodes[0], offset);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  };

  useEffect(() => {
    if (contentRef.current && caretPos.current > -1) {
      setCaret(contentRef.current, caretPos.current);
      contentRef.current.focus();
    }
  }, [content]);

  return (
    <div
      ref={contentRef}
      className="script-content-edit"
      contentEditable
      dangerouslySetInnerHTML={{ __html: content }}
      onKeyDown={({ target, nativeEvent }) => {
        if (nativeEvent.isComposing) return;
        caretPos.current = getCaret(contentRef.current as HTMLDivElement);
        onChange((target as HTMLDivElement).innerText);
      }}
      onBlur={({ target }) => onChange((target as HTMLDivElement).innerText)}
    />
  );
};

export default ScriptContentEditor;
