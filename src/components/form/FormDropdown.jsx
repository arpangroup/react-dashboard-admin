// components/FormInput.jsx
import React, { useState } from 'react';
import LabelWithInfo from './LabelWithInfo';

const FormDropdown = ({
  label,
  name,
  value,
  options,
  required = false,
  disabled = false,
  info = null,
  onChange
}) => {
  return (
    <div className="col-xl-6 site-input-groups mt-0" key={name}> 
      <LabelWithInfo label={label} info={info} />

      <select
        name={name}
        className="form-select"
      // value={selectValue}
      // onChange={e => onSelectChange(e.target.value)}
      // disabled={disabled}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>

    </div>
  );
};

export default FormDropdown;
