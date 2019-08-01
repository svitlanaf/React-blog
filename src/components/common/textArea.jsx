import React from "react";

const TextArea = ({ name, label, value, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <textarea
        value={value}
        name={name}
        onChange={onChange}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextArea;
