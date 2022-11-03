import React, { useRef, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import DateTimePicker from "react-datetime-picker";
import "./BookModal.scss";

const BookModal = (props) => {
  const formRef = useRef(null);

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbznmQI32sMPI0VoWv7z2cE-kN3XEK8t8toViXBHvadMkkUIesvxw8meTEGnG3j_uKY_/exec";

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
              name="Name"
              placeholder="Name"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Organisation</Form.Label>
            <Form.Control
              type="text"
              name="Organisation"
              placeholder="Organisation"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              name="Position"
              placeholder="Position"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="Email"
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
              name="Date"
              onChange={setDate}
              className="form-control"
              minDate={new Date()}
            />
          </Form.Group>
          <Button variant="secondary" onClick={handleClose} className="m-2">
            Close
          </Button>
          <Button variant="primary" type="submit" className="m-2">
            Book
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default BookModal;
