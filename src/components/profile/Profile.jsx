import React, {Component, Fragment} from "react";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import "../../assets/css/custom.css"

class Profile  extends Component{
    constructor(props) {
        super(props);
        console.log(this.props)
    }


    render() {
        return (
            <Fragment>
                <div >
                    <Container className={"content"}>
                        <Row>
                            <Col lg={12} md={12} sm={12} className={"main"}>
                                <h3 className={"text-center"}>Welcome {this.props.user.name}</h3>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>

                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
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
export default Profile;