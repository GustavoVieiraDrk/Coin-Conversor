import React from 'react';
import { useState } from 'react';
import "./Conversor.css";
import {Button, Row, Col, Jumbotron} from 'react-bootstrap';

function Conversor(props) {

  const [moedaAValor, setMoedaAValor] = useState("");
  const [moedaBValor, setMoedaBValor] = useState(0);
  const apiKey = "type your key here";

  function converter() {
    let de_para = `${props.moedaA}_${props.moedaB}`;
    let url = `put your http requeried`
    fetch(url)
    .then(res => {
      return res.json()
    })
    .then(json => {
      let cotacao = json[de_para];
      setMoedaBValor((parseFloat(moedaAValor) * cotacao).toFixed(2));
    })
  }

  return (
    <Jumbotron className="conversor">
      <Row>
        <Col xs="12">
          <h3>{props.moedaA} para {props.moedaB}</h3>
        </Col>
      </Row>
      <Row className="row2">
        <Col xs="4">
          <input type="text" onChange ={ (event) => {
            setMoedaAValor(event.target.value)
          }}></input>
        </Col>
        <Col xs="4">
          <Button variant="success" type="submit" onClick={converter}>
              converter
          </Button>
        </Col>
        <Col xs="4">
          <h2 className="valorConvertid">{moedaBValor}</h2>
        </Col>
      </Row>
    </Jumbotron>
  );
}

export default Conversor;