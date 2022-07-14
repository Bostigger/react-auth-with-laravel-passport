import React, {Component, Fragment} from "react";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import "../../assets/css/custom.css"

class Home  extends Component{

    render() {
        return (
            <Fragment>
                <div >
                    <Container className={"content-body"}>
                        <Row>
                            <Col lg={12} md={12} sm={12} className={"home"}>
                                <h3 className={"text-center"}>Home Page</h3>
                                <Card style={{ width: '30rem' }}>
                                    <Card.Body>

                                        <Card.Text>
                                            You are in the home page
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
export default Home;