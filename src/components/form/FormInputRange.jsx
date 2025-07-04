// FormInputRange

import React from 'react';

const InputRange = ({ minValue, maxValue, onChange, minName = "min_amount", maxName = "max_amount", unit = "INR" }) => {
  return (
    <>
    
      <div className="col-xl-6 min-amount">
        <label className="box-input-label" htmlFor={minName}>Min Amount:</label>
        <div className="input-group joint-input">
          <input
            type="number"
            name={minName}
            value={minValue}
            onChange={onChange}
            className="form-control"
            required
          />
          <span className="input-group-text">{unit}</span>
        </div>
      </div>

      <div className="col-xl-6 max-amount">
        <label className="box-input-label" htmlFor={maxName}>Max Amount:</label>
        <div className="input-group joint-input">
          <input
            type="number"
            name={maxName}
            value={maxValue}
            onChange={onChange}
            className="form-control"
            required
          />
          <span className="input-group-text">{unit}</span>
        </div>
      </div>
    </>
  );
};

export default InputRange;
