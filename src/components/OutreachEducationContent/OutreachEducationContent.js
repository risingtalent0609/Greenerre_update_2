import React from "react";

//import Component
import BlogItem from "../BlogItem/BlogItem";
const OutreachEducationContent = () => {
  return (
    <div className="container">
      <div className="row px-5">
        <div className="col-md-6 col-sm-12 px-0">
          <BlogItem
            imgURL="/outreach-education/opportunity.webp"
            title="
CSR and Outreach Opportunities"
            content="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
            position="top-left"
          />
        </div>
        <div className="col-md-6 col-sm-12 px-0 right-item">
          <BlogItem
            imgURL="/outreach-education/education.webp"
            title="STEMS Education"
            content="Sustainability. Technology. Engineering. Mathematics. Science"
            position="top-right"
          />
        </div>
        <div className="col-md-6 col-sm-12 px-0">
          <BlogItem
            imgURL="/outreach-education/linkedin.webp"
            title="Our LinkedIn Page"
            content="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
            position="bottom-left"
          />
        </div>
        <div className="col-md-6 col-sm-12 px-0 right-item">
          <BlogItem
            imgURL="/projects/rapture.webp"
            title="Project Rapture (COMING SOON)"
            content=""
            position="bottom-right"
          />
        </div>
      </div>
    </div>
  );
};

export default OutreachEducationContent;
