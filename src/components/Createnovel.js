import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../css/Createnovel.css';
import axios from 'axios';

const Createnovel = ({ userObj }) => {
  const [createnovel, setCreatenovel] = useState({
    title: '',
    plot: '',
  });

  const [alretmessage, setAlretmessage] = useState(null);
  const [messagecondition, setMessagecondition] = useState(false);

  const getValue = (e) => {
    const { name, value } = e.target;
    setCreatenovel({
      ...createnovel,
      [name]: value,
    });
  };

  const onCreatenovelBtnClick = () => {
    const id = userObj.uid;
    axios
      .post('http://localhost:8000/api/create', {
        title: createnovel.title,
        plot: createnovel.plot,
        id: id,
      })
      .then((res) => {
        setAlretmessage(res.data);
      });
  };

  useEffect(() => {
    if (alretmessage) {
      setMessagecondition(true);
    } else if (!setMessagecondition) {
      alretmessage(false);
    }
  }, [alretmessage, setMessagecondition]);

  const onMessageConfirmClick = () => {
    setMessagecondition(false);
  };

  return (
    <div className="Createnovel">
      {messagecondition && alretmessage ? (
        <div className="message_container">
          <div className="message_top">
            <div className="message_top_inside">알림</div>
          </div>
          <div className="message">이미 등록된 소설입니다.</div>
          <button className="confirm" onClick={onMessageConfirmClick}>
            확인
          </button>
        </div>
      ) : (
        ''
      )}

      <div className="form-wrapper">
        <input
          className="title-input"
          type="text"
          placeholder="제목"
          onChange={getValue}
          name="title"
        />
        <CKEditor
          editor={ClassicEditor}
          data="<p></p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setCreatenovel({
              ...createnovel,
              plot: data,
            });
            console.log(createnovel);
          }}
        />
      </div>
      <button className="submit-button" onClick={onCreatenovelBtnClick}>
        입력
      </button>
    </div>
  );
};

export default Createnovel;
