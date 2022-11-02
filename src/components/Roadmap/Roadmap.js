import React from "react";

//import CSS
import "./Roadmap.scss";

const Roadmap = () => {
  return (
    <div className="container">
      <h1 className="text-center mb-4">Roadmap</h1>
      <div className="row">
        <div className="col-md-12">
          <div className="main-timeline">
            <div className="timeline">
              <div href="#" className="timeline-content">
                <div className="timeline-icon">
                  <i className="fa fa-globe"></i>
                </div>
                <div className="timeline-year">
                  2022
                  <br />
                  08
                </div>
                <h3 className="title">
                  Launch GreenDAOla token and integrate AOC with GreenDAO
                </h3>
                <p className="description">
                  <span>
                    - 10% of total $GD token supple generated for airdrop, live
                    sales and give aways
                  </span>{" "}
                  <br />
                  <span>
                    - Remainder 90% of $GD token supply immediately available to
                    start mining through Green Activities
                  </span>{" "}
                  <br />
                  <span>
                    - Airdrop $GD tokens to AOC holder wallets + community
                    giveaways{" "}
                  </span>
                  <br />
                  <span>
                    - Partnerships withs Singapore sustainability groups,
                    supermarkets, F&amp;B chain outlets
                  </span>
                  <br />
                  <span>- $GD available for purchase on Greenerre website</span>
                  <br />
                  <span>
                    - Integrated marketplace for GreenDAO merchandise and
                    sustainable products on Greenerre website using $GD tokens
                  </span>
                </p>
              </div>
            </div>
            <div className="timeline">
              <div href="#" className="timeline-content">
                <div className="timeline-icon">
                  <i className="fa fa-rocket"></i>
                </div>
                <div className="timeline-year">
                  2022 <br /> 09
                </div>
                <h3 className="title">Alpha testing for VPets</h3>
                <p className="description">
                  <span>- Limited to AOC holders and special invites only</span>
                  <br />
                  <span>- 2 weeks limited access Alpha test</span>
                </p>
              </div>
            </div>
            <div className="timeline">
              <div href="#" className="timeline-content">
                <div className="timeline-icon">
                  <i className="fa fa-rocket"></i>
                </div>
                <div className="timeline-year">
                  2022 <br /> 10
                </div>
                <h3 className="title">
                  Open Beta public release for VPets with limited edition give
                  aways
                </h3>
                <p className="description">
                  <span>
                    - VPet generation, interaction, in-game currency, free $GD
                    tokens for new players, equipment, accessories
                  </span>
                </p>
              </div>
            </div>
            <div className="timeline">
              <div href="#" className="timeline-content">
                <div className="timeline-icon">
                  <i className="fa fa-rocket"></i>
                </div>
                <div className="timeline-year">
                  2022 <br /> 11
                </div>
                <h3 className="title">$GD available for corporate adoption</h3>
                <p className="description">
                  <span>
                    - $GD can be bought in bulk from remaining supply at a
                    slight discount
                  </span>{" "}
                  <br />
                  <span>
                    - To be used in transacting between sustainability partners
                    or customer reward systems
                  </span>
                </p>
              </div>
            </div>
            <div className="timeline">
              <div href="#" className="timeline-content">
                <div className="timeline-icon">
                  <i className="fa fa-rocket"></i>
                </div>
                <div className="timeline-year">
                  2022 <br /> 12
                </div>
                <h3 className="title">Full release for VPets</h3>
                <p className="description">
                  <span>
                    - More equipment and accessories available to players
                  </span>
                  <br />
                  <span>- Introduction of usable skills</span>
                  <br />
                  <span>- Introduction of PvP combat feature</span>
                  <br />
                  <span>
                    - Announcement of Official League Tournament in Mar 2023
                    with lucrative prizes
                  </span>
                </p>
              </div>
            </div>
            <div className="timeline">
              <div href="#" className="timeline-content">
                <div className="timeline-icon">
                  <i className="fa fa-rocket"></i>
                </div>
                <div className="timeline-year">
                  2023 <br /> 01
                </div>
                <h3 className="title">
                  Extend GreenDAO partnerships to US & Australia
                </h3>
                <p className="description"></p>
              </div>
            </div>
            <div className="timeline">
              <div href="#" className="timeline-content">
                <div className="timeline-icon">
                  <i className="fa fa-rocket"></i>
                </div>
                <div className="timeline-year">
                  2023 <br /> 03
                </div>
                <h3 className="title">Vpets Tournament and Series A</h3>
                <p className="description"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
