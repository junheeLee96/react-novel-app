import React, { useState, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../../css/CreateNovel/Createnovel.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Createnovel = ({ userObj }) => {
  const inputRef = useRef();
  const fileInput = useRef();
  const [createnovel, setCreatenovel] = useState({
    title: '',
    plot: '',
  });

  const [messagecondition, setMessagecondition] = useState(false);
  const [createComplete, setCreateComplete] = useState(true);

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

  const messageHandler = (res) => {
    setMessagecondition(res.data);
    setCreateComplete(res.data);
  };

  const onCreatenovelBtnClick = () => {
    const id = userObj.uid;
    const formData = new FormData();
    if (content) {
      formData.append('img', content);
      axios.post('http://localhost:8000/upload', formData).then((res) => {
        axios
          .post('http://localhost:8000/api/create', {
            title: createnovel.title,
            plot: createnovel.plot,
            id: id,
            displayName: userObj.displayName,
            image: res.data.fileName,
          })
          .then((res) => {
            messageHandler(res);
          });
      });
    } else {
      axios
        .post('http://localhost:8000/api/create', {
          title: createnovel.title,
          plot: createnovel.plot,
          id: id,
          displayName: userObj.displayName,
        })
        .then((res) => {
          messageHandler(res);
        });
    }
  };

  const onClearAttachment = () => {
    setAttachment(null);
    fileInput.current.value = null;
  };

  const onChangeI = (e) => {
    setContent(e.target.files[0]);
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

  const onSubmitF = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(uploadedImg);
  }, [uploadedImg]);

  const onMessageConfirm = () => {
    setMessagecondition(false);
  };

  const onCreatenovelCompleteBtn = () => {
    setCreateComplete(true);
  };

  return (
    <div className="Createnovel">
      <div className="Create_wrap">
        {messagecondition ? (
          <div>
            <div>
              이미 존재하는 소설입니다
              <div className="message_comfirm_box" onClick={onMessageConfirm}>
                확인
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div>
        {createComplete ? (
          ''
        ) : (
          <div>
            <div>
              소설이 등록되었습니다.
              <Link to="/">
                <div
                  className="message_comfirm_box"
                  onClick={onCreatenovelCompleteBtn}
                >
                  확인
                </div>
              </Link>
            </div>
          </div>
        )}
        <div className="form-wrapper">
          <input
            className="title-input"
            type="text"
            ref={inputRef}
            placeholder="제목"
            onChange={getValue}
            name="title"
          />
          <CKEditor
            editor={ClassicEditor}
            data="<p>줄거리를 입력하세요.</p>"
            onChange={(event, editor) => {
              const data = editor.getData();
              setCreatenovel({
                ...createnovel,
                plot: data,
              });
            }}
          />
        </div>

        <>
          <div>
            {attachment ? (
              <div>
                <img src={attachment} width="100px" height="100px" alt="" />{' '}
                <FontAwesomeIcon
                  icon={faXmark}
                  className="nav_user"
                  onClick={onClearAttachment}
                />
              </div>
            ) : (
              '선택된 커버 이미지가 없습니다.'
            )}
          </div>
          <form onSubmit={onSubmitF}>
            <input type="file" onChange={onChangeI} ref={fileInput} />
          </form>
        </>

        <button className="submit-button" onClick={onCreatenovelBtnClick}>
          입력
        </button>
      </div>
    </div>
  );
};

export default Createnovel;
