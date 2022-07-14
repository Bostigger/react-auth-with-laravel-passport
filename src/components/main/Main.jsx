import React, {Component, Fragment} from "react";
import NavigationBar from "../navbar/NavigationBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import ForgotPasswordPage from "../../pages/ForgotPasswordPage";
import ProfilePage from "../../pages/ProfilePage";
import HomePage from "../../pages/HomePage";
import axios from "axios";
import ApiBase from "../../restApi/Api";
import ResetPassword from "../resetPassword/ResetPassword";

class Main extends  Component{
    constructor(props) {
        super(props);
        this.state={
            user:{}
        }
    }


    componentDidMount() {
        axios.get(ApiBase.GET_USER).then((response)=>{
            this.setUser(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }

    setUser = (user)=>{
        this.setState({
            user:user,
        })
    }
    render() {
        return (
           <Fragment>
               <NavigationBar user={this.state.user} setUser={this.setUser}/>
               <Routes>
                   <Route path={"/login"} element={<LoginPage/>}/>
                   <Route path={"/register"} element={<RegisterPage/>}/>
                   <Route path={"/forgot"} element={<ForgotPasswordPage/>}/>
                   <Route path={"/profile"} element={<ProfilePage user={this.state.user}/>}/>
                   <Route path={"/home"} element={<HomePage/>}/>
                   <Route path={"/reset/:tokenID"} element={<ResetPassword/>}/>
                   <Route path={"/"} element={<HomePage/>}/>
               </Routes>

           </Fragment>
        );
    }

}
export default Main;