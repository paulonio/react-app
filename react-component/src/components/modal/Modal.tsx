import React from 'react';
import classes from './modal.module.scss';

type setActive = (value: boolean) => void;

interface IRick {
  name?: string;
  created?: string;
  episode?: string[];
  gender?: string;
  id?: number;
  image?: string;
  location?: {
    name: string;
    url: string;
  };
  origin?: {
    name: string;
    url: string;
  };
  species?: string;
  status?: string;
  type?: string;
  url?: string;
}

type Props = {
  isActive: boolean;
  setActive: setActive;
  targetData: IRick;
};

const Modal = ({ isActive, setActive, targetData }: Props) => {
  return (
    <div
      className={isActive ? classes.overlay + ' ' + classes.active : classes.overlay}
      onClick={() => setActive(false)}
    >
      <div
        className={isActive ? classes.modal__window + ' ' + classes.active : classes.modal__window}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.modal__header}>
          <h2 className={classes.modal__title}>{targetData.name}</h2>
          <img
            className={classes.modal__close__button}
            src="./assets/icons/close-modal.svg"
            alt="Close button"
            onClick={() => setActive(false)}
          />
        </div>
        <div className={classes.modal__data}>
          <div className={classes.modal__image}>
            <img src={targetData.image} alt="Image" />
          </div>
          <div className={classes.modal__content}>
            <p className={classes.modal__description}>
              <span className={classes.modal__description__title}>Gender: </span>
              {targetData.gender}
            </p>
            <p className={classes.modal__description}>
              <span className={classes.modal__description__title}>Origin location: </span>
              {targetData.origin!.name}
            </p>
            <p className={classes.modal__description}>
              <span className={classes.modal__description__title}>Last known location: </span>
              {targetData.location!.name}
            </p>
            <p className={classes.modal__description}>
              <span className={classes.modal__description__title}>
                The species of the character:{' '}
              </span>
              {targetData.species}
            </p>
            <p className={classes.modal__description}>
              <span className={classes.modal__description__title}>Type or subspecies: </span>
              {targetData.type ? targetData.type : 'None'}
            </p>
            <p className={classes.modal__description}>
              <span className={classes.modal__description__title}>Has been created: </span>
              {targetData.created!.split('T')[0]}
            </p>
            <p className={classes.modal__description}>
              <span className={classes.modal__description__title}>
                The status of the character:{' '}
              </span>
              {targetData.status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
