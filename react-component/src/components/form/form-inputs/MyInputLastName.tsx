import React from 'react';
import { labelProps } from './MyInputsTypes';
import TextInput from './TextInput';
import FormError from 'components/form/FormError';
import classes from '../formContent.module.scss';

const MyInputLastName = ({ register, error }: labelProps) => {
  return (
    <>
      <label className={classes.label}>
        <div className={classes.input__title}>Last name</div>
        <TextInput register={register} name="lastName" placeholder="Type your last name" />
      </label>
      <FormError error={error} />
    </>
  );
};

export default MyInputLastName;
