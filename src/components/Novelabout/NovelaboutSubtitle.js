import React from 'react';
import '../../css/NovelAbout/NovelaboutSubtitle.css';
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
    <>
      <Link
        to={`/read/${title}/${dateOfUpdate}`}
        className="NovelaboutSubtitle_link"
      >
        <div className="NovelaboutSubtitle_subtitle">
          <span className="span_idx">{idx + 1}</span>
          <span className="span_subtitle">{subtitle}</span>
        </div>
        {isOwnNovel ? (
          <div className="EditSubBtn">
            <EditSubBtn dateOfUpdate={dateOfUpdate} title={title} />
          </div>
        ) : (
          ''
        )}
      </Link>
    </>
  );
};

export default NovelaboutSubtitle;
