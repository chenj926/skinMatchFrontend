'use client';

import React from 'react';

const Input = ({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  className = '',
  inputClassName = '',
  labelClassName = '',
  ...props
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label 
          htmlFor={id} 
          className={`block text-sm font-medium mb-1 text-secondary-700 ${required ? 'after:content-["*"] after:ml-0.5 after:text-red-500' : ''} ${labelClassName}`}
        >
          {label}
        </label>
      )}
      
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 
                   ${error 
                     ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                     : 'border-secondary-300 focus:ring-primary-500 focus:border-primary-500'
                   } ${inputClassName}`}
        required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;