import React, { useState, useEffect } from "react";
import './RegisterPage.css';

export const RegisterPage = () => {

  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    nif: "",
    direction: "",
    birth_date: "",
    phone: "",
  });

  const [conditional, setConditional] = useState(false);

  const inputHandler = (e) => {
    //Binding....
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const inputValidate = (e) => {};


  return (
    <h1 className="h1prueba">Register</h1>
  )
}
