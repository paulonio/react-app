import { HTMLAttributes } from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { IFormData } from '../FormContent';

export type labelProps = {
  register: UseFormRegister<IFormData>;
  error: FieldError | undefined;
} & HTMLAttributes<HTMLLabelElement>;
