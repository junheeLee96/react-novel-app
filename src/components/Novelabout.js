import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NovelaboutSubtitle from './NovelaboutSubtitle';
import OwnNovelEdit from './OwnNovelEdit';
import GetNovelPhoto from './GetNovelPhoto';
import { useParams } from 'react-router-dom';

const Novelabout = ({ userObj }) => {
  const { title } = useParams();
  const [subtitles, setSubtitles] = useState([]);
  const [isOwnNovel, setIsOwnNovel] = useState(false);
  const [writerId, setWriterId] = useState();

  const getNovelAbout = async () => {
    const data = await axios.get(`http://localhost:8000/api/novelabout`, {
      params: title,
    });
    setSubtitles(data.data[0]);
    setWriterId(data.data[1][0].id);
  };

  useEffect(() => {
    getNovelAbout();
  }, []);

  useEffect(() => {
    if (userObj.uid === writerId) {
      setIsOwnNovel(true);
    }
  }, [writerId]);

  return (
    <div>
      <GetNovelPhoto Ntitle={title} />
      {isOwnNovel && <OwnNovelEdit title={title} />}
      <div>
        {subtitles &&
          subtitles.map((sub, idx) => (
            <NovelaboutSubtitle key={idx} idx={idx} subtitle={sub.subtitle} />
          ))}
      </div>
    </div>
  );
};

export default Novelabout;
