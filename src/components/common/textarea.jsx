import React from "react";

const TextArea = ({ name, label, desc, error, ...rest }) => {
  return (
    <div className="ui input">
      <label htmlFor={name}>{label}</label>
      <div>{desc}</div>
      <textarea {...rest} name={name} />
      {error && (
        <div className="ui input error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default TextArea;
