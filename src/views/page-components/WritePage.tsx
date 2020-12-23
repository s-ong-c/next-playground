import * as React from 'react';

import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('../components/editor/QuillEditor'), {
  ssr: false,
});
function WritePage() {
  const onConvertEditorMode = (markdown: string) => {};
  const onChangeTitle = (title: string) => console.log(title);
  const onChangeHTML = (html: string) => console.log(html);
  const onChangeTextBody = (textBody: string) => console.log(textBody);
  return (
    <Editor
      title={'asss'}
      onConvertEditorMode={onConvertEditorMode}
      onChangeTitle={onChangeTitle}
      initialHtml={''}
      tagInput={<div />}
      onChangeHTML={onChangeHTML}
      onChangeTextBody={onChangeTextBody}
      footer={<div />}
      onUpload={() => {}}
      lastUploadedImage={null}
    />
  );
}

export default WritePage;
