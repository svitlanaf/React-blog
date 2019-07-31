import React from "react";

const TextArea = ({ name, label, value, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <textarea
        value={value}
        name={name}
        wrap="hard"
        rows="5"
        cols="60"
        onChange={onChange}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextArea;
