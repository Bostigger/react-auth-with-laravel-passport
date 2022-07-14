import React, {Component, Fragment} from "react";
import NavigationBar from "../components/navbar/NavigationBar";
import Login from "../components/login/Login";
import ForgotPassword from "../components/forgotPassword/ForgotPassword";

class ForgotPasswordPage  extends  Component{

    render() {
        return (
            <Fragment>
                <ForgotPassword/>
            </Fragment>
        );
    }
}
export default ForgotPasswordPage;