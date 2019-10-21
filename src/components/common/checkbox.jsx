import React from "react";

const Checkbox = ({ name, label, error, ...rest }) => {
  return (
    <div className="ui checkbox">
      <input {...rest} name={name} />
      <label htmlFor={name} className="ui">
        {label}
      </label>
      {error && <div classname="ui input error">{error}</div>}
    </div>
  );
};

export default Checkbox;
