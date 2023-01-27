import React, { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IFormData } from '../FormContent';
import classes from '../formContent.module.scss';

type inputProps = InputHTMLAttributes<HTMLInputElement>;

type Props = {
  register: UseFormRegister<IFormData>;
} & inputProps;

const TextInput = ({ register, name, placeholder }: Props) => {
  return (
    <input
      className={classes.text__input}
      {...register(name as 'name' | 'lastName', {
        required: 'This field is required.',
        minLength: {
          value: 2,
          message: 'Min length is 2 letters.',
        },
        pattern: {
          value: /^[a-zA-Z]+$/,
          message: 'The field should contain only letters.',
        },
      })}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default TextInput;
