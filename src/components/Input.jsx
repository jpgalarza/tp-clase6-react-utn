import { useState } from "react"
import { inputValidation } from "../helpers/inputValidation";

export const Input = ({ type, name, label, placeholder, value, handleInputChange, handleError }) => {
  const [errorMsg, setErrorMsg] = useState('');

  const change = (e) => {
    const { value, name } = e.target;

    const data = {[name]: value};

    handleInputChange(data);
  };

  const blur = (e) => {
    const { value, type, name } = e.target;

    const msg = inputValidation(value, type, name);

    if(msg === '') {
      const data = {[name]: false};
      handleError(data)
    }else {
      const data = {[name]: true};
      handleError(data)
    }

    setErrorMsg(msg);
  };

  return (
    <label className="form-label">{label}
      <input 
        type={type} 
        name={name}
        value={value}
        placeholder={placeholder} 
        className={`input-component ${errorMsg? 'input-error' : ''}`}
        onChange={change}
        onBlur={blur}
      />
      <p className="error-message">{errorMsg? errorMsg : ''}</p>
    </label>
  )
}
