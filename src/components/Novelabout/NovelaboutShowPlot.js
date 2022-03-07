import React from 'react';
import Parser from 'html-react-parser';

const NovelaboutShowPlot = ({ plot }) => {
  return <div className="Novelabout_plot">{Parser(`${plot}`)}</div>;
};

export default NovelaboutShowPlot;
