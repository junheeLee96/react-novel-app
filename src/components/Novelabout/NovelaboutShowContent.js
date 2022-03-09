import React, { useEffect, useState } from 'react';
import '../../css/NovelAbout/NovelaboutShowContent.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Parser from 'html-react-parser';
import ContentNav from './ContentNav';

const NovelaboutShowContent = () => {
  const { title } = useParams();
  const { dateOfUpdate } = useParams();
  const TitleAndDate = [title, dateOfUpdate];

  const [content, setContent] = useState('');
  const [isClick, setIsClick] = useState(false);
  const [idx, setIdx] = useState(0);

  const getContent = async () => {
    const data = await axios.get(`http://localhost:8000/api/novelshowcontent`, {
      params: TitleAndDate,
    });
    const NovelData = data.data[0];
    setIdx(NovelData.idx);
    setContent(NovelData.content);
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <>
      <div
        className="NovelaboutShowContent"
        style={isClick ? { height: '84vh' } : { height: '100vh' }}
        onClick={() => {
          setIsClick(!isClick);
        }}
      >
        {content ? (
          <div className="ShowContent">
            <br />
            {Parser(content)}
          </div>
        ) : (
          'Loading...'
        )}
      </div>
      {isClick ? (
        <div className="Content_nav" style={{ height: '5vh' }}>
          <ContentNav title={title} idx={idx} />
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default NovelaboutShowContent;
