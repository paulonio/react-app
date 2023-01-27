import React from 'react';
import classes from '../formContent.module.scss';

type FormButtonsProps = {
  isDisabled: boolean;
};

const MyFormButtons = ({ isDisabled }: FormButtonsProps) => {
  return (
    <div className={classes.form__buttons}>
      <button className={classes.button} disabled={isDisabled} type="submit">
        Submit
      </button>

      <button className={classes.button} type="reset">
        Reset
      </button>
    </div>
  );
};

export default MyFormButtons;
