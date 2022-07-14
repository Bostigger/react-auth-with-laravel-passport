import React, {Component, Fragment} from "react";
import NavigationBar from "../components/navbar/NavigationBar";
import Login from "../components/login/Login";
import ForgotPassword from "../components/forgotPassword/ForgotPassword";
import Profile from "../components/profile/Profile";
import axios from "axios";
import ApiBase from "../restApi/Api";
import {Card, Col, Container, Row} from "react-bootstrap";
import {Navigate} from "react-router-dom";

class ProfilePage  extends  Component{


    render() {
        let name;
        let email;

        if(this.props.user){
            name = this.props.user.name;
            email = this.props.user.email;
        }

        if(!localStorage.getItem('token')){
            return <Navigate to={'/login'}/>
        }


        return (
            <Fragment>
                <div>
                    <Container className={"content"}>
                        <Row>
                            <Col lg={12} md={12} sm={12} className={"main"}>
                                <h3 className={"text-center"}>Welcome {name}</h3>
                                <Card style={{ width: '27rem' }}>
                                    <Card.Body>

                                        <Card.Subtitle className="mb-2 text-muted">User Details</Card.Subtitle>
                                        <Card.Text>
                                            Email: {email} <br/>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}
export default ProfilePage;