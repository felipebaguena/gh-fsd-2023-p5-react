import React, { useState, useEffect } from "react";
import './RegisterPage.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

  useEffect(()=>{
    //Este useEffect se va a ejecutar SIEMPRE que hayan cambios en el hook credenciales
    console.log("Credenciales ahora vale......", userData);
}, [userData]);

  const inputValidate = () => {};


  return (
    <Container>
    <Row className="RegisterPageRowCentral">
      <Col lg={6}>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Introduce tu nombre"
              onChange={inputHandler}
              onBlur={inputValidate}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              type="text"
              name="surname"
              placeholder="Introduce tus apellidos"
              onChange={inputHandler}
              onBlur={inputValidate}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              placeholder="Introduce un correo electrónico"
              onChange={inputHandler}
              onBlur={inputValidate}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="text"
              name="password"
              placeholder="Selecciona una contraseña"
              onChange={inputHandler}
              onBlur={inputValidate}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>NIF</Form.Label>
            <Form.Control
              type="text"
              name="nif"
              placeholder="Introduce tu documento de identidad"
              onChange={inputHandler}
              onBlur={inputValidate}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              name="direction"
              placeholder="Introduce tu domicilio"
              onChange={inputHandler}
              onBlur={inputValidate}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control
              type="text"
              name="birth_date"
              placeholder="Introduce tu fecha de nacimiento"
              onChange={inputHandler}
              onBlur={inputValidate}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              placeholder="Introduce tu número de teléfono"
              onChange={inputHandler}
              onBlur={inputValidate}
            />
          </Form.Group>

          <Button variant="info" type="submit">
            Confirmar
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
  )
}
