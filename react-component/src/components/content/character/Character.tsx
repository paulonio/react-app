import React, { useContext } from 'react';
import { SearchContext } from 'context/context';
import { Link, Navigate, useParams } from 'react-router-dom';

import classes from './character.module.scss';

const Character = () => {
  const { state } = useContext(SearchContext);
  const { id } = useParams();
  const [data] = state.rickData!.filter((item) => item.id === Number(id));

  return data ? (
    <>
      <Link className={classes.back__link} to="/">
        Back
      </Link>
      <div className={classes.container}>
        <div className={classes.data}>
          <div className={classes.image}>
            <img src={data.image} alt="Image" />
          </div>
          <div className={classes.content}>
            <p className={classes.title}>{data.name}</p>
            <p className={classes.description}>
              <span className={classes.description__title}>Gender: </span>
              {data.gender}
            </p>
            <p className={classes.description}>
              <span className={classes.description__title}>Origin location: </span>
              {data.origin!.name}
            </p>
            <p className={classes.description}>
              <span className={classes.description__title}>Last known location: </span>
              {data.location!.name}
            </p>
            <p className={classes.description}>
              <span className={classes.description__title}>The species of the character: </span>
              {data.species}
            </p>
            <p className={classes.description}>
              <span className={classes.description__title}>Type or subspecies: </span>
              {data.type ? data.type : 'None'}
            </p>
            <p className={classes.description}>
              <span className={classes.description__title}>Has been created: </span>
              {data.created!.split('T')[0]}
            </p>
            <p className={classes.description}>
              <span className={classes.description__title}>The status of the character: </span>
              {data.status}
            </p>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default Character;
