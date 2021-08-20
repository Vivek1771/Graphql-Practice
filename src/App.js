// import './App.css';
import ExchangeRates from './components/ExchangeRate';
import Form from './components/Form';
import Login from './components/Login'
import Profile from './components/Profile';
import Weather from './components/Weather';
import GetRepo from './components/GetRepo';
import Sub from './components/Subscription';
import Dark from './components/Darkmode';
import FwlLogin from './components/FwlLogin'
import GetMatch from './components/GetMatch';
import CurrencySub from './components/CurrencySub.jsx'
import Pokemon from './components/PokemonSub';

function App() {
  return (
    <div className="App">
      <h1>GraphQl</h1>
      <hr width="450px" />
      {/* <ExchangeRates /> */}
      <h2>Register</h2>
      <Form />
      <hr width="450px" />
      <h2>Login</h2>
      <Login />
      <hr width="450px" />
      <h2>Dashboard</h2>
      <Profile />
      <Weather />
      <div style={{ "paddingBottom": "50px" }} ></div>
      <h1>Pagination</h1>
      <GetRepo />
      <Sub />
      <Dark />
      <h1>FWL login</h1>
      <FwlLogin />
      <h4>Match Records with Pagination:</h4>
      <GetMatch />
      <CurrencySub />
      <Pokemon />
    </div>
  );
}

export default App;
