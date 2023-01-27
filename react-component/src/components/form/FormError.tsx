import React from 'react';
import { FieldError } from 'react-hook-form';
import classes from '../form/formContent.module.scss';

type Error = { error: FieldError | undefined };

const FormError = ({ error }: Error) => {
  return <div className={classes.error__message}>{error && error.message}</div>;
};

export default FormError;
