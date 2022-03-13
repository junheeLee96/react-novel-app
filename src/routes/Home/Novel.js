import React, { useContext } from 'react';
import '../../css/routes/Home/Novel.css';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext/ThemeContext';

const Novel = ({ Cpost }) => {
  const { getNtitle } = useContext(ThemeContext);
  const navigate = useNavigate();
  const ImgSrc = process.env.PUBLIC_URL + `/img/`;
  const OriginImage = process.env.PUBLIC_URL + '/img/originImg.jpg';

  return (
    <>
      {Cpost.map((novel, idx) => (
        <div
          key={idx}
          className="novel"
          onClick={() => {
            getNtitle(novel.title);
            navigate(`/novel/${novel.title}`);
          }}
        >
          <img
            src={novel.image ? ImgSrc + novel.image : OriginImage}
            alt="Cover_imgage"
            className="home_n_cover"
          />
          <h2 className="novel_title">
            {novel.title.length > 7
              ? novel.title.substr(0, 7) + '..'
              : novel.title}
          </h2>
          <h4>{novel.displayName}</h4>
        </div>
      ))}
    </>
  );
};
/*
const Novel = ({ title, displayName, image, titleGet }) => {
  const img = process.env.PUBLIC_URL + `/img/${image}`;
  const origin = process.env.PUBLIC_URL + `/img/originImg.jpg`;
  const imgWidth = '240px';
  const imgHeight = '260px';
  const [novelTitle, setNovelTitle] = useState(title);

  return (
    
    <Link
      to={`/novel/${title}`}
      className="novel"
      onClick={() => titleGet(title)}
    >
      <div className="Novel">
        <img
          src={image ? img : origin}
          alt="Cover_imgage"
          width={imgWidth}
          height={imgHeight}
        />
        <h2>{title.length > 7 ? title.substr(0, 7) + '..' : title}</h2>
        <h4>{displayName}</h4>
      </div>
    </Link>
  );
};*/

export default Novel;
