import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EditSubBtn = ({ dateOfUpdate, title }) => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate(`/update/${title}/${dateOfUpdate}`);
        }}
      >
        수정하기
      </button>
    </div>
  );
};

export default EditSubBtn;
