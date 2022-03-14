import React, { useEffect, useState, useMemo } from 'react';
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
  const [CurrentIdx, setCurrentIdx] = useState(0);
  const [LastIdx, setLastIdx] = useState(0);

  const getContent = async () => {
    const data = await axios.get(`http://localhost:8000/novelshowcontent`, {
      params: TitleAndDate,
    });
    const ConData = data.data;
    setCurrentIdx(ConData[0][0].idx);
    setContent(ConData[0][0].content);
    setLastIdx(ConData[1][0].idx);
  };

  useEffect(() => {
    getContent();
  }, []);
  useEffect(() => {
    getContent();
    setIsClick(!isClick);
  }, [dateOfUpdate]);

  return (
    <>
      <div
        className="NovelaboutShowContent"
        style={isClick ? { height: '84vh' } : { height: '100vh' }}
        onClick={() => {
          setIsClick(!isClick);
        }}
        onContextMenu={(e) => {
          e.preventDefault();
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
      {isClick && (
        <div className="Content_nav" style={{ height: '5vh' }}>
          <ContentNav
            title={title}
            CurrentIdx={CurrentIdx}
            dateOfUpdate={dateOfUpdate}
            LastIdx={LastIdx}
          />
        </div>
      )}
    </>
  );
};

export default NovelaboutShowContent;
