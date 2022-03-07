import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import NovelaboutSubtitle from './NovelaboutSubtitle';
import OwnNovelAddBtn from './OwnNovelAdd/OwnNovelAddBtn';
import NovelaboutShowPhoto from './NovelaboutShowPhoto';
import { useParams } from 'react-router-dom';
import NovelaboutShowtitle from './NovelaboutShowtitle';
import NovelaboutShowPlot from './NovelaboutShowPlot';
import NovelaboutShowName from './NovelaboutShowName';
import '../../css/NovelAbout/Novelabout.css';

const Novelabout = ({ userObj, setisOwnNovelFromRouter }) => {
  const { title } = useParams();
  const [subtitles, setSubtitles] = useState([]);
  const [isOwnNovel, setIsOwnNovel] = useState(false);
  const [writerId, setWriterId] = useState();
  const [plot, setPlot] = useState('');
  const [novelImg, setNovelImg] = useState('');
  const [displayName, setDisplayName] = useState('');

  const getNovelAbout = async () => {
    const data = await axios.get(`http://localhost:8000/api/novelabout`, {
      params: title,
    });
    const getData = data.data;
    setSubtitles(getData[0]);
    setWriterId(getData[1][0].id);
    setPlot(getData[1][0].plot);
    setNovelImg(getData[1][0].image);
    setDisplayName(getData[1][0].displayName);
  };

  useEffect(() => {
    getNovelAbout();
  }, []);

  useEffect(() => {
    if (userObj.uid === writerId) {
      setIsOwnNovel(true);
      setisOwnNovelFromRouter(true);
    }
  }, [writerId]);

  return (
    <div className="Novelabout">
      <div className="Novelabout_wrap">
        <div className="Novelaboout_showbox">
          <div className="Novelabout_head">
            <div className="Novelabout_img">
              <NovelaboutShowPhoto novelImg={novelImg} />
            </div>
            <div className="Novelabout_scrip">
              <div className="Novelabout_tda">
                <div>
                  <NovelaboutShowtitle title={title} />
                  <NovelaboutShowName displayName={displayName} />
                </div>
                {isOwnNovel && (
                  <>
                    <OwnNovelAddBtn title={title} />
                  </>
                )}
              </div>

              <NovelaboutShowPlot plot={plot} />
            </div>
          </div>
          <div className="Novelabout_SubTitle">
            {subtitles &&
              subtitles.map((sub, idx) => (
                <NovelaboutSubtitle
                  key={idx}
                  idx={idx}
                  subtitle={sub.subtitle}
                  dateOfUpdate={sub.dateOfUpdate}
                  isOwnNovel={isOwnNovel}
                  title={title}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novelabout;
