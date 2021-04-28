import React, { Component } from "react";
import "./ConversorMoeda.css";

export default class ConversorMoeda extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moedaA_valor: 0,
      moedaB_valor: 0,
      moedaB_bid: 0,
      moedaA_bid: 0,
    };

    this.setState({ moedaA_valor: 0 });
    this.converter = this.converter.bind(this);
    this.converter();
  }

  converter() {
    let de_para = `${this.props.moedaA}-${this.props.moedaB}`;
    let para_de = `${this.props.moedaB}-${this.props.moedaA}`;
    let url = `https://economia.awesomeapi.com.br/json/${de_para}`;
    let url2 = `https://economia.awesomeapi.com.br/json/${para_de}`;

    fetch(url)
      .then(result => {
        return result.json();
      })
      .then(
        result => {
          let cotacao = result[0]["bid"];
          let moedaB_bid = cotacao;
          let moedaB_valor = `${(parseFloat(this.state.moedaA_valor) * cotacao).toLocaleString("pt-br", {
            minimumFractionDigits: 1,
          })}`;
          this.setState({ moedaB_valor });
          this.setState({ moedaB_bid });
        },
        error => {
          console.log(error);
        }
      );

    fetch(url2)
      .then(result => {
        return result.json();
      })
      .then(
        result => {
          let cotacao = result[0]["bid"];
          let moedaA_bid = cotacao;
          this.setState({ moedaA_bid });
        },
        error => {
          console.log(error);
        }
      );
  }

  render() {
    return (
      <div className='conversor'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>
              Converta de {this.props.moedaA} para {this.props.moedaB}
            </h5>
            <div className='card-text'>
              <div className='row'>
                <form className='d-flex'>
                  <input
                    className='form-control me-2'
                    type='text'
                    onChange={event => {
                      this.setState({ moedaA_valor: event.target.value > 0 ? event.target.value : 0 });
                    }}
                    value={this.state.moedaA_valor}
                  ></input>
                  <button type='button' className='btn btn-primary' onClick={this.converter}>
                    Converter
                  </button>
                </form>
                <div className='col'>
                  <div className='resultado-total'>
                    {this.props.moedaA} {this.state.moedaA_valor} = {this.props.moedaB} {this.state.moedaB_valor}
                  </div>
                  <div className='resultado'>
                    {this.props.moedaA} 1 = {this.state.moedaB_bid}
                  </div>
                  <div className='resultado'>
                    {this.props.moedaB} 1 = {this.state.moedaA_bid}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
