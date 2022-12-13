import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import TokenObtain from "../TokenObtain/TokenObtain";
import Modal from "react-bootstrap/Modal";
import { ethers } from "ethers";
import DAIABI from "../../ABI/DAIABI.js";
import GreenDAODEXABI from "../../ABI/GreenDAODEXABI.js";
import GreenDaoTokenABI from "../../ABI/GreenDaoTokenABI.js";

//import CSS
import "./GreenDAOla.scss";
const GreenDAOla = () => {
  // Buy settings
  const [show, setShow] = useState(false);
  const [show_approve, set_show_approve] = useState(false);
  const [address, setAddress] = useState(null);
  const [stakeAmount, setStateAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  // const [rewardsOfWallet, setRewardsOfWallet] = useState(0);
  const [buyOrSell, setBuyOrSell] = useState(0); // 1 for buy, 2 for sell
  // const [approved , setApproved] = useState(false);
  const buyToken = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (accounts[0] != null) {
        setShow(true);
        setBuyOrSell(1);
      }
    }
  };

  useEffect(() => {
    async function startComponent() {
      let accounts;
      if (typeof window.ethereum !== "undefined") {
        accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
      }
      setAddress(accounts[0]);

      // const provider = new ethers.providers.Web3Provider( window.ethereum, "any" );
      // const signer = provider.getSigner(address);
      // const GreenDaoToken = new ethers.Contract("0xaf243F40B5984b0E4fb89e68eeAD5D01Bac8A7c6" ,GreenDaoTokenABI, signer);
      // setRewardsOfWallet(await GreenDaoToken.getRewards(accounts[0]));
    }
    startComponent();
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const approveClose = () => {
    set_show_approve(false);
  };

  const stake_token = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const signer = provider.getSigner(address);
    const GreenDaoToken = new ethers.Contract(
      "0xaf243F40B5984b0E4fb89e68eeAD5D01Bac8A7c6",
      GreenDaoTokenABI,
      signer
    );
    const tx = await GreenDaoToken.stake(stakeAmount * 100000000);
    const receipt = await tx.wait();
    if (receipt.status == 0) return;
  };

  const unstake_token = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const signer = provider.getSigner(address);
    const GreenDaoToken = new ethers.Contract(
      "0xaf243F40B5984b0E4fb89e68eeAD5D01Bac8A7c6",
      GreenDaoTokenABI,
      signer
    );
    const tx = await GreenDaoToken.unStake();
    const receipt = await tx.wait();
    if (receipt.status == 0) return;
  };

  const approve = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const signer = provider.getSigner(address);
    if (buyOrSell == 1) {
      const DAITOKEN = new ethers.Contract(
        "0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F",
        DAIABI,
        signer
      );
      const tx = await DAITOKEN.approve(
        "0x662CEA353084b26177454aE8D1F4cDD5470594CF",
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      );
      const receipt = await tx.wait();
      if (receipt.status == 0) return;

      let element = document.getElementById("approve_id");
      element.classList.remove("active");
      element.classList.add("completed");
      // button disabled
      document.getElementById("approve_button").disabled = true;
      // button enable1
      document.getElementyId("swap_button").disabled = false;
    } else if (buyOrSell == 2) {
      const GreenDaoToken = new ethers.Contract(
        "0xaf243F40B5984b0E4fb89e68eeAD5D01Bac8A7c6",
        GreenDaoTokenABI,
        signer
      );
      const tx = await GreenDaoToken.approve(
        "0x662CEA353084b26177454aE8D1F4cDD5470594CF",
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      );
      const receipt = await tx.wait();
      if (receipt.status == 0) return;

      let element = document.getElementById("approve_id");
      element.classList.remove("active");
      element.classList.add("completed");
      // button disabled
      document.getElementById("approve_button").disabled = true;
      // button enable1
      document.getElementyId("swap_button").disabled = false;
    }
  };

  const Swap = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const signer = provider.getSigner(address);
    const GreenDaoDEX = new ethers.Contract(
      "0x662CEA353084b26177454aE8D1F4cDD5470594CF",
      GreenDAODEXABI,
      signer
    );
    const tx = await GreenDaoDEX.swap(buyOrSell - 1, amount * 100000000);
    const receipt = await tx.wait();
    if (receipt.status == 0) return;

    let element = document.getElementById("swap_id");
    element.classList.remove("active");
    element.classList.add("completed");
    document.getElementById("swap_button").disabled = true;
  };

  const confirmButtonClick = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const DAITOKEN = new ethers.Contract(
      "0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F",
      DAIABI,
      provider
    );
    const GreenDaoToken = new ethers.Contract(
      "0xaf243F40B5984b0E4fb89e68eeAD5D01Bac8A7c6",
      GreenDaoTokenABI,
      provider
    );
    const GreenDaoDEX = new ethers.Contract(
      "0x662CEA353084b26177454aE8D1F4cDD5470594CF",
      GreenDAODEXABI,
      provider
    );

    let accounts;
    if (typeof window.ethereum !== "undefined") {
      accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
    }
    setAddress(accounts[0]);

    if (buyOrSell == 1) {
      const allowanceOfDAI = await DAITOKEN.allowance(
        accounts[0],
        GreenDaoDEX.address
      );
      if (allowanceOfDAI.toString() != "0") {
        setShow(false);
        set_show_approve(true);
      } else {
        set_show_approve(true);
        setShow(false);
      }
    } else {
      const allowanceOfGreenDAO = await GreenDaoToken.allowance(
        accounts[0],
        GreenDaoDEX.address
      );
      if (allowanceOfGreenDAO.toString() != "0") {
        setShow(false);
        set_show_approve(true);
      } else {
        set_show_approve(true);
        setShow(false);
      }
    }
  };

  useEffect(() => {
    async function setApprove() {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      if (buyOrSell == 1) {
        const DAITOKEN = new ethers.Contract(
          "0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F",
          DAIABI,
          provider
        );
        const GreenDaoDEX = new ethers.Contract(
          "0x662CEA353084b26177454aE8D1F4cDD5470594CF",
          GreenDAODEXABI,
          provider
        );
        let accounts;
        if (typeof window.ethereum !== "undefined") {
          accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
        }

        const allowanceOfDAI = await DAITOKEN.allowance(
          accounts[0],
          GreenDaoDEX.address
        );
        console.log(allowanceOfDAI.toString());

        if (allowanceOfDAI != "0") {
          let element = document.getElementById("approve_id");
          element.classList.remove("active");
          element.classList.add("completed");
          // button disabled
          document.getElementById("approve_button").disabled = true;
        }
      }
      if (buyOrSell == 2) {
        const GreenDaoToken = new ethers.Contract(
          "0xaf243F40B5984b0E4fb89e68eeAD5D01Bac8A7c6",
          GreenDaoTokenABI,
          provider
        );
        const GreenDaoDEX = new ethers.Contract(
          "0x662CEA353084b26177454aE8D1F4cDD5470594CF",
          GreenDAODEXABI,
          provider
        );
        let accounts;
        if (typeof window.ethereum !== "undefined") {
          accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
        }
        const allowanceOfDAI = await GreenDaoToken.allowance(
          accounts[0],
          GreenDaoDEX.address
        );
        console.log(allowanceOfDAI.toString());

        if (allowanceOfDAI != "0") {
          let element = document.getElementById("approve_id");
          element.classList.remove("active");
          element.classList.add("completed");
          // button disabled
          document.getElementById("approve_button").disabled = true;
        }
      }
    }
    setApprove();
  }, [show_approve]);

  // Sell settings
  const sellToken = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (accounts[0] != null) {
        setShow(true);
        setBuyOrSell(2);
      }
    }
  };

  return (
    <>
      <div className="p-5 text-center token-item mt-[100px]">
        <h1 className="text-center">GreenDAOla($GD)</h1>
        <span className="text-center">
          Governance token/Stable coin for sustainability ecosystem
        </span>

        <Row
          lg={2}
          md={1}
          sm={1}
          xs={1}
          className="d-flex align-items-end justify-content-center mt-4"
        >
          <Col>
            <div className="d-grid gap-2">
              <div className="d-flex align-items-center justify-content-center">
                <img src="/token.png" alt="GreenDAOla" />
              </div>
            </div>
            <Row className="mt-4">
              <Col>
                <Button onClick={buyToken} variant="success" className="w-100">
                  BUY
                </Button>
              </Col>
              <Col>
                <Button onClick={sellToken} variant="danger" className="w-100">
                  SELL
                </Button>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col className="  ">
                <p>Stake Amount : </p>
                <Button
                  onClick={stake_token}
                  variant="success"
                  className="w-100"
                >
                  STAKE
                </Button>
              </Col>
              <Col className=" ">
                <input
                  className="form-control m-2"
                  type="number"
                  onChange={(e) => {
                    setStateAmount(e.target.value);
                  }}
                />
                <Button
                  onClick={unstake_token}
                  variant="danger"
                  className="w-100"
                >
                  UNSTAKE
                </Button>
              </Col>
            </Row>
          </Col>
          <Col>
            <Card>
              <Card.Header>SUPPLY</Card.Header>
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item>
                    Total Supply: 5,000,000,000 tokens
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            <Card className="mt-4">
              <Card.Header>VALUE</Card.Header>
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item>Value is 1 $GD = $1 SGD</ListGroup.Item>
                  <ListGroup.Item>
                    AI algorithm determines ESG offset value per token
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <h2 className="text-start">How to obtain $GD token?</h2>
          <TokenObtain />
        </Row>
      </div>
      {/* Quantity confirm modal */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Quantity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">$</span>
            </div>
            <input
              type="number"
              min={0}
              defaultValue={0}
              id="quantity"
              class="form-control"
              aria-label="Quantity of Token"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              if (document.getElementById("quantity").value == "0") {
                alert("quantity needed~!");
              } else {
                confirmButtonClick();
              }
            }}
          >
            Confirm
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal for Approve & Swap */}
      <Modal show={show_approve} onHide={approveClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Approve & Swap</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Approve Swap Stepper */}
          <div class="stepper-wrapper">
            <div class="stepper-item active" id="approve_id">
              <div class="step-counter">01</div>
              <div class="step-name">Approve</div>
            </div>
            <div class="stepper-item active" id="swap_id">
              <div class="step-counter">02</div>
              <div class="step-name">Swap</div>
            </div>
          </div>
          {/* Approve Swap Stepper */}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            id="approve_button"
            onClick={() => {
              approve();
            }}
          >
            Approve
          </Button>
          <Button
            variant="primary"
            id="swap_button"
            onClick={() => {
              Swap();
            }}
          >
            Swap
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GreenDAOla;
