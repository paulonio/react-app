import React from 'react';
import { labelProps } from './MyInputsTypes';
import FormError from 'components/form/FormError';
import classes from '../formContent.module.scss';

const MySwitcherInput = ({ register, error }: labelProps) => {
  return (
    <>
      <label className={classes.label__personal_data}>
        <input
          className={classes.input__switcher}
          {...register('personalData', {
            required: 'This field is required.',
          })}
          type="checkbox"
        />
        <span className={classes.switcher}></span>
        <div className={classes.personal_data}>I agree that my personal data will be processed</div>
      </label>
      <FormError error={error} />
    </>
  );
};

export default MySwitcherInput;
