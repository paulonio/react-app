import React, { useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import FormCards from './FormCards';
import classes from './formContent.module.scss';
import MyBirthDateInput from 'components/form/form-inputs/MyBirthDateInput';
import MyFileInput from 'components/form/form-inputs/MyFileInput';
import MySelectInput from 'components/form/form-inputs/MySelectInput';
import MySwitcherInput from 'components/form/form-inputs/MySwitcherInput';
import MyCheckboxInput from 'components/form/form-inputs/MyCheckboxInput';
import MyInputName from 'components/form/form-inputs/MyInputName';
import MyInputLastName from 'components/form/form-inputs/MyInputLastName';
import MyFormButtons from 'components/form/form-inputs/MyFormButtons';
import { SearchContext } from 'context/context';
import { Action } from 'context/reducers';

export interface IFormData {
  name: string;
  lastName: string;
  birthDate: string;
  avatar: File[] | string;
  country: string;
  personalData: boolean;
  notifications: boolean;
}

const FormContent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, isSubmitted, isSubmitSuccessful },
    getValues,
  } = useForm<IFormData>({ mode: 'onSubmit', reValidateMode: 'onChange' });
  const { state, dispatch } = useContext(SearchContext);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      reset({ personalData: false, notifications: false });
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    const avatarURL = URL.createObjectURL(getValues('avatar')[0] as File);
    data.avatar = avatarURL;
    const action: Action = { type: 'UPDATE_FORM_DATA', data };
    dispatch(action);
  };

  return (
    <>
      <section className={classes.form__content}>
        <h1 className={classes.title}>Form</h1>
        <form className={classes.form__container} onSubmit={handleSubmit(onSubmit)}>
          <MyInputName register={register} error={errors.name} />
          <MyInputLastName register={register} error={errors.lastName} />
          <MyBirthDateInput register={register} error={errors.birthDate} />
          <MyFileInput register={register} error={errors.avatar} />
          <MySelectInput register={register} error={errors.country} />
          <MySwitcherInput register={register} error={errors.personalData} />
          <MyCheckboxInput register={register} error={errors.notifications} />
          <MyFormButtons isDisabled={isSubmitted ? !isValid : !isDirty} />
        </form>
      </section>
      <FormCards data={state.formData} />
    </>
  );
};

export default FormContent;
