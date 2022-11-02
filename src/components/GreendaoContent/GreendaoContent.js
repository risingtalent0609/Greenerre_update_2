import React from "react";
import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";

import "./GreendaoContent.scss";
/**
 * @param constants identifier to seperate tabs of categories in What is <b>GreenDAO</b>(GD)
 */
const WHATSUMMARY = "WHATSUMMARY";
const WHATSERVE = "WHATSERVE";
const WHATPROBLEM = "WHATPROBLEM";
const WHATREASONTOCREATE = "WHATREASONTOCREATE";
/**
 * @param constants identifier to seperate tabs of categories in How the <b>GreenDAO</b> ecosystem works
 */
const HOWCOMMUNITY = "HOWCOMMUNITY";
const HOWTOKENS = "HOWTOKENS";
const HOWGETTOKENS = "HOWGETTOKENS";
const HOWDOTOKENS = "HOWDOTOKENS";
const HOWBUSINESS = "HOWBUSINESS";

const Greendao_content = () => {
  /**
   *  @param contents useStates identifier to change tabs
   */
  const [what_contents, setWhatContents] = useState(WHATSUMMARY);
  const [how_contents, setHowContents] = useState(HOWCOMMUNITY);
  /**
   *
   * @param {clickWhatState} ID this would be set useState identifier to change tab contents when you click any tab button in What is <b>GreenDAO</b>(GD)
   */
  const clickWhatState = (ID) => {
    setWhatContents(ID);
  };

  /**
   *
   * @param {changeWhatContent} contents This would be changeed tab contents by setting useState identifier
   * @returns Maybe tab contents by following any category
   */
  const changeWhatContent = (contents) => {
    switch (contents) {
      // case WHATSUMMARY:
      //   return (
      //     <>
      //       <p>
      //         <b>GreenDAO</b> is a platform that incentivises participation in
      //         ESG activities, bridging event organisers with participants and
      //         appropriate funding. <b>GreenDAO</b> aims to make sustainability
      //         accessible to everyone within each of their various capacities.
      //         The platform will qualify and quantify carbon-related activities,
      //         as well as, non-carbon related activities such as social
      //         philanthropy, equality and conservation.
      //       </p>
      //       <p>
      //         The Decentralised Autonomous Organisation (DAO) serves to create a
      //         consensus network to determine the value of various non-carbon
      //         related activities, and to create a diverse and international
      //         network for like-minded individuals in the sustainability space to
      //         share information and collaborate.
      //       </p>
      //     </>
      //   );
      case WHATSERVE:
        return (
          <p>
            <b>GreenDAO</b> serves both individuals and businesses. By breaking
            down any and all barriers for anyone who wants to engage in
            sustainability activities and get rewarded for their participation.
            Businesses can support local sustainability efforts at a grassroots
            level, rather than rely purely on carbon credits for offsets.
          </p>
        );
      case WHATPROBLEM:
        return (
          <>
            <p>
              The issue with sustainability today is the tunnel vision focus on
              carbon offset activities and solutions
            </p>
            <p>
              <b>GreenDAO</b> aims to gamify all aspects of the 17 United
              Nations Sustainable Development Goals (UNSDGs) to garner greater
              active participation from individuals and businesses across a
              holistic range of sustainability activities.
            </p>
          </>
        );
      case WHATREASONTOCREATE:
        return (
          <>
            <p>
              We strongly believe in the need for mass collaboration for science
              and technology to progress at a pace sufficient enough to keep up
              with climate change and shifting global needs (food, energy,
              resources and safety). The utilisation of blockchain technology
              allows for individuals of various professions, industries and
              nationalities to consolidate into a decentralised group which
              facilitates sharing of information, constructive discussions and
              promotes collaboration; in a safe and productive environment.
            </p>
            <p>
              In doing so, <b>GreenDAO</b> aims to minimise duplication of
              resources used for Research and Development of innovative new
              products, and to promote healthy collaboration towards the
              advancement of scientific understanding and technological
              development.
            </p>
          </>
        );
      default:
        return (
          <>
            <p>
              <b>GreenDAO</b> is a platform that incentivises participation in
              ESG activities, bridging event organisers with participants and
              appropriate funding. <b>GreenDAO</b> aims to make sustainability
              accessible to everyone within each of their various capacities.
              The platform will qualify and quantify carbon-related activities,
              as well as, non-carbon related activities such as social
              philanthropy, equality and conservation.
            </p>
            <p>
              The Decentralised Autonomous Organisation (DAO) serves to create a
              consensus network to determine the value of various non-carbon
              related activities, and to create a diverse and international
              network for like-minded individuals in the sustainability space to
              share information and collaborate.
            </p>
          </>
        );
    }
  };
  /**
   *
   * @param {clickWhatState} ID this would be set useState identifier to change tab contents when you click any tab button in What is <b>GreenDAO</b>(GD)
   */
  const clickHowState = (ID) => {
    setHowContents(ID);
  };

  /**
   *
   * @param {changeWhatContent} contents This would be changeed tab contents by setting useState identifier
   * @returns Maybe tab contents by following any category
   */
  const changeHowContent = (contents) => {
    switch (contents) {
      // case HOWCOMMUNITY:
      //   return (
      //     <p>
      //       Community members are required to actively own an Altlanteans
      //       Official Club (AOC) NFT. While there is a wallet limit of 10 NFTs,
      //       each wallet is only entitled to 1 vote within the DAO regardless of
      //       the number of AOC NFTs owned. Community members have to be doxxed
      //       via Polygon ID to be able to vote in community polls. Participation
      //       in voting events will earn community members{" "}
      //       <b>GreenDAOla ($GD) tokens</b>.
      //     </p>
      //   );
      case HOWTOKENS:
        return (
          <p>
            <b>$GD tokens</b> utilise a mix of both Web2 and Web3 technologies;
            ensuring the ease of access of Web2 and the security and
            decentralised functionality of Web3. Tokens are pegged to the value
            of 1 Singapore Dollar ($1 SGD) with a tolerance of up to 5% (up and
            down) on centralised exchanges. Tokens spent within the{" "}
            <b>GreenDAO</b>
            ecosystem do not carry a transaction fee. Any withdrawals will incur
            a transaction fee of 3.5%.
          </p>
        );
      case HOWGETTOKENS:
        return (
          <>
            <p>
              1. Participate in ESG activities (beach clean-ups, recycling
              programs, etc)
            </p>
            <p>
              2. Purchase <b>$GD tokens</b> directly from Greenerre
            </p>
            <p>3.Purchase or traded from Centralised Exchanges</p>
            <p>4. Redeemed in lieu of payment for goods and services sold</p>
          </>
        );
      case HOWDOTOKENS:
        return (
          <>
            <p>
              1. Exchange tokens for goods and services at TheGreenerMarket
              which promotes a curated catalogue of sustainable products.
            </p>
            <p>
              2. Exchange tokens for goods and services at approved partner
              vendors
            </p>
            <p>3. Trade on Centralised Exchanges</p>
            <p>4. Stake for more rewards</p>
            <p>5. Withdraw for cash ($SGD/MATIC)</p>
          </>
        );

      case HOWBUSINESS:
        return (
          <p>
            Businesses may purchase <b>$GD tokens</b> of various local ESG
            activities as voluntary ESG credits to use as offsets. This allows
            businesses to support grassroots decarbonisation activities and
            social ventures in their localised area of operations, bringing
            positive improvements to the local communities.
          </p>
        );
      default:
        return (
          <p>
            Community members are required to actively own an Altlanteans
            Official Club (AOC) NFT. While there is a wallet limit of 10 NFTs,
            each wallet is only entitled to 1 vote within the DAO regardless of
            the number of AOC NFTs owned. Community members have to be doxxed
            via Polygon ID to be able to vote in community polls. Participation
            in voting events will earn community members{" "}
            <b>GreenDAOla ($GD) tokens</b>.
          </p>
        );
    }
  };
  return (
    <Container>
      <h2 className="text-center mb-10 mt-10 text-success fs-1" id="whatTitle">
        What is GreenDAO(GD)
      </h2>
      <Row className="text-center font-bold fs-5 ">
        <Col
          lg={2}
          id={WHATSUMMARY}
          onClick={(event) => {
            clickWhatState(event.target.id);
          }}
          className={
            what_contents === WHATSUMMARY
              ? "border-bottom rounded mr-3 activate border-success my-2"
              : "border-bottom mr-3 my-2"
          }
        >
          <a href="#whatTitle" id={WHATSUMMARY}>
            Summary
          </a>
        </Col>
        <Col
          lg={3}
          id={WHATSERVE}
          onClick={(event) => {
            clickWhatState(event.target.id);
          }}
          className={
            what_contents === WHATSERVE
              ? "border-bottom rounded mr-3 activate border-success my-2"
              : "border-bottom mr-3 my-2"
          }
        >
          <a href="#whatTitle" id={WHATSERVE}>
            Who does it serve
          </a>
        </Col>
        <Col
          lg={3}
          id={WHATPROBLEM}
          onClick={(event) => {
            clickWhatState(event.target.id);
          }}
          className={
            what_contents === WHATPROBLEM
              ? "border-bottom rounded activate mr-3 border-success my-2"
              : "border-bottom mr-3 my-2"
          }
        >
          <a href="#whatTitle" id={WHATPROBLEM}>
            Problem statement
          </a>
        </Col>
        <Col
          id={WHATREASONTOCREATE}
          onClick={(event) => {
            clickWhatState(event.target.id);
          }}
          className={
            what_contents === WHATREASONTOCREATE
              ? "border-bottom rounded activate border-success my-2"
              : "border-bottom my-2"
          }
        >
          <a href="#whatTitle" id={WHATREASONTOCREATE}>
            Why did we create GreenDAO
          </a>
        </Col>
      </Row>
      <Container className=" mt-10" id="whatContent">
        {changeWhatContent(what_contents)}
      </Container>
      <h1
        className="mt-20 mb-10 fs text-center text-success fs-1"
        id="howTitle"
      >
        How the GreenDAO ecosystem works
      </h1>
      <Row className="font-bold fs-5  text-center">
        <Col
          lg
          id={HOWCOMMUNITY}
          onClick={(event) => {
            clickHowState(event.target.id);
          }}
          className={
            how_contents === HOWCOMMUNITY
              ? "border-bottom rounded mr-3 activate border-success my-2"
              : "border-bottom mr-3 my-2"
          }
        >
          <a href="#howTitle" id={HOWCOMMUNITY}>
            Community of GreenDAO
          </a>
        </Col>
        <Col
          lg
          id={HOWTOKENS}
          onClick={(event) => {
            clickHowState(event.target.id);
          }}
          className={
            how_contents === HOWTOKENS
              ? "border-bottom rounded mr-3 activate border-success my-2"
              : "border-bottom mr-3 my-2"
          }
        >
          <a href="#howTitle" id={HOWTOKENS}>
            GreenDAOla ($GD) Tokens
          </a>
        </Col>
        <Col
          lg
          id={HOWGETTOKENS}
          onClick={(event) => {
            clickHowState(event.target.id);
          }}
          className={
            how_contents === HOWGETTOKENS
              ? "border-bottom rounded mr-3 activate border-success my-2"
              : "border-bottom mr-3 my-2"
          }
        >
          <a href="#howTitle" id={HOWGETTOKENS}>
            How to get $GD tokens
          </a>
        </Col>
        <Col
          lg
          id={HOWDOTOKENS}
          onClick={(event) => {
            clickHowState(event.target.id);
          }}
          className={
            how_contents === HOWDOTOKENS
              ? "border-bottom rounded mr-3 activate border-success my-2"
              : "border-bottom mr-3 my-2"
          }
        >
          <a href="#howTitle" id={HOWDOTOKENS}>
            What to do with $GD tokens
          </a>
        </Col>
        <Col
          lg
          id={HOWBUSINESS}
          onClick={(event) => {
            clickHowState(event.target.id);
          }}
          className={
            how_contents === HOWBUSINESS
              ? "border-bottom rounded activate border-success my-2"
              : "border-bottom my-2"
          }
        >
          <a href="#howTitle" id={HOWBUSINESS}>
            How businesses can take part in GreenDAO
          </a>
        </Col>
      </Row>
      <Container className=" mb-20 my-10" id="howContent">
        {changeHowContent(how_contents)}
      </Container>
    </Container>
  );
};

export default Greendao_content;
