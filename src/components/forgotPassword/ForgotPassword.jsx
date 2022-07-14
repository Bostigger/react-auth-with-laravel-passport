import React, {Component, Fragment} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import "../../assets/css/custom.css"
import axios from "axios";
import ApiBase from "../../restApi/Api";

class ForgotPassword  extends Component{
    constructor(props) {
        super(props);
        this.state={
            email:"",
            message:'',
            status:''
        }
    }

    onSend = (e)=>{
        e.preventDefault();
        const data = {
            email : this.state.email
        }
        axios.post(ApiBase.FORGOT_URL,data).then((response)=>{
            console.log(response)
            this.setState({
                status:'alert alert-success d-flex align-items-center',
                message:response.data.message
            })
        }).catch((error)=>{
            console.log(error)
            this.setState({
                status:'alert alert-danger d-flex align-items-center',
                message:error.response.data.message
            })
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


        return (
            <Fragment>
                <div >
                    <Container className={"content"}>
                        <Row>
                            <Col lg={12} md={12} sm={12} className={"main"}>
                                {error}
                                <h3 className={"text-center"}>Reset Your password</h3>
                                <Form onSubmit={this.onSend}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" name={"email"} placeholder="Enter email" onChange={(e)=>{this.setState({email:e.target.value})}} />
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
export default ForgotPassword;