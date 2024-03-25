'use client';

const error = (error) => {

  return <div>
    <h1>Error</h1>
    <p className="text-red-500">{error.error.message}</p>
  </div>
};

export default error;