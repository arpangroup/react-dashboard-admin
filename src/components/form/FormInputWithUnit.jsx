// components/FormInputWithUnit.jsx
import React from 'react';

const FormInputWithUnit = ({
  label,
  name,
  value,
  unit = '',
  placeholder = '',
  type = 'text',
  onChange,
  required = false,
  disabled = false,
  inputClassName = '',
}) => {
  return (
    <div className="site-input-groups">
      <label className="box-input-label">{label}</label>
      <div className="input-group joint-input">
        <input
          type={type}
          className={`form-control ${inputClassName}`}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
        />
        {unit && <span className="input-group-text">{unit}</span>}
      </div>
    </div>
  );
};

export default FormInputWithUnit;
