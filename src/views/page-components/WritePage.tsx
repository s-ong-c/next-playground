import * as React from 'react';

import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('../components/editor/QuillEditors'), {
  ssr: false,
});
function WritePage() {
  const [html, setHtml] = React.useState<string>('');
  const onChangeHTML = (html: string) => {
    setHtml(html);
  };
  return (
    <Editor initialHtml={html} onChangeHTML={onChangeHTML} />
  );
}

export default WritePage;
