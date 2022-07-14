
import React, {Component, Fragment} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";


class NavigationBar  extends Component{


    logOut = () =>{
        localStorage.clear();
        this.props.setUser(null);
    }
    render() {

        let button;
        let profile;

        if(localStorage.getItem('token')){
            button = (
                <Nav>
                    <Nav.Link><NavLink to={'/'} onClick={this.logOut}>Logout</NavLink></Nav.Link>
                </Nav>
            )
            profile =(
                <Nav className="me-auto">
                    <Nav.Link><NavLink to={"/profile"}>Profile</NavLink></Nav.Link>
                </Nav>
            )
        }else {
            button = (
                <Nav >
                    <Nav.Link><NavLink to={"/login"}>Login</NavLink></Nav.Link>
                    <Nav.Link><NavLink to={"/register"}>Register</NavLink></Nav.Link>
                </Nav>
            )
            profile = (
                <Nav className="me-auto">
                    <Nav.Link><NavLink to={"/"}>Home</NavLink></Nav.Link>

                </Nav>
            )

        }


        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><NavLink to={"/"}>React-Bootstrap</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {profile}
                        {button}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

}
export default  NavigationBar;