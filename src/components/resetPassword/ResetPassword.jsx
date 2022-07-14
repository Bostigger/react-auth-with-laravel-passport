import React, {Component, Fragment, useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Navigate, useParams} from "react-router-dom";
import axios from "axios";
import ApiBase from "../../restApi/Api";

class ResetPassword extends Component{
    constructor(props) {
        super(props);
        this.state={
            token:'',
            email:'',
            password:'',
            password_confirmation:'',
            message:'',
        }
    }
    onPassReset = (e)=>{
        e.preventDefault();
        const data = {
            token: this.state.token,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
        }
        axios.post(ApiBase.RESET_PASSWORD,data).then((response)=>{
            this.setState({
                message:response.data.message,
                passwordChanged:true,
            })
            document.getElementById('resetForm').reset();
            }).catch((error)=>{
                this.setState({
                    message:error.response.data.message
                })
            console.log(error)
        })
    }

    render() {

        let error="";

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

        if(this.state.passwordChanged){
            return <Navigate to={"/login"}/>
        }
        return (
            <Fragment>
                <div >
                    <Container className={"content"}>
                        <Row>

                            <Col lg={12} md={12} sm={12} className={"main"}>
                                {error}
                                <h3 className={"text-center"}>Reset Password</h3>
                                <Form onSubmit={this.onPassReset} id={"resetForm"}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Token</Form.Label>
                                        <Form.Control type="text" name={"name"} placeholder="Enter Token" required onChange={(e)=>{this.setState({token:e.target.value})}} />
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

}export default ResetPassword;