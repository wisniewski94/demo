import React from "react";

const Input = ({
  name,
  label,
  desc,
  error,
  className,
  disabled,
  onMouseEnter,
  ...rest
}) => {
  return (
    <div onMouseEnter={onMouseEnter} className={"ui input " + className}>
      <label htmlFor={name}>{label}</label>
      <div>{desc}</div>
      <input {...rest} disabled={disabled} name={name} />
      {error && (
        <div className="ui input error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
