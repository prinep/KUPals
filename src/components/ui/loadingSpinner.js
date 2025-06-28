import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="w-24 h-24 border-6 border-solid border-current border-b-transparent rounded-full animate-spin text-[#2ACAA8]"
        role="status"
      >
        <span className="sr-only primary">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;