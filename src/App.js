import logo from "./img/logo.png";
import "./App.css";
import ConversorMoeda from "./Components/ConversorModea/ConversorMoeda";
import ConsultaCEP from "./Components/ConsultaCEP/ConsultaCEP";

function App() {
  return (
    <div className='App'>
      <nav className='navbar navbar-light bg-light'>
        <div className='container-fluid'>
          <div className='navbar-brand'>
            <img src={logo} alt='Logo' className='logo d-inline-block align-text-top' />
            Conversor - Utilidades para o Dia a Dia
          </div>
        </div>
      </nav>

      <div className='central'>
        <div className='central-texto'>
          <img src={logo} alt='Logo' className='logo-texto d-inline-block align-text-top' />
          App Conversor
        </div>
        <div className='central-descricao'>Simples utilidades para o Dia a Dia</div>
      </div>

      <div className='container px-4'>
        <div className='row g-3'>
          <div className='col'>
            <ConversorMoeda moedaA='USD' moedaB='BRL'></ConversorMoeda>
          </div>
          <div className='col'>
            <ConversorMoeda moedaA='THB' moedaB='BRL'></ConversorMoeda>
          </div>
          <div className='col'>
            <ConversorMoeda moedaA='EUR' moedaB='BRL'></ConversorMoeda>
          </div>
        </div>
      </div>

      <div className='container px-4'>
        <div className='row g-3'>
          <div className='col'>
            <ConsultaCEP></ConsultaCEP>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
