import logo from './logo.svg';
import './App.css';
import Login from "./components/login/Login";
import {Fragment} from "react";
import Register from "./components/register/Register";
import Profile from "./components/profile/Profile";
import LoginPage from "./pages/LoginPage";
import AppRouter from "./appRouter/AppRouter";
import {BrowserRouter} from "react-router-dom";
import Main from "./components/main/Main";

function App() {
  return (
  <Fragment>
     <BrowserRouter>
        <Main/>
     </BrowserRouter>
  </Fragment>
  );
}

export default App;
