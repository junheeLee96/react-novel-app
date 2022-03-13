import React from 'react';
import '../../css/Navigation/Symbol.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Symbol = () => {
  const navigate = useNavigate();
  return (
    <div
      className="Symbol"
      style={{ cursor: 'pointer' }}
      onClick={() => {
        navigate('/');
      }}
    >
      <FontAwesomeIcon icon={faBook} className="sym_book" />
      사이트 제목{''}
    </div>
  );
};

export default Symbol;
