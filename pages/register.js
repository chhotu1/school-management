import Image from "next/image";
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Breadcrumb } from '../src/web-app/components';

import Helpers from "../src/Helpers";
const Register = () => {
    return (
        <>
            <Breadcrumb page="Register" />
            <Container className="mt-4">
                <Row>
                    <Col>
                        <Card>
                            <Form className="p-3 pb-4">
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="phone">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter phone number" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                    <Col>
                        <Image
                            src={Helpers.Images.bradcome}
                            alt="Picture of the author"
                            height={475}
                            className="d-block w-100"
                            layout="responsive"
                        />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Register;