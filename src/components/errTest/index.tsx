import React from 'react';

function errorTest() {
  throw new Error('Oops, something went wrong!');
  return <div>Hello World!</div>;
}

export default errorTest;
