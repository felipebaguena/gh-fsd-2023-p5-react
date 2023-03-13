import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const LoginBox = () => {
  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
  });

  const [credencialesError, setCredencialesError] = useState({
    emailError: "",
    passwordError: "",
  });

  const inputHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const inputValidate = (e) => {
    switch (e.target.name) {
      case "email":
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(credenciales.email)) {
          setCredencialesError((prevState) => ({
            ...prevState,
            emailError: "El email no es válido",
          }));
        } else {
          setCredencialesError((prevState) => ({
            ...prevState,
            emailError: "",
          }));
        }
        break;
      case "password":
        if (credenciales.password.length < 8) {
          setCredencialesError((prevState) => ({
            ...prevState,
            passwordError: "Debes escribir como mínimo 8 caracteres",
          }));
        } else {
          setCredencialesError((prevState) => ({
            ...prevState,
            passwordError: "",
          }));
        }
        break;
      default:
        break;
    }
  };

  return (
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Introduce tu correo electrónico"
                name="email"
                value={credenciales.email}
                onChange={inputHandler}
                onBlur={inputValidate}
              />
              <Form.Text className="text-danger">
                {credencialesError.emailError}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Introduce tu contraseña"
                name="password"
                value={credenciales.password}
                onChange={inputHandler}
                onBlur={inputValidate}
              />
              <Form.Text className="text-danger">
                {credencialesError.passwordError}
              </Form.Text>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
            <Button variant="info" type="submit">
              Confirmar
            </Button>
          </Form>
  );
};
