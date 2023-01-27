import React from 'react';
import { labelProps } from './MyInputsTypes';
import FormError from 'components/form/FormError';
import classes from '../formContent.module.scss';

const MySelectInput = ({ register, error }: labelProps) => {
  return (
    <>
      <label className={classes.label}>
        <div className={classes.input__title}>Choose your country</div>
        <select
          defaultValue="Your country"
          {...register('country', {
            required: 'This field is required.',
          })}
          className={classes.select__country}
        >
          <option value="Belarus">Belarus</option>
          <option value="Russia">Russia</option>
          <option value="Ukraine">Ukraine</option>
          <option value="USA">USA</option>
        </select>
      </label>
      <FormError error={error} />
    </>
  );
};

export default MySelectInput;
