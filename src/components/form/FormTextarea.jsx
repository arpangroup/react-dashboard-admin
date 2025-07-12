// components/FormInput.jsx
import React, { useState } from 'react';
import LabelWithInfo from './LabelWithInfo';

const FormTextarea = ({
  label,
  name,
  value,
  required = false,
  disabled = false,
  info = null,
  onChange
}) => {
  return (
    <div>
      <LabelWithInfo label={label} info={info} />
      <textarea
        className="form-textarea"
        cols="30"
        rows="8"
        spellcheck="false"
        name={name}
        value={value}
        required={required}
        disabled={disabled}
        onChange={onChange} />
    </div>
  );
};

export default FormTextarea;
