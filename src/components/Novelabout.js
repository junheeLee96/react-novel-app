import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NovelaboutSubtitle from './NovelaboutSubtitle';

const Novelabout = ({ Ntitle }) => {
  const [subtitles, setSubtitles] = useState([]);

  const getNovelAbout = async () => {
    const data = await axios.get(`http://localhost:8000/api/novelabout`, {
      params: Ntitle,
    });
    setSubtitles(data.data);
    //console.log(data.data[0].subtitle);
  };

  useEffect(() => {
    getNovelAbout();
  }, []);

  useEffect(() => {
    //console.log(subtitles);
  }, [subtitles]);

  return (
    <div>
      i'm Novelabout Page The novel is {Ntitle}
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
