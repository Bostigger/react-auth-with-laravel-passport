import React, {Component, Fragment} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import "../../assets/css/custom.css"
import {Link, Redirect, Navigate } from "react-router-dom";
import Api from "../../restApi/Api";
import ApiBase from "../../restApi/Api";
import axios from "axios";
import ProfilePage from "../../pages/ProfilePage";

class Login  extends Component{
    constructor(props) {
        super(props);
        this.state ={
            email:'',
            password:'',
            message:'',
            status:''
        }
    }

    loginSubmit = (e)=>{
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        e.preventDefault();
        axios.post(ApiBase.LOGIN_URL,data).then((response)=>{
           localStorage.setItem('token',response.data.token)
            this.setState({
                message:response.data.message,
                status:'alert alert-success d-flex align-items-center',
                loggedIn:true,
            })
           this.props.setUser(response.data.user)
        }).catch((error)=>{
            this.setState({
                status:'alert alert-danger d-flex align-items-center',
                message:error.response.data.message,
            })
            console.log(error)
        })
    }

    render() {

        let error;
        if(this.state.message){
            error = (
                <div className={this.state.status} role="alert">
                    <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">
                    </svg>
                    <div>
                        {this.state.message}
                    </div>
                </div>
            )
        }

        if (this.state.loggedIn){
            return <Navigate to={"/"}/>
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
                              <h3 className={"text-center"}>Login Now</h3>
                              <Form onSubmit={this.loginSubmit}>
                                  <Form.Group className="mb-3">
                                      <Form.Label>Email address</Form.Label>
                                      <Form.Control type="email" name={"email"} placeholder="Enter email" required onChange={(e)=>{this.setState({email:e.target.value})}}/>
                                  </Form.Group>

                                  <Form.Group className="mb-3">
                                      <Form.Label>Password</Form.Label>
                                      <Form.Control type="password" name={"password"} placeholder="Password" required onChange={(e)=>{this.setState({password:e.target.value})}} />
                                  </Form.Group>

                                  <Button variant="secondary" type="submit">
                                      Submit
                                  </Button>
                                  <br/>
                                  <Link to={"/forgot"}>Forgot Password?</Link>
                              </Form>
                          </Col>
                      </Row>
                  </Container>
              </div>
           </Fragment>
        );
    }

}
export default Login;