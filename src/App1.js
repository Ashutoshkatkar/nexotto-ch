import React, { useEffect, useState } from 'react'
import {
    Button,
    CardImg,
    Card,
    CardHeader,
    CardBody,
    Input,
    Container,
    Row,
    Col,
    Modal,
    ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import { login, checklogin } from './action/index'
import { useNavigate, Redirect } from "react-router-dom";
export default function App1({ login, LoginDetails, checklogin, LoginDetailsrecieved }) {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const [isSubmit, setIsSubmit] = useState();
    const [modal, setModal] = useState(false);
    let navigate = useNavigate();
    // Toggle for Modal
    const toggle = () => setModal(!modal);

    const handleSubmit = (e) => {
        console.log('clickk')
        e.preventDefault();

        login({
            email: email,
        });

    }

    useEffect(() => {
        if (LoginDetails) {
            if (LoginDetails.user.email == email) {
                console.log('json data', LoginDetails.companyName)
                alert('user authentication success')
                setModal(!modal)
                setPassword("")
            } else {
                alert("wrong !!")
            }
        }
    }, [LoginDetails])


    const Login = (e) => {

        checklogin({
            email: email,
            password: password
        })
        setModal(!modal)
    }
    useEffect(() => {
        if (LoginDetailsrecieved) {
            if (LoginDetailsrecieved.loginResult == 'SUCCESS') {
                alert('success')

                window.location.href = "https://nexotto.com";
                // setModal(!modal)
                // setPassword("")
            } else {
                alert("wrong !!")
            }
        }
    }, [LoginDetailsrecieved])

    return (
        <div>
            {/* <h1>Iam app</h1> */}
            {modal ? (
                <>
                    {/* <Button color="danger"
                        onClick={toggle}>Click me to open Modal</Button> */}
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader
                            toggle={toggle}>User Deatils</ModalHeader>
                        <ModalBody>
                            Email: {LoginDetails.user.email}<br></br>
                            firstname:{LoginDetails.user.firstName}<br></br>
                            lastname:{LoginDetails.user.lastName}
                        </ModalBody>
                        <ModalFooter>
                            <Input
                                className="form-control-alternative"
                                required
                                value={email}
                                readOnly
                                placeholder="Email"
                                type="email"
                            />
                            <Input
                                className="form-control-alternative"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="password"
                                type="password"
                            />
                            <Button color="primary" onClick={toggle}>Okay</Button>
                            <Button color="primary" onClick={Login}>Login</Button>
                        </ModalFooter>
                    </Modal>
                </>
            ) : ("")}
            <Container className="py-lg-md d-flex">
                <div className="col ">
                    <Row className="justify-content-md-center">
                        <Col lg="6" sm='12' xs='12'>
                            <Card className="bg-secondary shadow border-0 mt-5 floating">
                                <CardHeader className="bg-white">
                                    <div className="text-muted text-center">
                                        <h2>Sign in with</h2>
                                    </div>
                                </CardHeader>
                                <CardBody className="px-lg-5 py-lg-5">
                                    <Form
                                        noValidate
                                        // validated={isSubmit}
                                        onSubmit={handleSubmit}
                                        role="form"
                                    >
                                        <Form.Group className="mb-3">
                                            <i className="ni ni-email-83" />
                                            <Input
                                                className="form-control-alternative"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Email"
                                                type="email"
                                            />

                                        </Form.Group>
                                        <div className="text-center">
                                            <Button className="my-4" color="danger" type="submit">
                                                Sign in
                                            </Button>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

const mapDispatchToProps = {
    // checkLoginDetails: checkLoginDetails,
    login: login,
    checklogin: checklogin
};

const mapStateToProps = (state) => ({
    LoginDetails: state.loginDetails,
    LoginDetailsrecieved: state.loginDetailsrecieved
});

App1 = connect(mapStateToProps, mapDispatchToProps)(App1);
