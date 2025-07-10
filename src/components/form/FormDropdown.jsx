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
        value={value || ""}
        onChange={onChange}
      // onChange={e => onSelectChange(e.target.value)}
        required={required}
        disabled={disabled}
      >
        {options.map(({ value, label, disabled  }) => (
          <option key={value} value={value} disabled={disabled}>
            {label}
          </option>
        ))}
      </select>

    </div>
  );
};

export default FormDropdown;
