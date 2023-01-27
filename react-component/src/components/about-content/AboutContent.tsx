import React from 'react';
import classes from './aboutContent.module.scss';

const AboutContent = () => {
  return (
    <div className={classes.about__container}>
      <h1 className={classes.title}>About</h1>
      <ul className={classes.info__list}>
        My links:
        <li className={classes.info__item}>
          Discord: <span className={classes.discord}>@paulonio</span>
        </li>
        <li className={classes.info__item}>
          <a
            className={classes.about__link}
            href="https://www.linkedin.com/in/paul-dashkevich-04502124b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className={classes.info__item}>
          <a
            className={classes.about__link}
            href="https://github.com/paulonio"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AboutContent;
