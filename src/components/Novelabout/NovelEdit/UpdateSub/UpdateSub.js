import React, { useEffect, useState } from 'react';
import '../../../../css/UpdateSub.css';
import { useParams } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import UpdateSubBtn from './UpdateSubBtn';

const UpdateSub = () => {
  const { title } = useParams();
  const { dateOfUpdate } = useParams();
  const titleAndDate = [title, dateOfUpdate];

  const [getValue, setGetValue] = useState({});
  const [originContent, setOriginContent] = useState('');

  const onPageLoad = async () => {
    const data = await axios.get(`http://localhost:8000/api/novelupdate`, {
      params: titleAndDate,
    });
    setGetValue({
      subtitle: data.data[0].subtitle,
      content: data.data[0].content,
    });
    setOriginContent(data.data[0].content);
  };

  useEffect(() => {
    onPageLoad();
  }, []);

  return (
    <div>
      <div className="UpdateSub">
        <div className="form-wrapper">
          <input
            className="title-input"
            type="text"
            placeholder="제목"
            value={getValue.subtitle}
            onChange={(e) => {
              setGetValue({
                ...getValue,
                title: e.target.value,
              });
            }}
            name="title"
          />
          <CKEditor
            editor={ClassicEditor}
            data="<p></p>"
            placeholder="줄거리를 입력하세요."
            data={getValue.content}
            onChange={(event, editor) => {
              const data = editor.getData();
              setGetValue({
                ...getValue,
                content: data,
              });
            }}
          />
        </div>
        <UpdateSubBtn
          getValue={getValue}
          title={title}
          dateOfUpdate={dateOfUpdate}
          originContent={originContent}
        />
      </div>
    </div>
  );
};

export default UpdateSub;
