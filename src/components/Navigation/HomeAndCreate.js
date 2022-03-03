import React from 'react';
import { Link } from 'react-router-dom';

const HomeAndCreate = () => {
  return (
    <div className="HomeAndCreate">
      <Link to="/">Home</Link>

      <Link to="createnovel">About</Link>
    </div>
  );
};

export default HomeAndCreate;
