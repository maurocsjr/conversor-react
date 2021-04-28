import React, { Component } from "react";
import "./ConsultaCEP.css";

export default class ConsultaCEP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cep_User: "",
      cep: "",
      address_type: "",
      address_name: "",
      address: "",
      district: "",
      state: "",
      city: "",
      lat: "",
      lng: "",
      ddd: "",
      city_ibge: "",
    };

    this.consultar = this.consultar.bind(this);
  }

  consultar() {
    let url = `https://cep.awesomeapi.com.br/json/${this.state.cep_User}`;
    fetch(url)
      .then(result => {
        return result.json();
      })
      .then(
        result => {
          this.setState({
            cep: result["cep"],
            address_type: result["address_type"],
            address_name: result["address_name"],
            address: result["address"],
            district: result["district"],
            state: result["state"],
            city: result["city"],
            lat: result["lat"],
            lng: result["lng"],
            ddd: result["ddd"],
            city_ibge: result["city_ibge"],
          });
        },
        error => {
          console.log(error);
          this.setState({
            cep: "",
          });
        }
      );
  }

  render() {
    return (
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>Consulte o CEP</h5>
          <div className='card-text'>
            <div className='row'>
              <div className='col'>
                <form className='d-flex'>
                  <input
                    className='form-control me-2'
                    type='text'
                    placeholder='Digite aqui o CEP (* Apenas números)'
                    onChange={event => {
                      this.setState({ cep_User: event.target.value });
                    }}
                    maxLength='8'
                  ></input>
                  <button type='button' className='btn btn-primary' onClick={this.consultar}>
                    Consultar
                  </button>
                </form>
              </div>
            </div>
            <div className='row'>
              {this.state.cep !== "" && (
                <>
                  <div className='row dado'>CEP: {this.state.cep}</div>
                  <div className='row dado'>Endereço: {this.state.address}</div>
                  <div className='row dado'>Bairro: {this.state.district}</div>
                  <div className='row dado'>Cidade: {this.state.city}</div>
                  <div className='row dado'>Estado: {this.state.state}</div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
