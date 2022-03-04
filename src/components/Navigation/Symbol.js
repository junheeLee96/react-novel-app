import React from 'react';
import '../../css/Navigation/Symbol.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Symbol = () => {
  return (
    <div className="Symbol">
      <FontAwesomeIcon icon={faBook} className="sym_book" />
      Novelia{''}
    </div>
  );
};

export default Symbol;
