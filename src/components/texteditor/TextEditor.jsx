import React, { useEffect, useRef } from "react";
import Quill from 'quill';
import "quill/dist/quill.snow.css"; // Ensure you import Quill's CSS
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css'; // Import highlight.js style

const formats = [
  'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
  'list', 'indent',
  'link', 'image', 'video',
  'color', 'background',
  'align', 'direction',
  'script', 'formula'
];

const toolbarOptions = [
  [{ 'size': ['large', false, 'small'] }],
  [{ 'font': [] }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ 'color': [] }, { 'background': [] }],
  [{ 'script': 'sub' }, { 'script': 'super' }],
  ['blockquote', 'code-block'],
  [{ 'align': [] }],
  [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
  ['link', 'image', 'video', 'formula'],
  ['clean'] // remove formatting button
];

const TextEditor = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        formats,
        modules: {
          syntax: { hljs },
          toolbar: toolbarOptions
        },
        placeholder: 'Write your content here...',
      });

      // Load content from local storage if available
      const savedContent = localStorage.getItem('editorContent');
      if (savedContent) {
        quillRef.current.root.innerHTML = savedContent;
      }

      // Save content to local storage on text change
      quillRef.current.on('text-change', () => {
        const content = quillRef.current.root.innerHTML;
        localStorage.setItem('editorContent', content);
      });
    }
  }, []);
  return (
    <div className="inline-block w-auto">
      <div ref={editorRef} id="editor" />
      <style jsx="true">{`
        #editor .ql-container {
          height: calc(100% - 42px);
          border-radius: 0.5rem;
        }
        #editor .ql-toolbar {
          display: block;
          border-radius: 0.5rem 0.5rem 0 0;
        }
        #editor .ql-editor h1 {
          color: black;
        }
        #editor .ql-editor {
          color: black;
        }
        #editor .ql-editor::selection {
          color: black;
        }
        #editor pre.ql-syntax {
          background-color: #f3f3f3;
          color: black; /* Set code color to black */
          padding: 10px;
          border-radius: 5px;
          overflow: auto;
        }
      `}</style>
    </div>
  );
}

export default TextEditor;
