import React, {Component, Fragment} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import "../../assets/css/custom.css"

class Register extends Component{

    render() {
        return (
            <Fragment>
                <div >
                    <Container className={"content"}>
                        <Row>
                            <Col lg={12} md={12} sm={12} className={"main"}>
                                <h3 className={"text-center"}>Register Account</h3>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="text" name={"name"} placeholder="Enter name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" name={"email"} placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name={"password_confirmation"} placeholder="Password" />
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
export default Register;