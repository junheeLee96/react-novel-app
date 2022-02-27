import React from 'react';
import Parser from 'html-react-parser';

const NovelaboutShowPlot = ({ plot }) => {
  return <div>{Parser(`${plot}`)}</div>;
};

export default NovelaboutShowPlot;
