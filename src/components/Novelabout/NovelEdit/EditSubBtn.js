import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const EditSubBtn = ({ dateOfUpdate, title }) => {
  const navigate = useNavigate();

  return (
    <div className="EditSubBtn">
      <FontAwesomeIcon
        icon={faGear}
        className="nav_user"
        onClick={() => {
          navigate(`/update/${title}/${dateOfUpdate}`);
        }}
      />
    </div>
  );
};

export default EditSubBtn;
