import React from 'react';
import { labelProps } from './MyInputsTypes';
import FormError from 'components/form/FormError';
import classes from '../formContent.module.scss';

const MyCheckboxInput = ({ register, error }: labelProps) => {
  return (
    <>
      <label className={classes.label__notifications}>
        <input
          className={classes.input__checkbox}
          {...register('notifications', {
            required: 'This field is required.',
          })}
          type="checkbox"
        />
        <div className={classes.notifications}>I agree to receive notifications</div>
      </label>
      <FormError error={error} />
    </>
  );
};

export default MyCheckboxInput;
