import React, {Component, Fragment} from "react";
import NavigationBar from "../components/navbar/NavigationBar";
import Login from "../components/login/Login";

class LoginPage  extends  Component{

    render() {
        return (
          <Fragment>
              <Login/>
          </Fragment>
        );
    }
}
export default LoginPage;