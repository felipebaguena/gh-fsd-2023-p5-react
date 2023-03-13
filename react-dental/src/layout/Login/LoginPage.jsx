
import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { LoginBox } from '../../components/loginBox/LoginBox';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './LoginPage.css'

export const LoginPage = () => {

  return (
    <Container fluid className='LoginPageContainer'>
      <Row>
        <Col className='LoginPageBoxTop' lg={12}>
        </Col>
        <Col lg={3}></Col>
        <Col className='LoginPageBoxCenter' lg={6}>
          <LoginBox/>
        </Col>
        <Col lg={3}></Col>
        <Col className='LoginPageBoxBottom' lg={12}>
        </Col>
      </Row>
    </Container>
  )
}
