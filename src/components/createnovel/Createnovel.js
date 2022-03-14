import React, { useState, useRef, useContext } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../../css/CreateNovel/Createnovel.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from 'components/Loading/LoadingSpinner';
import { ThemeContext } from '../../ThemeContext/ThemeContext';

const Createnovel = ({ userObj }) => {
  const { setIsPost } = useContext(ThemeContext);
  const { setIsSpinnerLoading } = useContext(ThemeContext);
  const { setCreateComplete } = useContext(ThemeContext);
  const { setIsExistSameNovel } = useContext(ThemeContext);

  const inputRef = useRef();
  const fileInput = useRef();
  const [createnovel, setCreatenovel] = useState({
    title: '',
    plot: '',
  });

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

  const messageHandler = (res) => {
    if (res.data === false) {
      setCreateComplete(true);
    } else if (res.data === true) {
      setIsExistSameNovel(true);
    }
    setIsSpinnerLoading(false);
    console.log(!res.data);
  };

  const onCreatenovelBtnClick = () => {
    setIsPost(true);
    const id = userObj.uid;
    const formData = new FormData();
    if (content) {
      formData.append('img', content);
      axios.post('http://localhost:8000/upload', formData).then((res) => {
        axios
          .post('http://localhost:8000/create', {
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
        .post('http://localhost:8000/create', {
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

  const onMessageConfirm = () => {
    setMessagecondition(false);
  };

  const onCreatenovelCompleteBtn = () => {
    setCreateComplete(true);
  };

  return (
    <div className="Createnovel">
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
  );
};

export default Createnovel;
