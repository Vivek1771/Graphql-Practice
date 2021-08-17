// import './App.css';
import ExchangeRates from './components/ExchangeRate';
import Form from './components/Form';
import Login from './components/Login'
import Profile from './components/Profile';
import Weather from './components/Weather';
import GetRepo from './components/GetRepo';
import Sub from './components/Subscription';
import Dark from './components/Darkmode';

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
      {/* <Sub /> */}
      <Dark />
    </div>
  );
}

export default App;
