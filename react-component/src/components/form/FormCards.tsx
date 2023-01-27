import React from 'react';
import { IFormData } from './FormContent';
import classes from '../form/formContent.module.scss';

type Props = { data: IFormData[] };

const FormCards = ({ data }: Props) => {
  return (
    <section className={classes.form__cards}>
      {data.map((item, index) => (
        <div className={classes.card} key={index}>
          <div className={classes.image__container}>
            <img className={classes.card__image} src={item.avatar as string} alt="image" />
          </div>
          <div className={classes.card__content}>
            <h2 className={classes.card__name}>
              {item.name} {item.lastName}
            </h2>
            <p className={classes.card__description}>Birth date: {item.birthDate}</p>
            <p className={classes.card__description}>Country: {item.country}</p>
            <p className={classes.card__description}>
              I agree that my personal data will be processed: {String(item.personalData)}
            </p>
            <p className={classes.card__description}>
              I agree to receive notifications: {String(item.notifications)}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FormCards;
