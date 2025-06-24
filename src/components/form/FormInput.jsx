// components/FormInput.jsx
import React from 'react';

const FormInput = ({
  label,
  type = 'text',
  name,
  value,
  required = false,
  disabled = false,
  onChange
}) => {
  return (
    <div className="site-input-groups">
      <label className="box-input-label">{label}</label>
      <input
        type={type}
        className="box-input"
        name={name}
        value={value}
        required={required}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
