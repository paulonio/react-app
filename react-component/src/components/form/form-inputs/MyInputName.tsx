import React from 'react';
import { labelProps } from './MyInputsTypes';
import TextInput from './TextInput';
import FormError from 'components/form/FormError';
import classes from '../formContent.module.scss';

const MyInputName = ({ register, error }: labelProps) => {
  return (
    <>
      <label className={classes.label}>
        <div className={classes.input__title}>Name</div>
        <TextInput register={register} name="name" placeholder="Type your name" />
      </label>
      <FormError error={error} />
    </>
  );
};

export default MyInputName;
