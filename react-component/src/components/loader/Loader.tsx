import React from 'react';
import classes from './loader.module.scss';

const Loader = () => {
  return (
    <div className={classes.loader__wrapper}>
      <div className={classes.loader__inner}></div>
    </div>
  );
};

export default Loader;
