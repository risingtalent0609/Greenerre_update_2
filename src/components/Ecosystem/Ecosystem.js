import React , {useState} from "react";
import { Row, Col , Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./Ecosystem.scss";

import EcosystemItem from "../EcosystemItem/EcosystemItem";
import GreendaoContent from "../GreendaoContent/GreendaoContent";
const Ecosystem = () => {

  const [show , setShow] = useState(false);
  const [formData , setFormData] = useState({
    name  : "",
    email : "",
    password : ""
  });

  const handleClose = () => {
    setShow(false);
  }
  
  const handleChange = (e) => {
    setFormData({...formData , [e.target.name] : e.target.value})
    console.log(formData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }
  return (
    <>
      <div id="logo_ecosystem">
        <img src="/greenDAO_invis_bg.png" alt="logo goes here" />
      </div>
      <div>
        <button className="btn btn-success float-right mr-10" onClick={()=>{setShow(true)}}>Create Profile</button>
      </div>
      <div className="p-5">
        <h1 className="text-center mt-10 mb-10 text-success fs-0">Ecosystem</h1>
        <Row lg={3} md={2} xs={1} className="eco-content">
          <Col className="mb-2">
            <EcosystemItem
              className="my_pic"
              text="Altlanteans Official Club"
              alink="https://altlanteansoc.com/"
              type="out"
              image="/aoc.jpg"
            />
          </Col>
          <Col className="mb-2">
            <EcosystemItem
              className="my_pic"
              text="GreenDAOla"
              alink="/greenDAOla"
              image="/token.png"
              type="local"
            />
          </Col>
          {/* <Col className="mb-2">
            <EcosystemItem
              text="Vpets"
              alink="/vpets"
              image="/vpets.png"
              type="local"
            />
          </Col> */}
          <Col className="mb-2">
            <EcosystemItem
              className="my_pic"
              text="TheGreenerMarket"
              alink="/market"
              image="marketplace.png"
              type="local"
            />
          </Col>
          {/* <Col className="mb-2">
          <EcosystemItem
            text="Coming soon"
            alink="/soon"
            image="/coming-soon.png"
          />
        </Col> */}
        </Row>
      </div>
      <div>
        <GreendaoContent />
      </div>
      {/* Create Profile Modal */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* Form creation */}
        <Form method="post" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="Name"
              onChange={handleChange}
              placeholder="John Doe"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="JohnDoe@mail.com"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="password"
            ></Form.Control>
          </Form.Group>
          {/* <Form.Group className="mb-3">
            <Form.Label>Balance</Form.Label>
            <Form.Control
              type="text"
              name="balance"
              placeholder="Balance"
            ></Form.Control>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group> */}
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Link to={'/profileView'}>
          <Button to={'/profileView'} variant="success">
            Create
          </Button>
          </Link>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal for Approve & Swap */}
    </>
  );
};

export default Ecosystem;
