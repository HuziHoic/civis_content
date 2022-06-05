import React from "react";
import "./FormInput.css";
const FormInput = (props) => {
  return (
    <div className="formInput">
      <input
        placeholder={props.placeholder}
        name={props.name}
        ref={props.refer}
        type={props.type}
        required
      />
    
    </div>
  );
};

export default FormInput;
