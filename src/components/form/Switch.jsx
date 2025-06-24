// components/FormInput.jsx
import React from 'react';

const Switch = ({ enabled, name, onToggle }) => {
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
                checked={enabled} 
                onChange={handleChange}/>
            <label for={`${name}-active`}>Active</label>
            <input 
                type="radio" 
                id={`${name}-disabled`}
                name={name} 
                value="0" 
                checked={!enabled} 
                onChange={handleChange}/>
            <label for={`${name}-disabled`}>Disabled</label>
        </div>
    );
};

export default Switch;
