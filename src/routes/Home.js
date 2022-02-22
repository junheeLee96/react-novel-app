import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Novel from '../components/Novel';

const Home = () => {
  const [getnovel, setGetnovel] = useState([]);
  const [init, setInit] = useState(false);

  const get = async () => {
    const data = await axios.get('http://localhost:8000/api/getnovels');
    setGetnovel(data.data);
    setInit(true);
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div>
      im Home
      {init
        ? getnovel.map((novel, idx) => (
            <Novel
              key={idx}
              title={novel.title}
              displayName={novel.displayName}
            />
          ))
        : ''}
    </div>
  );
};

export default Home;
