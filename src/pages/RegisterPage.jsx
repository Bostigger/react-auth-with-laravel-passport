import React, {Component, Fragment} from "react";
import NavigationBar from "../components/navbar/NavigationBar";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import data from "bootstrap/js/src/dom/data";
import axios from "axios";
import ApiBase from "../restApi/Api";
import LoginPage from "./HomePage";
import {Link, Redirect, Navigate } from "react-router-dom";

class RegisterPage  extends  Component{
    constructor(props) {
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            password_confirmation:"",
            message:"",

        }
    }

    onRegister = (e)=>{
        e.preventDefault();
        const data = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            password_confirmation:this.state.password_confirmation,
        }
        axios.post(ApiBase.REGISTER_URL,data).then((response)=>{
            console.log(response)
            this.setState({
                message:response.data.message,
                accountCreated:true
            })
        }).catch((error)=>{
            this.setState({
                message:error.response.data.message
            })
        })
    }

    render() {
        let error;
        if(this.state.message){
            error = (
                <div className="alert alert-danger d-flex align-items-center" role="alert">
                    <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">
                    </svg>
                    <div>
                        {this.state.message}
                    </div>
                </div>
            )
        }
        if(this.state.accountCreated){
            return <Navigate to={"/login"}/>

        }

        if(localStorage.getItem('token')){
            return <Navigate to={'/profile'}/>
        }

        return (
            <Fragment>
                <div >
                    <Container className={"content"}>
                        <Row>
                            <Col lg={12} md={12} sm={12} className={"main"}>
                                {error}
                                <h3 className={"text-center"}>Register Account</h3>
                                <Form onSubmit={this.onRegister}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name={"name"} placeholder="Enter name" required onChange={(e)=>{this.setState({name:e.target.value})}} />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" name={"email"} placeholder="Enter email" required onChange={(e)=>{this.setState({email:e.target.value})}} />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" required onChange={(e)=>{this.setState({password:e.target.value})}} />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" name={"password_confirmation"} placeholder="Password" required onChange={(e)=>{this.setState({password_confirmation:e.target.value})}} />
                                    </Form.Group>

                                    <Button variant="secondary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}
export default RegisterPage;