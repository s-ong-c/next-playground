import 'quill/dist/quill.snow.css';
import 'highlight.js/styles/atom-one-dark.css';

import React, { useEffect, useRef } from 'react';

import MarkdownShortcuts from '../../../utils/quill/markdownShortcuts';
import Quill from 'quill';
import Toolbar from './Toolbar';
import Typography from './Typography';
import hljs from 'highlight.js';
import media from '../../../styles/media';
import palette from '../../../styles/palette';
import postStyles from '../../../styles/postStyles';
import styled from 'styled-components';

const QuillEditorWrapper = styled.div`
  ${media.medium} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  ${media.small} {
    width: 100%;
  }
  /** mobile */
  img {
    pointer-events: none;
  }
  padding-top: 5rem;
  padding-bottom: 10rem;
  position: relative;
  width: 768px;
  margin: 0 auto;
`;

const HorizontalBar = styled.div`
  background: ${palette.typo2};
  height: 4px;
  width: 4rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

const Editor = styled.div`
  margin-top: 1rem;
  position: relative;
  .ql-container {
    font-family: inherit;
  }
  .ql-editor {
    padding: 0;
    font-family: inherit;
    img {
      display: block;
      max-width: 100%;
      height: auto;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      margin-right: auto;
      margin-left: auto;
    }
    &:not(.ql-blank) {
      p {
        line-height: 1.75;
      }
    }
    color: ${palette.typo1};
    .ql-syntax {
      margin-top: 2rem;
      margin-bottom: 2rem;
      background: #343a40;
      color: white;
      font-size: 1rem;
      padding: 1rem;
      font-family: 'Fira Mono', monospace;
      border-radius: 8px;
      overflow-x: auto;
    }
    h1,
    h2,
    h3,
    h4 {
      margin-top: 0.5em;
      margin-bottom: 0.5em;
    }
    p + h1,
    p + h2,
    p + h3,
    p + h4 {
      margin-top: 1em;
    }
    ul,
    ol {
      padding-left: 0;
      li + li {
        margin-top: 1rem;
      }
      .ql-indent-1 {
        padding-left: 3em !important;
      }
      .ql-indent-2 {
        padding-left: 4.5em !important;
      }
      .ql-indent-3 {
        padding-left: 6em !important;
      }
      .ql-indent-4 {
        padding-left: 7.5em !important;
      }
      .ql-indent-5 {
        padding-left: 9em !important;
      }
      .ql-indent-6 {
        padding-left: 10.5em !important;
      }
      .ql-indent-7 {
        padding-left: 12em !important;
      }
      .ql-indent-8 {
        padding-left: 13.5em !important;
      }
    }
    ${postStyles}
    font-size: 1.125rem;
    p + blockquote {
      margin-top: 1rem;
    }
    blockquote + p {
      margin-bottom: 1rem;
    }
  }
  .ql-editor.ql-blank::before {
    left: 0px;
    color: ${palette.typo3};
  }
`;
type QuillType = import('quill').Quill;
interface Props {
  value?: string;
  onChangeHTML: (html: string) => void;
  initialHtml: string;
}

Quill.register('modules/markdownShortcuts', MarkdownShortcuts);
function PureEditor({ initialHtml, onChangeHTML }: Props) {
  const Quill = typeof window === 'object' ? require('quill') : () => false;
  const quillElement = useRef<HTMLDivElement | null>(null);
  const quillRef = useRef<QuillType>();
  const formats = [
    'bold',
    'header',
    'italic',
    'link',
    'list',
    'blockquote',
    'image',
    'indent',
    'underline',
    'strike',
    'code-block',
  ];

  useEffect(() => {
    if (!(window as any).HLJS_CONFIGURED) {
      (window as any).HLJS_CONFIGURED = true;
      hljs.configure({
        languages: ['javascript', 'python'],
      });
    }
    // keyboard bindings
    const bindings = {
      removeCodeBlock: {
        key: 'backspace',
        empty: true,
        format: ['code-block'],
        handler: () => {
          quill?.format('code-block', false);
        },
      },
      removeQuote: {
        key: 'enter',
        empty: true,
        format: ['blockquote'],
        handler: () => {
          quill?.format('blockquote', false);
        },
      },
      removeQuoteWithBackspace: {
        key: 'backspace',
        empty: true,
        format: ['blockquote'],
        handler: () =>
          // range: RangeStatic, context: any
          {
            quill?.format('blockquote', false);
          },
      },
    };

    const modules: any = {
      toolbar: {
        container: '#toolbar',
        keyboard: {
          bindings,
        },
        clipboard: {
          matchVisual: false, // https://quilljs.com/docs/modules/clipboard/#matchvisual
        },
      },
    };

    const quill: Quill = new Quill(quillElement.current, {
      modules,
      formats,
      placeholder: '내용을 입력해주세요',
    });
    if (initialHtml) {
      quill?.clipboard.dangerouslyPasteHTML(initialHtml);
    }
    quillRef.current = quill;

    const getIndent = (text: string) => text.length - text.trimLeft().length;
    const onEnter = () => {
      // handle keep-indent
      if (!quill) return;
      const text = quill.getText();
      const selection = quill.getSelection();
      if (!selection) return;
      const lastLineBreakIndex = text.lastIndexOf('\n', selection.index - 1);
      const lastLine = text.substr(
        lastLineBreakIndex + 1,
        selection.index - lastLineBreakIndex - 1,
      );
      const format = quill.getFormat(
        lastLineBreakIndex + 1,
        selection.index - lastLineBreakIndex - 1,
      );

      // indent
      if (format['code-block']) {
        let indentation = getIndent(lastLine);
        const shouldExtraIndent = (() => {
          return /\):$/.test(lastLine) || /\)? ?{$/.test(lastLine);
        })();
        if (shouldExtraIndent) {
          indentation += 2;
        }
        if (indentation === 0) return;
        const spaces = ' '.repeat(indentation);
        if (lastLine === '\n') return;
        console.log(lastLine);
        quill.insertText(selection.index + 1, spaces);
        setTimeout(() => {
          quill.setSelection(selection.index + 1 + indentation, 0);
        });
      }
    };

    quill?.on('text-change', (delta) => {
      onChangeHTML(quill.root.innerHTML);
      const lastOps = delta.ops[delta.ops.length - 1];
      if (lastOps) {
        if (lastOps.insert === '\n') {
          onEnter();
        }
      }
    });
  }, []);

  return (
    <>
      <QuillEditorWrapper>
        <HorizontalBar />
        <Toolbar shadow={false} mode="WYSIWYG" onConvert={() => {}} />
        <Typography>
          <Editor>
            <div ref={quillElement} tabIndex={2} />
          </Editor>
        </Typography>
      </QuillEditorWrapper>
    </>
  );
}

export default PureEditor;
