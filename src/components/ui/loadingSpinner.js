import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
<<<<<<< HEAD
        className="w-24 h-24 border-8 border-solid border-current border-b-transparent rounded-full animate-spin text-[#158080]"
=======
        className="w-24 h-24 border-6 border-solid border-current border-b-transparent rounded-full animate-spin text-[#2ACAA8]"
>>>>>>> 671bf78628968ae9ec7b88462b10d390e2b762ac
        role="status"
      >
        <span className="sr-only ">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;  