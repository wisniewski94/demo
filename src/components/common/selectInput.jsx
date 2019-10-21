import React from "react";

const SelectInput = ({
  name,
  label,
  desc,
  error,
  options,
  className,
  disabled,
  onMouseEnter,
  ...rest
}) => {
  return (
    <div onMouseEnter={onMouseEnter} className={"ui input " + className}>
      <label htmlFor={name}>{label}</label>
      <div>{desc}</div>
      <select {...rest} disabled={disabled} name={name}>
        <option value="" />
        {options != null
          ? options.map(op => (
              <option value={op._id} key={op._id}>
                {op.name}
              </option>
            ))
          : null}
      </select>
      {error ? (
        <div className="ui input error">{error}</div>
      ) : (
        <div className="ui input error"> </div>
      )}
    </div>
  );
};

export default SelectInput;
