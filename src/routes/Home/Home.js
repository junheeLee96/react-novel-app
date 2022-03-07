import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Novel from './Novel';
import Loading from 'components/Loading';
import '../../css/routes/Home/Home.css';
import HomeSlider from './HomeSlider';
import Pagenation from './Pagenation';

const Home = ({ getFromhomeTitle, userObj }) => {
  const [getnovel, setGetnovel] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const [init, setInit] = useState(false);

  const Lastindex = currentPage * postPerPage;
  const Firstindex = Lastindex - postPerPage;

  const titleGet = (t) => {
    getFromhomeTitle(t);
  };

  const getNovels = async () => {
    const data = await axios.get('http://localhost:8000/api/getnovels');
    setGetnovel(data.data);
    setInit(true);
  };

  useEffect(() => {
    getNovels();
  }, []);

  const currentPosts = (nos) => {
    let Cpost = 0;
    Cpost = nos.slice(Firstindex, Lastindex);
    return Cpost;
  };

  return (
    <div className="Home">
      <HomeSlider />
      <div className="home-wrap">
        <Novel Cpost={currentPosts(getnovel)} titleGet={titleGet} />
      </div>
      <Pagenation
        getnovelLen={getnovel.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Home;
