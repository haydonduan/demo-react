import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

export class ThinEditor extends React.Component<any, any> {
  handleEditorChange = (e: any) => {
    console.log('Content was updated:', e.target.getContent());
  }

  render() {
    return (
      <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help'
        }}
        onChange={this.handleEditorChange}
      />
    );
  }
}
