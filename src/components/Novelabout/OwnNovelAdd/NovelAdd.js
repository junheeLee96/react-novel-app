import React, { useState, useEffect, useRef } from 'react';
import '../../../css/NovelAdd.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import NovelAddBtn from './NovelAddBtn';

const NovelAdd = ({ userObj }) => {
  const inputRef = useRef();

  const [subtitle, setSubtitle] = useState({
    title: '',
    content: '',
  });

  const getValue = (e) => {
    const { name, value } = e.target;
    setSubtitle({
      ...subtitle,
      title: value,
    });
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <div className="NovelAdd"></div>
      <div className="form-wrapper">
        <input
          className="title-input"
          type="text"
          ref={inputRef}
          placeholder="소제목"
          onChange={getValue}
          name="subtitle"
        />
        <CKEditor
          editor={ClassicEditor}
          data="<p></p>"
          onChange={(event, editor) => {
            const data = editor.getData();
            setSubtitle({
              ...subtitle,
              content: data,
            });
          }}
        />
      </div>
      <NovelAddBtn subtitle={subtitle} userObj={userObj} />
    </div>
  );
};

export default NovelAdd;
