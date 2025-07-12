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
  onChange,
  warning = ""
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
      {warning.trim() !== "" && (
        <p className="paragraph mb-0 mt-2">{warning}</p>
      )}
    </div>
  );
};

export default FormTextarea;
