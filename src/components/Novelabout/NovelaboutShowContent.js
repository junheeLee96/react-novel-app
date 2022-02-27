import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Parser from 'html-react-parser';

const NovelaboutShowContent = () => {
  const { title } = useParams();
  const { dateOfUpdate } = useParams();
  const TitleAndDate = [title, dateOfUpdate];

  const [content, setContent] = useState('');

  const getContent = async () => {
    const data = await axios.get(`http://localhost:8000/api/novelshowcontent`, {
      params: TitleAndDate,
    });
    setContent(data.data[0].content);
  };

  useEffect(() => {
    getContent();
  }, []);

  return <div>{content ? <div>{Parser(content)}</div> : 'Loading...'}</div>;
};

export default NovelaboutShowContent;
