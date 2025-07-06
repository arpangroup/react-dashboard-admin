// components/FormInput.jsx
import React, { useState } from 'react';
import LabelWithInfo from './LabelWithInfo';

const FormInput = ({
  label,
  type = 'text',
  name,
  value,
  required = false,
  disabled = false,
  info = null,
  onChange
}) => {  
  return (
    <div className="site-input-groups">      
      <LabelWithInfo label={label} info={info} />
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
