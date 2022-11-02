import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

//import CSS
import "./VpetsCategory.scss";
const VPetsCategory = () => {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper shadow-xl"
      >
        <SwiperSlide>
          <h3>VPets: Geo-caching</h3>
          <ul>
            <li>
              Encourages users to go outdoors and interact with natural
              environments
            </li>
            <li>
              In-game wild encounters with animals relevant to the natural
              habitats
            </li>
            <li>
              Augmented –Reality (AR) enhanced experiences while enjoying nature
            </li>
            <li>
              Partnerships with businesses, nature reserves and parks (drawing
              traffic to specified geo-locations)
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <h3>VPets Marketplace</h3>
          <ul>
            <li>
              Requires connection to meta-wallet with MATIC tokens (Polygon)
            </li>
            <li>
              Any Vpets asset can be digitized into an asset with a fixed cost
              $GD ($1 Singapore dollar)
            </li>
            <li>
              Tokenised asset can be listed on Vpets/TheGreenerMarket for sale
            </li>
            <li>
              Transaction fee of 5% of transacted value will be collection from
              both buyer and seller
            </li>
            <li>
              Purchased assets may be imported from meta-wallet for free, and
              will be burnt once consumed by player
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <h3>VPets: Combat Experience</h3>
          <ul>
            <li>
              Players can engage in 5v5, Player-versus-Player (PvP) combat
              simulations
            </li>
            <li>
              Vpets combat system allows each player to equipment each character
              with a unique set of up to 5 skills (combat, healing or buff)
            </li>
            <li>
              Equipment and accessories equipped to each character influences
              it’s stats in combat
            </li>
            <li>
              Real-time combat is achieved by tracking live turn order,
              determined by speed, fatigue and bond level
            </li>
            <li>
              Players also have an option to have a ‘staked battle’, during
              which $GD tokens may be stake for the battle, winner-takes-all.
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <h3>VPets: League Tournaments</h3>
          <ul>
            <li>
              Vpets will organise league style tournaments globally with cash
              prizes
            </li>
            <li>
              Tournaments will be introduced at a national level to qualify
              teams for international level tournaments
            </li>
            <li>Partnership with various Esports events organisers</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <h3>VPets: Game-for-Good</h3>
          <ul>
            <li>
              Serves as an edutainment platform to engage users in better
              appreciation and understanding of our natural biodiversity
              (localized)
            </li>
            <li>
              Detracts illegal wildlife trade or restricted or endangered
              species
            </li>
            <li>
              Platform to educate on the responsibilities of pet ownership
            </li>
            <li>Commitment of 50% of profits to GreenDAO ‘green activities’</li>
          </ul>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default VPetsCategory;
