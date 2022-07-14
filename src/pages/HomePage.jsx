import React, {Component, Fragment} from "react";
import NavigationBar from "../components/navbar/NavigationBar";
import Login from "../components/login/Login";
import Home from "../components/home/Home";

class HomePage  extends  Component{


    render() {
        return (
            <Fragment>
                <Home/>
            </Fragment>
        );
    }
}
export default HomePage;