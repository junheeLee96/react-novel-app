import React from 'react';

const Pagenation = ({
  getnovelLen,
  postPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const pages = [];
  for (let i = 0; i < Math.ceil(getnovelLen / postPerPage); i++) {
    pages.push(i + 1);
  }

  //Pagenation_number
  return (
    <div className="Pagenation">
      {pages.map((num, idx) => (
        <div
          className={
            num === currentPage
              ? 'Pagenation_number Clicknum'
              : 'Pagenation_number'
          }
          key={idx}
          onClick={() => {
            setCurrentPage(num);
          }}
        >
          <div className="Pagenation_number_number">{num}</div>
        </div>
      ))}
    </div>
  );
};

export default Pagenation;
