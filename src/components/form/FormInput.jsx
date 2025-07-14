// components/FormInput.jsx
import React, { useState } from 'react';
import LabelWithInfo from './LabelWithInfo';

const FormInput = ({
  label,
  type = 'text',
  name,
  value,
  placeholder = '',
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
        placeholder={placeholder}
        name={name}
        value={value}
        required={required}
        disabled={disabled}
        onChange={onChange}            
        onWheel={(e) => e.target.blur()}
      />
    </div>
  );
};

export default FormInput;
