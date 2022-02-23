import React, { useState, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../css/Createnovel.css';
import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

const Createnovel = ({ userObj }) => {
  const [createnovel, setCreatenovel] = useState({
    title: '',
    plot: '',
  });

  const [alretmessage, setAlretmessage] = useState(null);
  const [messagecondition, setMessagecondition] = useState(false);

  const [attachment, setAttachment] = useState();

  const [content, setContent] = useState('');
  const [uploadedImg, setUploadedImg] = useState({
    fileName: '',
    fillPath: '',
  });

  const getValue = (e) => {
    const { name, value } = e.target;
    setCreatenovel({
      ...createnovel,
      [name]: value,
    });
  };

  const onCreatenovelBtnClick = () => {
    const id = userObj.uid;
    const formData = new FormData();
    formData.append('img', content);
    /* axios
      .post('http://localhost:8000/upload', formData)
      .then((res) => {
        const { fileName } = res.data;
        console.log(fileName);
        setUploadedImg({
          fileName,
          filePath: `../server/public/img/${fileName}`,
        });
        console.log(uploadedImg);
      })
      .catch((err) => {
        console.error(err);
      });
      */

    axios
      .post('http://localhost:8000/upload', formData)
      .then((res) => {
        axios.post('http://localhost:8000/api/create', {
          title: createnovel.title,
          plot: createnovel.plot,
          id: id,
          displayName: userObj.displayName,
          image: res.data.fileName,
        });
      })
      .catch((err) => console.log(err));

    /*
    axios
      .post('http://localhost:8000/api/create', {
        title: createnovel.title,
        plot: createnovel.plot,
        id: id,
        displayName: userObj.displayName,
      })
      .then((title) => {
        console.log(console.log(title.data));
      });*/
  };

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

  /*
  const onFileChange = (e) => {
    const {
      target: { files },
    } = e;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishEvent) => {
      const {
        currentTarget: { result },
      } = finishEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const fileInput = useRef();

  const onClearAttachment = () => {
    setAttachment(null);
    fileInput.current.value = null;
  };
*/

  const onChangeI = (e) => {
    setContent(e.target.files[0]);
  };

  const onSubmitF = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(uploadedImg);
  }, [uploadedImg]);

  return (
    <div className="Createnovel">
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
      {/*
        <form method="post" encType="multipart/form-data">
        <div className="button"></div>
        <input
          type="file"
          accept="image/*"
          ref={fileInput}
          onChange={onFileChange}
        />
        {attachment && (
          <div>
            <img src={attachment} width="50px" height="50px" />
            <button onClick={onClearAttachment}>Clear</button>
          </div>
        )}
        </form>
        */}

      <>
        <form onSubmit={onSubmitF}>
          {uploadedImg ? (
            <>
              <img src={uploadedImg.fillPath} alt="" />
              <h3>{uploadedImg.fileName}</h3>
            </>
          ) : (
            ''
          )}
          <input type="file" onChange={onChangeI} />
        </form>
      </>

      <button className="submit-button" onClick={onCreatenovelBtnClick}>
        입력
      </button>
    </div>
  );
};

export default Createnovel;
