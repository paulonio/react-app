import React from 'react';
import { labelProps } from './MyInputsTypes';
import FormError from 'components/form/FormError';
import classes from '../formContent.module.scss';

const MyFileInput = ({ register, error }: labelProps) => {
  return (
    <>
      <label className={classes.label}>
        <div className={classes.input__title}>Avatar</div>
        <input
          className={classes.input__avatar}
          {...register('avatar', {
            required: 'This field is required.',
            validate: (value) => {
              if (typeof value !== 'string') {
                return (
                  value[0].type === 'image/jpeg' ||
                  value[0].type === 'image/png' ||
                  'Please, upload a picture.'
                );
              }
            },
          })}
          type="file"
          accept="image/png, image/jpeg"
        />
      </label>
      <FormError error={error} />
    </>
  );
};

export default MyFileInput;
