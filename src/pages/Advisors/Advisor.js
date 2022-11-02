import React, { useEffect, useState } from "react";

//import Components
import TeamMember from "../../components/Team/TeamMember";

import { Row } from "react-bootstrap";
const Advisor = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    let teammembers = [
      {
        id: 1,
        avatarURL: "/team/frederick-tan.webp",
        name: "Frederick Tan",
        occupation: "ESG/ Business Development/Web3 Development Specialist",
        company: "Founder of Greenerre Pte Ltd",
        workHistory: [
          `Bachelor's of Marine Science and Geology Diploma in Business`,
          `Founder of Up-Cycle Algal Solutions (UCAS) - 2018`,
          `Founder of Luxormen - 2020`,
          `Founder of Greenerre Pte Ltd - 2021`,
        ],
      },
      {
        id: 2,
        avatarURL: "/team/daryl-tang.webp",
        name: "Daryl Tang",
        occupation: "Solar Specialist",
        company: "Co-Founder of PMCE (Global) Pte Ltd",
        workHistory: [
          "Diploma in Engineering and Business Management",
          "Director/Co-Founder of PMCE (GLobal) Pte Ltd",
        ],
      },
      {
        id: 3,
        avatarURL: "/team/gabriel-chek.webp",
        name: "Gabriel Chek",
        occupation: "Architecture Specialist",
        company: "Founder and Author of ARCHLOGBOOK",
        workHistory: [
          "Master of Architecture Co-Founder of MAD Collective",
          "Founder/ Author of ARCHLOGBOOK",
        ],
      },
      {
        id: 4,
        avatarURL: "/team/jonathan-poh.webp",
        name: "Jonathan Poh",
        occupation: "Agriculture/Aquaculture Specialist",
        company: "Director of Otolith Enrichment",
        workHistory: [
          "Secretary General of Ornamental Fish International Lecturer at James Cook University",
          "Assistant treasurer of Institute of Aquaculture Singapore",
        ],
      },
    ];
    setMembers(teammembers);
  }, []);
  return (
    <div className="container mt-[100px]">
      <Row lg={2} md={2} sm={1} className="g-4 m-5">
        {members.map((m) => (
          <TeamMember
            avatarURL={m.avatarURL}
            name={m.name}
            occupation={m.occupation}
            company={m.company}
            workHistory={m.workHistory}
            key={m.id}
          />
        ))}
      </Row>
    </div>
  );
};

export default Advisor;
