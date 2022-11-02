import React, { useRef, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import DateTimePicker from "react-datetime-picker";
import "./BookModal.scss";

const BookModal = (props) => {
  const formRef = useRef(null);

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbw1YiviawtNFHzZ_hARkEEqZFION8lWiTBqSw7TfYhwrCQX__s-hUIqZ2fh_xwRlt_q/exec";

  const [date, setDate] = useState(new Date());

  const handleClose = () => {
    props.onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(scriptUrl, { method: "POST", body: new FormData(formRef.current) })
      .then((res) => {
        alert("Your Book Consultation Confirmed!");
        props.onClose();
        console.log("BOOK CONSULTATION SUCCESSFULLY SUBMITTED");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Modal show={props.show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Book a consultation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form method="post" ref={formRef} onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Organisation</Form.Label>
            <Form.Control
              type="text"
              name="organisation"
              placeholder="Organisation"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              name="position"
              placeholder="Position"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
            ></Form.Control>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>DateTime</Form.Label>
            <DateTimePicker
              value={date}
              name="date"
              onChange={setDate}
              className="form-control"
              minDate={new Date()}
            />
          </Form.Group>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Book
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default BookModal;
