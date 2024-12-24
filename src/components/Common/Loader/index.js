import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function Loader() {
  return (
    <div className="loader-background">
      <CircularProgress />
      <div className="loader-text">Loading...</div>
    </div>
  );
}

export default Loader;
