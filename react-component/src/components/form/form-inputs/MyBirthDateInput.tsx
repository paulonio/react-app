import React from 'react';
import { labelProps } from './MyInputsTypes';
import FormError from 'components/form/FormError';
import classes from '../formContent.module.scss';

const MyBirthDateInput = ({ register, error }: labelProps) => {
  return (
    <>
      <label className={classes.label}>
        <div className={classes.input__title}>Birth date</div>
        <input
          className={classes.input__birth_date}
          {...register('birthDate', {
            required: 'This field is required.',
            validate: (value) => new Date(value) < new Date() || 'Select a valid date.',
          })}
          type="date"
        />
      </label>
      <FormError error={error} />
    </>
  );
};

export default MyBirthDateInput;
