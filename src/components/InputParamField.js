import React from "react";

const InputParamField = ({label, id, value, onChange}) => (
  <div>
    <p>{label}
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
      />
    </p>
  </div>
);

export default InputParamField;