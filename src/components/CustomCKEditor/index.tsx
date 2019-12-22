import React, { Component } from 'react';
// @ts-ignore
import CKEditor from '@ckeditor/ckeditor5-react';
// @ts-ignore
import ClassicEditor from '@hadyon_owl/ckeditor5-build-classic';// @ts-ignore

const config = {
  toolbar: ["undo", "redo", "bold", "italic", "blockQuote", "ckfinder", "imageTextAlternative", "imageUpload", "heading", "imageStyle:full", "imageStyle:side", "indent", "outdent", "link", "numberedList", "bulletedList", "mediaEmbed", "insertTable", "tableColumn", "tableRow", "mergeTableCells"]
}

class CustomCKEditor extends Component {

  render() {
    return (
        <CKEditor
          editor={ClassicEditor}
          config={config}
          data="<p>Hello from CKEditor 5!</p>"
          onInit={(editor: any) => {
            console.log('----->', Array.from( editor.ui.componentFactory.names() ));

            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event: any, editor: any) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event: any, editor: any) => {
            console.log('Focus.', editor);
          }}
        />
    );
  }
}

export default CustomCKEditor;
