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

  // const [alretmessage, setAlretmessage] = useState(null);
  //const [messagecondition, setMessagecondition] = useState(false);

  const getValue = (e) => {
    const { name, value } = e.target;
    setCreatenovel({
      ...createnovel,
      [name]: value,
    });
  };

  const onCreatenovelBtnClick = async () => {
    const id = userObj.uid;

    await axios.post('http://localhost:8000/api/create', {
      title: createnovel.title,
      plot: createnovel.plot,
      id: id,
      displayName: userObj.displayName,
    });
  };
  /*
  useEffect(() => {
    if (alretmessage) {
      setMessagecondition(true);
    } else if (!setMessagecondition) {
      alretmessage(false);
    }
  }, [alretmessage, messagecondition]);

  const onMessageConfirmClick = () => {
    setMessagecondition(false);
  };

  useEffect(() => {
    return () => {
      setAlretmessage(null);
      setMessagecondition(false);
      setCreatenovel({ title: '', plot: '' });
    };
  }, []);
  */

  return (
    <div className="Createnovel">
      {/* 
      {messagecondition && alretmessage ? (
        <div className="message_container">
          <div className="message_top">
            <div className="message_top_inside">알림</div>
          </div>
          <div className="message">같은 이름으로 이미 등록된 소설입니다.</div>
          <button className="confirm" onClick={onMessageConfirmClick}>
            확인
          </button>
        </div>
      ) : (
        ''
      )}
          */}

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
          placeholder="줄거리를 입력하세요."
          onChange={(event, editor) => {
            const data = editor.getData();
            setCreatenovel({
              ...createnovel,
              plot: data,
            });
          }}
        />
      </div>
      <form method="post" enctype="multipart/form-data">
        <div class="button">
          <label for="chooseFile">👉 CLICK HERE! 👈</label>
        </div>
        <input type="file" id="chooseFile" name="chooseFile" accept="image/*" />
      </form>
      <button className="submit-button" onClick={onCreatenovelBtnClick}>
        입력
      </button>
    </div>
  );
};

export default Createnovel;
