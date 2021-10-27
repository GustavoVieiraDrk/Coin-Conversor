import React from 'react';
import { useState } from 'react';
import Conversor from './Conversor';
import { Container, Row, Col, Form } from 'react-bootstrap';
import ListarMoedas from './listar-moedas';
import './App.css';

function App() {

  const [moedaLocal, setMoedaLocal] = useState("BRL");
  const [moedaEst1, setMoedaEst1] = useState("JPY");
  const [moedaEst2, setMoedaEst2] = useState("USD");
  const [moedaEst3, setMoedaEst3] = useState("EUR");

  return (
    <Container style={{ maxWidth: "100%" }}>
      <h1 className="titulo">Conversor de Moedas</h1>
        <Row className="bloco-escolha-moedas">

          <Col xs="3">
            <h4>Escolha sua moeda</h4>
            <Form.Control as="select" value={moedaLocal}
              onChange={(event) => {
                setMoedaLocal(event.tartget.value)
              }}>
                <ListarMoedas />
            </Form.Control>
          </Col>

          <Col xs="9" className="bloco-3-moedas">
            <h4>Escolha Suas 3 Moedas Estrangeiras Favoritas</h4>
            <Form.Control as="select" value={moedaEst1} className="moedas3"
              onChange={(event) => {
                setMoedaEst1(event.tartget.value)
            }}>
              <ListarMoedas />
            </Form.Control>
            <Form.Control as="select" value={moedaEst2} className="moedas3"
              onChange={(event) => {
                setMoedaEst2(event.tartget.value)
            }}>
              <ListarMoedas />
            </Form.Control>
            <Form.Control as="select" value={moedaEst3} className="moedas3"
              onChange={(event) => {
                setMoedaEst3(event.tartget.value)
            }}>
              <ListarMoedas />
            </Form.Control>
          </Col>
        </Row>

        <Row>
          <Col xs="4"><Conversor moedaA={moedaLocal} moedaB={moedaEst1}></Conversor></Col>
          <Col xs="4"><Conversor moedaA={moedaLocal} moedaB={moedaEst2}></Conversor></Col>
          <Col xs="4"><Conversor moedaA={moedaLocal} moedaB={moedaEst3}></Conversor></Col>

          <Col xs="4"><Conversor moedaA={moedaEst1} moedaB={moedaLocal}></Conversor></Col>
          <Col xs="4"><Conversor moedaA={moedaEst2} moedaB={moedaLocal}></Conversor></Col>
          <Col xs="4"><Conversor moedaA={moedaEst3} moedaB={moedaLocal}></Conversor></Col>
        </Row>
    </Container>     
  )

}

export default App;
