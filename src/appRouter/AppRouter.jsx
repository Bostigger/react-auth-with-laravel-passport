import React, {Component, Fragment} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ForgotPassword from "../components/forgotPassword/ForgotPassword";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import axios from "axios";
import ApiBase from "../restApi/Api";

class AppRouter  extends Component{

    render() {
        return (
           <Fragment>
               <Routes>
                  <Route path={"/login"} element={<LoginPage/>}/>
                  <Route path={"/register"} element={<RegisterPage/>}/>
                  <Route path={"/forgot"} element={<ForgotPasswordPage/>}/>
                  <Route path={"/profile"} element={<ProfilePage/>}/>
                  <Route path={"/"} element={<HomePage/>}/>
               </Routes>

           </Fragment>
        );
    }
}
export default AppRouter;