import React from "react";
import { useState } from "react";
//import Components
import Container from "react-bootstrap/Container";

import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import BookModal from "../BookModal/BookModal";
import GreenDaoTokenABI from "../../ABI/GreenDaoTokenABI.js";
//import CSS
import "./NavbarMenu.scss";
const ethers = require("ethers");
const SGD_TOKEN_TESTNET_ADDRESS = '0xaf243F40B5984b0E4fb89e68eeAD5D01Bac8A7c6';
const NavbarMenu = () => {
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState(null);
  const [EthBalance, setEthBalance] = useState(null);
  const [SGDBalance, setSGDBalance] = useState(null);


  const handleClose = () => {
    setShow(false);
  };
  const handleOpen = () => {
    setShow(true);
  };

  const handleBook = () => {
    setShow(false);
  };


  const getEthBalance = async (address) =>{
    const provider = new ethers.providers.Web3Provider( window.ethereum, "any" );
    const balance_ETH = await provider.getBalance(address);
    // const balance_SGD = await provider.getBalance(SGD_TOKEN_TESTNET_ADDRESS);
    const balanceInEth = ethers.utils.formatEther(balance_ETH);
    // const balanceInSGD = ethers.utils.formatEther(balance_SGD);
    return parseFloat(balanceInEth).toFixed(2);
  }

  const getSGDBalance = async (address) => {
    const provider = new ethers.providers.Web3Provider( window.ethereum, "any" );
    const GreenDaoToken = new ethers.Contract(SGD_TOKEN_TESTNET_ADDRESS ,GreenDaoTokenABI,provider);
    const tokenAmount = await GreenDaoToken.balanceOf(address);
    return parseFloat(tokenAmount.toString() / 100000000).toFixed(2);
  }
  
  const connectWallet = async () => {
    
    if (typeof window.ethereum !== 'undefined') {      
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
    });
    setAddress(accounts[0]);

    setEthBalance(await getEthBalance(accounts[0]))
    setSGDBalance(await getSGDBalance(accounts[0]))
    }
    else{      
      window.open("https://metamask.io/download");
    }
  }

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#" className="pl-5">
          <img src="/logo.webp" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100vh" }}
            navbarScroll
          >
            <Nav.Link href="/" className="px-4">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="px-4">
              About
            </Nav.Link>
            <Nav.Link href="/services" className="px-4">
              Services
            </Nav.Link>
            <Nav.Link href="/greendao" className="px-4">
              GreenDAO
            </Nav.Link>
            <NavDropdown
              title="More"
              id="navbarScrollingDropdown"
              className="px-4"
            >
              <NavDropdown.Item href="/project">Projects</NavDropdown.Item>
              {/* <NavDropdown.Item href="/outreach-education">
                Outreach &amp; Education
              </NavDropdown.Item> */}
              <NavDropdown.Item href="/advisor">
                Board of Advisors
              </NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex px-4">
              <button
                type="button"
                className="btn-consultation"
                onClick={handleOpen}
              >
                Book a Consultation
              </button>

              <button
                type="button"
                className="btn-consultation"
                onClick={connectWallet}
              >
                {address && <label className="text-left">Address : &nbsp; </label>} 
                {
                  address == null ? "Connect wallet" : address.slice(0,4) + "..." + address.slice(-4)
                }              
                <br />
                {address && EthBalance && <label className="text-left">ETH : &nbsp; </label>}
                {
                  EthBalance == null ? "" : EthBalance
                }
                {address && EthBalance && <label>&nbsp; | &nbsp;</label>}
                {address && EthBalance && SGDBalance && <label className="text-left">SGD : &nbsp; </label>} 
                {
                  SGDBalance == null ? "" : SGDBalance
                } 
              </button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <BookModal show={show} onClose={handleClose} onBook={handleBook} />
    </Navbar>
  );
};

export default NavbarMenu;
