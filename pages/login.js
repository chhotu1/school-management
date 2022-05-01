import Image from 'next/image';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import Helpers from '../src/Helpers';
import {Breadcrumb} from '../src/web-app/components';
const Login = () => {
    return (
        <>
            <Breadcrumb page="Login"/>
            <Container className="mt-4">
                <Row>
                    <Col>
                        <Card>
                            <Form className="p-3 pb-4">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
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
                            height={280}
                            className="d-block w-100"
                            layout="responsive"
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login;