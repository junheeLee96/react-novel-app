import React from 'react';
import { Link } from 'react-router-dom';

const HomeAndCreate = () => {
  return (
    <div className="HomeAndCreate">
      <Link to="/">Home</Link>

      <Link to="createnovel">소설 등록</Link>
    </div>
  );
};

export default HomeAndCreate;
