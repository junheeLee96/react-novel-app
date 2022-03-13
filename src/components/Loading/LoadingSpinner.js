import React from 'react';

const LoadingSpinner = () => {
  return (
    <div>
      <div className="spinner-border Spinner" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
