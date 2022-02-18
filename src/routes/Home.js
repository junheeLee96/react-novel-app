import React, { useState, useEffect } from 'react';
import { authService } from '../fBase';
import { dbService } from '../fBase';

const Home = () => {
  const [novel, setNovel] = useState([]);
  const [load, setLoad] = useState(false);

  const onSignOutClick = () => {
    authService.signOut();
    console.log('out');
  };

  const getnovel = async () => {
    //const novels = await dbService.collection('novel').get();
    {
      /*console.log(novels);
      novels.forEach((n) => {
        const novelobj = {
          ...n.data(),
          id: n.id,
        };
        setNovel((prev) => [novelobj, ...prev]);
      });
    */
    }
    dbService
      .collection('novel')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data());
          setNovel((prev) => [...prev, doc.id]);
        });
      });
  };

  useEffect(() => {
    getnovel();
    console.log(novel);
  }, []);

  return (
    <div>
      im Home
      <button onClick={onSignOutClick}>Sign Out</button>
      {/* 
     } <>
     {novel.map((n) => (
       <div>
       <h4>{n.contents}</h4>
       </div>
       ))}
       </>
     */}
    </div>
  );
};

export default Home;
