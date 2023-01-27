import React from 'react';
import { OptionsType } from '../Content';
import classes from '../content.module.scss';

type Props = {
  handler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: OptionsType[];
};

const CustomSelect = ({ handler, options }: Props) => {
  return (
    <select className={classes.select} onChange={handler}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
