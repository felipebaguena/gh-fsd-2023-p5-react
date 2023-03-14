import React from 'react';
import './InputText.css';
import Form from "react-bootstrap/Form";

export const InputText = ({
    type,
    placeholder,
    name,
    changeFunction,
    validateFunction
}) => {
  return (
    <>
          <Form.Control
            className='inputDesign'
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={changeFunction}
            onBlur={validateFunction}
              />
    </>
  )
}
