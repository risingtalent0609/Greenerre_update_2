import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import DateTimePicker from "react-datetime-picker";
import "./BookModal.scss";

const BookModal = (props) => {
  const [date, setDate] = useState(new Date());

  const handleClose = () => {
    props.onClose();
  };

  const handleBook = () => {
    props.onBook();
  };
  return (
    <Modal show={props.show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Book a consultation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Organisation</Form.Label>
            <Form.Control type="text" placeholder="Organisation"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Position</Form.Label>
            <Form.Control type="text" placeholder="Position"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email"></Form.Control>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>DateTime</Form.Label>
            <DateTimePicker
              value={date}
              onChange={setDate}
              className="form-control"
              minDate={new Date()}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleBook}>
          Book
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookModal;
