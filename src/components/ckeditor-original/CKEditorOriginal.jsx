import React from "react";
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

export default class CKEditorOriginal extends React.Component {

    componentDidMount() {
        ClassicEditor.create(document.querySelector("#editor-owl"), {
            toolbar: {
                items: [
                    'heading',
                    '|',
                    'bold',
                    'italic',
                    'link',
                    'bulletedList',
                    'numberedList',
                    '|',
                    'indent',
                    'outdent',
                    '|',
                    'imageUpload',
                    'blockQuote',
                    'insertTable',
                    'mediaEmbed',
                    'undo',
                    'redo',
                    'fontColor',
                    'fontFamily',
                ]
            }
        }).then(editor => {
            console.log('----->', Array.from(editor.ui.componentFactory.names()));
        }).catch(error => {
            console.error('error:', error)
        });
    }

    render() {
        return (
            <textarea id="editor-owl" style={{ backGroundColor: 'red' }}>
            </textarea>
        );
    }
}
