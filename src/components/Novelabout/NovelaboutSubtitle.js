import React from 'react';
import '../../css/NovelAbout/NovelaboutSubtitle.css';
import { Link } from 'react-router-dom';
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
      <div className="NovelaboutSubtitle_subtitle">
        <Link
          to={`/read/${title}/${dateOfUpdate}`}
          className="NovelaboutSubtitle_link"
        >
          <span className="span_idx">{idx + 1}</span>
          <span className="span_subtitle">{subtitle}</span>
        </Link>
        {isOwnNovel ? (
          <>
            <EditSubBtn dateOfUpdate={dateOfUpdate} title={title} />
          </>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default NovelaboutSubtitle;
