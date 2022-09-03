import React from 'react'
import { Card, Form, Button } from 'react-bootstrap';

export default function Signup() {
  return (
    <>
    <Card>
        <Card.Title>Sign Up</Card.Title>
        <Card.Body>
            <Form>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type ="email" required />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type ="password" required />
                </Form.Group>
                <Form.Group id="confirm-password">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type ="password" required />
                </Form.Group>
                <Button>Submit</Button>
            </Form>
        </Card.Body>
    </Card>
    </>
  )
}
