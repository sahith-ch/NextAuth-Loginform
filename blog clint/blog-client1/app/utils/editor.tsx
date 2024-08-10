'use client'
import { auth } from '@/auth';
import axios from 'axios';
import { headers } from 'next/headers';
import React, { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const Editor = ({session}) => {

  const [editorHtml, setEditorHtml] = useState('');
  const quillRef = useRef(null);
  const [buttonPosition, setButtonPosition] = useState({ top: '0px', right:'90px' });
  const [textHtml, settextHtml] = useState('');
console.log(session.user)
  // axios.post("http://localhost:3001/articles",editorHtml,{
  //   headers:{
  //     "Content-Type":'application/html',
  //     "authorization":"asdasd"
  // }})



  return (
    <div >
<div >
<ReactQuill
      theme='bubble'
        ref={quillRef}
        value={textHtml}
        placeholder='TITLE'
        onChange={settextHtml}
        modules={{
          toolbar: [
            [{ header: '1' }, { header: '2' }],
            [{ size: [] }],
            ['bold', 'italic', 'blockquote'],
         
          ],
          
        }
        }
        formats={Editor.formats}
      />
     
</div>
      <ReactQuill
      theme='bubble'
        ref={quillRef}
        value={editorHtml}
        placeholder='WRITE SOMTHING'
        onChange={setEditorHtml}
        modules={Editor.modules}
        formats={Editor.formats}
      />
    </div>
  );
};

Editor.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    ['clean'],
  ],
  
};

Editor.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'image',
];


export default Editor;
