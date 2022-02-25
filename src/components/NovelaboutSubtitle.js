import React from 'react';
import '../css/NovelaboutSubtitle.css';
import { Link } from 'react-router-dom';

const NovelaboutSubtitle = ({ idx, subtitle }) => {
  console.log(subtitle);
  return (
    <div>
      <p className="NovelaboutSubtitle">
        <span className="span_idx">{idx + 1}화</span>
        <span>{subtitle}</span>
      </p>
    </div>
  );
};

export default NovelaboutSubtitle;
