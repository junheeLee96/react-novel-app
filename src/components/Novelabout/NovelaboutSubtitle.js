import React from 'react';
import '../../css/NovelaboutSubtitle.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EditSubBtn from './NovelEdit/EditSubBtn';

const NovelaboutSubtitle = ({
  idx,
  subtitle,
  isOwnNovel,
  dateOfUpdate,
  title,
}) => {
  return (
    <div>
      <Link
        to={`/read/${title}/${dateOfUpdate}`}
        className="NovelaboutSubtitle"
      >
        <div>
          <span className="span_idx">{idx + 1}화</span>
          <span>{subtitle}</span>
        </div>
        {isOwnNovel ? (
          <div>
            <EditSubBtn dateOfUpdate={dateOfUpdate} title={title} />
          </div>
        ) : (
          ''
        )}
      </Link>
    </div>
  );
};

export default NovelaboutSubtitle;
