// components/FormInput.jsx
import React, { useEffect, useState } from 'react';

const Switch = ({ 
    enabled, 
    name, 
    onToggle, 
    labels = ['On', 'Off'],
    style = {}
}) => {
  const [internalEnabled, setInternalEnabled] = useState(enabled);

  // Keep local state in sync with prop
  useEffect(() => {
    setInternalEnabled(enabled);
  }, [enabled]);
  
    console.log("TOGGLE: ", enabled);
    const handleChange = (e) => {
        const value = e.target.value === '1'; // Convert "1"/"0" to true/false
        onToggle(name, value); 
    };

    return (
        <div className="switch-field">
            <input 
                type="radio" 
                id={`${name}-active`}
                name={name} 
                value="1" 
                checked={enabled === true} 
                onChange={handleChange}/>
            <label htmlFor={`${name}-active`} style={style}>{labels[0]}</label>
            <input 
                type="radio" 
                id={`${name}-disabled`}
                name={name} 
                value="0" 
                checked={enabled === false} 
                onChange={handleChange}/>
            <label htmlFor={`${name}-disabled`} style={style}>{labels[1]}</label>
        </div>
    );
};

export default Switch;
